/* ==========================================================================
   recipe-detail.js
   Page-specific logic for recipe-detail.html: reads the ?slug= query param,
   finds the matching recipe in the global RECIPES array, and renders its
   full detail view plus a short "related recipes" strip. Loaded only on
   recipe-detail.html.
   ========================================================================== */

(function () {
  "use strict";

  function initRecipeDetail() {
    var container = document.getElementById("recipe-detail-root");
    if (!container || typeof RECIPES === "undefined") return;

    var notFoundState = document.getElementById("recipe-not-found");
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("slug");

    var recipe = RECIPES.find(function (r) {
      return r.slug === slug;
    });

    if (!recipe) {
      container.classList.add("hidden");
      if (notFoundState) notFoundState.classList.remove("hidden");
      return;
    }

    document.title = recipe.title + " | What's For Dinner, Ima?";

    setText("recipe-category-badge", recipe.category);
    setText("recipe-title", recipe.title);
    setText("recipe-description", recipe.description);
    setText("recipe-emoji", recipe.emoji);
    setText("recipe-prep-time", recipe.prepTime);
    setText("recipe-cook-time", recipe.cookTime);
    setText("recipe-total-time", recipe.totalTime);
    setText("recipe-servings", recipe.servings);
    setText("recipe-difficulty", recipe.difficulty);

    var tagsEl = document.getElementById("recipe-tags");
    if (tagsEl) {
      tagsEl.innerHTML = recipe.tags
        .map(function (tag) {
          return '<span class="text-xs font-semibold text-brand-700 bg-brand-50 rounded-full px-3 py-1">' + tag + "</span>";
        })
        .join("");
    }

    var ingredientsEl = document.getElementById("recipe-ingredients");
    if (ingredientsEl) {
      ingredientsEl.innerHTML = recipe.ingredients
        .map(function (ingredient) {
          return (
            '<li class="flex items-start gap-3">' +
            '<span class="mt-1 w-2 h-2 rounded-full bg-brand-500 shrink-0" aria-hidden="true"></span>' +
            '<span class="text-slate-700">' + ingredient + "</span>" +
            "</li>"
          );
        })
        .join("");
    }

    var stepsEl = document.getElementById("recipe-steps");
    if (stepsEl) {
      stepsEl.innerHTML = recipe.steps
        .map(function (step, index) {
          return (
            '<li class="flex gap-4">' +
            '<span class="flex items-center justify-center w-9 h-9 rounded-full bg-brand-500 text-white font-bold text-sm shrink-0">' + (index + 1) + "</span>" +
            '<p class="text-slate-700 pt-1.5">' + step + "</p>" +
            "</li>"
          );
        })
        .join("");
    }

    renderRelatedRecipes(recipe);
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function renderRelatedRecipes(currentRecipe) {
    var relatedGrid = document.getElementById("related-recipes-grid");
    if (!relatedGrid) return;

    var related = RECIPES.filter(function (r) {
      return r.category === currentRecipe.category && r.slug !== currentRecipe.slug;
    }).slice(0, 3);

    // Pad with other recipes if there aren't enough in the same category
    if (related.length < 3) {
      var fallback = RECIPES.filter(function (r) {
        return r.slug !== currentRecipe.slug && related.indexOf(r) === -1;
      });
      related = related.concat(fallback.slice(0, 3 - related.length));
    }

    relatedGrid.innerHTML = related
      .map(function (r) {
        return (
          '<a href="recipe-detail.html?slug=' + encodeURIComponent(r.slug) + '" class="group flex flex-col rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">' +
          '<div class="h-32 flex items-center justify-center bg-gradient-to-br from-amber-100 to-brand-100 text-5xl group-hover:scale-105 transition-transform duration-500" aria-hidden="true">' + r.emoji + "</div>" +
          '<div class="p-5">' +
          '<h3 class="font-bold text-slate-900 text-base leading-snug">' + r.title + "</h3>" +
          '<p class="mt-1 text-xs text-slate-500">' + r.totalTime + "</p>" +
          "</div>" +
          "</a>"
        );
      })
      .join("");
  }

  document.addEventListener("DOMContentLoaded", initRecipeDetail);
})();
