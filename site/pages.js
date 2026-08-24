/**
 * Trimora Website — Page Content Generator
 * Each function returns HTML for the corresponding page.
 * Content is taken directly from the provided markdown content files.
 */

const C = () => window.TRIMORA_CONFIG;

// ===== SHARED COMPONENTS =====

function renderHeader() {
  return `
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="/" class="logo-link" data-link>
        <img src="assets/trimora_logo.png" alt="Trimora Logo" class="logo-img" style="filter: brightness(0) saturate(100%);">
      </a>
      <nav>
        <ul class="nav-desktop" id="nav-desktop">
          <li><a href="/" data-link>Home</a></li>
          <li><a href="/about" data-link>About</a></li>
          <li><a href="/contact" data-link>Contact</a></li>
        </ul>
      </nav>
      <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <svg viewBox="0 0 24 24" id="menu-icon">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="nav-mobile" id="nav-mobile">
      <a href="/" data-link>Home</a>
      <a href="/about" data-link>About</a>
      <a href="/contact" data-link>Contact</a>
      <a href="/privacy-policy" data-link>Privacy Policy</a>
      <a href="/terms" data-link>Terms & Conditions</a>
      <a href="/refund-cancellation-policy" data-link>Cancellation & Refund Policy</a>
      <a href="/service-fulfillment-policy" data-link>Service Fulfillment Policy</a>
      <a href="/account-deletion" data-link>Account Deletion</a>
    </div>
  </header>`;
}

function renderFooter() {
  const c = C();
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="logo-link" data-link>
            <img src="assets/trimora_logo.png" alt="Trimora Logo" class="logo-img">
          </a>
          <p>Salon discovery and appointment booking platform. Find salons, browse services, and book appointments online.</p>
          <p style="margin-top: var(--space-md); font-size: 0.8125rem;">Operated by ${c.legalBusinessName}, ${c.cityState}.</p>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/about" data-link>About</a></li>
            <li><a href="/contact" data-link>Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy" data-link>Privacy Policy</a></li>
            <li><a href="/terms" data-link>Terms & Conditions</a></li>
            <li><a href="/refund-cancellation-policy" data-link>Cancellation & Refund</a></li>
            <li><a href="/service-fulfillment-policy" data-link>Service Fulfillment</a></li>
            <li><a href="/account-deletion" data-link>Account Deletion</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${c.copyrightYear} ${c.legalBusinessName}. All rights reserved.</p>
        <div class="footer-contact-info">
          <a href="mailto:${c.supportEmail}">${c.supportEmail}</a>
          <a href="tel:${c.supportPhone}">${c.supportPhone}</a>
        </div>
      </div>
    </div>
  </footer>`;
}


// ===== HOMEPAGE =====

function renderHomePage() {
  const c = C();
  return `
  <main>
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge">Launching Soon</span>
          <h1>Book Trusted Salon Services with Ease</h1>
          <p class="hero-subtitle">Trimora is a salon discovery and appointment booking platform that helps you find salons, browse services, view availability, and book appointments online.</p>
          <div class="hero-actions">
            <a href="/contact" class="btn btn-primary" data-link>Contact Us</a>
            <a href="/about" class="btn btn-outline" data-link>Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- What You Can Do -->
    <section class="section" id="features">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Platform Features</span>
          <h2>What You Can Do on Trimora</h2>
          <p>Everything you need to discover and book salon services, all in one place.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>Discover Salons</h3>
            <p>Find salons and grooming services near you with ease.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3>View Details & Pricing</h3>
            <p>Browse service details, prices, and available timings before you book.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📅</div>
            <h3>Book Appointments</h3>
            <p>Book appointments online at your preferred date and time.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3>Manage Bookings</h3>
            <p>Manage bookings, cancellations, and support all through the platform.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Connect with Salons</h3>
            <p>Connect directly with salon partners through the Trimora platform.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section section-alt" id="how-it-works">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Simple Process</span>
          <h2>How Trimora Works</h2>
          <p>Book your salon appointment in four simple steps.</p>
        </div>
        <div class="steps-list">
          <div class="step-item">
            <div class="step-number">1</div>
            <h3>Browse Salons</h3>
            <p>Explore salons and services available on Trimora in your area.</p>
          </div>
          <div class="step-item">
            <div class="step-number">2</div>
            <h3>Select Your Slot</h3>
            <p>Choose your preferred date, time, and service that suits you best.</p>
          </div>
          <div class="step-item">
            <div class="step-number">3</div>
            <h3>Make Payment</h3>
            <p>Complete payment securely through our trusted online payment methods.</p>
          </div>
          <div class="step-item">
            <div class="step-number">4</div>
            <h3>Enjoy Your Service</h3>
            <p>Visit the selected salon at your booked time and enjoy the service.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Platform Note -->
    <section class="section" id="trust">
      <div class="container">
        <div class="trust-banner">
          <h2>A Technology Platform You Can Trust</h2>
          <p>Trimora is a technology platform that facilitates discovery, booking, and payment for salon services. The actual salon services are provided by independent salon partners who work with us to deliver quality experiences.</p>
          <a href="/contact" class="btn btn-primary" data-link>Get in Touch</a>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section section-alt" id="contact-cta">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">We're Here to Help</span>
          <h2>Need Support?</h2>
          <p>For booking, payment, refund, or any support-related queries, reach out to us anytime.</p>
        </div>
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-card-icon">📧</div>
            <h3>Email Us</h3>
            <p><a href="mailto:${c.supportEmail}">${c.supportEmail}</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">📞</div>
            <h3>Call Us</h3>
            <p><a href="tel:${c.supportPhone}">${c.supportPhone}</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">📍</div>
            <h3>Our Address</h3>
            <p>${c.businessAddress}</p>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}


