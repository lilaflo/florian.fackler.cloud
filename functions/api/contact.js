// Cloudflare Pages Function: /api/contact
// Receives { name, email, description, lang }, drafts a reply via Ollama,
// sends it via Resend. Secrets are Cloudflare env vars:
//   OLLAMA_API_KEY, OLLAMA_BASE_URL, OLLAMA_MODEL
//   RESEND_API_KEY, RESEND_FROM, CONTACT_NOTIFY_TO

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://florian.fackler.cloud",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: CORS_HEADERS
  });
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const description = String(payload.description || "").trim();
  const lang = String(payload.lang || "de").trim();

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "name and valid email are required" }, 400);
  }

  // 1. Draft a reply via Ollama
  const reply = await draftReply({ name, description, lang }, env);

  // 2. Send confirmation email to the visitor via Resend
  const sendOk = await sendReply({ name, email, reply }, env);

  // 3. Send internal notification via Resend (to the business owner)
  await notifyOwner({ name, email, description }, env);

  return json({ ok: true, sent: sendOk });
}

async function draftReply({ name, description, lang }, env) {
  const baseUrl = env.OLLAMA_BASE_URL || "https://ollama.com/v1";
  const apiKey = env.OLLAMA_API_KEY;
  const model = env.OLLAMA_MODEL || "qwen3:32b";
  const isDe = lang !== "en";

  const prompt = isDe
    ? `Du bist Florian Fackler, Gründer einer KI-Automatisierungsfirma in der Schweiz. Du antwortest auf Kontaktformular-Einträge auf deiner Website.

## Absender
Name: ${name}

## Nachricht
${description || "(leer)"}

## Regeln
- Verwende die formelle Anrede ("Sie", nicht "Du").
- Schreibe eine kurze, warme E-Mail (max. 5 Sätze).
- Wenn die Nachricht leer oder nur eine Begrüssung ist, verwende diesen Standardtext:
<mail>
Hallo ${name},

Vielen Dank für Ihre Nachricht. Ich werde mir Ihr Anliegen ansehen und mich innerhalb eines Werktages bei Ihnen melden.

In der Zwischenzeit können Sie gerne auf diese E-Mail antworten, wenn Ihnen noch etwas einfällt.

Freundliche Grüsse
Florian Fackler
</mail>
- Wenn die Nachricht eine Frage enthält, nimm die Frage auf und teile mit, dass du sie in einem persönlichen Gespräch klären wirst.
- Wenn die Nachricht nicht zu deinen Dienstleistungen passt (Spam, Bewerbungen etc.), antworte höflich, dass du hier nicht weiterhelfen kannst.
- Erfinde keine Preise, Termine oder technische Details, die hier nicht stehen.
- Signiere als "Florian Fackler" – keine Titel, keine Firma im Signaturblock.

## Ausgabe
Gib nur gültiges JSON zurück mit zwei Schlüsseln:
- "subject": ein kurzer, relevanter Betreff mit dem Namen des Absenders
- "body": der vollständige E-Mail-Text inklusive Signatur
- **Kein Markdown**
- **keine Erklärung**
- **keine Code-Zäune**
- **Nur rohes JSON**`
    : `You are Florian Fackler, the founder of an AI automation company in Switzerland. You reply to contact form submissions on your website.

## Sender
Name: ${name}

## Message
${description || "(empty)"}

## Rules
- Use plain language, avoid acronyms.
- Write a concise, warm email (max 5 sentences).
- If the message is empty or just a greeting, use this default body:
<mail>
Hi ${name},

Thanks for reaching out. I'll review your message and get back to you within one business day.

In the meantime, feel free to reply to this email if anything comes to mind.

Best regards,
Florian Fackler
</mail>
- If the message contains a question, pick up the question and tell the applicant that you will clarify this in a personal call.
- If the message is unrelated to your services (spam, job applications, etc.), respond politely that you can't help with this specific request.
- Do not invent pricing, dates, or technical details that aren't stated here.
- Sign off as "Florian Fackler" — no titles, no company name in the signature.

## Output
Return only valid JSON with two keys:
- "subject": a short, relevant email subject containing the applicant's name
- "body": the full email text including the sign-off
- **No markdown**
- **no explanation**
- **no code fences**
- **Raw JSON only**`;

  if (!apiKey) {
    return fallbackReply(name, lang);
  }

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
        stream: false
      })
    });
    if (!res.ok) throw new Error("Ollama HTTP " + res.status + ": " + await res.text());
    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content || data.message?.content || "{}";
    const content = JSON.parse(raw);
    return {
      subject: content.subject || "Thanks for reaching out",
      body: content.body || fallbackReply(name, lang).body
    };
  } catch (err) {
    console.debug("Ollama failed:", err.message);
    return fallbackReply(name, lang);
  }
}

function fallbackReply(name, lang) {
  if (lang === "en") {
    return {
      subject: `Thanks for reaching out, ${name}`,
      body: `Hi ${name},\n\nThanks for reaching out. I'll review your message and get back to you within one business day.\n\nIn the meantime, feel free to reply to this email if anything comes to mind.\n\nBest regards,\nFlorian Fackler`
    };
  }
  return {
    subject: `Vielen Dank für Ihre Nachricht, ${name}`,
    body: `Hallo ${name},\n\nVielen Dank für Ihre Nachricht. Ich werde mir Ihr Anliegen ansehen und mich innerhalb eines Werktages bei Ihnen melden.\n\nIn der Zwischenzeit können Sie gerne auf diese E-Mail antworten, wenn Ihnen noch etwas einfällt.\n\nFreundliche Grüsse\nFlorian Fackler`
  };
}

async function sendReply({ name, email, reply }, env) {
  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_FROM || "Florian Fackler <noreply@fackler.cloud>";
  if (!apiKey) {
    console.debug("sendReply: RESEND_API_KEY not set, skipping");
    return false;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: email,
        subject: reply.subject,
        text: reply.body
      })
    });
    const resText = await res.text();
    if (!res.ok) {
      console.debug("Resend sendReply failed:", res.status, resText);
      return false;
    }
    console.debug("Resend sendReply OK:", resText);
    return true;
  } catch (err) {
    console.debug("Resend sendReply exception:", err.message);
    return false;
  }
}

async function notifyOwner({ name, email, description }, env) {
  const apiKey = env.RESEND_API_KEY;
  const from = env.RESEND_FROM || "Florian Fackler <noreply@fackler.cloud>";
  const to = env.CONTACT_NOTIFY_TO || "florian@fackler.cloud";
  if (!apiKey) {
    console.debug("notifyOwner: RESEND_API_KEY not set, skipping");
    return;
  }

  const subject = `Neuer Kontakt: ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${description || "(leer)"}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        text: body
      })
    });
    const resText = await res.text();
    if (!res.ok) {
      console.debug("Resend notifyOwner failed:", res.status, resText);
    } else {
      console.debug("Resend notifyOwner OK:", resText);
    }
  } catch (err) {
    console.debug("Resend notifyOwner exception:", err.message);
  }
}