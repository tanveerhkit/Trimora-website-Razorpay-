/* Trimora marketing experience overrides. */
(function () {
  const escapeHtml = (value) => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

  function icon(name, size = 20) {
    const icons = {
      arrow: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      search: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      calendar: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="5.5" width="16" height="15" rx="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M8 3.5v4M16 3.5v4M4 10h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="m9 15 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      store: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10.5V20h16v-9.5M3 10.5h18L19 4H5l-2 6.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 20v-5h8v5M3.5 10.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      spark: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
      check: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4.2 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    };
    return icons[name] || "";
  }

  function renderHeader() {
    return `
      <header class="site-header site-header-dark" id="site-header">
        <div class="container header-inner">
          <a href="/" class="logo-link" data-link aria-label="Trimora home">
            <img src="assets/trimora_logo.png" alt="Trimora" class="logo-img logo-img-light">
          </a>
          <nav class="nav-desktop" aria-label="Primary navigation">
            <a href="/#for-customers">For customers</a>
            <a href="/#for-owners">For owners</a>
            <a href="/#how-it-works">How it works</a>
            <a href="/about" data-link>About</a>
          </nav>
          <div class="header-actions">
            <a href="mailto:${window.TRIMORA_CONFIG.supportEmail}?subject=Join%20Trimora" class="header-link">Join Trimora</a>
            <a href="/contact" class="btn btn-small btn-light" data-link>Get support ${icon("arrow", 16)}</a>
          </div>
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">${icon("menu")}</button>
        </div>
        <div class="nav-mobile nav-mobile-dark" id="nav-mobile">
          <a href="/#for-customers">For customers</a>
          <a href="/#for-owners">For owners</a>
          <a href="/#how-it-works">How it works</a>
          <a href="/about" data-link>About Trimora</a>
          <a href="/contact" data-link>Contact support</a>
          <a href="mailto:${window.TRIMORA_CONFIG.supportEmail}?subject=Join%20Trimora">Join Trimora ${icon("arrow", 16)}</a>
        </div>
      </header>`;
  }

  function renderFooter() {
    const c = window.TRIMORA_CONFIG;
    return `
      <footer class="site-footer site-footer-modern">
        <div class="container">
          <div class="footer-cta">
            <div>
              <span class="section-eyebrow section-eyebrow-light">Make grooming fit your day</span>
              <h2>Ready when you are.</h2>
            </div>
            <a class="btn btn-primary" href="mailto:${c.supportEmail}?subject=I%20want%20to%20use%20Trimora">Start with Trimora ${icon("arrow", 18)}</a>
          </div>
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="/" class="logo-link" data-link aria-label="Trimora home">
                <img src="assets/trimora_logo.png" alt="Trimora" class="logo-img logo-img-light">
              </a>
              <p>Discover local grooming businesses, choose your service, and book with more clarity.</p>
              <span class="footer-note">Built for India's salons, barbers, and customers.</span>
            </div>
            <div class="footer-col"><h4>Explore</h4><ul><li><a href="/#for-customers">For customers</a></li><li><a href="/#for-owners">For owners</a></li><li><a href="/#how-it-works">How it works</a></li><li><a href="/about" data-link>About Trimora</a></li></ul></div>
            <div class="footer-col"><h4>Support</h4><ul><li><a href="/contact" data-link>Contact support</a></li><li><a href="/refund-cancellation-policy" data-link>Cancellation & refund</a></li><li><a href="/account-deletion" data-link>Account deletion</a></li></ul></div>
            <div class="footer-col"><h4>Legal</h4><ul><li><a href="/privacy-policy" data-link>Privacy policy</a></li><li><a href="/terms" data-link>Terms & conditions</a></li><li><a href="/service-fulfillment-policy" data-link>Service fulfillment</a></li></ul></div>
          </div>
          <div class="footer-bottom"><p>&copy; ${c.copyrightYear} ${c.legalBusinessName}. All rights reserved.</p><div class="footer-contact-info"><a href="mailto:${c.supportEmail}">${c.supportEmail}</a><a href="tel:${c.supportPhone}">${c.supportPhone}</a></div></div>
        </div>
      </footer>`;
  }

  function phoneMockup() {
    return `
      <div class="hero-device-wrap" aria-label="Trimora booking experience preview">
        <div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div>
        <div class="hero-device">
          <div class="device-notch"></div>
          <div class="device-screen">
            <div class="device-topline"><span>9:41</span><span>● ● ▰</span></div>
            <div class="device-greeting"><span>Good morning,</span><strong>Tanveer</strong></div>
            <div class="device-search">${icon("search", 16)} <span>Find a salon or service</span></div>
            <div class="device-label">Popular near you</div>
            <div class="device-salon-card"><div class="salon-image salon-image-one"><span>OPEN</span></div><div class="salon-copy"><strong>Studio 27</strong><span>Haircut · Beard · Styling</span><small>4.8 ★ · 1.2 km away</small></div><span class="salon-arrow">›</span></div>
            <div class="device-salon-card"><div class="salon-image salon-image-two"><span>NEW</span></div><div class="salon-copy"><strong>The Groom Room</strong><span>Classic & modern cuts</span><small>Kanpur · View services</small></div><span class="salon-arrow">›</span></div>
            <div class="device-tabbar"><span class="tab-active">${icon("search", 17)}<small>Discover</small></span><span>${icon("calendar", 17)}<small>Bookings</small></span><span>${icon("store", 17)}<small>Profile</small></span></div>
          </div>
        </div>
        <div class="floating-card floating-card-top"><span class="floating-icon">${icon("check", 18)}</span><span><strong>Appointment booked</strong><small>Your time is yours.</small></span></div>
        <div class="floating-card floating-card-bottom"><span class="floating-icon gold">${icon("spark", 18)}</span><span><strong>Made for local</strong><small>Discover nearby talent.</small></span></div>
      </div>`;
  }

  function renderHomePage() {
    const c = window.TRIMORA_CONFIG;
    return `
      <main class="marketing-home">
        <section class="hero-modern" id="hero">
          <div class="hero-grid-glow"></div><div class="hero-noise"></div>
          <div class="container hero-modern-inner">
            <div class="hero-copy">
              <div class="eyebrow-pill"><span></span> The smarter way to book grooming</div>
              <h1>Your grooming.<br><em>Your time.</em><br>Your choice.</h1>
              <p class="hero-lead">Discover local salons and barbers, explore services, and book an appointment that fits your day.</p>
              <div class="hero-actions"><a href="#for-customers" class="btn btn-primary btn-large">Find your next appointment ${icon("arrow", 18)}</a><a href="#for-owners" class="text-link text-link-light">I run a salon ${icon("arrow", 16)}</a></div>
              <div class="hero-meta"><span>${icon("check", 16)} Simple to explore</span><span>${icon("check", 16)} Built for local</span><span>${icon("check", 16)} Support when you need it</span></div>
            </div>
            <div class="hero-visual">${phoneMockup()}</div>
          </div>
          <div class="hero-bottom-line"><div class="container"><span>Trimora / 01</span><span>Discover · Book · Groom</span><span>Scroll to explore ↓</span></div></div>
        </section>

        <section class="signal-strip"><div class="container signal-grid"><div><span class="signal-number">01</span><strong>Discover locally</strong><span>Find grooming businesses in your city.</span></div><div><span class="signal-number">02</span><strong>Choose clearly</strong><span>Explore services and available options.</span></div><div><span class="signal-number">03</span><strong>Book confidently</strong><span>Make an appointment around your schedule.</span></div></div></section>

        <section class="section-modern audience-section" id="for-customers"><div class="container"><div class="section-intro split-intro"><div><span class="section-eyebrow">For your next appointment</span><h2>Less searching.<br><span>More getting ready.</span></h2></div><p>Whether it is a fresh cut, a beard trim, a styling session, or a little confidence before a big day, Trimora gives you a clearer path from “where should I go?” to “I am booked.”</p></div><div class="customer-story-grid"><div class="story-panel story-panel-dark"><div class="panel-kicker">The Trimora flow</div><h3>Make grooming feel like part of your plan.</h3><p>Open. Explore. Choose. Book. No guesswork needed.</p><div class="flow-line"><span class="flow-dot active">1</span><i></i><span class="flow-dot">2</span><i></i><span class="flow-dot">3</span><i></i><span class="flow-dot">4</span></div><div class="flow-labels"><span>Discover</span><span>Choose</span><span>Book</span><span>Groom</span></div><a class="panel-link" href="mailto:${c.supportEmail}?subject=I%20want%20to%20book%20with%20Trimora">Start your search ${icon("arrow", 17)}</a></div><div class="story-panel story-panel-light"><span class="quote-mark">“</span><blockquote>Your next haircut should not begin with calling five places.</blockquote><div class="story-person"><div class="avatar avatar-blue">T</div><div><strong>Built around your time</strong><span>A cleaner way to plan self-care.</span></div></div></div></div></div></section>

        <section class="section-modern feature-section" id="features"><div class="container"><div class="section-intro center-intro"><span class="section-eyebrow">A better booking habit</span><h2>Everything you need<br>before you sit in the chair.</h2><p>Trimora brings discovery, service details, availability, and appointment support into one focused experience.</p></div><div class="feature-grid-modern"><article class="feature-modern feature-featured"><div class="feature-icon-modern">${icon("search", 24)}</div><span class="feature-index">01 / DISCOVER</span><h3>Find your place</h3><p>Explore local salons and barbers that match the kind of grooming you are looking for.</p><div class="feature-visual mini-map"><span class="map-pin pin-one"></span><span class="map-pin pin-two"></span><span class="map-pin pin-three"></span><div class="map-label">Nearby grooming</div></div></article><article class="feature-modern"><div class="feature-icon-modern">${icon("store", 24)}</div><span class="feature-index">02 / EXPLORE</span><h3>Know what to expect</h3><p>Browse services, pricing, and details before you decide where to book.</p><div class="service-chips"><span>Haircut</span><span>Beard trim</span><span>Styling</span></div></article><article class="feature-modern"><div class="feature-icon-modern">${icon("calendar", 24)}</div><span class="feature-index">03 / BOOK</span><h3>Choose your time</h3><p>Pick an appointment option that works for your schedule and keep your day moving.</p><div class="calendar-card"><div><strong>JUN</strong><span>18</span></div><div><small>Appointment</small><strong>10:30 AM</strong></div><span class="calendar-check">${icon("check", 16)}</span></div></article></div></div></section>

        <section class="section-modern owner-section" id="for-owners"><div class="container"><div class="owner-layout"><div class="owner-copy"><span class="section-eyebrow section-eyebrow-gold">For salon & barber owners</span><h2>Your craft deserves<br><span>a digital front door.</span></h2><p>Your business already has the skill, the people, and the local trust. Trimora helps you present it professionally so customers can discover your services and manage their appointment journey more easily.</p><div class="owner-points"><div>${icon("check", 18)} <span><strong>Showcase your services</strong><small>Give customers a clearer first look.</small></span></div><div>${icon("check", 18)} <span><strong>Be easier to discover</strong><small>Put your business where customers are looking.</small></span></div><div>${icon("check", 18)} <span><strong>Manage with more clarity</strong><small>Make appointment coordination less manual.</small></span></div></div><a href="#owner-interest" class="btn btn-primary">Take your salon online ${icon("arrow", 18)}</a></div><div class="owner-dashboard"><div class="dashboard-top"><div><span class="dashboard-kicker">Trimora business profile</span><strong>Studio 27</strong></div><span class="status-dot">● Live</span></div><div class="dashboard-cover"><div class="cover-gradient"></div><div class="cover-avatar">27</div><span class="cover-tag">SALON & BARBER</span></div><div class="dashboard-stats"><div><small>Services</small><strong>12</strong></div><div><small>Open today</small><strong>09:00</strong></div><div><small>City</small><strong>Kanpur</strong></div></div><div class="dashboard-list"><div><span class="list-icon">${icon("store", 17)}</span><span><strong>Haircut & styling</strong><small>From your service menu</small></span><b>›</b></div><div><span class="list-icon">${icon("calendar", 17)}</span><span><strong>Appointment requests</strong><small>Keep your day organized</small></span><b>›</b></div></div><div class="dashboard-footer"><span>${icon("spark", 16)} Made for local businesses</span><span>TRIMORA</span></div></div></div></div></section>

        <section class="section-modern how-section" id="how-it-works"><div class="container"><div class="section-intro center-intro"><span class="section-eyebrow">How it works</span><h2>One simple flow.<br>Two better experiences.</h2></div><div class="how-grid"><div class="how-card"><span class="how-number">01</span><div class="how-card-icon">${icon("search", 23)}</div><h3>Discover</h3><p>Customers find salons and barbers that fit their needs. Owners get a professional place to be found.</p></div><div class="how-card how-card-highlight"><span class="how-number">02</span><div class="how-card-icon">${icon("calendar", 23)}</div><h3>Choose & book</h3><p>Customers explore a service and choose an appointment option. Owners get a clearer booking journey.</p></div><div class="how-card"><span class="how-number">03</span><div class="how-card-icon">${icon("spark", 23)}</div><h3>Show up confident</h3><p>Less friction before the visit. More focus on the service, the craft, and the experience.</p></div></div></div></section>

        <section class="section-modern interest-section" id="owner-interest"><div class="container"><div class="interest-layout"><div><span class="section-eyebrow">Bring your business online</span><h2>Let’s put your salon<br><span>on the map.</span></h2><p>Tell us a little about your business and we will help you take the next step with Trimora.</p><div class="interest-note">${icon("check", 17)} No exaggerated promises. Just a better digital starting point.</div></div><form class="interest-form" id="owner-lead-form" data-mailto-form><div class="form-row"><label>Business name<input name="business" type="text" placeholder="Your salon or shop" required></label><label>City<input name="city" type="text" placeholder="e.g. Kanpur" required></label></div><div class="form-row"><label>Your name<input name="name" type="text" placeholder="Owner or manager" required></label><label>Phone or email<input name="contact" type="text" placeholder="How we can reach you" required></label></div><label>What would you like help with?<select name="interest"><option>Joining Trimora</option><option>Understanding the platform</option><option>Customer booking support</option><option>Something else</option></select></label><button type="submit" class="btn btn-primary btn-full">Send my interest ${icon("arrow", 18)}</button><p class="form-footnote">Your email app will open with a pre-filled message to ${c.supportEmail}.</p><p class="form-status" id="owner-form-status" aria-live="polite"></p></form></div></div></section>

        <section class="section-modern faq-section" id="faq"><div class="container faq-layout"><div class="faq-heading"><span class="section-eyebrow">Questions, answered</span><h2>Clear from the<br>first click.</h2><p>We are building Trimora around a simple idea: make the next step easier to understand.</p><a href="/contact" class="text-link" data-link>Ask a question ${icon("arrow", 16)}</a></div><div class="faq-list"><details open><summary>What is Trimora? <span>+</span></summary><p>Trimora is a digital salon and barber appointment-booking platform. Customers can discover grooming businesses, explore services, check available options, and book. Owners can build a digital presence and manage appointment journeys more efficiently.</p></details><details><summary>Is Trimora for salon and barber owners? <span>+</span></summary><p>Yes. Trimora is designed for local salons and barber shops that want to showcase their services, be easier to discover, and create a more professional digital appointment experience.</p></details><details><summary>Does Trimora provide the salon service? <span>+</span></summary><p>No. Trimora is a technology platform. Services are provided by independent salon and barber partners. The applicable booking, cancellation, and fulfilment terms are available in the legal pages.</p></details><details><summary>Where does Trimora operate? <span>+</span></summary><p>Trimora may operate city by city based on salon partner availability. Contact the team to ask about your area.</p></details></div></div></section>

        <section class="support-strip"><div class="container support-strip-inner"><div><span class="section-eyebrow">Need help?</span><h2>We are one message away.</h2></div><div class="support-actions"><a href="mailto:${c.supportEmail}" class="support-contact">${c.supportEmail}</a><a href="/contact" class="btn btn-light" data-link>Contact support ${icon("arrow", 17)}</a></div></div></section>
      </main>`;
  }

  function initMarketingInteractions() {
    document.querySelectorAll("[data-mailto-form]").forEach((form) => {
      if (form.dataset.bound === "true") return;
      form.dataset.bound = "true";
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const business = escapeHtml(data.get("business"));
        const city = escapeHtml(data.get("city"));
        const name = escapeHtml(data.get("name"));
        const contact = escapeHtml(data.get("contact"));
        const interest = escapeHtml(data.get("interest"));
        const subject = encodeURIComponent(`Trimora owner interest — ${business}`);
        const body = encodeURIComponent(`Hello Trimora team,\n\nI am interested in Trimora.\n\nBusiness: ${business}\nCity: ${city}\nName: ${name}\nContact: ${contact}\nInterest: ${interest}\n\nPlease share the next steps.`);
        const status = form.querySelector(".form-status");
        if (status) status.textContent = "Opening your email app with the request prepared…";
        window.location.href = `mailto:${window.TRIMORA_CONFIG.supportEmail}?subject=${subject}&body=${body}`;
      });
    });
  }

  const original = window.TRIMORA_PAGES || {};
  window.TRIMORA_PAGES = Object.assign({}, original, {
    renderHeader,
    renderFooter,
    renderHomePage,
    initMarketingInteractions,
  });
})();
