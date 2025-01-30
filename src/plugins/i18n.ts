import { getLanguage } from '@/utils/language.utils';
import { defaultLocale, messages } from '@/i18n';
import { Language } from '@/types/i18n.model';
import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  locale: defaultLocale,
  messages: messages,
  fallbackFormat: defaultLocale,
});

export const language: Language = getLanguage();
i18n.global.locale = language;

export const t = i18n.global.t;
export default i18n;
