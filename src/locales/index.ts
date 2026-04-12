/**
 * Locale barrel export.
 *
 * Usage:
 *   import { translations } from '@/locales';
 *   const t = translations[lang];
 *
 * Future i18next migration:
 *   Replace this map with i18next.init({ resources: { en, ar } })
 *   and swap `t = translations[lang]` for `const { t } = useTranslation()`.
 */
import type { Translations } from './types';
import { en } from './en';
import { ar } from './ar';

export type { Translations };
export type Language = 'en' | 'ar';

export const translations: Record<Language, Translations> = { en, ar };
