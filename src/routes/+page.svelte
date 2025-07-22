<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, slide } from 'svelte/transition';

  let isLoaded = false;
  let currentSlide = 0;
  let heroImages = [
    { src: '/assets/hotel-1.jpeg', title: 'LUXURY REDEFINED', subtitle: 'Experience extraordinary hospitality' },
    { src: '/assets/sea-1.jpeg', title: 'AEGEAN PARADISE', subtitle: 'Where mountains meet the sea' },
    { src: '/assets/hotel-2.jpeg', title: 'HISTORIC CHARM', subtitle: 'Modern comfort in ancient stones' }
  ];

  let currentGallerySlide = 0;
  let galleryImages = [
    { src: '/assets/hotel-1.jpeg', title: 'Hotel Exterior', desc: 'Stunning mountain and sea views' },
    { src: '/assets/room-1.jpeg', title: 'Luxury Suites', desc: 'Elegantly designed accommodations' },
    { src: '/assets/minivan-1.jpeg', title: 'Unique Minivan Rooms', desc: 'Sleep in expertly converted retro minibuses' },
    { src: '/assets/sea-1.jpeg', title: 'Breathtaking Views', desc: 'Panoramic Aegean coastline' },
    { src: '/assets/room-2.jpeg', title: 'Premium Amenities', desc: 'Luxury meets sustainability' },
    { src: '/assets/hotel-3.jpeg', title: 'Architectural Marvel', desc: 'Where vintage meets modern design' }
  ];

  let statsVisible = false;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % heroImages.length;
  }

  function prevSlide() {
    currentSlide = currentSlide === 0 ? heroImages.length - 1 : currentSlide - 1;
  }

  function nextGallerySlide() {
    currentGallerySlide = (currentGallerySlide + 1) % Math.ceil(galleryImages.length / 3);
  }

  function prevGallerySlide() {
    currentGallerySlide = currentGallerySlide === 0 ? Math.ceil(galleryImages.length / 3) - 1 : currentGallerySlide - 1;
  }

  onMount(() => {
    isLoaded = true;

    // Auto-slide hero images
    setInterval(nextSlide, 5000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (entry.target.classList.contains('stats-section')) {
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
  <title>Bebek Resort - Luxury Reimagined</title>
</svelte:head>

<div class="container">
  <!-- Hero Section with Slider -->
  <section class="hero" id="hero">
    <div class="hero-slider">
      {#each heroImages as image, index}
        <div
          class="hero-slide {index === currentSlide ? 'active' : ''}"
          style="background-image: url({image.src})"
        >
          <div class="hero-overlay"></div>
          {#if index === currentSlide}
            <div class="hero-content" in:fade={{ duration: 1000 }}>
              <h1 in:fly={{ y: 50, duration: 1200, delay: 300 }}>{image.title}</h1>
              <p class="tagline" in:fly={{ y: 30, duration: 1000, delay: 600 }}>
                {image.subtitle}
              </p>
              <div class="hero-actions" in:fly={{ y: 30, duration: 1000, delay: 900 }}>
                <button class="cta-primary">Book Your Stay</button>
                <button class="cta-secondary">Explore Rooms</button>
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Navigation Arrows -->
    <button class="slider-btn prev" on:click={prevSlide} aria-label="Previous slide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="slider-btn next" on:click={nextSlide} aria-label="Next slide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Slide Indicators -->
    <div class="slide-indicators">
      {#each heroImages as _, index}
        <button
          class="indicator {index === currentSlide ? 'active' : ''}"
          on:click={() => currentSlide = index}
          aria-label="Go to slide {index + 1}"
        ></button>
      {/each}
    </div>
  </section>

  <!-- Stats Section -->
  <section class="stats-section animate-on-scroll">
    <div class="stats-container">
      <div class="stat">
        <div class="stat-number" class:animate={statsVisible}>97.5</div>
        <div class="stat-label">SQM OF WONDER</div>
      </div>
      <div class="stat">
        <div class="stat-number" class:animate={statsVisible}>2</div>
        <div class="stat-label">UNIQUE ROOMS</div>
      </div>
      <div class="stat">
        <div class="stat-number infinity" class:animate={statsVisible}>∞</div>
        <div class="stat-label">MEMORIES</div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about animate-on-scroll" id="about">
    <div class="about-content">
      <div class="section-header">
        <h2>DISCOVER THE UNEXPECTED</h2>
        <div class="divider"></div>
      </div>
      <p class="about-text">
        At the foot of the Kaz Mountains, with elevated views of Lesbos Island,
        lies a tiny paradise that will make you question reality. Is it a neighborhood?
        A hotel? A museum? Or a time machine?
      </p>
      <div class="about-features">
        <div class="feature-highlight">
          <div class="feature-icon">🏔️</div>
          <h3>Mountain Views</h3>
          <p>Breathtaking Kaz Mountains panorama</p>
        </div>
        <div class="feature-highlight">
          <div class="feature-icon">🌊</div>
          <h3>Sea Access</h3>
          <p>Direct access to pristine Aegean waters</p>
        </div>
        <div class="feature-highlight">
          <div class="feature-icon">🏛️</div>
          <h3>Historic Setting</h3>
          <p>Ancient Assos stone architecture</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="features animate-on-scroll" id="features">
    <div class="features-content">
      <div class="section-header">
        <h2>EXTRAORDINARY ACCOMMODATIONS</h2>
        <div class="divider"></div>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-image">
            <img src="/assets/minivan-3.jpeg" alt="Vintage Minibus Room" />
          </div>
          <div class="feature-content">
            <h3>VINTAGE MINIBUS ROOMS</h3>
            <p>Sleep in expertly converted retro minibuses, where nostalgia meets luxury comfort in an unforgettable experience.</p>
            <button class="feature-btn">Learn More</button>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-image">
            <img src="/assets/room-3.jpeg" alt="Cruise Ship Bathroom" />
          </div>
          <div class="feature-content">
            <h3>CRUISE SHIP BATHROOM</h3>
            <p>Experience maritime luxury in a repurposed Norwegian vessel captain's cabin, redesigned for ultimate comfort.</p>
            <button class="feature-btn">Learn More</button>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-image">
            <img src="/assets/hotel-5.jpeg" alt="Historic Charm" />
          </div>
          <div class="feature-content">
            <h3>HISTORIC CHARM</h3>
            <p>Surrounded by authentic Assos stone walls, where ancient craftsmanship meets contemporary design.</p>
            <button class="feature-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="gallery animate-on-scroll" id="gallery">
    <div class="gallery-content">
      <div class="section-header">
        <h2>Our Spaces</h2>
        <p class="section-subtitle">Discover the unique character of each carefully designed space</p>
      </div>

      <div class="gallery-grid">
        {#each galleryImages.slice(0, 6) as image, index}
          <div class="gallery-item" class:large={index === 0 || index === 3}>
            <img src={image.src} alt={image.title} />
            <div class="gallery-overlay">
              <h3>{image.title}</h3>
              <p>{image.desc}</p>
            </div>
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
            <h2>Book Your Escape</h2>
            <p class="section-subtitle">Ready to experience something extraordinary?</p>
          </div>
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h3>Visit Us</h3>
                <p>Kozlu Köyü, Ayvacık<br>17862 Çanakkale, Türkiye</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <h3>Get in Touch</h3>
                <a href="mailto:info@bebekresort.com.tr" class="email-link">
                  info@bebekresort.com.tr
                </a>
              </div>
            </div>
          </div>
          <div class="contact-actions">
            <button class="cta-primary full-width">Make a Reservation</button>
            <button class="cta-secondary full-width">Download Brochure</button>
          </div>
        </div>
        <div class="contact-visual">
          <img src="/assets/hotel-2.jpeg" alt="Resort location view" />
          <div class="visual-overlay">
            <h3>Your Paradise Awaits</h3>
            <p>Where memories are made</p>
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
    overflow-x: hidden;
  }

  /* Hero Section with Slider */
  .hero {
    position: relative;
    height: 85vh;
    overflow: hidden;
  }

  .hero-slider {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-slide.active {
    opacity: 1;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 1;
  }

  .hero-content {
    text-align: center;
    z-index: 2;
    position: relative;
    color: white;
    max-width: 700px;
    padding: 0 2rem;
  }

  .hero-content h1 {
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    line-height: 1.1;
  }

  .tagline {
    font-size: clamp(1rem, 2.5vw, 1.4rem);
    margin-bottom: 3rem;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    line-height: 1.4;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-primary, .cta-secondary {
    padding: 1rem 2rem;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
    min-width: 160px;
  }

  .cta-primary {
    background: var(--primary-color);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 30, 86, 0.3);
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 30, 86, 0.4);
  }

  .cta-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .cta-secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  /* Slider Controls */
  .slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 3;
    backdrop-filter: blur(10px);
  }

  .slider-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.05);
  }

  .slider-btn.prev {
    left: 2rem;
  }

  .slider-btn.next {
    right: 2rem;
  }

  .slide-indicators {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.8rem;
    z-index: 3;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .indicator.active {
    background: white;
    border-color: white;
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
    background: url('/assets/hotel-5.jpeg') center/cover;
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
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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

  .feature-btn {
    background: transparent;
    color: var(--accent-color);
    border: 2px solid var(--accent-color);
    padding: 0.8rem 2rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
  }

  .feature-btn:hover {
    background: var(--accent-color);
    color: #000;
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
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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

  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(255,30,86,0.8) 100%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 2rem;
    text-align: center;
  }

  .gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .gallery-overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .gallery-overlay p {
    font-size: 0.9rem;
    opacity: 0.9;
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
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
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

  .contact-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .full-width {
    width: 100%;
  }

  .contact-visual {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    height: 450px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
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
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
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

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
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
    .hero-actions {
      flex-direction: column;
      align-items: center;
    }

    .cta-primary, .cta-secondary {
      width: 250px;
    }

    .slider-btn {
      width: 40px;
      height: 40px;
    }

    .slider-btn.prev {
      left: 1rem;
    }

    .slider-btn.next {
      right: 1rem;
    }

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
      grid-template-columns: 1fr;
    }

    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .hero-content {
      padding: 0 1rem;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .about-text {
      font-size: 1.1rem;
    }
  }
</style>