// ===== ABOUT PAGE =====

function renderAboutPage() {
  const c = C();
  return `
  <main>
    <section class="about-hero">
      <div class="container">
        <h1>About Trimora</h1>
        <p>Trimora is a salon discovery and appointment booking platform designed to simplify how customers find and book salon services.</p>
      </div>
    </section>

    <section class="section">
      <div class="container" style="max-width: 800px;">
        <p style="font-size: 1.0625rem; line-height: 1.8;">Our goal is to make salon bookings more transparent, accessible, and convenient for both customers and salon partners. Through Trimora, customers can explore salons, review services and pricing, select available slots, and manage bookings in one place.</p>

        <h2 style="margin-top: var(--space-2xl); margin-bottom: var(--space-lg);">What Trimora Does</h2>
        <div class="features-grid" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <div class="feature-card">
            <div class="feature-icon">📍</div>
            <h3>Discover Nearby Salons</h3>
            <p>Helps customers discover salons in their area easily.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Browse Services & Pricing</h3>
            <p>Lets users browse services, pricing, and availability before booking.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Digital Booking</h3>
            <p>Enables appointment booking through a modern digital platform.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3>Full Support</h3>
            <p>Supports booking management, support communication, and payment workflows.</p>
          </div>
        </div>

        <h2 style="margin-top: var(--space-2xl); margin-bottom: var(--space-md);">Business Model</h2>
        <p style="font-size: 1.0625rem; line-height: 1.8;">Trimora is a technology platform. The services displayed on the platform are offered by independent salon partners. Trimora facilitates discovery, bookings, communication, and payment support through its website and mobile application.</p>

        <h2 style="margin-top: var(--space-2xl); margin-bottom: var(--space-md);">Service Regions</h2>
        <p style="font-size: 1.0625rem; line-height: 1.8;">Trimora may operate city by city based on salon partner availability.</p>

        <div style="margin-top: var(--space-2xl); padding: var(--space-xl); background: var(--color-primary-glow); border-radius: var(--radius-lg);">
          <h3 style="margin-bottom: var(--space-md);">Contact Information</h3>
          <p style="margin-bottom: var(--space-xs);"><strong>Email:</strong> <a href="mailto:${c.supportEmail}">${c.supportEmail}</a></p>
          <p style="margin-bottom: var(--space-xs);"><strong>Phone:</strong> <a href="tel:${c.supportPhone}">${c.supportPhone}</a></p>
          <p style="margin-bottom: var(--space-xs);"><strong>Address:</strong> ${c.businessAddress}</p>
          <p style="margin-bottom: var(--space-xs);"><strong>App:</strong> <a href="https://play.google.com/store/apps/details?id=com.app.trimora&hl=en_IN" target="_blank" rel="noopener noreferrer">Download on Google Play</a></p>
          <p style="margin-bottom: 0; margin-top: var(--space-md); font-size: 0.875rem;">Trimora is operated by ${c.legalBusinessName}, ${c.cityState}. <a href="https://www.linkedin.com/company/trimora-technologies" target="_blank" rel="noopener noreferrer">Visit Trimora Technologies on LinkedIn</a>.</p>
        </div>
      </div>
    </section>
  </main>`;
}


