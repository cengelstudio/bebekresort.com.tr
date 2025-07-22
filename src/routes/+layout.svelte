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
    setLocale(lang as any);
    currentLang = lang;
    isMenuOpen = false;
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
          <a href="/" class="nav-link {get(page).url.pathname === '/' ? 'active' : ''}">Home</a>
          <a href="/upcycling" class="nav-link {get(page).url.pathname === '/upcycling' ? 'active' : ''}">Upcycling</a>
        </div>

        <div class="lang-selector">
          <button class="lang-current" on:click={() => isMenuOpen = !isMenuOpen}>
            {currentLang.toUpperCase()}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" class="dropdown-icon">
              <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="lang-dropdown {isMenuOpen ? 'open' : ''}">
            {#each languages as lang}
              <button
                class="lang-option"
                on:click={() => switchLanguage(lang.code)}
              >
                {lang.name}
              </button>
            {/each}
          </div>
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
    backdrop-filter: blur(20px);
    z-index: 1000;
    padding: 0.8rem 2rem;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .main-nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(26,26,26,0.95) 100%);
    z-index: -1;
  }

  .nav-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-container {
    display: block;
    width: 60px;
    transition: all 0.3s ease;
  }

  .logo-container:hover {
    transform: scale(1.05);
  }

  .logo-img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 2px 8px rgba(255, 30, 86, 0.2));
  }

  .nav-items {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.05em;
    position: relative;
    padding: 0.8rem 0;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    transform: scaleX(1);
  }

  .nav-link:hover {
    color: var(--accent-color);
  }

  .lang-selector {
    position: relative;
  }

  .lang-current {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    color: #fff;
    background: transparent;
    border: none;
    border-radius: 20px;
    transition: all 0.3s ease;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    position: relative;
    overflow: hidden;
  }

  .lang-current::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  .lang-current:hover::before {
    left: 100%;
  }

  .lang-current:hover,
  .lang-current.active {
    background: linear-gradient(135deg, var(--primary-color), #d01846);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 30, 86, 0.3);
  }

  .lang-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 1002;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease-in-out;
    min-width: 100px;
    padding: 0.5rem 0;
  }

  .lang-dropdown.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .lang-option {
    padding: 0.6rem 1rem;
    color: #fff;
    background: transparent;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-align: left;
    width: 100%;
    cursor: pointer;
  }

  .lang-option:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--accent-color);
  }

  .dropdown-icon {
    transition: transform 0.3s ease;
  }

  .lang-current:hover .dropdown-icon {
    transform: rotate(180deg);
  }

  .menu-toggle {
    display: none;
    width: 35px;
    height: 30px;
    position: relative;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 1001;
  }

  .menu-icon,
  .menu-icon::before,
  .menu-icon::after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  .menu-icon {
    top: 50%;
    transform: translateY(-50%);
  }

  .menu-icon::before {
    top: -10px;
  }

  .menu-icon::after {
    bottom: -10px;
  }

  main {
    min-height: 100vh;
    padding-top: 70px;
  }

  footer {
    background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
    color: #fff;
    padding: 6rem 2rem 2rem;
    position: relative;
  }

  footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/hotel-5.jpeg') center/cover;
    opacity: 0.05;
  }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .footer-section {
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  .footer-section:hover {
    opacity: 1;
  }

  .footer-section h3 {
    color: var(--primary-color);
    margin-bottom: 2rem;
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .footer-logo {
    width: 150px;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 2px 8px rgba(255, 30, 86, 0.3));
  }

  .footer-desc {
    opacity: 0.8;
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .footer-section a {
    display: block;
    color: #fff;
    margin-bottom: 1rem;
    opacity: 0.8;
    transition: all 0.3s ease;
    padding: 0.5rem 0;
    font-weight: 500;
    position: relative;
  }

  .footer-section a::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transition: width 0.3s ease;
  }

  .footer-section a:hover::before {
    width: 100%;
  }

  .footer-section a:hover {
    opacity: 1;
    color: var(--accent-color);
    transform: translateX(10px);
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-bottom {
    padding-top: 3rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-bottom p {
    opacity: 0.7;
    font-size: 0.9rem;
  }

  .footer-links {
    display: flex;
    gap: 3rem;
  }

  .footer-links a {
    opacity: 0.7;
    transition: opacity 0.3s ease;
    font-size: 0.9rem;
  }

  .footer-links a:hover {
    opacity: 1;
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .nav-items {
      position: fixed;
      top: 90px;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.98);
      backdrop-filter: blur(20px);
      padding: 3rem 2rem;
      flex-direction: column;
      gap: 3rem;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.4s ease;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav-items.open {
      transform: translateY(0);
      opacity: 1;
    }

    .nav-links {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .nav-link {
      font-size: 1.2rem;
      padding: 1.5rem 0;
    }

    .lang-selector {
      padding: 1rem;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }

    .footer-links {
      justify-content: center;
    }

    main {
      padding-top: 90px;
    }
  }

  @media (max-width: 480px) {
    .main-nav {
      padding: 0.8rem 1rem;
    }

    .nav-content {
      gap: 1rem;
    }

    .logo-container {
      width: 70px;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
</style>
