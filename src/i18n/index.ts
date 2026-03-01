import { en } from './en';
import { es } from './es';

export type Lang = 'en' | 'es';

const translations = { en, es };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Lang;
  return 'en';
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}
