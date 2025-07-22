<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { page } from '$app/stores';

	export let data: { locale: string; translations: any };

	let statsVisible = false;
	let galleryImages = [
		{
			src: '/images/hotel-1.jpeg',
			title: 'Hotel Exterior',
			desc: 'Stunning mountain and sea views'
		},
		{
			src: '/images/room-1.jpeg',
			title: 'Luxury Suites',
			desc: 'Elegantly designed accommodations'
		},
		{
			src: '/images/minivan-1.jpeg',
			title: 'Unique Minivan Rooms',
			desc: 'Sleep in expertly converted retro minibuses'
		},
		{ src: '/images/sea-1.jpeg', title: 'Breathtaking Views', desc: 'Panoramic Aegean coastline' },
		{ src: '/images/room-2.jpeg', title: 'Premium Amenities', desc: 'Luxury meets sustainability' },
		{
			src: '/images/hotel-3.jpeg',
			title: 'Architectural Marvel',
			desc: 'Where vintage meets modern design'
		}
	];

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

	onMount(() => {
		// Intersection Observer for animations
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate-in');
					if (entry.target.classList.contains('stats-section')) {
						statsVisible = true;
					}
				}
			});
		});

		document.querySelectorAll('.animate-on-scroll').forEach((el) => {
			observer.observe(el);
		});
	});
</script>

<svelte:head>
	<title>Bebek Resort - Luxury Reimagined | Sustainable Tourism in Assos</title>
	<meta
		name="description"
		content="Discover Bebek Resort in Assos, Turkey. Experience luxury reimagined through sustainable design and upcycling. Vintage caravans, mountain views, and Aegean Sea access await."
	/>
	<meta
		name="keywords"
		content="Bebek Resort, Assos Turkey, sustainable luxury, upcycling hotel, vintage caravans, Aegean Sea, Kaz Mountains, eco-tourism"
	/>

	<!-- Open Graph -->
	<meta
		property="og:title"
		content="Bebek Resort - Luxury Reimagined | Sustainable Tourism in Assos"
	/>
	<meta
		property="og:description"
		content="Discover Bebek Resort in Assos, Turkey. Experience luxury reimagined through sustainable design and upcycling."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://bebekresort.com.tr/" />
	<meta property="og:image" content="https://bebekresort.com.tr/images/hotel-1.jpeg" />

	<!-- Twitter -->
	<meta
		name="twitter:title"
		content="Bebek Resort - Luxury Reimagined | Sustainable Tourism in Assos"
	/>
	<meta
		name="twitter:description"
		content="Discover Bebek Resort in Assos, Turkey. Experience luxury reimagined through sustainable design and upcycling."
	/>
	<meta name="twitter:image" content="https://bebekresort.com.tr/images/hotel-1.jpeg" />

	<!-- Canonical -->
	<link rel="canonical" href="https://bebekresort.com.tr/" />
</svelte:head>

