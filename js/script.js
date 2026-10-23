/* ==========================================================================
   script.js
   Global, site-wide behavior shared by every page: mobile nav toggle,
   header scroll state, and footer year injection.
   ========================================================================== */

(function () {
  "use strict";

  /**
   * Mobile burger menu toggle
   */
  function initMobileMenu() {
    const toggleBtn = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const openIcon = document.getElementById("icon-open");
    const closeIcon = document.getElementById("icon-close");

    if (!toggleBtn || !mobileMenu) return;

    toggleBtn.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.contains("open");

      mobileMenu.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(!isOpen));

      if (openIcon && closeIcon) {
        openIcon.classList.toggle("hidden", !isOpen);
        closeIcon.classList.toggle("hidden", isOpen);
      }
    });

    // Close the mobile menu automatically when a nav link is tapped
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
        toggleBtn.setAttribute("aria-expanded", "false");
        if (openIcon && closeIcon) {
          openIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      });
    });
  }

  /**
   * Add a shadow to the header once the user scrolls down
   */
  function initHeaderScrollState() {
    const header = document.getElementById("site-header");
    if (!header) return;

    function updateHeaderState() {
      header.classList.toggle("scrolled", window.scrollY > 10);
    }

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    updateHeaderState();
  }

  /**
   * Inject the current year into the footer copyright line
   */
  function initFooterYear() {
    const yearEl = document.getElementById("current-year");
    if (!yearEl) return;
    yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initHeaderScrollState();
    initFooterYear();
  });
})();
