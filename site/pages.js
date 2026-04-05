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
          <p style="margin-bottom: 0; margin-top: var(--space-md); font-size: 0.875rem;">Trimora is operated by ${c.legalBusinessName}, ${c.cityState}.</p>
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

        <h2>8. Security</h2>
        <p>We use reasonable technical and organizational measures to protect your information. However, no online platform can guarantee absolute security.</p>

        <h2>9. Third-Party Services</h2>
        <p>Trimora may rely on third-party services such as maps, authentication tools, payment gateways, cloud hosting, and notifications. Their handling of data may be governed by their own policies.</p>

        <h2>10. Children's Privacy</h2>
        <p>Trimora is not intended for children under the age of 18 without lawful guardian supervision, where applicable.</p>

        <h2>11. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.</p>

        <h2>12. Contact</h2>
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
  render404Page,
};
