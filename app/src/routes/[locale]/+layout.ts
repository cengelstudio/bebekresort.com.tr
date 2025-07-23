import type { LayoutLoad } from './$types';
import type { Locale } from '$lib/types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '$lib/constants';
import { getValidLocale } from '$lib/utils';

export const load: LayoutLoad = async ({ data, params }) => {
	const { locale } = params;

	// Validate and get valid locale
	const validLocale = getValidLocale(locale);

	// Use translations already loaded on server side
	const translations = data.translations || {};

	return {
		locale: validLocale,
		translations
	};
};
