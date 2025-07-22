import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, cookies }) => {
  const { locale } = params;

  // Valid locales
  const validLocales = ['en', 'tr', 'fr', 'es'];

  // Validate locale
  if (!validLocales.includes(locale)) {
    return {
      status: 404
    };
  }

  // Set locale cookie
  cookies.set('locale', locale, { path: '/' });

  return {
    locale
  };
};