// ===== CONTACT PAGE =====

function renderContactPage() {
  const c = C();
  return `
  <main>
    <section class="contact-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>If you need help with a booking, payment, cancellation, refund, salon issue, or account-related problem, please contact us using the details below.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-card-icon">📧</div>
            <h3>Customer Support Email</h3>
            <p><a href="mailto:${c.supportEmail}">${c.supportEmail}</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">📞</div>
            <h3>Customer Support Phone</h3>
            <p><a href="tel:${c.supportPhone}">${c.supportPhone}</a></p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">🕐</div>
            <h3>Support Hours</h3>
            <p>${c.supportHours}</p>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">📍</div>
            <h3>Business Address</h3>
            <p>${c.legalBusinessName}<br>${c.businessAddress}</p>
          </div>
        </div>

        <div style="max-width: 800px; margin: var(--space-3xl) auto 0;">
          <div style="margin-bottom: var(--space-2xl);">
            <h2 style="margin-bottom: var(--space-sm);">Response Time</h2>
            <p>We aim to respond to all support queries within 1–2 business days.</p>
          </div>

          <div class="support-checklist">
            <h3>What to Include in Your Support Request</h3>
            <p style="margin-bottom: var(--space-md);">To help us resolve your issue quickly, please include:</p>
            <ul>
              <li>Your full name</li>
              <li>Registered phone number or email</li>
              <li>Booking ID, if applicable</li>
              <li>Date of transaction</li>
              <li>Amount paid, if applicable</li>
              <li>Brief description of the issue</li>
            </ul>
          </div>

          <div style="margin-top: var(--space-2xl); padding: var(--space-xl); background: var(--color-primary-glow); border-radius: var(--radius-lg);">
            <h3 style="margin-bottom: var(--space-sm);">Grievance Contact</h3>
            <p style="margin-bottom: 0;">For unresolved complaints or escalations, please write to: <a href="mailto:${c.supportEmail}"><strong>${c.supportEmail}</strong></a></p>
          </div>

          <p style="margin-top: var(--space-xl); text-align: center; font-size: 0.875rem; color: var(--color-text-light);">Trimora is operated by ${c.legalBusinessName}.</p>
        </div>
      </div>
    </section>
  </main>`;
}


// ===== PRIVACY POLICY =====

