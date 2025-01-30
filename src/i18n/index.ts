import { Language } from '@/types/i18n.model';

import pl from './pl.json';
import en from './en.json';
import kr from './kr.json';

export const messages = {
  [Language.PL]: pl,
  [Language.EN]: en,
  [Language.KR]: kr,
};

export const defaultLocale = Language.PL;
