/* ==========================================================================
   recipes.js
   Page-specific logic for recipes.html: renders the recipe grid from the
   global RECIPES array (js/data/recipes-data.js), and wires up live search
   plus category filter buttons. Loaded only on recipes.html.
   ========================================================================== */

(function () {
  "use strict";

  function initRecipeLibrary() {
    var grid = document.getElementById("recipe-grid");
    if (!grid || typeof RECIPES === "undefined") return;

    var searchInput = document.getElementById("recipe-search");
    var filterButtons = document.querySelectorAll(".category-filter-btn");
    var resultsCount = document.getElementById("results-count");
    var emptyState = document.getElementById("empty-state");

    var activeCategory = "All";
    var activeQuery = "";

    // Honor a ?category= query param on arrival (e.g. linked from the homepage)
    var params = new URLSearchParams(window.location.search);
    var requestedCategory = params.get("category");
    if (requestedCategory) {
      activeCategory = requestedCategory;
    }

    function cardTemplate(recipe) {
      return (
        '<article class="group flex flex-col rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">' +
        '<div class="h-44 sm:h-48 flex items-center justify-center bg-gradient-to-br from-amber-100 to-brand-100 text-6xl group-hover:scale-105 transition-transform duration-500" aria-hidden="true">' + recipe.emoji + "</div>" +
        '<div class="flex flex-col flex-1 p-6">' +
        '<div class="flex items-center justify-between mb-2 gap-2">' +
        '<h3 class="font-bold text-slate-900 text-lg leading-snug">' + recipe.title + "</h3>" +
        "</div>" +
        '<span class="inline-block w-max text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-3 py-1 mb-3">' + recipe.category + "</span>" +
        '<p class="text-sm text-slate-600 flex-1">' + recipe.description + "</p>" +
        '<div class="flex items-center gap-4 mt-4 text-xs text-slate-500">' +
        '<span class="flex items-center gap-1">⏱ ' + recipe.totalTime + "</span>" +
        '<span class="flex items-center gap-1">🍽 Serves ' + recipe.servings + "</span>" +
        "</div>" +
        '<a href="recipe-detail.html?slug=' + encodeURIComponent(recipe.slug) + '" class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:gap-2.5 transition-all duration-200">' +
        "View recipe" +
        '<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>' +
        "</a>" +
        "</div>" +
        "</article>"
      );
    }

    function render() {
      var query = activeQuery.trim().toLowerCase();

      var filtered = RECIPES.filter(function (recipe) {
        var matchesCategory = activeCategory === "All" || recipe.category === activeCategory;
        var matchesQuery =
          query.length === 0 ||
          recipe.title.toLowerCase().indexOf(query) !== -1 ||
          recipe.description.toLowerCase().indexOf(query) !== -1 ||
          recipe.tags.join(" ").toLowerCase().indexOf(query) !== -1;
        return matchesCategory && matchesQuery;
      });

      grid.innerHTML = filtered.map(cardTemplate).join("");

      if (resultsCount) {
        resultsCount.textContent = filtered.length + (filtered.length === 1 ? " recipe found" : " recipes found");
      }

      if (emptyState) {
        emptyState.classList.toggle("hidden", filtered.length !== 0);
      }
    }

    function setActiveButton() {
      filterButtons.forEach(function (btn) {
        var isActive = btn.getAttribute("data-category") === activeCategory;
        btn.classList.toggle("bg-brand-500", isActive);
        btn.classList.toggle("text-white", isActive);
        btn.classList.toggle("shadow-sm", isActive);
        btn.classList.toggle("bg-white", !isActive);
        btn.classList.toggle("text-slate-600", !isActive);
        btn.setAttribute("aria-pressed", String(isActive));
      });
    }

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeCategory = btn.getAttribute("data-category");
        setActiveButton();
        render();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function (event) {
        activeQuery = event.target.value;
        render();
      });
    }

    setActiveButton();
    render();
  }

  document.addEventListener("DOMContentLoaded", initRecipeLibrary);
})();