function renderPrivacyPolicyPage() {
  const c = C();
  return `
  <main class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Privacy Policy</h1>
        <p class="effective-date">Effective Date: ${c.effectiveDate}</p>
      </div>
      <div class="legal-content">
        <p>Trimora respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how Trimora collects, uses, stores, and shares your information when you use our website, mobile application, and related services.</p>

        <h2>1. Who We Are</h2>
        <p>Trimora is operated by ${c.legalBusinessName}, located at ${c.businessAddress}.</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Profile details</li>
          <li>Booking details</li>
          <li>Payment-related information and transaction metadata</li>
          <li>Location information, where you allow access</li>
          <li>Device and app usage information</li>
          <li>Support messages and communication records</li>
          <li>Uploaded images, videos, or verification information submitted through the platform</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Enable salon discovery and appointment bookings</li>
          <li>Process payments and refunds</li>
          <li>Provide customer support</li>
          <li>Communicate about bookings, updates, cancellations, and promotions</li>
          <li>Improve our services, platform stability, and user experience</li>
          <li>Prevent fraud, misuse, and unauthorized activity</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <h2>4. Payments</h2>
        <p>Online payments are processed through third-party payment service providers. We do not store your full card or banking details on our own servers unless required for lawful business operations and handled through authorized service providers.</p>

        <h2>5. Sharing of Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Salon partners for booking fulfillment</li>
          <li>Payment processors</li>
          <li>Hosting, storage, analytics, messaging, and notification providers</li>
          <li>Government authorities or regulators where required by law</li>
          <li>Service providers assisting us in operating the platform</li>
        </ul>
        <p>We do not sell your personal information.</p>

        <h2>6. Data Retention</h2>
        <p>We retain information for as long as necessary to provide our services, resolve disputes, comply with legal obligations, and enforce our agreements.</p>

        <h2>7. Your Choices</h2>
        <p>You may request access to or correction of your personal information by contacting us at <a href="mailto:${c.supportEmail}">${c.supportEmail}</a>. You may also request account deletion, subject to legal, transactional, and operational retention requirements.</p>
        <p><strong>Account Recovery:</strong> If you have deleted your account and wish to recover it or have questions regarding a deleted account, please contact us at <a href="mailto:${c.supportEmail}"><strong>${c.supportEmail}</strong></a>.</p>

        <h2>8. Security</h2>
        <p>We use reasonable technical and organizational measures to protect your information. However, no online platform can guarantee absolute security.</p>

        <h2>9. Third-Party Services</h2>
        <p>Trimora may rely on third-party services such as maps, authentication tools, payment gateways, cloud hosting, and notifications. Their handling of data may be governed by their own policies.</p>

        <h2>10. Children's Privacy</h2>
        <p>Trimora is not intended for children under the age of 18 without lawful guardian supervision, where applicable.</p>

        <h2>11. App Permissions (Android)</h2>
        <p>To provide a full-featured experience, the Trimora Android application may request the following permissions:</p>
        <ul>
          <li><strong>INTERNET</strong>: Needed for API calls and platform communication.</li>
          <li><strong>ACCESS_COARSE_LOCATION & ACCESS_FINE_LOCATION</strong>: Needed to show nearby salons and enable location-based features.</li>
          <li><strong>CAMERA</strong>: Needed for scanning QR codes and capturing images within the app.</li>
          <li><strong>POST_NOTIFICATIONS</strong>: Needed to send push notifications for bookings, updates, and promotions.</li>
          <li><strong>READ_EXTERNAL_STORAGE & WRITE_EXTERNAL_STORAGE</strong>: Legacy storage permissions needed for handling file uploads or saving app-related data.</li>
          <li><strong>RECORD_AUDIO & MODIFY_AUDIO_SETTINGS</strong>: Requested for audio-related features within the platform.</li>
          <li><strong>SYSTEM_ALERT_WINDOW</strong>: Requested for specific overlay features required by app functions.</li>
          <li><strong>VIBRATE</strong>: Used for tactile feedback and notifications.</li>
        </ul>

        <h2>12. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.</p>

        <h2>13. Contact</h2>
        <p>If you have any questions about this Privacy Policy, contact us at:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:${c.supportEmail}">${c.supportEmail}</a><br>
          <strong>Phone:</strong> <a href="tel:${c.supportPhone}">${c.supportPhone}</a><br>
          <strong>Address:</strong> ${c.businessAddress}
        </p>
      </div>
    </div>
  </main>`;
}


// ===== TERMS & CONDITIONS =====

