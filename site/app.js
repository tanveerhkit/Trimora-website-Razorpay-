/**
 * Trimora Website — Client-Side Router & App Initialization
 */
(function () {
  const P = () => window.TRIMORA_PAGES;

  // Route definitions with SEO metadata
  const routes = {
    "/": {
      title: "Trimora | Discover. Book. Groom.",
      description: "Discover local salons and barbers, explore grooming services, and book appointments that fit your day with Trimora.",
      render: () => P().renderHomePage(),
    },
    "/about": {
      title: "About Trimora",
      description: "Learn about Trimora — a salon discovery and appointment booking platform designed to simplify how customers find and book salon services.",
      render: () => P().renderAboutPage(),
    },
    "/contact": {
      title: "Contact Trimora",
      description: "Need help with a booking, payment, cancellation, or refund? Contact Trimora's customer support team.",
      render: () => P().renderContactPage(),
    },
    "/privacy-policy": {
      title: "Privacy Policy | Trimora",
      description: "Read Trimora's Privacy Policy to understand how we collect, use, store, and share your personal information.",
      render: () => P().renderPrivacyPolicyPage(),
    },
    "/terms": {
      title: "Terms & Conditions | Trimora",
      description: "Review Trimora's Terms & Conditions governing your access to and use of our platform and services.",
      render: () => P().renderTermsPage(),
    },
    "/refund-cancellation-policy": {
      title: "Cancellation & Refund Policy | Trimora",
      description: "Understand Trimora's cancellation and refund rules for bookings, payments, and related transactions.",
      render: () => P().renderRefundCancellationPage(),
    },
    "/service-fulfillment-policy": {
      title: "Service Fulfillment Policy | Trimora",
      description: "Learn how services booked through Trimora are delivered. Trimora does not ship physical goods.",
      render: () => P().renderServiceFulfillmentPage(),
    },
    "/account-deletion": {
      title: "Account Deletion – Trimora",
      description: "Request deletion of your Trimora account and data. Learn what data is deleted, what is retained, and the timelines involved.",
      render: () => P().renderAccountDeletionPage(),
    },
  };

  // Navigate to a route
  function navigateTo(path) {
    const route = routes[path];
    const appContent = document.getElementById("app-content");

    // Update document head
    if (route) {
      document.title = route.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", route.description);
    } else {
      document.title = "Page Not Found | Trimora";
    }

    // Render page
    const header = P().renderHeader();
    const content = route ? route.render() : P().render404Page();
    const footer = P().renderFooter();

    appContent.innerHTML = header + content + footer;

    // Scroll to top
    window.scrollTo(0, 0);

    // Re-init interactive elements
    initHeader();
    updateActiveNav(path);
    if (P().initMarketingInteractions) P().initMarketingInteractions();
  }

  // Handle link clicks
  function handleLinkClick(e) {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === window.location.pathname) return;

    history.pushState(null, "", href);
    navigateTo(href);
  }

  // Handle browser back/forward
  window.addEventListener("popstate", () => {
    navigateTo(window.location.pathname);
  });

  // Header scroll effect
  function initHeader() {
    const header = document.getElementById("site-header");
    const menuToggle = document.getElementById("menu-toggle");
    const navMobile = document.getElementById("nav-mobile");
    const menuIcon = document.getElementById("menu-icon");
    const themeToggles = document.querySelectorAll("[data-theme-toggle]");

    // Theme preference: saved choice first, then the user's system preference.
    const savedTheme = localStorage.getItem("trimora-theme");
    const systemTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const currentTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;
    document.documentElement.dataset.theme = currentTheme;

    function updateThemeControls(theme) {
      themeToggles.forEach((toggle) => {
        const isDark = theme === "dark";
        toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
        const icon = toggle.querySelector(".theme-toggle-icon");
        const label = toggle.querySelector(".theme-toggle-label");
        if (icon) icon.textContent = isDark ? "☀" : "☾";
        if (label) label.textContent = isDark ? (toggle.classList.contains("theme-toggle-mobile") ? "Light mode" : "Light") : (toggle.classList.contains("theme-toggle-mobile") ? "Dark mode" : "Dark");
      });
    }

    updateThemeControls(currentTheme);
    themeToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("trimora-theme", nextTheme);
        updateThemeControls(nextTheme);
      });
    });

    // Scroll shadow
    function onScroll() {
      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 10);
      }
    }
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile menu toggle
    if (menuToggle && navMobile) {
      menuToggle.addEventListener("click", () => {
        const isOpen = navMobile.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        // Toggle icon
        if (menuIcon) {
          if (isOpen) {
            menuIcon.innerHTML = `
              <line x1="6" y1="6" x2="18" y2="18"/>
              <line x1="6" y1="18" x2="18" y2="6"/>
            `;
          } else {
            menuIcon.innerHTML = `
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            `;
          }
        }
      });

      // Close mobile nav on link click
      navMobile.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navMobile.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
          if (menuIcon) {
            menuIcon.innerHTML = `
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            `;
          }
        });
      });
    }
  }

  // Highlight active nav link
  function updateActiveNav(path) {
    document.querySelectorAll("[data-link]").forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === path);
    });
  }

  // Init app
  function init() {
    document.addEventListener("click", handleLinkClick);
    navigateTo(window.location.pathname);
  }

  // DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
