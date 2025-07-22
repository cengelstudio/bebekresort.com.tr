<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { setLocale } from '$lib/paraglide/runtime.js';
  import { get } from 'svelte/store';

  let isLoaded = false;
  let isMenuOpen = false;
  let currentLang = 'en';

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' }
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function switchLanguage(lang: string) {
    setLocale(lang);
    currentLang = lang;
  }

  onMount(() => {
    isLoaded = true;
  });
</script>

<div class="app-container {isLoaded ? 'loaded' : ''}">
  <nav class="main-nav">
    <div class="nav-content">
      <a href="/" class="logo-container">
        <img src="/logo-white.png" alt="Bebek Resort Logo" class="logo-img" />
      </a>

      <button class="menu-toggle" aria-label="Toggle menu" on:click={toggleMenu}>
        <span class="menu-icon"></span>
      </button>

      <div class="nav-items {isMenuOpen ? 'open' : ''}">
        <div class="nav-links">
          <a href="/" class="nav-link {get(page).url.pathname === '/' ? 'active' : ''}">HOME</a>
          <a href="/upcycling" class="nav-link {get(page).url.pathname === '/upcycling' ? 'active' : ''}">UPCYCLING</a>
        </div>

        <div class="lang-selector">
          {#each languages as lang}
            <button
              class="lang-btn {currentLang === lang.code ? 'active' : ''}"
              aria-label={lang.name}
              on:click={() => switchLanguage(lang.code)}
            >
              {lang.code.toUpperCase()}
            </button>
          {/each}
        </div>
      </div>
    </div>
  </nav>

  <main>
    <slot />
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-grid">
        <div class="footer-section">
          <img src="/logo-white.png" alt="Bebek Resort Logo" class="footer-logo" />
          <p class="footer-desc">Experience luxury reimagined through sustainable design and upcycled art.</p>
        </div>

        <div class="footer-section">
          <h3>Navigation</h3>
          <a href="/">Home</a>
          <a href="/upcycling">Upcycling</a>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <p>Kozlu Köyü, Ayvacık</p>
          <p>17862 Çanakkale, Türkiye</p>
          <a href="mailto:info@bebekresort.com.tr">info@bebekresort.com.tr</a>
        </div>

        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="https://instagram.com/bebekresort" class="social-link" aria-label="Instagram" target="_blank" rel="noopener">Instagram</a>
            <a href="https://facebook.com/bebekresort" class="social-link" aria-label="Facebook" target="_blank" rel="noopener">Facebook</a>
            <a href="https://twitter.com/bebekresort" class="social-link" aria-label="Twitter" target="_blank" rel="noopener">Twitter</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {new Date().getFullYear()} Bebek Resort. All rights reserved.</p>
        <div class="footer-links">
          <a href="/privacy-policy" aria-label="Privacy Policy">Privacy Policy</a>
          <a href="/terms-of-service" aria-label="Terms of Service">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</div>

<style>
  .app-container {
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }

  .loaded {
    opacity: 1;
  }

  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 0.5rem 2rem;
    transition: all 0.3s ease;
  }

  .nav-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-container {
    display: block;
    width: 80px;
    transition: transform 0.3s ease;
  }

  .logo-container:hover {
    transform: scale(1.05);
  }

  .logo-img {
    width: 100%;
    height: auto;
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.1em;
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s ease;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .lang-selector {
    display: flex;
    gap: 0.5rem;
  }

  .lang-btn {
    padding: 0.5rem;
    color: #fff;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    transition: all 0.3s ease;
    font-size: 0.8rem;
  }

  .lang-btn:hover,
  .lang-btn.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
  }

  .menu-toggle {
    display: none;
    width: 30px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }

  .menu-icon,
  .menu-icon::before,
  .menu-icon::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background: #fff;
    transition: all 0.3s ease;
  }

  .menu-icon {
    top: 50%;
    transform: translateY(-50%);
  }

  .menu-icon::before {
    top: -8px;
  }

  .menu-icon::after {
    bottom: -8px;
  }

  main {
    min-height: 100vh;
    padding-top: 80px;
  }

  footer {
    background: #000;
    color: #fff;
    padding: 4rem 2rem 2rem;
  }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .footer-section h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  .footer-logo {
    width: 150px;
    margin-bottom: 1rem;
  }

  .footer-desc {
    opacity: 0.8;
    line-height: 1.6;
  }

  .footer-section a {
    display: block;
    color: #fff;
    margin-bottom: 0.8rem;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .footer-section a:hover {
    opacity: 1;
    color: var(--primary-color);
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-links {
    display: flex;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .nav-items {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.95);
      padding: 2rem;
      flex-direction: column;
      gap: 2rem;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s ease;
    }

    .nav-items.open {
      transform: translateY(0);
      opacity: 1;
    }

    .nav-links {
      flex-direction: column;
      align-items: center;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }

    .footer-links {
      justify-content: center;
    }
  }
</style>