function renderTermsPage() {
  const c = C();
  return `
  <main class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Terms & Conditions</h1>
        <p class="effective-date">Effective Date: ${c.effectiveDate}</p>
      </div>
      <div class="legal-content">
        <p>These Terms & Conditions govern your access to and use of Trimora's website, mobile application, and related services. By using Trimora, you agree to these Terms.</p>

        <h2>1. About Trimora</h2>
        <p>Trimora is a technology platform operated by ${c.legalBusinessName}. Trimora enables users to discover salons, view services, make bookings, and complete related payments. Salon services are delivered by independent salon partners.</p>

        <h2>2. Eligibility</h2>
        <p>You may use Trimora only if you are legally capable of entering into a binding agreement under applicable law.</p>

        <h2>3. User Accounts</h2>
        <p>You are responsible for providing accurate and complete information while creating and using your account. You are also responsible for maintaining the confidentiality of your login credentials and account access.</p>

        <h2>4. Bookings</h2>
        <p>When you place a booking through Trimora:</p>
        <ul>
          <li>you agree to provide accurate booking details</li>
          <li>you agree to arrive on time for the appointment</li>
          <li>you understand that the salon partner is responsible for service delivery</li>
          <li>you understand that booking confirmation, acceptance, rescheduling, and cancellation may depend on salon availability and platform rules</li>
        </ul>

        <h2>5. Payments</h2>
        <p>Certain bookings may require advance or full payment. By making a payment on Trimora, you authorize the applicable payment transaction in accordance with the pricing displayed at checkout.</p>

        <h2>6. Cancellations and Refunds</h2>
        <p>Cancellations and refunds are governed by Trimora's <a href="/refund-cancellation-policy" data-link>Cancellation & Refund Policy</a>. By using Trimora, you agree to that policy.</p>

        <h2>7. Salon Partner Responsibility</h2>
        <p>Salon partners are independent service providers. Trimora does not itself perform salon services. While we aim to maintain quality standards, the actual service experience, hygiene, staff conduct, and service outcome remain the responsibility of the salon partner.</p>

        <h2>8. Prohibited Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>misuse the platform</li>
          <li>provide false information</li>
          <li>interfere with bookings or platform operations</li>
          <li>upload unlawful, harmful, or infringing content</li>
          <li>attempt unauthorized access to accounts, systems, or data</li>
        </ul>

        <h2>9. Suspension or Termination</h2>
        <p>We may suspend or terminate access to your account if we believe you have violated these Terms, engaged in fraud, abused the platform, or created legal or operational risk.</p>

        <h2>10. Intellectual Property</h2>
        <p>The Trimora platform, branding, interface, content, and software elements are owned by or licensed to ${c.legalBusinessName}. You may not copy, distribute, or exploit them without authorization.</p>

        <h2>11. Limitation of Liability</h2>
        <p>To the extent permitted by law, Trimora shall not be liable for indirect, incidental, special, or consequential damages arising from your use of the platform. Our role is limited to facilitating the booking and related platform services.</p>

        <h2>12. Indemnity</h2>
        <p>You agree to indemnify and hold harmless Trimora and ${c.legalBusinessName} from claims, liabilities, damages, losses, and costs arising out of your misuse of the platform or violation of these Terms.</p>

        <h2>13. Governing Law</h2>
        <p>These Terms shall be governed by the laws of India. Courts located in ${c.cityState} shall have jurisdiction, subject to applicable law.</p>

        <h2>14. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use of Trimora after such updates constitutes acceptance of the revised Terms.</p>

        <h2>15. Contact</h2>
        <p>For questions regarding these Terms, contact:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:${c.supportEmail}">${c.supportEmail}</a><br>
          <strong>Phone:</strong> <a href="tel:${c.supportPhone}">${c.supportPhone}</a><br>
          <strong>Address:</strong> ${c.businessAddress}
        </p>
      </div>
    </div>
  </main>`;
}


// ===== CANCELLATION & REFUND POLICY =====

