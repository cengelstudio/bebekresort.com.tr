<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';

  let isLoaded = false;

  onMount(() => {
    isLoaded = true;
  });
</script>

<svelte:head>
  <title>Upcycling - Bebek Resort</title>
</svelte:head>

<div class="container">
  <section class="hero" id="hero">
    <div class="hero-content" in:fade={{ duration: 1000, delay: 500 }}>
      <h1 in:fly={{ y: 50, duration: 1000, delay: 800 }}>UPCYCLING</h1>
      <p class="tagline" in:fly={{ y: 30, duration: 1000, delay: 1000 }}>
        TRANSFORMING THE ORDINARY INTO EXTRAORDINARY
      </p>
    </div>
    <div class="hero-overlay"></div>
  </section>

  <section class="concept" id="concept">
    <div class="concept-content">
      <h2>WHAT IS UPCYCLING?</h2>
      <p class="concept-text">
        Upcycling is the art of transforming old and unused products into valuable,
        functional pieces with higher purpose. It's not just recycling - it's reimagining.
      </p>
      <div class="concept-grid">
        <div class="concept-item">
          <div class="concept-icon">♻️</div>
          <h3>SUSTAINABLE</h3>
          <p>Reducing waste through creative reuse</p>
        </div>
        <div class="concept-item">
          <div class="concept-icon">🎨</div>
          <h3>CREATIVE</h3>
          <p>Unleashing artistic potential in design</p>
        </div>
        <div class="concept-item">
          <div class="concept-icon">💎</div>
          <h3>VALUABLE</h3>
          <p>Adding worth through transformation</p>
        </div>
      </div>
    </div>
  </section>

  <section class="gallery" id="examples">
    <h2>OUR TRANSFORMATIONS</h2>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="/assets/minivan-2.jpeg" alt="Vintage minibus transformation" />
        <div class="gallery-overlay">
          <h3>VINTAGE MINIBUSES</h3>
          <p>Two decommissioned minibuses find new life as luxurious sleeping quarters,
             combining nostalgia with modern comfort.</p>
        </div>
      </div>

      <div class="gallery-item">
        <img src="/assets/room-2.jpeg" alt="Cruise ship bathroom" />
        <div class="gallery-overlay">
          <h3>CRUISE SHIP ELEGANCE</h3>
          <p>A Norwegian cruise ship's captain's cabin bathroom,
             meticulously redesigned for a unique hospitality experience.</p>
        </div>
      </div>

      <div class="gallery-item">
        <img src="/assets/hotel-3.jpeg" alt="Industrial transformation" />
        <div class="gallery-overlay">
          <h3>INDUSTRIAL CHIC</h3>
          <p>A stainless steel industrial refrigerator transformed into
             a state-of-the-art laundry facility.</p>
        </div>
      </div>

      <div class="gallery-item">
        <img src="/assets/hotel-4.jpeg" alt="Stone walls" />
        <div class="gallery-overlay">
          <h3>HISTORIC CHARM</h3>
          <p>Ancient Assos stones given new life in our modern walls.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="benefits" id="benefits">
    <div class="benefits-content">
      <h2>WHY UPCYCLING?</h2>
      <div class="benefits-grid">
        <div class="benefit">
          <h3>ENVIRONMENTAL IMPACT</h3>
          <p>Reducing waste through creative reuse and sustainable practices</p>
        </div>
        <div class="benefit">
          <h3>CREATIVE EXPRESSION</h3>
          <p>Unleashing artistic potential in design and transformation</p>
        </div>
        <div class="benefit">
          <h3>ECONOMIC VALUE</h3>
          <p>Creating premium experiences from existing resources</p>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .container {
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  .hero {
    height: 60vh;
    background-color: #000;
    color: #fff;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
    z-index: 1;
  }

  .hero-content {
    text-align: center;
    z-index: 2;
    position: relative;
    width: 100%;
  }

  h1 {
    font-size: 5rem;
    font-weight: 900;
    margin: 0;
    letter-spacing: 0.2em;
    text-shadow: 4px 4px var(--primary-color);
    line-height: 1;
  }

  .tagline {
    font-size: 1.2rem;
    margin-top: 1rem;
    letter-spacing: 0.3em;
    color: var(--accent-color);
  }

  section {
    padding: 4rem 0;
    margin: 0;
    width: 100%;
  }

  .concept {
    background-color: var(--background-color);
    text-align: center;
  }

  .concept-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .concept-text {
    max-width: 800px;
    margin: 2rem auto;
    font-size: 1.2rem;
    line-height: 1.8;
  }

  .concept-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }

  .concept-item {
    text-align: center;
    padding: 2rem;
    background-color: #000;
    color: #fff;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .concept-item:hover {
    transform: translateY(-10px);
  }

  .concept-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .gallery {
    background-color: #000;
    color: #fff;
    text-align: center;
    margin: 0;
  }

  .gallery h2 {
    margin-bottom: 4rem;
  }

  .gallery-grid {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 2rem;
  }

  .gallery-item:hover img {
    transform: scale(1.1);
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .benefits {
    background-color: var(--background-color);
    margin: 0;
  }

  .benefits-content {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    padding: 0 2rem;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
  }

  .benefit {
    padding: 2rem;
    background-color: #000;
    color: #fff;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .benefit:hover {
    transform: translateY(-10px);
  }

  .benefit h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  @media (max-width: 1200px) {
    .concept-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .benefits-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    .tagline {
      font-size: 1rem;
      letter-spacing: 0.2em;
    }

    .concept-grid {
      grid-template-columns: 1fr;
    }

    .gallery-grid {
      grid-template-columns: 1fr;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
