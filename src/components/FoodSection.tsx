import React, { useState } from "react";

interface FoodItem {
  name: string;
  emoji: string;
  ingredients: string[];
  recipe: string;
  cost: string;
  servingSize: string;
  macros: {
    protein: number;
    carbs: number;
    fats: number;
    calories: number;
  };
  category: "Breakfast" | "Lunch" | "Dinner" | "Snack";
}

const foodItems: FoodItem[] = [
  // Breakfast (10 items)
  {
    name: "Boiled Eggs",
    emoji: "🥚",
    ingredients: ["Eggs", "Salt"],
    recipe: "Boil for 10 minutes, peel and enjoy.",
    cost: "₹5–6 per egg",
    servingSize: "1 large egg (50g)",
    macros: { protein: 6.3, carbs: 0.6, fats: 5.3, calories: 78 },
    category: "Breakfast"
  },
  {
    name: "Oats with Milk",
    emoji: "🥣",
    ingredients: ["Oats (40g)", "Milk (200ml)", "Honey (1 tsp)", "Fruits (50g)"],
    recipe: "Cook oats with milk, top with honey and fruits.",
    cost: "₹20–30 per serving",
    servingSize: "1 bowl (approx. 300g)",
    macros: { protein: 12.5, carbs: 52.3, fats: 7.2, calories: 310 },
    category: "Breakfast"
  },
  {
    name: "Protein Shake",
    emoji: "🥤",
    ingredients: ["Milk (250ml)", "Protein powder (1 scoop)", "Banana (1 medium)"],
    recipe: "Blend all ingredients together and serve chilled.",
    cost: "₹50 per serving",
    servingSize: "1 glass (approx. 300ml)",
    macros: { protein: 32.5, carbs: 28.4, fats: 5.8, calories: 295 },
    category: "Breakfast"
  },
  {
    name: "Besan Chilla",
    emoji: "🥞",
    ingredients: ["Besan (gram flour, 50g)", "Onion (30g)", "Spinach (20g)", "Spices", "Oil (1 tsp)"],
    recipe: "Make batter with besan and water, add veggies, cook like pancakes.",
    cost: "₹15 per serving",
    servingSize: "2 chillas (approx. 150g)",
    macros: { protein: 14.2, carbs: 22.5, fats: 6.8, calories: 210 },
    category: "Breakfast"
  },
  {
    name: "Moong Dal Cheela",
    emoji: "🫓",
    ingredients: ["Moong dal (soaked, 50g)", "Green chili", "Ginger", "Hing", "Oil (1 tsp)"],
    recipe: "Grind soaked dal to batter, make thin pancakes on tawa.",
    cost: "₹20 per serving",
    servingSize: "2 cheelas (approx. 120g)",
    macros: { protein: 16.8, carbs: 18.2, fats: 5.5, calories: 195 },
    category: "Breakfast"
  },
  {
    name: "Masala Omelette",
    emoji: "🍳",
    ingredients: ["Eggs (2)", "Onion (30g)", "Tomato (30g)", "Green chili", "Oil (1 tsp)"],
    recipe: "Beat eggs with veggies, cook on pan with little oil.",
    cost: "₹15 per serving",
    servingSize: "1 omelette (approx. 100g)",
    macros: { protein: 12.6, carbs: 3.2, fats: 10.6, calories: 170 },
    category: "Breakfast"
  },
  {
    name: "Egg White Dosa",
    emoji: "🍳",
    ingredients: ["Egg whites (3 eggs)", "Besan (20g)", "Onion (20g chopped)", "Green chili (1 chopped)", "Oil (1 tsp)"],
    recipe: "Whisk egg whites with besan and veggies. Make thin dosa on hot tawa with minimal oil.",
    cost: "₹25 per serving",
    servingSize: "1 large dosa",
    macros: { protein: 21.5, carbs: 8.2, fats: 5.3, calories: 180 },
    category: "Breakfast"
  },
  {
    name: "Masala Oats with Chicken",
    emoji: "🥣",
    ingredients: ["Oats (50g)", "Chicken mince (50g)", "Onion (30g)", "Tomato (30g)", "Garam masala (1/2 tsp)"],
    recipe: "Cook oats with chicken mince and veggies. Spicy and high protein meal.",
    cost: "₹40 per serving",
    servingSize: "1 bowl (300g)",
    macros: { protein: 35.2, carbs: 42.3, fats: 8.5, calories: 380 },
    category: "Breakfast"
  },
  {
    name: "Poha",
    emoji: "🍚",
    ingredients: ["Flattened rice (50g dry)", "Peanuts (20g)", "Onion (30g)", "Turmeric", "Oil (1 tsp)"],
    recipe: "Soak poha, sauté with onions and peanuts, add turmeric and serve.",
    cost: "₹15 per serving",
    servingSize: "1 plate (approx. 200g)",
    macros: { protein: 8.5, carbs: 45.2, fats: 7.8, calories: 280 },
    category: "Breakfast"
  },
  {
    name: "Quinoa Upma",
    emoji: "🍲",
    ingredients: ["Quinoa (50g)", "Vegetables (50g)", "Mustard seeds", "Curry leaves", "Oil (1 tsp)"],
    recipe: "Cook quinoa like upma with vegetables and tempering.",
    cost: "₹35 per serving",
    servingSize: "1 bowl (approx. 200g)",
    macros: { protein: 14.2, carbs: 38.5, fats: 5.8, calories: 260 },
    category: "Breakfast"
  },

  // Lunch (10 items)
  {
    name: "Grilled Chicken Breast",
    emoji: "🍗",
    ingredients: ["Chicken breast (200g)", "Salt", "Pepper", "Basic spices"],
    recipe: "Marinate with spices and grill for 15-20 minutes until fully cooked.",
    cost: "₹100 for 200g",
    servingSize: "200g cooked",
    macros: { protein: 62, carbs: 0, fats: 6.6, calories: 330 },
    category: "Lunch"
  },
  {
    name: "Paneer Bhurji",
    emoji: "🧀",
    ingredients: ["Paneer (100g)", "Onion (50g)", "Tomato (50g)", "Green chili", "Garam masala"],
    recipe: "Crumble paneer and cook with sautéed onions, tomatoes and masala.",
    cost: "₹40 per serving",
    servingSize: "1 medium plate (approx. 200g)",
    macros: { protein: 18.3, carbs: 8.2, fats: 12.5, calories: 215 },
    category: "Lunch"
  },
  {
    name: "Chapati with Dal",
    emoji: "🍛",
    ingredients: ["Wheat flour (2 chapatis)", "Lentils (100g cooked)", "Spices"],
    recipe: "Cook dal and serve with freshly made chapati.",
    cost: "₹20 per serving",
    servingSize: "2 chapatis + 1 bowl dal",
    macros: { protein: 15.6, carbs: 45.2, fats: 6.3, calories: 295 },
    category: "Lunch"
  },
  {
    name: "Soya Chunks Curry",
    emoji: "🍲",
    ingredients: ["Soya chunks (50g dry)", "Onion (50g)", "Tomato (50g)", "Curry spices", "Oil (1 tsp)"],
    recipe: "Soak soya chunks, squeeze water, cook with onion-tomato gravy and spices.",
    cost: "₹25 per serving",
    servingSize: "1 bowl (approx. 200g)",
    macros: { protein: 25.4, carbs: 12.8, fats: 5.2, calories: 210 },
    category: "Lunch"
  },
  {
    name: "Rajma Curry",
    emoji: "🍛",
    ingredients: ["Kidney beans (100g cooked)", "Onion (50g)", "Tomato (50g)", "Rajma masala (1 tbsp)", "Oil (1 tsp)"],
    recipe: "Cook rajma with onion-tomato gravy and spices. Protein-rich vegetarian option.",
    cost: "₹30 per serving",
    servingSize: "1 bowl (250g)",
    macros: { protein: 18.5, carbs: 45.2, fats: 6.5, calories: 310 },
    category: "Lunch"
  },
  {
    name: "Spicy Chicken Salad",
    emoji: "🥗",
    ingredients: ["Grilled chicken (100g)", "Moong sprouts (50g)", "Onion (30g)", "Lemon juice (1 tbsp)", "Chili flakes (1 tsp)"],
    recipe: "Mix all ingredients. High protein post-workout meal with fiber.",
    cost: "₹60 per serving",
    servingSize: "1 bowl (200g)",
    macros: { protein: 42.5, carbs: 15.2, fats: 6.8, calories: 290 },
    category: "Lunch"
  },
  {
    name: "Egg Curry",
    emoji: "🥚🍛",
    ingredients: ["Eggs (2 boiled)", "Onion (50g)", "Tomato (50g)", "Curry spices", "Oil (1 tsp)"],
    recipe: "Make onion-tomato gravy, add boiled eggs and simmer for 5 minutes.",
    cost: "₹25 per serving",
    servingSize: "2 eggs with gravy",
    macros: { protein: 14.2, carbs: 8.5, fats: 12.4, calories: 220 },
    category: "Lunch"
  },
  {
    name: "Tofu Bhurji",
    emoji: "🧈",
    ingredients: ["Tofu (100g)", "Onion (50g)", "Tomato (50g)", "Turmeric", "Oil (1 tsp)"],
    recipe: "Crumble tofu and cook with onions, tomatoes and spices.",
    cost: "₹40 per serving",
    servingSize: "1 plate (approx. 200g)",
    macros: { protein: 18.5, carbs: 8.5, fats: 10.2, calories: 210 },
    category: "Lunch"
  },
  {
    name: "Chicken Keema",
    emoji: "🍗",
    ingredients: ["Chicken mince (150g)", "Onion (50g)", "Tomato (50g)", "Garam masala", "Oil (1 tsp)"],
    recipe: "Cook chicken mince with onions, tomatoes and spices until well done.",
    cost: "₹70 per serving",
    servingSize: "1 plate (approx. 200g)",
    macros: { protein: 45.2, carbs: 8.5, fats: 12.4, calories: 320 },
    category: "Lunch"
  },
  {
    name: "Sprouts Rice",
    emoji: "🍚",
    ingredients: ["Cooked rice (100g)", "Mixed sprouts (100g)", "Peanuts (20g)", "Lemon juice", "Coriander"],
    recipe: "Mix all ingredients together and serve fresh.",
    cost: "₹25 per serving",
    servingSize: "1 plate (approx. 250g)",
    macros: { protein: 18.5, carbs: 55.2, fats: 8.5, calories: 350 },
    category: "Lunch"
  },

  // Dinner (10 items)
  {
    name: "Grilled Fish",
    emoji: "🐟",
    ingredients: ["Fish fillet (200g)", "Lemon", "Garlic", "Salt", "Pepper"],
    recipe: "Marinate fish with spices and grill until cooked.",
    cost: "₹150 for 200g",
    servingSize: "200g cooked",
    macros: { protein: 41.6, carbs: 0, fats: 10.2, calories: 280 },
    category: "Dinner"
  },
  {
    name: "Vegetable Stir Fry",
    emoji: "🥦",
    ingredients: ["Broccoli (100g)", "Carrot (50g)", "Bell peppers (50g)", "Soy sauce"],
    recipe: "Stir fry vegetables with soy sauce and serve hot.",
    cost: "₹30 per serving",
    servingSize: "1 plate (approx. 200g)",
    macros: { protein: 5.8, carbs: 12.3, fats: 2.1, calories: 90 },
    category: "Dinner"
  },
  {
    name: "Chicken Tikka (Baked)",
    emoji: "🍗",
    ingredients: ["Chicken breast (200g)", "Hung curd (50g)", "Tikka masala (2 tbsp)", "Lemon juice (1 tbsp)", "Ginger-garlic paste (1 tsp)"],
    recipe: "Marinate chicken for 2 hours. Bake at 200°C for 20 mins. High protein with minimal oil.",
    cost: "₹90 per serving",
    servingSize: "200g cooked",
    macros: { protein: 58.4, carbs: 4.2, fats: 7.8, calories: 320 },
    category: "Dinner"
  },
  {
    name: "Brown Rice with Kala Chana",
    emoji: "🍚",
    ingredients: ["Brown rice (100g cooked)", "Kala chana (100g cooked)", "Onion-tomato curry", "Ghee (1 tsp)"],
    recipe: "Pressure cook kala chana with spices. Serve with brown rice and ghee.",
    cost: "₹35 per serving",
    servingSize: "1 plate (300g)",
    macros: { protein: 22.8, carbs: 65.4, fats: 8.2, calories: 420 },
    category: "Dinner"
  },
  {
    name: "Mushroom Stir Fry",
    emoji: "🍄",
    ingredients: ["Mushrooms (150g)", "Garlic (10g)", "Soy sauce", "Pepper", "Oil (1 tsp)"],
    recipe: "Stir fry mushrooms with garlic and soy sauce until tender.",
    cost: "₹40 per serving",
    servingSize: "1 plate (approx. 150g)",
    macros: { protein: 12.5, carbs: 8.5, fats: 5.2, calories: 140 },
    category: "Dinner"
  },
  {
    name: "Egg Bhurji",
    emoji: "🍳",
    ingredients: ["Eggs (3)", "Onion (50g)", "Tomato (50g)", "Green chili", "Oil (1 tsp)"],
    recipe: "Scramble eggs with onions, tomatoes and spices.",
    cost: "₹25 per serving",
    servingSize: "1 plate (approx. 200g)",
    macros: { protein: 18.9, carbs: 8.5, fats: 15.9, calories: 250 },
    category: "Dinner"
  },
  {
    name: "Dal Tadka with Roti",
    emoji: "🍛",
    ingredients: ["Yellow dal (100g cooked)", "Ghee (1 tsp)", "Tadka spices", "2 Rotis"],
    recipe: "Prepare dal with tadka and serve with fresh rotis.",
    cost: "₹30 per serving",
    servingSize: "1 bowl dal + 2 rotis",
    macros: { protein: 18.5, carbs: 55.2, fats: 10.5, calories: 380 },
    category: "Dinner"
  },
  {
    name: "Fish Curry",
    emoji: "🐟🍛",
    ingredients: ["Fish (200g)", "Coconut milk (50ml)", "Curry spices", "Oil (1 tsp)"],
    recipe: "Cook fish in coconut milk gravy with spices.",
    cost: "₹120 per serving",
    servingSize: "1 bowl (approx. 250g)",
    macros: { protein: 35.5, carbs: 8.5, fats: 12.5, calories: 290 },
    category: "Dinner"
  },
  {
    name: "Palak Paneer",
    emoji: "🧀",
    ingredients: ["Paneer (100g)", "Spinach (100g)", "Cream (1 tbsp)", "Spices", "Oil (1 tsp)"],
    recipe: "Cook paneer in spinach gravy with spices.",
    cost: "₹50 per serving",
    servingSize: "1 bowl (approx. 200g)",
    macros: { protein: 22.5, carbs: 12.5, fats: 18.5, calories: 290 },
    category: "Dinner"
  },
  {
    name: "Chicken Soup",
    emoji: "🍲",
    ingredients: ["Chicken (150g)", "Vegetables (100g)", "Garlic", "Pepper", "Lemon juice"],
    recipe: "Boil chicken with vegetables, strain and serve hot.",
    cost: "₹60 per serving",
    servingSize: "1 bowl (approx. 300ml)",
    macros: { protein: 35.5, carbs: 8.5, fats: 5.5, calories: 220 },
    category: "Dinner"
  },

  // Snacks (10 items)
  {
    name: "Peanut Salad",
    emoji: "🥜",
    ingredients: ["Roasted peanuts (30g)", "Onion (30g)", "Tomato (50g)", "Lemon juice", "Coriander"],
    recipe: "Mix ingredients together and serve with a dash of lemon juice.",
    cost: "₹10–15 per serving",
    servingSize: "1 small bowl (approx. 100g)",
    macros: { protein: 8.5, carbs: 6.2, fats: 14.1, calories: 180 },
    category: "Snack"
  },
  {
    name: "Curd with Sprouts",
    emoji: "🥣",
    ingredients: ["Curd (yogurt, 100g)", "Green moong sprouts (50g)", "Salt", "Cumin powder"],
    recipe: "Mix sprouts with curd, add spices to taste, and chill before serving.",
    cost: "₹15–20 per serving",
    servingSize: "1 bowl (approx. 150g)",
    macros: { protein: 13.2, carbs: 18.5, fats: 3.8, calories: 160 },
    category: "Snack"
  },
  {
    name: "Sattu Drink",
    emoji: "🥛",
    ingredients: ["Sattu powder (40g)", "Water (250ml)", "Lemon juice", "Roasted cumin powder", "Salt"],
    recipe: "Mix all ingredients well and serve chilled.",
    cost: "₹10 per serving",
    servingSize: "1 glass (300ml)",
    macros: { protein: 12.6, carbs: 15.4, fats: 2.8, calories: 140 },
    category: "Snack"
  },
  {
    name: "Chana Chaat",
    emoji: "🥗",
    ingredients: ["Boiled chana (100g)", "Onion (30g)", "Tomato (50g)", "Chaat masala", "Lemon juice"],
    recipe: "Mix all ingredients together and serve fresh.",
    cost: "₹15 per serving",
    servingSize: "1 bowl (approx. 150g)",
    macros: { protein: 14.8, carbs: 22.5, fats: 3.2, calories: 180 },
    category: "Snack"
  },
  {
    name: "Paneer Sandwich",
    emoji: "🥪",
    ingredients: ["Multigrain bread (2 slices)", "Paneer (50g mashed)", "Capsicum (20g chopped)", "Chaat masala (1/2 tsp)", "Green chutney (1 tbsp)"],
    recipe: "Mix mashed paneer with capsicum and chaat masala. Spread on bread, add chutney, grill until crisp.",
    cost: "₹30 per serving",
    servingSize: "1 sandwich",
    macros: { protein: 18.2, carbs: 32.5, fats: 8.4, calories: 280 },
    category: "Snack"
  },
  {
    name: "Whey Protein Lassi",
    emoji: "🥛",
    ingredients: ["Curd (200g)", "Whey protein (1 scoop)", "Ice cubes", "Cardamom powder (1/4 tsp)"],
    recipe: "Blend all ingredients until smooth. Serve chilled immediately post-workout.",
    cost: "₹50 per serving",
    servingSize: "1 glass (300ml)",
    macros: { protein: 32.8, carbs: 12.4, fats: 3.2, calories: 210 },
    category: "Snack"
  },
  {
    name: "Makhana Salad",
    emoji: "🥗",
    ingredients: ["Roasted makhana (30g)", "Cucumber (50g)", "Pomegranate (30g)", "Lemon juice"],
    recipe: "Mix all ingredients together and serve fresh.",
    cost: "₹25 per serving",
    servingSize: "1 bowl (approx. 100g)",
    macros: { protein: 5.8, carbs: 15.2, fats: 1.5, calories: 95 },
    category: "Snack"
  },
  {
    name: "Sprouts Salad",
    emoji: "🥗",
    ingredients: ["Mixed sprouts (100g)", "Cucumber (50g)", "Tomato (50g)", "Lemon juice", "Chaat masala"],
    recipe: "Mix all ingredients together and serve fresh.",
    cost: "₹15 per serving",
    servingSize: "1 bowl (approx. 150g)",
    macros: { protein: 12.5, carbs: 15.8, fats: 2.5, calories: 140 },
    category: "Snack"
  },
  {
    name: "Roasted Chana",
    emoji: "🥜",
    ingredients: ["Chana (50g dry roasted)", "Salt", "Chili powder"],
    recipe: "Dry roast chana and season with spices.",
    cost: "₹10 per serving",
    servingSize: "50g",
    macros: { protein: 10.5, carbs: 25.2, fats: 2.5, calories: 180 },
    category: "Snack"
  },
  {
    name: "Protein Bars (Homemade)",
    emoji: "🍫",
    ingredients: ["Oats (50g)", "Peanut butter (2 tbsp)", "Whey protein (1 scoop)", "Honey (1 tbsp)"],
    recipe: "Mix all ingredients, press into bars and refrigerate for 2 hours.",
    cost: "₹30 per serving",
    servingSize: "1 bar (approx. 50g)",
    macros: { protein: 18.5, carbs: 25.2, fats: 8.5, calories: 240 },
    category: "Snack"
  }
];

const FoodSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snack"];
  
  const filteredItems = activeCategory === "All" 
    ? foodItems 
    : foodItems.filter(item => item.category === activeCategory);

  return (
    <section id="food" className="py-16 px-4 md:px-12 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Budget-Friendly <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Indian Gym Foods</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 rounded-full"></div>
          <p className="mt-4 text-white/70 max-w-2xl text-center">
            {filteredItems.length} {activeCategory.toLowerCase() === "all" ? "total" : activeCategory.toLowerCase()} food options with detailed macros
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setExpandedItem(null); // Collapse any expanded item when changing category
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-white/80 hover:bg-gray-700"
                }`}
              >
                {category} ({category === "All" ? foodItems.length : foodItems.filter(item => item.category === category).length})
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/70">No items found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`glass-card overflow-hidden transition-all duration-300 ${
                    expandedItem === index ? "md:col-span-2 lg:col-span-3" : ""
                  }`}
                >
                  <div
                    className="p-4 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{item.emoji}</span>
                      <div>
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-xs text-white/60">{item.servingSize}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-white/70 whitespace-nowrap">{item.cost}</div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedItem === index ? "max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 pt-0 border-t border-white/10">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4">
                          <h4 className="text-white/80 font-medium mb-2">Macros:</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-white/70">Protein:</span>
                              <span className="text-white">{item.macros.protein}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/70">Carbs:</span>
                              <span className="text-white">{item.macros.carbs}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/70">Fats:</span>
                              <span className="text-white">{item.macros.fats}g</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/70">Calories:</span>
                              <span className="text-white">{item.macros.calories}kcal</span>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-1/3">
                          <h4 className="text-white/80 font-medium mb-2">Ingredients:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {item.ingredients.map((ingredient, i) => (
                              <li key={i} className="text-white/70 text-sm">{ingredient}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:flex-1">
                          <h4 className="text-white/80 font-medium mb-2">Recipe:</h4>
                          <p className="text-white/70 text-sm">{item.recipe}</p>
                          
                          <div className="mt-4 bg-white/5 p-3 rounded-md">
                            <p className="text-xs text-white/60">
                              <span className="font-medium">Pro Tip:</span> {item.category === "Breakfast" ? 
                              "Great post-workout meal" : 
                              item.category === "Snack" ? 
                              "Perfect for evening protein boost" :
                              "Pairs well with rice or roti for complete nutrition"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;