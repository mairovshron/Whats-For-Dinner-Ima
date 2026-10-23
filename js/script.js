/* ==========================================================================
   script.js
   Global, site-wide behavior for the "What's For Dinner?" landing page:
     1. Mobile navigation (burger) toggle
     2. Scroll-to-top floating action button
     3. Contact form validation + simulated submission with success banner
     4. Smooth anchor scrolling for internal links
     5. Header scroll shadow + footer year (supporting polish)
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. MOBILE NAVIGATION TOGGLE
     ------------------------------------------------------------------------ */
  function initMobileMenu() {
    var toggleBtn = document.getElementById("menu-toggle");
    var mobileMenu = document.getElementById("mobile-menu");
    var openIcon = document.getElementById("icon-open");
    var closeIcon = document.getElementById("icon-close");

    if (!toggleBtn || !mobileMenu) return;

    function closeMenu() {
      mobileMenu.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      if (openIcon && closeIcon) {
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    }

    function openMenu() {
      mobileMenu.classList.add("open");
      toggleBtn.setAttribute("aria-expanded", "true");
      if (openIcon && closeIcon) {
        openIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      }
    }

    toggleBtn.addEventListener("click", function () {
      var isOpen = mobileMenu.classList.contains("open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close the mobile menu automatically whenever a nav link is tapped
    var mobileLinks = mobileMenu.querySelectorAll("a");
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener("click", closeMenu);
    }

    // Close the menu if the user clicks/taps outside of it
    document.addEventListener("click", function (event) {
      var isClickInsideMenu = mobileMenu.contains(event.target);
      var isClickOnToggle = toggleBtn.contains(event.target);
      if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains("open")) {
        closeMenu();
      }
    });

    // Close the menu on Escape for keyboard users
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
        closeMenu();
        toggleBtn.focus();
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. SCROLL-TO-TOP FLOATING ACTION BUTTON
     ------------------------------------------------------------------------ */
  function initScrollToTopButton() {
    var scrollBtn = document.getElementById("scroll-to-top");
    if (!scrollBtn) return;

    var SHOW_AFTER_PX = 300;

    function updateButtonVisibility() {
      var isPastThreshold = window.scrollY > SHOW_AFTER_PX;

      if (isPastThreshold) {
        scrollBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
        scrollBtn.classList.add("opacity-100", "translate-y-0");
      } else {
        scrollBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
        scrollBtn.classList.remove("opacity-100", "translate-y-0");
      }
    }

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", updateButtonVisibility, { passive: true });
    updateButtonVisibility();
  }

  /* ------------------------------------------------------------------------
     3. CONTACT FORM VALIDATION + SIMULATED SUBMISSION
     ------------------------------------------------------------------------ */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var successBanner = document.getElementById("form-success-banner");

    var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var fields = {
      name: {
        input: document.getElementById("name"),
        errorEl: document.getElementById("name-error"),
        validate: function (value) {
          if (value.trim().length === 0) return "Please enter your full name.";
          if (value.trim().length < 2) return "Your name must be at least 2 characters.";
          return "";
        },
      },
      email: {
        input: document.getElementById("email"),
        errorEl: document.getElementById("email-error"),
        validate: function (value) {
          if (value.trim().length === 0) return "Please enter your email address.";
          if (!EMAIL_REGEX.test(value.trim())) return "Please enter a valid email address.";
          return "";
        },
      },
      subject: {
        input: document.getElementById("subject"),
        errorEl: document.getElementById("subject-error"),
        validate: function (value) {
          if (value.trim().length === 0) return "Please enter a subject.";
          return "";
        },
      },
      message: {
        input: document.getElementById("message"),
        errorEl: document.getElementById("message-error"),
        validate: function (value) {
          if (value.trim().length === 0) return "Please enter a message.";
          if (value.trim().length < 10) return "Your message should be at least 10 characters.";
          return "";
        },
      },
    };

    function setFieldError(field, message) {
      if (!field.input || !field.errorEl) return;

      if (message) {
        field.errorEl.textContent = message;
        field.errorEl.classList.remove("hidden");
        field.input.classList.add("border-red-400", "focus:ring-red-400", "focus:border-red-400");
        field.input.classList.remove("border-slate-200", "focus:ring-brand-500", "focus:border-brand-500");
        field.input.setAttribute("aria-invalid", "true");
      } else {
        field.errorEl.textContent = "";
        field.errorEl.classList.add("hidden");
        field.input.classList.remove("border-red-400", "focus:ring-red-400", "focus:border-red-400");
        field.input.classList.add("border-slate-200", "focus:ring-brand-500", "focus:border-brand-500");
        field.input.setAttribute("aria-invalid", "false");
      }
    }

    function validateField(key) {
      var field = fields[key];
      if (!field.input) return true;
      var errorMessage = field.validate(field.input.value);
      setFieldError(field, errorMessage);
      return errorMessage === "";
    }

    function validateAllFields() {
      var isFormValid = true;
      Object.keys(fields).forEach(function (key) {
        var fieldIsValid = validateField(key);
        if (!fieldIsValid) isFormValid = false;
      });
      return isFormValid;
    }

    // Live validation as the user types/blurs, so errors clear in real time
    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      if (!field.input) return;
      field.input.addEventListener("blur", function () {
        validateField(key);
      });
      field.input.addEventListener("input", function () {
        if (!field.errorEl.classList.contains("hidden")) {
          validateField(key);
        }
      });
    });

    function showSuccessBanner() {
      if (!successBanner) return;
      successBanner.classList.remove("hidden");
      successBanner.classList.add("flex");
      successBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });

      // Auto-hide the banner after a few seconds so the form stays tidy
      window.setTimeout(function () {
        successBanner.classList.add("hidden");
        successBanner.classList.remove("flex");
      }, 6000);
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var isValid = validateAllFields();
      if (!isValid) {
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulate a successful submission (no backend wired up yet)
      showSuccessBanner();
      form.reset();

      // Clear any lingering visual error states after reset
      Object.keys(fields).forEach(function (key) {
        setFieldError(fields[key], "");
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. SMOOTH ANCHOR SCROLLING
     ------------------------------------------------------------------------ */
  function initSmoothAnchorScrolling() {
    var header = document.getElementById("site-header");

    document.addEventListener("click", function (event) {
      var link = event.target.closest('a[href^="#"]');
      if (!link) return;

      var targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      var targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();

      var headerOffset = header ? header.offsetHeight : 0;
      var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });

      // Keep the URL hash in sync without triggering a jump
      if (history.pushState) {
        history.pushState(null, "", targetId);
      }
    });
  }

  /* ------------------------------------------------------------------------
     SUPPORTING POLISH: header scroll shadow + footer year
     ------------------------------------------------------------------------ */
  function initHeaderScrollState() {
    var header = document.getElementById("site-header");
    if (!header) return;

    function updateHeaderState() {
      header.classList.toggle("scrolled", window.scrollY > 10);
    }

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    updateHeaderState();
  }

  function initFooterYear() {
    var yearEl = document.getElementById("current-year");
    if (!yearEl) return;
    yearEl.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initScrollToTopButton();
    initContactForm();
    initSmoothAnchorScrolling();
    initHeaderScrollState();
    initFooterYear();
  });
})();
