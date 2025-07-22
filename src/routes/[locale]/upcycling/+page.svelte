<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';

  export let data: { locale: string; translations: any };

  let isLoaded = false;
  let currentSlide = 0;
  let transformationImages = [
    { src: '/assets/minivan-2.jpeg', title: 'CARAVANS', desc: 'Repurposed caravans transformed into cozy and unique accommodation spaces.' },
    { src: '/assets/room-2.jpeg', title: 'CARAVAN ROOM', desc: 'A repurposed caravan transformed into a cozy and unique accommodation space.' },
    { src: '/assets/hotel-3.jpeg', title: 'INDUSTRIAL REFRIGERATOR', desc: 'A stainless steel industrial refrigerator was repurposed as a laundry room.' },
    { src: '/assets/hotel-4.jpeg', title: 'ASSOS STONE WALLS', desc: 'A stonemason used stones (Assos stone) from a ruined stone house to build a perimeter wall.' },
    { src: '/assets/minivan-3.jpeg', title: 'TELEPHONE POLES', desc: 'Old telephone poles were used in the roof construction.' },
    { src: '/assets/car-1.jpeg', title: 'NAVAL OFFICER MANNEQUIN', desc: 'A secondhand mannequin representing a uniformed naval officer was placed in memory of the Gallipoli Campaign.' }
  ];

  let conceptVisible = false;
  let statsVisible = false;

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

  function nextSlide() {
    currentSlide = (currentSlide + 1) % Math.ceil(transformationImages.length / 2);
  }

  function prevSlide() {
    currentSlide = currentSlide === 0 ? Math.ceil(transformationImages.length / 2) - 1 : currentSlide - 1;
  }

  onMount(() => {
    isLoaded = true;

    // Auto-slide transformations
    setInterval(nextSlide, 6000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (entry.target.classList.contains('concept')) {
            conceptVisible = true;
          }
          if (entry.target.classList.contains('stats-showcase')) {
            statsVisible = true;
          }
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  });
</script>

<svelte:head>
  <title>Upcycling Concept - Bebek Resort | Sustainable Design in Assos</title>
  <meta name="description" content="Discover our unique upcycling concept at Bebek Resort. See how we transform ordinary materials into extraordinary experiences with vintage caravans and sustainable design." />
  <meta name="keywords" content="upcycling, sustainable design, Bebek Resort, vintage caravans, eco-friendly hotel, Assos Turkey, recycled materials, green tourism" />

  <!-- Open Graph -->
  <meta property="og:title" content="Upcycling Concept - Bebek Resort | Sustainable Design in Assos" />
  <meta property="og:description" content="Discover our unique upcycling concept at Bebek Resort. See how we transform ordinary materials into extraordinary experiences." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://bebekresort.com.tr/upcycling" />
  <meta property="og:image" content="https://bebekresort.com.tr/assets/minivan-2.jpeg" />

  <!-- Twitter -->
  <meta name="twitter:title" content="Upcycling Concept - Bebek Resort | Sustainable Design in Assos" />
  <meta name="twitter:description" content="Discover our unique upcycling concept at Bebek Resort. See how we transform ordinary materials into extraordinary experiences." />
  <meta name="twitter:image" content="https://bebekresort.com.tr/assets/minivan-2.jpeg" />

  <!-- Canonical -->
  <link rel="canonical" href="https://bebekresort.com.tr/upcycling" />
</svelte:head>

<div class="container">
  <!-- Concept Section -->
  <section class="concept animate-on-scroll" id="concept">
    <div class="concept-content">
      <div class="section-header">
        <h2>{t('upcycling.concept.title')}</h2>
        <p class="section-subtitle">{t('upcycling.concept.subtitle')}</p>
      </div>
      <p class="concept-text">
        {t('upcycling.concept.description')}
      </p>
      <div class="concept-grid">
        <div class="concept-item" class:animate={conceptVisible}>
          <div class="concept-icon">♻️</div>
          <h3>{t('upcycling.concept.benefits.sustainable.title')}</h3>
          <p>{t('upcycling.concept.benefits.sustainable.description')}</p>
          <div class="concept-number">{t('upcycling.concept.benefits.sustainable.stat')}</div>
          <span>{t('upcycling.concept.benefits.sustainable.label')}</span>
        </div>
        <div class="concept-item" class:animate={conceptVisible}>
          <div class="concept-icon">🎨</div>
          <h3>{t('upcycling.concept.benefits.creative.title')}</h3>
          <p>{t('upcycling.concept.benefits.creative.description')}</p>
          <div class="concept-number">{t('upcycling.concept.benefits.creative.stat')}</div>
          <span>{t('upcycling.concept.benefits.creative.label')}</span>
        </div>
        <div class="concept-item" class:animate={conceptVisible}>
          <div class="concept-icon">💎</div>
          <h3>{t('upcycling.concept.benefits.valuable.title')}</h3>
          <p>{t('upcycling.concept.benefits.valuable.description')}</p>
          <div class="concept-number">{t('upcycling.concept.benefits.valuable.stat')}</div>
          <span>{t('upcycling.concept.benefits.valuable.label')}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Transformations Gallery -->
  <section class="gallery animate-on-scroll" id="examples">
    <div class="gallery-content">
      <div class="section-header">
        <h2>{t('upcycling.gallery.title')}</h2>
        <div class="divider"></div>
      </div>

      <div class="gallery-slider">
        <div class="gallery-track" style="transform: translateX(-{currentSlide * 100}%)">
          {#each Array(Math.ceil(transformationImages.length / 2)) as _, slideIndex}
            <div class="gallery-slide">
              {#each transformationImages.slice(slideIndex * 2, slideIndex * 2 + 2) as image}
                <div class="gallery-item">
                  <img src={image.src} alt={image.title} />
                </div>
              {/each}
            </div>
          {/each}
        </div>

        <button class="gallery-btn prev" on:click={prevSlide} aria-label="Previous transformations">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="gallery-btn next" on:click={nextSlide} aria-label="Next transformations">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="process animate-on-scroll" id="process">
    <div class="process-content">
      <div class="section-header">
        <h2>{t('upcycling.process.title')}</h2>
        <div class="divider"></div>
      </div>
      <div class="process-steps">
        <div class="process-step">
          <div class="step-number">01</div>
          <div class="step-content">
            <h3>{t('upcycling.process.steps.discovery.title')}</h3>
            <p>{t('upcycling.process.steps.discovery.description')}</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">02</div>
          <div class="step-content">
            <h3>{t('upcycling.process.steps.vision.title')}</h3>
            <p>{t('upcycling.process.steps.vision.description')}</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">03</div>
          <div class="step-content">
            <h3>{t('upcycling.process.steps.craftsmanship.title')}</h3>
            <p>{t('upcycling.process.steps.craftsmanship.description')}</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">04</div>
          <div class="step-content">
            <h3>{t('upcycling.process.steps.integration.title')}</h3>
            <p>{t('upcycling.process.steps.integration.description')}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="benefits animate-on-scroll" id="benefits">
    <div class="benefits-content">
      <div class="section-header">
        <h2>{t('upcycling.benefits.title')}</h2>
        <div class="divider"></div>
      </div>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🌍</div>
          <h3>{t('upcycling.benefits.environmental.title')}</h3>
          <p>{t('upcycling.benefits.environmental.description')}</p>
          <div class="benefit-stat">{t('upcycling.benefits.environmental.stat')}</div>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🎨</div>
          <h3>{t('upcycling.benefits.creativity.title')}</h3>
          <p>{t('upcycling.benefits.creativity.description')}</p>
          <div class="benefit-stat">{t('upcycling.benefits.creativity.stat')}</div>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">💰</div>
          <h3>{t('upcycling.benefits.economic.title')}</h3>
          <p>{t('upcycling.benefits.economic.description')}</p>
          <div class="benefit-stat">{t('upcycling.benefits.economic.stat')}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Stats Showcase -->
  <section class="stats-showcase animate-on-scroll">
    <div class="stats-content">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number" class:animate={statsVisible}>25+</div>
          <div class="stat-label">{t('upcycling.stats.transformed')}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" class:animate={statsVisible}>500+</div>
          <div class="stat-label">{t('upcycling.stats.history')}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" class:animate={statsVisible}>100%</div>
          <div class="stat-label">{t('upcycling.stats.sustainable')}</div>
        </div>
        <div class="stat-item">
          <div class="stat-number infinity" class:animate={statsVisible}>∞</div>
          <div class="stat-label">{t('upcycling.stats.stories')}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="cta-section" id="cta">
    <div class="cta-content">
      <h2>{t('upcycling.cta.title')}</h2>
      <p>{t('upcycling.cta.description')}</p>
      <div class="cta-actions">
        <a href="mailto:info@bebekresort.com.tr" class="cta-primary large">{t('upcycling.cta.bookStay')}</a>
      </div>
    </div>
    <div class="cta-bg" style="background-image: url('/assets/minivan-2.jpeg')"></div>
    <div class="cta-overlay"></div>
  </section>
</div>

<style>
  .container {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }



  .cta-primary, .cta-secondary {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 0;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    display: inline-block;
  }

  .cta-primary.large, .cta-secondary.large {
    padding: 1.5rem 3rem;
    font-size: 1.1rem;
  }

  .cta-primary {
    background: var(--primary-color);
    color: white;
  }

  .cta-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .cta-primary:hover::before {
    left: 100%;
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 30, 86, 0.3);
  }

  .cta-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .cta-secondary:hover {
    background: white;
    color: #000;
    transform: translateY(-2px);
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
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--accent-color);
    margin-top: 0.5rem;
    font-weight: 300;
  }

  .divider {
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    margin: 0 auto;
  }

  /* Concept Section */
  .concept {
    background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
    padding: 8rem 0;
  }

  .concept-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .concept-text {
    max-width: 900px;
    margin: 0 auto 4rem;
    font-size: 1.3rem;
    line-height: 1.8;
    text-align: center;
    color: #555;
  }

  .concept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .concept-item {
    text-align: center;
    padding: 3rem 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
  }

  .concept-item.animate {
    opacity: 1;
    transform: translateY(0);
    transition-delay: calc(var(--i, 0) * 0.2s);
  }

  .concept-item:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 50px rgba(255, 30, 86, 0.15);
  }

  .concept-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  .concept-item h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }

  .concept-item p {
    line-height: 1.6;
    margin-bottom: 2rem;
    color: #666;
  }

  .concept-number {
    font-size: 3rem;
    font-weight: 900;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .concept-item span {
    color: var(--accent-color);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.9rem;
  }

  /* Gallery Section */
  .gallery {
    background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
    color: white;
    padding: 8rem 0;
  }

  .gallery-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .gallery h2 {
    color: white;
  }

  .gallery-slider {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
  }

  .gallery-track {
    display: flex;
    transition: transform 0.5s ease;
  }

  .gallery-slide {
    min-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  .gallery-item {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
    cursor: pointer;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }



  .gallery-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .gallery-btn:hover {
    background: var(--primary-color);
    transform: translateY(-50%) scale(1.1);
  }

  .gallery-btn.prev {
    left: 1rem;
  }

  .gallery-btn.next {
    right: 1rem;
  }

  /* Process Section */
  .process {
    background: linear-gradient(135deg, #f8f9fa 0%, #fff 100%);
    padding: 8rem 0;
  }

  .process-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2.5rem;
    margin-top: 4rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .process-step {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }

  .process-step:hover {
    transform: translateY(-10px);
  }

  .step-number {
    background: var(--primary-color);
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .step-content h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  .step-content p {
    line-height: 1.6;
    color: #666;
  }

  /* Benefits Section */
  .benefits {
    background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
    color: white;
    padding: 8rem 0;
  }

  .benefits-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .benefits h2 {
    color: white;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .benefit-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 3rem;
    text-align: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .benefit-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(255, 30, 86, 0.2);
  }

  .benefit-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  .benefit-card h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }

  .benefit-card p {
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .benefit-stat {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--accent-color);
    margin-top: 1rem;
  }

  /* Stats Showcase */
  .stats-showcase {
    background: linear-gradient(135deg, var(--primary-color) 0%, #d01846 100%);
    padding: 6rem 0;
    position: relative;
  }

  .stats-showcase::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/minivan-5.jpeg') center/cover;
    opacity: 0.1;
  }

  .stats-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
  }

  .stat-item {
    text-align: center;
    color: white;
  }

  .stat-number {
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 900;
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
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    text-transform: uppercase;
  }

  /* CTA Section */
  .cta-section {
    position: relative;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .cta-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .cta-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(255,30,86,0.6) 100%);
  }

  .cta-content {
    text-align: center;
    z-index: 2;
    position: relative;
    color: white;
    max-width: 800px;
    padding: 0 2rem;
  }

  .cta-content h2 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    margin-bottom: 2rem;
    letter-spacing: 0.1em;
  }

  .cta-content p {
    font-size: 1.3rem;
    line-height: 1.6;
    margin-bottom: 3rem;
    opacity: 0.9;
  }

  .cta-actions {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Animations */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease;
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .gallery-slide {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .cta-actions {
      flex-direction: column;
      align-items: center;
    }

    .cta-primary, .cta-secondary {
      width: 250px;
    }

    .concept-grid {
      grid-template-columns: 1fr;
    }

    .process-steps {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, auto);
    }

    .process-step {
      flex-direction: column;
      text-align: center;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .gallery-btn {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    .cta-content {
      padding: 0 1rem;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .concept-text, .cta-content p {
      font-size: 1.1rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
