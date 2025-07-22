import type { Locale } from '../types';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '../constants';

/**
 * Validate if a locale is supported
 */
export function isValidLocale(locale: string): locale is Locale {
	return SUPPORTED_LOCALES.includes(locale as Locale);
}

/**
 * Get a valid locale or fallback to default
 */
export function getValidLocale(locale: string): Locale {
	return isValidLocale(locale) ? (locale as Locale) : DEFAULT_LOCALE;
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
	return phone.replace(/(\d{3})-(\d{3})-(\d{4})/, '($1) $2-$3');
}

/**
 * Generate meta tags for SEO
 */
export function generateMetaTags(data: {
	title?: string;
	description?: string;
	keywords?: string[];
	ogImage?: string;
	canonical?: string;
	locale?: string;
}) {
	const meta = [];

	if (data.title) {
		meta.push({ name: 'title', content: data.title });
		meta.push({ property: 'og:title', content: data.title });
		meta.push({ property: 'twitter:title', content: data.title });
	}

	if (data.description) {
		meta.push({ name: 'description', content: data.description });
		meta.push({ property: 'og:description', content: data.description });
		meta.push({ property: 'twitter:description', content: data.description });
	}

	if (data.keywords) {
		meta.push({ name: 'keywords', content: data.keywords.join(', ') });
	}

	if (data.ogImage) {
		meta.push({ property: 'og:image', content: data.ogImage });
		meta.push({ property: 'twitter:image', content: data.ogImage });
	}

	if (data.canonical) {
		meta.push({ rel: 'canonical', href: data.canonical });
	}

	if (data.locale) {
		meta.push({ property: 'og:locale', content: data.locale });
	}

	return meta;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

/**
 * Format currency
 */
export function formatCurrency(amount: number, currency = 'TRY', locale = 'tr-TR'): string {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency
	}).format(amount);
}
