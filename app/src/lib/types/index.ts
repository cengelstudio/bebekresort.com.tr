// Application types
export type Locale = 'en' | 'tr' | 'fr' | 'es';

// Navigation types
export interface NavigationItem {
	label: string;
	href: string;
	external?: boolean;
}

// SEO types
export interface SEOData {
	title: string;
	description: string;
	keywords: string[];
	ogImage?: string;
	canonical?: string;
}

// Image types
export interface ImageData {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

// Room/Caravan types
export interface RoomData {
	id: string;
	name: string;
	description: string;
	images: ImageData[];
	features: string[];
	price?: string;
}

// Contact types
export interface ContactInfo {
	phone?: string;
	email?: string;
	address?: string;
	social?: {
		instagram?: string;
		facebook?: string;
		twitter?: string;
	};
}
