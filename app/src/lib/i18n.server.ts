import { readFileSync } from 'fs';
import { join } from 'path';
import type { Locale } from './types';

// Cache for loaded translations
const translationCache: Record<Locale, any> = {} as Record<Locale, any>;

// Load translation from JSON file on server side
export function loadTranslationServer(locale: Locale): any {
	if (translationCache[locale]) {
		return translationCache[locale];
	}

	try {
		// Try to load from static messages directory
		const filePath = join(process.cwd(), 'static', 'messages', `${locale}.json`);
		const fileContent = readFileSync(filePath, 'utf-8');
		const translations = JSON.parse(fileContent);
		translationCache[locale] = translations;
		return translations;
	} catch (error) {
		console.error(`Error loading ${locale} translations on server:`, error);

		// Fallback to English
		if (locale !== 'en') {
			return loadTranslationServer('en');
		}

		// Return empty object as last resort
		return {};
	}
}

// Get translation value by key
export function getTranslationServer(
	locale: Locale,
	key: string,
	params?: Record<string, any>
): string {
	const translations = loadTranslationServer(locale);

	const keys = key.split('.');
	let value: any = translations;

	for (const k of keys) {
		if (value && typeof value === 'object' && k in value) {
			value = value[k];
		} else {
			// Fallback to English if translation not found
			if (locale !== 'en') {
				return getTranslationServer('en', key, params);
			}
			return key;
		}
	}

	if (typeof value !== 'string') {
		return key;
	}

	// Replace parameters
	if (params) {
		return value.replace(/\{(\w+)\}/g, (match: string, param: string) => {
			return params[param] !== undefined ? String(params[param]) : match;
		});
	}

	return value;
}
