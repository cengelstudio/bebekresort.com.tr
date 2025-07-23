<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { page } from '$app/stores';

	export let data: { locale: string; translations: any };

	// Tüm galeri resimleri
	let galleryImages = [
		{
			src: '/images/hotel-1.jpeg',
			title: 'Hotel Exterior',
			desc: 'Stunning mountain and sea views',
			category: 'hotel'
		},
		{
			src: '/images/hotel-2.jpeg',
			title: 'Hotel Architecture',
			desc: 'Modern design meets natural beauty',
			category: 'hotel'
		},
		{
			src: '/images/hotel-3.jpeg',
			title: 'Hotel Entrance',
			desc: 'Welcoming atmosphere',
			category: 'hotel'
		},
		{
			src: '/images/hotel-4.jpeg',
			title: 'Hotel Grounds',
			desc: 'Beautiful outdoor spaces',
			category: 'hotel'
		},
		{
			src: '/images/hotel-5.jpeg',
			title: 'Hotel Views',
			desc: 'Panoramic vistas',
			category: 'hotel'
		},
		{
			src: '/images/room-1.jpeg',
			title: 'Luxury Suites',
			desc: 'Elegantly designed accommodations',
			category: 'room'
		},
		{
			src: '/images/room-2.jpeg',
			title: 'Premium Amenities',
			desc: 'Luxury meets sustainability',
			category: 'room'
		},
		{
			src: '/images/room-3.jpeg',
			title: 'Comfortable Living',
			desc: 'Cozy and inviting spaces',
			category: 'room'
		},
		{
			src: '/images/minivan-1.jpeg',
			title: 'Unique Minivan Rooms',
			desc: 'Sleep in expertly converted retro minibuses',
			category: 'minivan'
		},
		{
			src: '/images/minivan-2.jpeg',
			title: 'Historic Charm',
			desc: 'Vintage vehicles transformed into luxury accommodations',
			category: 'minivan'
		},
		{
			src: '/images/minivan-3.jpeg',
			title: 'Caravan Experience',
			desc: 'Unique sleeping experience',
			category: 'minivan'
		},
		{
			src: '/images/minivan-4.jpeg',
			title: 'Retro Minivan',
			desc: 'Classic vehicles with modern comfort',
			category: 'minivan'
		},
		{
			src: '/images/minivan-5.jpeg',
			title: 'Minivan Interior',
			desc: 'Cozy and functional design',
			category: 'minivan'
		},
		{
			src: '/images/car-1.jpeg',
			title: 'Vintage Car',
			desc: 'Classic automobile charm',
			category: 'car'
		},
		{
			src: '/images/sea-1.jpeg',
			title: 'Breathtaking Views',
			desc: 'Panoramic Aegean coastline',
			category: 'sea'
		}
	];

	let selectedCategory = 'all';
	let filteredImages = galleryImages;

	// Helper function to get translation from loaded data
	function t(key: string, params?: Record<string, any>): string {
		const keys = key.split('.');
		let value: any = data.translations;

		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = value[k];
			} else {
				return key; // Return key if translation not found
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

	// Filter images by category
	function filterImages(category: string) {
		selectedCategory = category;
		if (category === 'all') {
			filteredImages = galleryImages;
		} else {
			filteredImages = galleryImages.filter(img => img.category === category);
		}
	}

	// Get unique categories
	$: categories = ['all', ...new Set(galleryImages.map(img => img.category))];

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
				}
			});
		}, {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		});

		// Use setTimeout to ensure DOM is fully rendered
		setTimeout(() => {
			document.querySelectorAll('.animate-on-scroll').forEach((el) => {
				observer.observe(el);
			});
		}, 100);
	});
</script>

<svelte:head>
	<title>Gallery - Bebek Resort | Photo Gallery of Our Unique Accommodations</title>
	<meta
		name="description"
		content="Explore our photo gallery showcasing the unique accommodations at Bebek Resort. From vintage minivans to luxury suites, discover the beauty of sustainable tourism in Assos."
	/>
	<meta
		name="keywords"
		content="Bebek Resort gallery, Assos photos, minivan rooms, luxury suites, hotel images, sustainable tourism photos"
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="Gallery - Bebek Resort | Photo Gallery" />
	<meta
		property="og:description"
		content="Explore our photo gallery showcasing the unique accommodations at Bebek Resort."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bebekresort.com.tr/gallery" />
	<meta property="og:image" content="https://bebekresort.com.tr/images/hotel-1.jpeg" />

	<!-- Canonical -->
	<link rel="canonical" href="https://bebekresort.com.tr/gallery" />
</svelte:head>