<div class="container">
	<!-- Stats Section -->
	<section class="stats-section animate-on-scroll">
		<div class="stats-container">
			<div class="stat">
				<div class="stat-number" class:animate={statsVisible}>97.5</div>
				<div class="stat-label">{t('stats.wonder')}</div>
			</div>
			<div class="stat">
				<div class="stat-number" class:animate={statsVisible}>2</div>
				<div class="stat-label">{t('stats.rooms')}</div>
			</div>
			<div class="stat">
				<div class="stat-number infinity" class:animate={statsVisible}>∞</div>
				<div class="stat-label">{t('stats.memories')}</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="about animate-on-scroll" id="about">
		<div class="about-content">
			<div class="section-header">
				<h2>{t('about.title')}</h2>
				<div class="divider"></div>
			</div>
			<p class="about-text">
				{t('about.description')}
			</p>
			<div class="about-features">
				<div class="feature-highlight">
					<div class="feature-icon">🏔️</div>
					<h3>{t('about.features.mountain.title')}</h3>
					<p>{t('about.features.mountain.description')}</p>
				</div>
				<div class="feature-highlight">
					<div class="feature-icon">🌊</div>
					<h3>{t('about.features.sea.title')}</h3>
					<p>{t('about.features.sea.description')}</p>
				</div>
				<div class="feature-highlight">
					<div class="feature-icon">🏛️</div>
					<h3>{t('about.features.historic.title')}</h3>
					<p>{t('about.features.historic.description')}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="features animate-on-scroll" id="features">
		<div class="features-content">
			<div class="section-header">
				<h2>{t('features.title')}</h2>
				<div class="divider"></div>
			</div>
			<div class="features-grid">
				<div class="feature-card">
					<div class="feature-image">
						<img src="/images/minivan-3.jpeg" alt="Caravans" />
					</div>
					<div class="feature-content">
						<h3>{t('features.caravans.title')}</h3>
						<p>{t('features.caravans.description')}</p>
					</div>
				</div>
				<div class="feature-card">
					<div class="feature-image">
						<img src="/images/room-3.jpeg" alt="Caravan Room" />
					</div>
					<div class="feature-content">
						<h3>{t('features.caravanRoom.title')}</h3>
						<p>{t('features.caravanRoom.description')}</p>
					</div>
				</div>
				<div class="feature-card">
					<div class="feature-image">
						<img src="/images/minivan-2.jpeg" alt="Historic Charm" />
					</div>
					<div class="feature-content">
						<h3>{t('features.historicCharm.title')}</h3>
						<p>{t('features.historicCharm.description')}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Gallery Section -->
	<section class="gallery animate-on-scroll" id="gallery">
		<div class="gallery-content">
			<div class="section-header">
				<h2>{t('gallery.title')}</h2>
				<p class="section-subtitle">{t('gallery.subtitle')}</p>
			</div>

			<div class="gallery-grid">
				{#each galleryImages.slice(0, 6) as image, index}
					<div class="gallery-item" class:large={index === 0 || index === 3}>
						<img src={image.src} alt={image.title} />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="contact animate-on-scroll" id="contact">
		<div class="contact-content">
			<div class="contact-grid">
				<div class="contact-info">
					<div class="section-header">
						<h2>{t('contact.title')}</h2>
						<p class="section-subtitle">{t('contact.subtitle')}</p>
					</div>
					<div class="contact-details">
						<div class="contact-item">
							<div class="contact-icon">📍</div>
							<div>
								<h3>{t('contact.visit.title')}</h3>
								<p>
									{t('contact.visit.address')}<br />{t('contact.visit.location')}<br />{t(
										'contact.visit.postal'
									)}
								</p>
							</div>
						</div>
						<div class="contact-item">
							<div class="contact-icon">✉️</div>
							<div>
								<h3>{t('contact.email.title')}</h3>
								<a href="mailto:info@bebekresort.com.tr" class="email-link">
									{t('contact.email.address')}
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="contact-visual">
					<img src="/images/hotel-2.jpeg" alt="Resort location view" />
					<div class="visual-overlay">
						<h3>{t('contact.visual.title')}</h3>
						<p>{t('contact.visual.subtitle')}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.container {
		width: 100%;
		margin: 0;
		padding: 0;
	}

	/* Stats Section */
	.stats-section {
		background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
		color: white;
		padding: 5rem 0;
		position: relative;
	}

	.stats-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url('/images/hotel-1.jpeg') center/cover;
		opacity: 0.1;
	}

	.stats-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 3rem;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}

	.stat {
		text-align: center;
	}

	.stat-number {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 900;
		color: var(--primary-color);
		display: block;
		line-height: 1;
		margin-bottom: 1rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 1s ease;
	}

	.stat-number.animate {
		opacity: 1;
		transform: translateY(0);
	}

	.stat-number.infinity {
		font-size: clamp(4rem, 10vw, 6rem);
	}

	.stat-label {
		font-size: 1rem;
		letter-spacing: 0.2em;
		color: var(--accent-color);
		font-weight: 300;
	}

	/* Section Styling */
	section {
		width: 100%;
		margin: 0;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.section-header h2 {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 900;
		margin-bottom: 1rem;
		letter-spacing: 0.1em;
	}

	.section-subtitle {
		font-size: 1.1rem;
		color: #666;
		font-weight: 300;
		margin-bottom: 0;
		line-height: 1.6;
	}

	.divider {
		width: 100px;
		height: 3px;
		background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
		margin: 0 auto;
	}

	/* About Section */
	.about {
		background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
		padding: 8rem 0;
	}

	.about-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.about-text {
		max-width: 800px;
		margin: 0 auto 4rem;
		font-size: 1.3rem;
		line-height: 1.8;
		text-align: center;
		color: #555;
	}

	.about-features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3rem;
		margin-top: 4rem;
	}

	.feature-highlight {
		text-align: center;
		padding: 2rem;
		background: white;
		border-radius: 10px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.feature-highlight:hover {
		transform: translateY(-10px);
	}

	.feature-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
	}

	.feature-highlight h3 {
		color: var(--primary-color);
		margin-bottom: 1rem;
		font-size: 1.3rem;
	}

	/* Features Section */
	.features {
		background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
		color: white;
		padding: 8rem 0;
	}

	.features-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.features h2 {
		color: white;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 3rem;
		margin-top: 4rem;
	}

	.feature-card {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 15px;
		overflow: hidden;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.feature-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 20px 40px rgba(255, 30, 86, 0.2);
	}

	.feature-image {
		height: 250px;
		overflow: hidden;
	}

	.feature-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.feature-card:hover .feature-image img {
		transform: scale(1.1);
	}

	.feature-content {
		padding: 2rem;
	}

	.feature-content h3 {
		color: var(--primary-color);
		margin-bottom: 1rem;
		font-size: 1.3rem;
	}

	.feature-content p {
		line-height: 1.6;
		margin-bottom: 2rem;
		opacity: 0.9;
	}

	/* Gallery Section */
	.gallery {
		background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
		padding: 8rem 0;
	}

	.gallery-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 4rem;
	}

	.gallery-item {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
		cursor: pointer;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
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

	.gallery-item:hover {
		transform: scale(1.02);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}

	/* Contact Section */
	.contact {
		background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
		color: #333;
		padding: 8rem 0;
	}

	.contact-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.contact h2 {
		color: #333;
	}

	.contact .section-subtitle {
		color: #666;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 5rem;
		align-items: center;
		margin-top: 2rem;
	}

	.contact-details {
		margin: 3rem 0;
	}

	.contact-item {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		background: white;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease;
	}

	.contact-item:hover {
		transform: translateY(-2px);
	}

	.contact-icon {
		font-size: 1.5rem;
		margin-top: 0.5rem;
	}

	.contact-item h3 {
		color: var(--primary-color);
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
		font-weight: 600;
	}

	.contact-item p {
		line-height: 1.6;
		color: #666;
		margin: 0;
	}

	.email-link {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 600;
		transition: color 0.3s ease;
	}

	.email-link:hover {
		color: var(--primary-color);
	}

	.contact-visual {
		position: relative;
		border-radius: 15px;
		overflow: hidden;
		height: 450px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.contact-visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.visual-overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
		color: white;
		padding: 3rem 2rem 2rem;
		text-align: left;
	}

	.visual-overlay h3 {
		font-size: 1.8rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.visual-overlay p {
		font-size: 1rem;
		opacity: 0.9;
	}

	/* Animations */
	.animate-on-scroll {
		opacity: 0;
		transform: translateY(50px);
		transition: all 1s ease;
	}

	/* Responsive Design */
	@media (max-width: 1200px) {
		.features-grid {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}

		.gallery-grid {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
	}

	@media (max-width: 768px) {
		.stats-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.about-features {
			grid-template-columns: 1fr;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.gallery-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		.gallery-item.large {
			grid-column: span 1;
			grid-row: span 1;
		}

		.contact-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.section-header h2 {
			font-size: 2rem;
		}

		.about-text {
			font-size: 1.1rem;
		}

		.gallery-grid {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery-content {
			padding: 0 1rem;
		}
	}
</style>
