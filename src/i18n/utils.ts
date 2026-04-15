import { getRelativeLocaleUrl } from 'astro:i18n';
import en from './locales/en/index.json';
import de from './locales/de/index.json';

export const locales = { en, de };

export function getLocaleFromUrl(url: string) {
  const segments = url.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (firstSegment === 'de') return 'de';
  return 'en';
}

export function t(locale: string, key: string): string {
  const translations = locales[locale as keyof typeof locales] || locales.en;
  const keys = key.split('.');
  let value: unknown = translations;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getAlternateUrls(baseUrl: string): { lang: string; url: string }[] {
  return [
    { lang: 'en', url: baseUrl },
    { lang: 'de', url: `${baseUrl}/de` }
  ];
}