function renderRefundCancellationPage() {
  const c = C();
  return `
  <main class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Cancellation & Refund Policy</h1>
        <p class="effective-date">Effective Date: ${c.effectiveDate}</p>
      </div>
      <div class="legal-content">
        <p>This Cancellation & Refund Policy explains the rules applicable to cancellations, refunds, and related payment issues on Trimora.</p>

        <h2>1. General Principle</h2>
        <p>Trimora facilitates booking and payment for salon services listed by independent salon partners. Refund eligibility depends on the booking status, cancellation timing, and the circumstances of the specific transaction.</p>

        <h2>2. Salon Acceptance Window</h2>
        <p>For bookings that require salon confirmation, the salon may have a limited window to accept or decline the request. If the salon does not accept the booking within the applicable confirmation period, the booking may be cancelled automatically and the customer will be eligible for a full refund, subject to payment processing timelines.</p>

        <h2>3. Customer Cancellations</h2>
        <p>If a customer cancels a booking, refund eligibility depends on the time of cancellation and the applicable cancellation rules shown at the time of booking.</p>
        <p>Possible outcomes may include:</p>
        <ul>
          <li>full refund</li>
          <li>partial refund</li>
          <li>no refund</li>
        </ul>
        <p>depending on when the cancellation is made and whether the booking is already locked for fulfillment.</p>

        <h2>4. Salon Rejection or Inability to Fulfill</h2>
        <p>If the salon rejects the booking, fails to confirm within the applicable period, or is unable to provide the booked service, the customer will generally be eligible for a full refund for the affected booking amount, subject to review where necessary.</p>

        <h2>5. No-Show and Late Arrival</h2>
        <p>If a customer does not arrive for the appointment or arrives too late to reasonably receive the service, the booking may be treated as a no-show or late-arrival case, and refund eligibility may be reduced or denied.</p>

        <h2>6. Payment Failure or Duplicate Charge</h2>
        <p>If a payment fails but money is debited, or a duplicate charge occurs, please contact us with the transaction details. Valid duplicate or failed-capture cases will be reviewed and refunded where applicable.</p>

        <h2>7. Refund Timelines</h2>
        <p>Once a refund is approved and initiated, the amount is generally credited back to the original payment source within 5–7 business days. The exact time may vary depending on the bank, card network, UPI provider, or payment processor.</p>

        <h2>8. Non-Refundable Situations</h2>
        <p>Refunds may not be available in cases including but not limited to:</p>
        <ul>
          <li>completed services</li>
          <li>no-show by the customer</li>
          <li>late cancellation outside the permitted cancellation window</li>
          <li>misuse, fraud, or policy abuse</li>
          <li>dissatisfaction claims not supported by reasonable details or evidence, where required</li>
        </ul>

        <h2>9. How to Request Help</h2>
        <p>For refund or cancellation support, contact us with:</p>
        <ul>
          <li>your name</li>
          <li>registered phone number or email</li>
          <li>booking ID</li>
          <li>transaction date</li>
          <li>amount paid</li>
          <li>issue description</li>
        </ul>
        <p>
          <strong>Email:</strong> <a href="mailto:${c.supportEmail}">${c.supportEmail}</a><br>
          <strong>Phone:</strong> <a href="tel:${c.supportPhone}">${c.supportPhone}</a>
        </p>

        <h2>10. Policy Updates</h2>
        <p>We may revise this policy from time to time. The updated version will be posted on this page with a revised effective date.</p>
      </div>
    </div>
  </main>`;
}


// ===== SERVICE FULFILLMENT POLICY =====

function renderServiceFulfillmentPage() {
  const c = C();
  return `
  <main class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Service Fulfillment Policy</h1>
        <p class="effective-date">Effective Date: ${c.effectiveDate}</p>
      </div>
      <div class="legal-content">
        <p>Trimora is a salon booking platform. We do not ship physical goods. This Service Fulfillment Policy explains how services booked through Trimora are delivered.</p>

        <h2>1. No Physical Shipping</h2>
        <p>Trimora does not sell or deliver physical products through shipping. Any payment made through Trimora is for salon-related services, booking facilitation, or related platform services, as applicable.</p>

        <h2>2. Service Delivery</h2>
        <p>Services booked on Trimora are fulfilled in person at the selected salon partner's location on the scheduled date and time, subject to booking confirmation and salon availability.</p>

        <h2>3. Booking Confirmation</h2>
        <p>Some bookings may be confirmed instantly, while others may require salon acceptance. The applicable status of the booking will be shown within the platform.</p>

        <h2>4. Customer Responsibility</h2>
        <p>Customers are responsible for:</p>
        <ul>
          <li>reviewing booking details before payment</li>
          <li>arriving at the salon on time</li>
          <li>carrying any information needed to identify the booking, if applicable</li>
          <li>contacting support if there is any issue related to service fulfillment</li>
        </ul>

        <h2>5. Salon Partner Responsibility</h2>
        <p>Salon partners are responsible for:</p>
        <ul>
          <li>honoring accepted bookings</li>
          <li>delivering the booked services at the scheduled time, subject to operational conditions</li>
          <li>informing customers of any legitimate inability to fulfill the service</li>
        </ul>

        <h2>6. Delays, Rescheduling, and Non-Fulfillment</h2>
        <p>If a salon delays, reschedules, declines, or cannot fulfill a service, the resolution will be governed by the booking details, cancellation rules, and <a href="/refund-cancellation-policy" data-link>Refund Policy</a> applicable on Trimora.</p>

        <h2>7. Contact for Fulfillment Issues</h2>
        <p>If you face an issue with service fulfillment, please contact:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:${c.supportEmail}">${c.supportEmail}</a><br>
          <strong>Phone:</strong> <a href="tel:${c.supportPhone}">${c.supportPhone}</a>
        </p>
        <p style="margin-top: var(--space-md);">Trimora is operated by ${c.legalBusinessName}.</p>
      </div>
    </div>
  </main>`;
}


