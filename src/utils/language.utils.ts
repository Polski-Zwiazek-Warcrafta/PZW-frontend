import { Language } from '@/types/i18n.model';

export const saveLanguage = (language: Language): void => {
  localStorage.setItem('language', language);
};

export const getLanguage = (): Language => {
  const language = localStorage.getItem('language');
  if (language) {
    return language as Language;
  }
  return Language.PL;
};
