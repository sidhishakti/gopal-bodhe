// File: assets/js/nav.js

// ====== NAVIGATION / MOBILE MENU ======

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("primary-nav");

  // If this page doesn't have the expected nav, do nothing
  if (!toggleButton || !navLinks) return;

  const mobileQuery = window.matchMedia("(max-width: 768px)");

  const applyInitialState = () => {
    if (mobileQuery.matches) {
      // On mobile: start collapsed
      navLinks.classList.add("nav-links--collapsed");
      toggleButton.setAttribute("aria-expanded", "false");
    } else {
      // On desktop: menu is always visible and toggle is hidden via CSS
      navLinks.classList.remove("nav-links--collapsed");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  };

  // Initial state
  applyInitialState();

  // React to viewport changes (e.g. rotate device, resize browser)
  if (typeof mobileQuery.addEventListener === "function") {
    mobileQuery.addEventListener("change", applyInitialState);
  } else if (typeof mobileQuery.addListener === "function") {
    // Fallback for older browsers
    mobileQuery.addListener(applyInitialState);
  }

  // Toggle menu visibility on click
  toggleButton.addEventListener("click", () => {
    const isCollapsed = navLinks.classList.toggle("nav-links--collapsed");
    const isExpanded = !isCollapsed;
    toggleButton.setAttribute("aria-expanded", String(isExpanded));
  });
});