// ===== ACCOUNT DELETION PAGE =====

function renderAccountDeletionPage() {
  const c = C();
  return `
  <main class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Trimora Account &amp; Data Deletion Request</h1>
        <p class="effective-date">Last updated: 11 May 2026</p>
      </div>
      <div class="legal-content">
        <p>This page explains how you can request deletion of your <strong>Trimora</strong> account and associated data. If you have any questions, contact us at <a href="mailto:support@trimora.in">support@trimora.in</a>.</p>

        <h2>1. How to Request Account Deletion</h2>
        <p>To request deletion of your Trimora account, follow these steps:</p>
        <ol>
          <li><strong>Send an email</strong> from your registered email address to <a href="mailto:support@trimora.in">support@trimora.in</a>.</li>
          <li>Use the subject line: <strong>Account Deletion Request</strong>.</li>
          <li>In the email body, include:
            <ul>
              <li>Your registered phone number</li>
              <li>Your account role (<strong>Customer</strong>, <strong>Barber</strong>, or <strong>Admin</strong>)</li>
            </ul>
          </li>
          <li>We may ask for additional identity verification to prevent unauthorized deletion of your account.</li>
        </ol>

        <h2>2. What Data Is Deleted</h2>
        <p>When your account deletion request is processed, the following data will be permanently deleted:</p>
        <ul>
          <li>Profile information (name, email, phone number, avatar)</li>
          <li>Saved addresses and preferences</li>
          <li>Booking history linked to your account (or anonymized if legally required)</li>
          <li>Chat and support messages linked to your account (if applicable)</li>
          <li>Notification tokens and device session data</li>
        </ul>

        <h2>3. What Data May Be Retained and Why</h2>
        <p>Certain data may be retained after account deletion for legal, regulatory, and operational reasons:</p>
        <ul>
          <li><strong>Payment and transaction records</strong> — retained for legal, tax, fraud-prevention, and audit obligations.</li>
          <li><strong>Security logs</strong> — retained for abuse and fraud prevention.</li>
          <li><strong>Data required by law or a regulator</strong> — retained as mandated by applicable laws and regulations.</li>
        </ul>

        <h2>4. Retention Timelines</h2>
        <p>The following timelines apply after a successful deletion request:</p>
        <div class="timeline-table">
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account deactivation</td>
                <td>Within <strong>7 days</strong> of successful verification</td>
              </tr>
              <tr>
                <td>Permanent deletion / anonymization of eligible data</td>
                <td>Within <strong>30 days</strong></td>
              </tr>
              <tr>
                <td>Legally required retained records</td>
                <td>Up to <strong>90 days</strong>, or longer if required by law</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. Request Deletion of Specific Data Without Deleting Your Account</h2>
        <p>If you do not want to delete your entire account but would like specific data removed, you can request partial data deletion. For example:</p>
        <ul>
          <li>Profile photo removal</li>
          <li>Saved addresses deletion</li>
          <li>Specific preference or session data removal</li>
        </ul>
        <p>To request partial deletion, email <a href="mailto:support@trimora.in">support@trimora.in</a> with details of the specific data you want removed. Use the subject line: <strong>Partial Data Deletion Request</strong>.</p>

        <h2>6. Confirmation and Status Updates</h2>
        <p>After you submit a deletion request, you will receive:</p>
        <ol>
          <li>An <strong>acknowledgment email</strong> confirming receipt of your request.</li>
          <li>A <strong>status update</strong> after identity verification is completed.</li>
          <li>A <strong>completion confirmation</strong> once your account and eligible data have been deleted.</li>
        </ol>

        <h2>7. Contact</h2>
        <p>For any questions about account or data deletion, contact us at:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:support@trimora.in">support@trimora.in</a><br>
          <strong>Phone:</strong> <a href="tel:${c.supportPhone}">${c.supportPhone}</a><br>
          <strong>Address:</strong> ${c.businessAddress}
        </p>

        <p style="margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); font-size: 0.875rem; color: var(--color-text-light);">This page is publicly accessible without login. You can share this URL directly with Google Play Console or any platform requiring an account deletion link.</p>
      </div>
    </div>
  </main>`;
}


