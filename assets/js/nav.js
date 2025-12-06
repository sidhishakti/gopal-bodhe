// File: assets/js/nav.js

// ====== NAVIGATION / MOBILE MENU ======

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("primary-nav");

  // If this page doesn't have the expected nav, do nothing
  if (!toggleButton || !navLinks) return;

  const COLLAPSED_CLASS = "nav-links--collapsed";
  const isMobile = () => window.innerWidth <= 768;

  const closeMenu = () => {
    navLinks.classList.add(COLLAPSED_CLASS);
    toggleButton.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    navLinks.classList.remove(COLLAPSED_CLASS);
    toggleButton.setAttribute("aria-expanded", "true");
  };

  const applyInitialState = () => {
    if (isMobile()) {
      // On mobile: start collapsed, use toggle button
      closeMenu();
    } else {
      // On desktop: always visible, button is basically a no-op
      navLinks.classList.remove(COLLAPSED_CLASS);
      toggleButton.setAttribute("aria-expanded", "false");
    }
  };

  // Initial state
  applyInitialState();

  // Toggle menu on button click (mobile only)
  toggleButton.addEventListener("click", () => {
    if (!isMobile()) return;

    const isCollapsed = navLinks.classList.contains(COLLAPSED_CLASS);
    if (isCollapsed) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Close menu when a link is tapped (mobile)
  navLinks.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.tagName === "A" && isMobile()) {
      closeMenu();
    }
  });

  // Close on Escape key (mobile)
  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape" && isMobile()) {
      closeMenu();
    }
  });

  // Keep things sane on resize
  window.addEventListener("resize", () => {
    applyInitialState();
  });
});
