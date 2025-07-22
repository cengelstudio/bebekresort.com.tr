<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';

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
  <title>Upcycling - Bebek Resort</title>
</svelte:head>

<div class="container">
  <!-- Concept Section -->
  <section class="concept animate-on-scroll" id="concept">
    <div class="concept-content">
      <div class="section-header">
        <h2>What is Upcycling?</h2>
        <p class="section-subtitle">Discover the unique character of each carefully designed space</p>
      </div>
      <p class="concept-text">
        Upcycling is the process of transforming old and unused products or materials into more valuable and functional items.
        This process often requires a creative and artistic approach. For example, creating a stylish lamp from an old wine bottle
        or a new bag from a pair of old jeans are examples of upcycling. In this process, old products are often given a new life
        with a higher value and sometimes take on a completely different function. Upcycling not only minimizes waste but also
        benefits the environment by introducing new ideas in design and aesthetics.
      </p>
      <div class="concept-grid">
        <div class="concept-item" class:animate={conceptVisible}>
          <div class="concept-icon">♻️</div>
          <h3>SUSTAINABLE</h3>
          <p>Reducing waste through creative reuse and environmental consciousness</p>
          <div class="concept-number">100%</div>
          <span>Eco-Friendly</span>
        </div>
        <div class="concept-item" class:animate={conceptVisible}>
          <div class="concept-icon">🎨</div>
          <h3>CREATIVE</h3>
          <p>Unleashing artistic potential in design and architectural innovation</p>
          <div class="concept-number">∞</div>
          <span>Possibilities</span>
        </div>
        <div class="concept-item" class:animate={conceptVisible}>
          <div class="concept-icon">💎</div>
          <h3>VALUABLE</h3>
          <p>Adding worth through transformation and sophisticated craftsmanship</p>
          <div class="concept-number">200%</div>
          <span>Value Added</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Transformations Gallery -->
  <section class="gallery animate-on-scroll" id="examples">
    <div class="gallery-content">
      <div class="section-header">
        <h2>OUR TRANSFORMATIONS</h2>
        <div class="divider"></div>
      </div>

      <div class="gallery-slider">
        <div class="gallery-track" style="transform: translateX(-{currentSlide * 100}%)">
          {#each Array(Math.ceil(transformationImages.length / 2)) as _, slideIndex}
            <div class="gallery-slide">
              {#each transformationImages.slice(slideIndex * 2, slideIndex * 2 + 2) as image}
                <div class="gallery-item">
                  <img src={image.src} alt={image.title} />
                  <div class="gallery-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.desc}</p>
                    <button class="view-details">View Details</button>
                  </div>
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
        <h2>OUR UPCYCLING PROCESS</h2>
        <div class="divider"></div>
      </div>
      <div class="process-steps">
        <div class="process-step">
          <div class="step-number">01</div>
          <div class="step-content">
            <h3>DISCOVERY</h3>
            <p>We source unique materials and objects with untapped potential from across the region.</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">02</div>
          <div class="step-content">
            <h3>VISION</h3>
            <p>Our design team reimagines each piece, creating detailed plans for transformation.</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">03</div>
          <div class="step-content">
            <h3>CRAFTSMANSHIP</h3>
            <p>Master artisans meticulously transform materials using traditional and modern techniques.</p>
          </div>
        </div>
        <div class="process-step">
          <div class="step-number">04</div>
          <div class="step-content">
            <h3>INTEGRATION</h3>
            <p>Each piece is seamlessly integrated into our resort, creating unique guest experiences.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="benefits animate-on-scroll" id="benefits">
    <div class="benefits-content">
      <div class="section-header">
        <h2>WHY UPCYCLING MATTERS</h2>
        <div class="divider"></div>
      </div>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🌍</div>
          <h3>REDUCING ENVIRONMENTAL IMPACT</h3>
          <p>Reduces waste because old materials are reused, minimizing the environmental footprint and contributing to a more sustainable future.</p>
          <div class="benefit-stat">-75% Waste</div>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🎨</div>
          <h3>STIMULATES CREATIVITY</h3>
          <p>Opens up a diverse and creative avenue for designers and artists, allowing for innovative approaches to design and aesthetics.</p>
          <div class="benefit-stat">∞ Creativity</div>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">💰</div>
          <h3>ECONOMIC BENEFITS</h3>
          <p>Old products or materials can be transformed into high-quality, unique products, generating additional income and value.</p>
          <div class="benefit-stat">200% Value</div>
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
          <div class="stat-label">Transformed Objects</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" class:animate={statsVisible}>500+</div>
          <div class="stat-label">Years of History Preserved</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" class:animate={statsVisible}>100%</div>
          <div class="stat-label">Sustainable Materials</div>
        </div>
        <div class="stat-item">
          <div class="stat-number infinity" class:animate={statsVisible}>∞</div>
          <div class="stat-label">Stories to Tell</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="cta-section" id="cta">
    <div class="cta-content">
      <h2>EXPERIENCE UPCYCLING IN ACTION</h2>
      <p>Join us at Bebek Resort and witness the magic of transformation firsthand. Every corner tells a story of renewal and creativity.</p>
      <div class="cta-actions">
        <button class="cta-primary large">Book Your Stay</button>
        <button class="cta-secondary large">Schedule a Tour</button>
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

  /* Hero Section */
  .hero {
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
  }

  .hero-content {
    text-align: center;
    z-index: 2;
    position: relative;
    color: white;
    max-width: 800px;
    padding: 0 2rem;
  }

  .hero-content h1 {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    letter-spacing: 0.1em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    background: linear-gradient(135deg, #fff 0%, var(--primary-color) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tagline {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin-bottom: 3rem;
    letter-spacing: 0.2em;
    color: var(--accent-color);
    font-weight: 300;
  }

  .hero-actions {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
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
    padding: 3rem;
    text-align: center;
  }

  .gallery-item:hover img {
    transform: scale(1.2);
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .gallery-overlay h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .gallery-overlay p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .view-details {
    background: transparent;
    color: var(--accent-color);
    border: 2px solid var(--accent-color);
    padding: 0.8rem 2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .view-details:hover {
    background: var(--accent-color);
    color: #000;
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

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .gallery-slide {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .hero-actions, .cta-actions {
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
    .hero-content, .cta-content {
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