<div class="container">
	<!-- Hero Section -->
	<section class="hero gallery-hero animate-on-scroll">
		<div class="hero-content">
			<h1>{t('gallery.hero.title')}</h1>
			<p class="hero-subtitle">{t('gallery.hero.subtitle')}</p>
		</div>
		<div class="hero-background">
			<img src="/images/sea-1.jpeg" alt="Bebek Resort Gallery" />
		</div>
	</section>

	<!-- Filter Section -->
	<section class="filter-section animate-on-scroll">
		<div class="filter-content">
			<div class="filter-buttons">
				{#each categories as category}
					<button
						class="filter-btn"
						class:active={selectedCategory === category}
						on:click={() => filterImages(category)}
					>
						{t(`gallery.categories.${category}`)}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Gallery Grid -->
	<section class="gallery-section animate-on-scroll">
		<div class="gallery-content">
			<div class="gallery-grid">
				{#each filteredImages as image, index}
					<div class="gallery-item" class:large={index % 5 === 0}>
						<img src={image.src} alt={image.title} />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action -->
	<section class="cta-section animate-on-scroll">
		<div class="cta-content">
			<h2>{t('gallery.cta.title')}</h2>
			<p>{t('gallery.cta.subtitle')}</p>
			<a href="/{data.locale}#contact" class="cta-button">{t('gallery.cta.button')}</a>
		</div>
	</section>
</div>

<style>
	.container {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	/* Hero Section */
	.hero {
		position: relative;
		height: 60vh;
		min-height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		overflow: hidden;
	}

	.gallery-hero {
		margin-top: 0;
		padding-top: 0;
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background: rgba(0, 0, 0, 0.4);
	}

	.hero-background img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-background::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.3);
	}

	.hero-content {
		text-align: center;
		z-index: 1;
		padding: 0 2rem;
		position: relative;
	}

	.hero h1 {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 900;
		margin-bottom: 1rem;
		letter-spacing: 0.1em;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.hero-subtitle {
		font-size: 1.3rem;
		max-width: 600px;
		margin: 0 auto;
		opacity: 0.9;
		line-height: 1.6;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}

	/* Filter Section */
	.filter-section {
		background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
		padding: 4rem 0;
	}

	.filter-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.filter-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.filter-btn {
		padding: 0.8rem 2rem;
		border: 2px solid var(--primary-color);
		background: transparent;
		color: var(--primary-color);
		border-radius: 50px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 1rem;
	}

	.filter-btn:hover {
		background: var(--primary-color);
		color: white;
		transform: translateY(-2px);
	}

	.filter-btn.active {
		background: var(--primary-color);
		color: white;
	}

	/* Gallery Section */
	.gallery-section {
		background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
		padding: 0rem 0 8rem;
	}

	.gallery-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.gallery-item {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
		cursor: pointer;
		border-radius: 15px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
	}

	.gallery-item.large {
		grid-column: span 2;
		grid-row: span 2;
	}

	.gallery-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}



	.gallery-item:hover img {
		transform: scale(1.1);
	}

	.gallery-item:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
	}



	/* CTA Section */
	.cta-section {
		background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
		color: white;
		padding: 6rem 0;
		text-align: center;
	}

	.cta-content {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.cta-content h2 {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		margin-bottom: 1.5rem;
		letter-spacing: 0.1em;
	}

	.cta-content p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.9;
		line-height: 1.6;
	}

	.cta-button {
		display: inline-block;
		padding: 1rem 3rem;
		background: var(--primary-color);
		color: white;
		text-decoration: none;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1.1rem;
		transition: all 0.3s ease;
		border: 2px solid var(--primary-color);
	}

	.cta-button:hover {
		background: transparent;
		color: var(--primary-color);
		transform: translateY(-2px);
	}

	/* Animations */
	.animate-on-scroll {
		opacity: 0;
		transform: translateY(50px);
		transition: all 1s ease;
	}

	.animate-on-scroll.animate-in {
		opacity: 1;
		transform: translateY(0);
	}

	/* Responsive Design */
	@media (max-width: 1200px) {
		.gallery-grid {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		}
	}

	@media (max-width: 768px) {
		.hero {
			height: 50vh;
		}

		.filter-buttons {
			gap: 0.5rem;
		}

		.filter-btn {
			padding: 0.6rem 1.5rem;
			font-size: 0.9rem;
		}

		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		.gallery-item.large {
			grid-column: span 1;
			grid-row: span 1;
		}


	}

	@media (max-width: 480px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.1rem;
		}

		.gallery-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery-content {
			padding: 0 1rem;
		}

		.filter-content {
			padding: 0 1rem;
		}
	}
</style>
