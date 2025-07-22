import type { Locale, NavigationItem } from '../types';

// Supported locales
export const SUPPORTED_LOCALES: Locale[] = ['en', 'tr', 'fr', 'es'];

// Default locale
export const DEFAULT_LOCALE: Locale = 'en';

// Navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
	{ label: 'nav.home', href: '/' },
	{ label: 'nav.upcycling', href: '/upcycling' },
	{ label: 'nav.about', href: '/about' },
	{ label: 'nav.contact', href: '/contact' }
];

// SEO defaults
export const DEFAULT_SEO = {
	title: 'Bebek Resort - Luxury Reimagined | Upcycling Paradise in Assos',
	description:
		'Experience sustainable luxury at Bebek Resort in Assos. Discover our unique upcycling concept with vintage caravans, mountain views, and Aegean Sea access.',
	keywords: [
		'Bebek Resort',
		'Assos',
		'luxury hotel',
		'upcycling',
		'sustainable tourism',
		'vintage caravans',
		'Aegean Sea',
		'Kaz Mountains',
		'Turkey',
		'eco-friendly accommodation'
	],
	ogImage: '/og-image.jpg',
	canonical: 'https://bebekresort.com.tr/'
};

// Contact information
export const CONTACT_INFO = {
	phone: '+90-xxx-xxx-xxxx',
	email: 'info@bebekresort.com.tr',
	address: 'Assos, Çanakkale, Turkey',
	social: {
		instagram: '@bebekresortassos',
		facebook: 'bebekresortassos',
		twitter: '@bebekresortassos'
	}
};

// Image paths
export const IMAGE_PATHS = {
	logo: {
		white: '/icons/logo-white.png',
		black: '/icons/logo-black.png'
	},
	favicon: '/icons/favicon.png',
	cengelstudio: '/icons/cengelstudio-logo.png'
};

// API endpoints
export const API_ENDPOINTS = {
	translations: '/messages'
};
