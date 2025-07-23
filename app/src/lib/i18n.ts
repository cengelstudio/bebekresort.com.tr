import { writable } from 'svelte/store';
import type { Locale } from './types';

// Cache for loaded translations
const translationCache: Record<Locale, any> = {} as Record<Locale, any>;

// Load translation from JSON file
export async function loadTranslation(locale: Locale, fetchFn?: typeof fetch): Promise<any> {
	if (translationCache[locale]) {
		return translationCache[locale];
	}

	try {
		// Use provided fetch function or fallback to global fetch
		const fetchToUse = fetchFn || (typeof window !== 'undefined' ? fetch : undefined);

		if (fetchToUse) {
			// Try to fetch from the static messages directory
			const response = await fetchToUse(`/messages/${locale}.json`, {
				headers: {
					Accept: 'application/json'
				}
			});

			if (response.ok) {
				const translations = await response.json();
				translationCache[locale] = translations;
				return translations;
			}
		}

		// If fetch is not available or failed, return empty object
		// This will trigger fallback to English
		console.warn(`Could not load translations for locale: ${locale}`);
		return {};
	} catch (error) {
		console.error(`Error loading ${locale} translations:`, error);
		// Fallback to English
		if (locale !== 'en') {
			return loadTranslation('en', fetchFn);
		}
		return {};
	}
}

// Create a store for the current locale
export const currentLocale = writable<Locale>('en');

// Function to get translation
export async function t(key: string, params?: Record<string, any>): Promise<string> {
	const locale = get(currentLocale) as Locale;
	const translations = await loadTranslation(locale);

	const keys = key.split('.');
	let value: any = translations;

	for (const k of keys) {
		if (value && typeof value === 'object' && k in value) {
			value = value[k];
		} else {
			// Fallback to English if translation not found
			const fallbackTranslations = await loadTranslation('en');
			value = getTranslationFallback(key, fallbackTranslations);
			break;
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

// Synchronous version for reactive statements
export function tSync(key: string, params?: Record<string, any>): string {
	const locale = get(currentLocale) as Locale;
	const translations = translationCache[locale] || {};

	const keys = key.split('.');
	let value: any = translations;

	for (const k of keys) {
		if (value && typeof value === 'object' && k in value) {
			value = value[k];
		} else {
			// Fallback to English if translation not found
			const fallbackTranslations = translationCache['en'] || {};
			value = getTranslationFallback(key, fallbackTranslations);
			break;
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

// Fallback function to get English translation
function getTranslationFallback(key: string, translations: any): string {
	const keys = key.split('.');
	let value: any = translations;

	for (const k of keys) {
		if (value && typeof value === 'object' && k in value) {
			value = value[k];
		} else {
			return key;
		}
	}

	return typeof value === 'string' ? value : key;
}

// Function to change locale
export async function setLocale(locale: Locale) {
	// Preload the translation
	await loadTranslation(locale);
	currentLocale.set(locale);

	// Save to localStorage
	if (typeof window !== 'undefined') {
		localStorage.setItem('locale', locale);
	}
}

// Function to get current locale
export function getLocale(): Locale {
	return get(currentLocale);
}

// Initialize locale from localStorage and preload translations
export async function initLocale() {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('locale') as Locale;
		if (saved && ['en', 'tr', 'fr', 'es'].includes(saved)) {
			await setLocale(saved);
		} else {
			// Preload English translations
			await loadTranslation('en');
		}
	}
}

// Helper function to get store value
function get<T>(store: any): T {
	let value: T;
	store.subscribe((v: T) => (value = v))();
	return value!;
}
