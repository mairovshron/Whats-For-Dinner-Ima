/* ==========================================================================
   recipes-data.js
   Static recipe "database" for the site. Loaded as a plain script (not via
   fetch()) so the site works identically whether served over HTTP or
   opened directly from disk via file:// — fetch() of local files is
   blocked by CORS in that context, a plain global array is not.

   Consumed by js/recipes.js (library grid + filtering) and
   js/recipe-detail.js (single recipe template).
   ========================================================================== */

var RECIPES = [
  {
    slug: "imas-golden-challah",
    title: "Ima's Golden Challah",
    category: "Shabbat",
    emoji: "🫓",
    prepTime: "20 min",
    cookTime: "30 min",
    totalTime: "2 hr 50 min (incl. rising)",
    servings: "2 loaves",
    difficulty: "Intermediate",
    description: "A soft, pillowy challah with a deep golden crust and just enough sweetness — the one that disappears before the soup even hits the table.",
    tags: ["Bread", "Baking", "Holiday"],
    ingredients: [
      "4 1/2 cups bread flour",
      "1/4 cup sugar, plus 1 tsp for the yeast",
      "2 1/4 tsp active dry yeast",
      "1 1/4 cups warm water",
      "1/3 cup vegetable oil",
      "2 large eggs, plus 1 egg yolk for brushing",
      "1 1/2 tsp salt",
      "2 tbsp honey",
      "Sesame or poppy seeds, for topping"
    ],
    steps: [
      "Dissolve 1 tsp sugar and the yeast in the warm water. Let sit 5-10 minutes until foamy.",
      "In a large bowl, whisk together the flour, remaining sugar, and salt.",
      "Add the yeast mixture, oil, eggs, and honey to the dry ingredients. Mix until a soft dough forms.",
      "Knead for 8-10 minutes, by hand or stand mixer, until smooth and elastic. Cover and let rise 1 hour, or until doubled.",
      "Punch down the dough, divide into two equal pieces, then divide each into 3 or 6 strands and braid.",
      "Place braided loaves on a parchment-lined tray, cover loosely, and let rise another 45 minutes.",
      "Preheat oven to 350°F (175°C). Brush loaves generously with egg yolk and sprinkle with seeds.",
      "Bake 28-32 minutes, until deeply golden and the loaves sound hollow when tapped. Cool before slicing."
    ]
  },
  {
    slug: "classic-shabbat-roast-chicken",
    title: "Classic Shabbat Roast Chicken & Potatoes",
    category: "Shabbat",
    emoji: "🍗",
    prepTime: "15 min",
    cookTime: "1 hr 20 min",
    totalTime: "1 hr 35 min",
    servings: "6",
    difficulty: "Easy",
    description: "One pan, one bird, zero stress. Crisp-skinned roast chicken over potatoes that soak up every drop of garlicky pan drippings.",
    tags: ["Mains", "Holiday", "One-Pan"],
    ingredients: [
      "1 whole chicken (4-5 lbs)",
      "2 lbs baby potatoes, halved",
      "1 whole lemon, halved",
      "6 cloves garlic, smashed",
      "3 tbsp olive oil",
      "1 tbsp paprika",
      "1 tsp onion powder",
      "2 tsp kosher salt, plus more for the potatoes",
      "1 tsp black pepper",
      "A few sprigs fresh thyme or rosemary"
    ],
    steps: [
      "Preheat oven to 425°F (220°C). Pat the chicken fully dry with paper towels.",
      "Toss the potatoes with 1 tbsp olive oil and a generous pinch of salt; scatter in a roasting pan.",
      "Mix the remaining oil, paprika, onion powder, salt, and pepper into a paste and rub all over the chicken, including under the skin.",
      "Stuff the cavity with the lemon halves, garlic, and herbs. Tie the legs if you like a neater presentation.",
      "Place the chicken on top of the potatoes, breast-side up.",
      "Roast 70-80 minutes, until the skin is deeply golden and a thermometer in the thigh reads 165°F (74°C).",
      "Rest 10 minutes before carving. Serve the chicken over the pan potatoes with all the drippings spooned on top."
    ]
  },
  {
    slug: "shakshuka-for-the-family",
    title: "Shakshuka for the Family",
    category: "Quick & Easy",
    emoji: "🍳",
    prepTime: "10 min",
    cookTime: "20 min",
    totalTime: "30 min",
    servings: "4",
    difficulty: "Easy",
    description: "Eggs gently poached in a smoky-sweet tomato and pepper sauce. Breakfast, lunch, or dinner — nobody's checking the clock on this one.",
    tags: ["Vegetarian", "Breakfast-for-Dinner", "One-Pan"],
    ingredients: [
      "3 tbsp olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "4 cloves garlic, minced",
      "1 tbsp tomato paste",
      "1 tsp cumin",
      "1 tsp smoked paprika",
      "1/2 tsp chili flakes (optional)",
      "28 oz crushed tomatoes",
      "Salt and pepper, to taste",
      "6 large eggs",
      "Fresh parsley or cilantro, for topping",
      "Crusty bread or pita, for serving"
    ],
    steps: [
      "Heat the olive oil in a large skillet over medium heat. Add the onion and bell pepper and cook 6-7 minutes until softened.",
      "Stir in the garlic, tomato paste, cumin, paprika, and chili flakes; cook 1 minute until fragrant.",
      "Pour in the crushed tomatoes, season with salt and pepper, and simmer uncovered for 10 minutes until thickened.",
      "Make six small wells in the sauce and crack an egg into each one.",
      "Cover the skillet and cook 6-8 minutes, until the egg whites are set but yolks are still soft.",
      "Top with fresh herbs and serve straight from the skillet with warm bread for scooping."
    ]
  },
  {
    slug: "israeli-couscous-herb-salad",
    title: "Israeli Couscous Salad with Herbs & Lemon",
    category: "Quick & Easy",
    emoji: "🥗",
    prepTime: "15 min",
    cookTime: "10 min",
    totalTime: "25 min",
    servings: "6",
    difficulty: "Easy",
    description: "Toasted pearl couscous tossed with crunchy vegetables, fresh herbs, and a bright lemon dressing. A picnic and potluck favorite.",
    tags: ["Vegetarian", "Side Dish", "Make-Ahead"],
    ingredients: [
      "2 cups Israeli couscous (ptitim)",
      "1 tbsp olive oil, plus 1/4 cup for the dressing",
      "2 1/4 cups water or vegetable broth",
      "1 cucumber, diced small",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, finely diced",
      "1/2 cup fresh parsley, chopped",
      "1/4 cup fresh mint, chopped",
      "Juice of 2 lemons",
      "Salt and pepper, to taste"
    ],
    steps: [
      "Heat 1 tbsp olive oil in a saucepan over medium heat. Add the couscous and toast 2-3 minutes, stirring often, until golden.",
      "Add the water or broth, bring to a boil, then reduce heat and simmer covered for 8-10 minutes until tender. Fluff and let cool.",
      "In a large bowl, combine the cooled couscous with the cucumber, tomatoes, onion, parsley, and mint.",
      "Whisk the lemon juice with the remaining 1/4 cup olive oil, salt, and pepper.",
      "Pour the dressing over the salad and toss well. Chill at least 20 minutes before serving for the best flavor."
    ]
  },
  {
    slug: "sheet-pan-harissa-chicken-ptitim",
    title: "Sheet-Pan Harissa Chicken & Ptitim",
    category: "Quick & Easy",
    emoji: "🌶️",
    prepTime: "15 min",
    cookTime: "30 min",
    totalTime: "45 min",
    servings: "4",
    difficulty: "Easy",
    description: "One pan, one cleanup. Spicy-sweet harissa-glazed chicken thighs roasted right on top of toasted pearl couscous.",
    tags: ["Mains", "One-Pan", "Weeknight"],
    ingredients: [
      "8 boneless chicken thighs",
      "3 tbsp harissa paste",
      "2 tbsp honey",
      "2 tbsp olive oil",
      "2 cups Israeli couscous",
      "2 1/2 cups chicken broth, warmed",
      "1 cup cherry tomatoes",
      "1 lemon, thinly sliced",
      "Salt, to taste",
      "Fresh cilantro, for garnish"
    ],
    steps: [
      "Preheat oven to 425°F (220°C). Whisk the harissa, honey, and 1 tbsp olive oil together and toss with the chicken thighs.",
      "Spread the dry couscous in a large, deep sheet pan or baking dish and season lightly with salt.",
      "Pour the warm broth over the couscous and nestle the chicken thighs on top, skin-side up.",
      "Scatter the cherry tomatoes and lemon slices around the chicken.",
      "Roast 28-32 minutes, until the chicken is cooked through and the couscous has absorbed the broth.",
      "Garnish with fresh cilantro and serve directly from the pan."
    ]
  },
  {
    slug: "grandmas-matzo-ball-soup",
    title: "Grandma's Matzo Ball Soup",
    category: "Comfort Food",
    emoji: "🍲",
    prepTime: "25 min",
    cookTime: "1 hr",
    totalTime: "1 hr 25 min",
    servings: "6",
    difficulty: "Intermediate",
    description: "Golden chicken broth, tender vegetables, and matzo balls that are fluffy all the way through — the soup that fixes everything.",
    tags: ["Soup", "Holiday", "Comfort"],
    ingredients: [
      "For the broth: 1 whole chicken, 2 carrots, 2 celery stalks, 1 onion, 2 bay leaves, salt and pepper, 10 cups water",
      "For the matzo balls: 4 eggs, 1/4 cup oil, 1 cup matzo meal, 1/4 cup broth, 1 tsp salt, 1/2 tsp baking powder"
    ],
    steps: [
      "Place the chicken, carrots, celery, onion, bay leaves, salt, and pepper in a large pot and cover with water.",
      "Bring to a boil, then reduce heat and simmer uncovered for 1 hour, skimming occasionally. Strain and reserve the broth and shredded chicken.",
      "While the broth simmers, whisk the eggs and oil together, then fold in the matzo meal, salt, and baking powder. Stir in the 1/4 cup broth.",
      "Chill the matzo ball mixture in the fridge for at least 20 minutes.",
      "Bring a separate pot of salted water to a gentle boil. Wet your hands and roll the mixture into golf-ball-sized rounds.",
      "Drop the matzo balls into the water, cover, and simmer 30-35 minutes until fluffy and cooked through.",
      "Reheat the strained broth with the shredded chicken and sliced carrots, then ladle over the matzo balls to serve."
    ]
  },
  {
    slug: "moroccan-fish-patties",
    title: "Moroccan-Spiced Fish Patties (Ktzitzot Dagim)",
    category: "Comfort Food",
    emoji: "🐟",
    prepTime: "20 min",
    cookTime: "15 min",
    totalTime: "35 min",
    servings: "4",
    difficulty: "Intermediate",
    description: "Flaky white fish folded with warm spices, fresh herbs, and a crisp golden crust — a Friday-night staple with Moroccan roots.",
    tags: ["Mains", "Fish", "Holiday"],
    ingredients: [
      "1.5 lbs white fish fillets (cod, tilapia, or hake), finely chopped",
      "1 small onion, grated",
      "3 cloves garlic, minced",
      "1/4 cup fresh cilantro, chopped",
      "1/4 cup fresh parsley, chopped",
      "1 egg",
      "1/3 cup breadcrumbs or matzo meal",
      "1 tsp cumin",
      "1 tsp paprika",
      "1/2 tsp turmeric",
      "Salt and pepper, to taste",
      "Oil, for frying"
    ],
    steps: [
      "In a large bowl, combine the chopped fish, onion, garlic, cilantro, and parsley.",
      "Mix in the egg, breadcrumbs, cumin, paprika, turmeric, salt, and pepper until well combined.",
      "Shape the mixture into small patties, about 2-3 tablespoons each.",
      "Heat a thin layer of oil in a skillet over medium heat.",
      "Fry the patties 3-4 minutes per side, until golden brown and cooked through.",
      "Drain on paper towels and serve warm with lemon wedges or amba sauce."
    ]
  },
  {
    slug: "crispy-potato-kugel",
    title: "Crispy Potato Kugel",
    category: "Comfort Food",
    emoji: "🥔",
    prepTime: "20 min",
    cookTime: "1 hr",
    totalTime: "1 hr 20 min",
    servings: "8",
    difficulty: "Easy",
    description: "Shredded potatoes and onion baked into a golden, crackly-edged kugel with a soft, savory center. A side dish that steals the show.",
    tags: ["Side Dish", "Holiday", "Baking"],
    ingredients: [
      "6 large potatoes, peeled",
      "1 large onion",
      "4 large eggs",
      "1/3 cup vegetable oil, plus extra for the pan",
      "1/4 cup matzo meal or flour",
      "1 1/2 tsp salt",
      "1/2 tsp black pepper",
      "1/4 tsp baking powder"
    ],
    steps: [
      "Preheat oven to 400°F (200°C) and generously oil a 9x13-inch baking pan, placing it in the oven to heat.",
      "Grate the potatoes and onion using a food processor or box grater. Squeeze out as much liquid as possible.",
      "In a large bowl, whisk the eggs and oil together, then stir in the matzo meal, salt, pepper, and baking powder.",
      "Fold in the grated potato and onion until evenly coated.",
      "Carefully pour the mixture into the hot, oiled pan — it should sizzle slightly.",
      "Bake 55-65 minutes, until deeply golden and crisp on top.",
      "Let rest 10 minutes before slicing into squares."
    ]
  },
  {
    slug: "classic-israeli-salad",
    title: "Classic Israeli Salad",
    category: "Healthy",
    emoji: "🍅",
    prepTime: "15 min",
    cookTime: "0 min",
    totalTime: "15 min",
    servings: "4",
    difficulty: "Easy",
    description: "Finely diced cucumber, tomato, and onion tossed with lemon and olive oil. Crisp, bright, and on the table at every meal.",
    tags: ["Vegan", "Side Dish", "No-Cook"],
    ingredients: [
      "3 ripe tomatoes, finely diced",
      "2 cucumbers, finely diced",
      "1/2 red onion, finely diced",
      "1/2 red bell pepper, finely diced (optional)",
      "1/4 cup fresh parsley, chopped",
      "Juice of 1 lemon",
      "2 tbsp olive oil",
      "Salt, to taste"
    ],
    steps: [
      "Dice the tomatoes, cucumbers, onion, and bell pepper as finely and evenly as you can — this is the key to the texture.",
      "Combine all the vegetables in a bowl with the chopped parsley.",
      "Dress with lemon juice, olive oil, and salt just before serving so the vegetables stay crisp.",
      "Toss well and serve alongside almost anything."
    ]
  },
  {
    slug: "tahini-lemon-roasted-carrots",
    title: "Tahini-Lemon Roasted Carrots",
    category: "Healthy",
    emoji: "🥕",
    prepTime: "10 min",
    cookTime: "25 min",
    totalTime: "35 min",
    servings: "4",
    difficulty: "Easy",
    description: "Sweet roasted carrots finished with a creamy tahini-lemon drizzle and a scatter of herbs. Simple enough for a weeknight, pretty enough for guests.",
    tags: ["Vegan", "Side Dish", "Gluten-Free"],
    ingredients: [
      "2 lbs carrots, peeled and halved lengthwise",
      "2 tbsp olive oil",
      "1 tsp cumin",
      "Salt and pepper, to taste",
      "3 tbsp tahini",
      "2 tbsp lemon juice",
      "2-3 tbsp water, to thin",
      "1 clove garlic, grated",
      "Fresh parsley and pomegranate seeds, for garnish"
    ],
    steps: [
      "Preheat oven to 425°F (220°C). Toss the carrots with olive oil, cumin, salt, and pepper.",
      "Spread in a single layer on a baking sheet and roast 22-25 minutes, until tender and lightly charred at the edges.",
      "Whisk the tahini, lemon juice, garlic, and water together until smooth and pourable.",
      "Arrange the roasted carrots on a platter and drizzle generously with the tahini sauce.",
      "Garnish with fresh parsley and pomegranate seeds before serving."
    ]
  },
  {
    slug: "imas-chicken-schnitzel",
    title: "Ima's Chicken Schnitzel",
    category: "Kid-Friendly",
    emoji: "🍗",
    prepTime: "20 min",
    cookTime: "15 min",
    totalTime: "35 min",
    servings: "4",
    difficulty: "Easy",
    description: "Thin, golden, impossibly crispy chicken cutlets. The one dinner that gets zero complaints from the kids' table.",
    tags: ["Mains", "Kid-Friendly", "Weeknight"],
    ingredients: [
      "4 boneless, skinless chicken breasts, halved and pounded thin",
      "1 cup flour",
      "3 eggs, beaten",
      "2 cups breadcrumbs or panko",
      "1 tsp garlic powder",
      "1 tsp paprika",
      "Salt and pepper, to taste",
      "Oil, for frying",
      "Lemon wedges, for serving"
    ],
    steps: [
      "Season the flour with salt and pepper and place in a shallow dish. Place the beaten eggs in a second dish.",
      "Mix the breadcrumbs with garlic powder and paprika in a third dish.",
      "Dredge each chicken cutlet in flour, then egg, then breadcrumbs, pressing gently to coat evenly.",
      "Heat about 1/2 inch of oil in a skillet over medium-high heat.",
      "Fry the cutlets 3-4 minutes per side, until deeply golden and cooked through.",
      "Drain on paper towels and serve hot with lemon wedges."
    ]
  },
  {
    slug: "date-sweetened-rice-pudding",
    title: "Date-Sweetened Rice Pudding",
    category: "Dessert",
    emoji: "🍚",
    prepTime: "10 min",
    cookTime: "40 min",
    totalTime: "50 min",
    servings: "6",
    difficulty: "Easy",
    description: "Creamy stovetop rice pudding sweetened naturally with date syrup and warmed with cinnamon. A gentle, not-too-sweet way to end a Friday night.",
    tags: ["Dessert", "Make-Ahead", "Pareve"],
    ingredients: [
      "1 cup short-grain rice",
      "4 cups milk or non-dairy milk",
      "1/3 cup date syrup (silan), plus more for serving",
      "1 cinnamon stick",
      "1/4 tsp salt",
      "1 tsp vanilla extract",
      "Chopped pistachios or cinnamon, for garnish"
    ],
    steps: [
      "Rinse the rice and combine with the milk, cinnamon stick, and salt in a medium saucepan.",
      "Bring to a gentle simmer over medium-low heat, stirring frequently to prevent sticking.",
      "Cook uncovered for 30-35 minutes, stirring often, until the rice is tender and the mixture has thickened.",
      "Remove the cinnamon stick and stir in the date syrup and vanilla extract.",
      "Serve warm or chilled, drizzled with extra date syrup and a sprinkle of pistachios."
    ]
  }
];
