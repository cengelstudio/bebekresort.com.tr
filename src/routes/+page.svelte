<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let isLoaded = false;

  onMount(() => {
    isLoaded = true;
  });
</script>

<svelte:head>
  <title>Bebek Resort - Luxury Reimagined</title>
</svelte:head>

<div class="container">
  <section class="hero" id="hero">
    <div class="hero-content" in:fade={{ duration: 1000, delay: 500 }}>
      <h1 in:fly={{ y: 50, duration: 1000, delay: 800 }}>BEBEK RESORT</h1>
      <p class="tagline" in:fly={{ y: 30, duration: 1000, delay: 1000 }}>
        WHERE VINTAGE MEETS LUXURY
      </p>
    </div>
    <div class="hero-overlay"></div>
  </section>

  <section class="stats-section">
    <div class="stats-container">
      <div class="stat">
        <span class="number">97.5</span>
        <span class="label">SQM OF WONDER</span>
      </div>
      <div class="stat">
        <span class="number">2</span>
        <span class="label">UNIQUE ROOMS</span>
      </div>
      <div class="stat">
        <span class="number">∞</span>
        <span class="label">MEMORIES</span>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <div class="about-content">
      <h2>DISCOVER THE UNEXPECTED</h2>
      <p class="about-text">
        At the foot of the Kaz Mountains, with elevated views of Lesbos Island,
        lies a tiny paradise that will make you question reality. Is it a neighborhood?
        A hotel? A museum? Or a time machine?
      </p>
    </div>
  </section>

  <section class="features" id="features">
    <div class="features-grid">
      <div class="feature">
        <div class="feature-content">
          <h3>VINTAGE MINIBUS ROOMS</h3>
          <p>Sleep in expertly converted retro minibuses</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-content">
          <h3>CRUISE SHIP BATHROOM</h3>
          <p>Experience luxury in a repurposed Norwegian vessel</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-content">
          <h3>HISTORIC CHARM</h3>
          <p>Surrounded by authentic Assos stone walls</p>
        </div>
      </div>
    </div>
  </section>

  <section class="gallery" id="gallery">
    <h2>OUR SPACES</h2>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="/assets/hotel-1.jpeg" alt="Hotel exterior view" />
        <div class="gallery-overlay">
          <h3>Hotel Exterior</h3>
          <p>Stunning mountain and sea views</p>
        </div>
      </div>
      <div class="gallery-item">
        <img src="/assets/room-1.jpeg" alt="Vintage room interior" />
        <div class="gallery-overlay">
          <h3>Vintage Room</h3>
          <p>Retro comfort meets modern luxury</p>
        </div>
      </div>
      <div class="gallery-item">
        <img src="/assets/minivan-1.jpeg" alt="Converted minivan room" />
        <div class="gallery-overlay">
          <h3>Minivan Room</h3>
          <p>Sleep in expertly converted retro minibuses</p>
        </div>
      </div>
      <div class="gallery-item">
        <img src="/assets/sea-1.jpeg" alt="Sea view from resort" />
        <div class="gallery-overlay">
          <h3>Sea View</h3>
          <p>Breathtaking Aegean coastline</p>
        </div>
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <div class="contact-content">
      <h2>BOOK YOUR ESCAPE</h2>
      <div class="contact-info">
        <div class="contact-details">
          <h3>Location</h3>
          <p>Kozlu Köyü, Ayvacık<br>17862 Çanakkale, Türkiye</p>
          <h3>Contact</h3>
          <a href="mailto:info@bebekresort.com.tr" class="email-btn">
            info@bebekresort.com.tr
          </a>
        </div>
        <div class="contact-map">
          <img src="/assets/hotel-2.jpeg" alt="Resort location view" />
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

  .hero {
    width: 100%;
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

  .stats-section {
    width: 100%;
    background-color: #000;
    color: #fff;
    padding: 2rem 0;
    margin: 0;
  }

  .stats-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 2rem;
  }

  .stat {
    text-align: center;
  }

  .number {
    font-size: 5rem;
    font-weight: 900;
    color: var(--primary-color);
    display: block;
    line-height: 1;
  }

  .label {
    font-size: 1rem;
    letter-spacing: 0.2em;
    margin-top: 0.5rem;
    display: block;
    color: var(--accent-color);
  }

  section {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .about {
    width: 100%;
    background-color: var(--background-color);
    padding: 4rem 0;
  }

  .about-content {
    width: 100%;
    text-align: center;
    padding: 0 2rem;
  }

  .about-text {
    max-width: 800px;
    margin: 2rem auto;
    font-size: 1.2rem;
    line-height: 1.8;
  }

  .features {
    width: 100%;
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 4rem 0;
  }

  .features-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 2rem;
  }

  .feature {
    padding: 2rem;
    border: 2px solid var(--primary-color);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .feature:hover {
    background-color: var(--primary-color);
    transform: translateY(-5px);
  }

  .gallery {
    width: 100%;
    background-color: var(--background-color);
    text-align: center;
    margin: 0;
    padding: 4rem 0;
  }

  .gallery h2 {
    margin-bottom: 4rem;
  }

  .gallery-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    margin: 0;
    padding: 0;
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

  .contact {
    width: 100%;
    background-color: #000;
    color: #fff;
    margin: 0;
    padding: 4rem 0;
  }

  .contact-content {
    width: 100%;
    padding: 0 2rem;
  }

  .contact h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .contact-details h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .contact-details p {
    margin-bottom: 2rem;
  }

  .contact-map {
    aspect-ratio: 16/9;
    overflow: hidden;
  }

  .contact-map img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .email-btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
  }

  .email-btn:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
  }

  @media (max-width: 1200px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .gallery-grid {
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

    .stats-container {
      grid-template-columns: 1fr;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .gallery-grid {
      grid-template-columns: 1fr;
    }

    .contact-info {
      grid-template-columns: 1fr;
    }

    .number {
      font-size: 3.5rem;
    }
  }
</style>
