import type { LayoutLoad } from './$types';
import { loadTranslation, type Locale } from '$lib/i18n';

export const load: LayoutLoad = async ({ data, params, fetch }) => {
  const { locale } = params;

  // Load translations for the current locale using event.fetch
  const translations = await loadTranslation(locale as Locale, fetch);

  return {
    locale,
    translations
  };
};
