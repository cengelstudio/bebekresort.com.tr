import type { LayoutServerLoad } from './$types';
import { loadTranslationServer } from '$lib/i18n.server';
import { SUPPORTED_LOCALES } from '$lib/constants';

export const load: LayoutServerLoad = async ({ params, cookies }) => {
	const { locale } = params;

	// Validate locale
	if (!SUPPORTED_LOCALES.includes(locale as any)) {
		return {
			status: 404
		};
	}

	// Set locale cookie
	cookies.set('locale', locale, { path: '/' });

	// Preload translations on server side
	const translations = loadTranslationServer(locale as any);

	return {
		locale,
		translations
	};
};