// ===== 404 PAGE =====

function render404Page() {
  return `
  <main style="padding: calc(var(--header-height) + var(--space-4xl)) 0 var(--space-4xl); text-align: center; min-height: 60vh; display: flex; align-items: center;">
    <div class="container">
      <h1 style="font-size: 5rem; background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: var(--space-md);">404</h1>
      <h2 style="margin-bottom: var(--space-md);">Page Not Found</h2>
      <p style="font-size: 1.0625rem; margin-bottom: var(--space-xl);">The page you're looking for doesn't exist or has been moved.</p>
      <a href="/" class="btn btn-primary" data-link>Go Home</a>
    </div>
  </main>`;
}


// Export
window.TRIMORA_PAGES = {
  renderHeader,
  renderFooter,
  renderHomePage,
  renderAboutPage,
  renderContactPage,
  renderPrivacyPolicyPage,
  renderTermsPage,
  renderRefundCancellationPage,
  renderServiceFulfillmentPage,
  renderAccountDeletionPage,
  render404Page,
};
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
      play: `<svg class="google-play-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#22C55E" d="M3.8 3.3c-.5.5-.8 1.2-.8 2.2v13c0 1 .3 1.7.8 2.2L13.2 12 3.8 3.3Z"/><path fill="#38BDF8" d="m14.1 12 3.1-2.9-10.7-6.1c-.7-.4-1.3-.4-1.7.3L14.1 12Z"/><path fill="#FBBF24" d="m14.1 12-9.3 8.5c.4.7 1 .7 1.7.3l10.7-6.1-3.1-2.7Z"/><path fill="#F43F5E" d="m17.2 9.1-2.9 2.9 2.9 2.7 3.4-1.9c1.1-.6 1.1-1.2 0-1.8l-3.4-1.9Z"/></svg>`,
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
            <div class="footer-cta-actions"><a class="btn btn-primary" href="mailto:${c.supportEmail}?subject=I%20want%20to%20use%20Trimora">Start with Trimora ${icon("arrow", 18)}</a><a class="btn btn-play btn-small" href="https://play.google.com/store/apps/details?id=com.app.trimora&hl=en_IN" target="_blank" rel="noopener noreferrer"><span class="play-badge-icon">${icon("play", 20)}</span> Google Play</a></div>
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
          <div class="footer-bottom"><p>&copy; ${c.copyrightYear} ${c.legalBusinessName}. All rights reserved.</p><div class="footer-contact-info"><a href="mailto:${c.supportEmail}">${c.supportEmail}</a><a href="tel:${c.supportPhone}">${c.supportPhone}</a><a href="https://www.linkedin.com/company/trimora-technologies" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div>
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
              <div class="hero-actions"><a href="#for-customers" class="btn btn-primary btn-large">Find your next appointment ${icon("arrow", 18)}</a><a href="https://play.google.com/store/apps/details?id=com.app.trimora&hl=en_IN" class="btn btn-play btn-large" target="_blank" rel="noopener noreferrer"><span class="play-badge-icon">${icon("play", 20)}</span> Download on Google Play</a><a href="#for-owners" class="text-link text-link-light">I run a salon ${icon("arrow", 16)}</a></div>
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

    const revealItems = document.querySelectorAll(".signal-grid > div, .section-modern, .how-card, .feature-modern, .story-panel, .interest-form, .faq-list details");
    revealItems.forEach((item, index) => {
      item.classList.add("reveal-on-scroll");
      item.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
    });

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -48px" });
      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const canTilt = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
    if (canTilt) {
      document.querySelectorAll(".feature-modern, .how-card, .story-panel").forEach((card) => {
        card.addEventListener("pointermove", (event) => {
          const rect = card.getBoundingClientRect();
          const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
          const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
          card.style.transform = `translateY(-4px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener("pointerleave", () => { card.style.transform = ""; });
      });
    }
  }

  const original = window.TRIMORA_PAGES || {};
  window.TRIMORA_PAGES = Object.assign({}, original, {
    renderHeader,
    renderFooter,
    renderHomePage,
    initMarketingInteractions,
  });
})();
