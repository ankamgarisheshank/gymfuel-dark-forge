import React, { useState } from "react";

interface FoodItem {
  name: string;
  emoji: string;
  ingredients: string[];
  recipe: string;
  cost: string;
  servingSize: string;
  macros: {
    protein: number; // in grams
    carbs: number; // in grams
    fats: number; // in grams
    calories: number; // in kcal
  };
  category: "Breakfast" | "Lunch" | "Dinner" | "Snack";
}

const foodItems: FoodItem[] = [
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
    name: "Chapati with Dal",
    emoji: "🍛",
    ingredients: ["Wheat flour (2 chapatis)", "Lentils (100g cooked)", "Spices"],
    recipe: "Cook dal and serve with freshly made chapati.",
    cost: "₹20 per serving",
    servingSize: "2 chapatis + 1 bowl dal",
    macros: { protein: 15.6, carbs: 45.2, fats: 6.3, calories: 295 },
    category: "Lunch"
  }
];

const FoodSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <section id="food" className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Budget-Friendly <span className="gym-gradient bg-clip-text text-transparent">Indian Gym Foods</span>
          </h2>
          <div className="w-20 h-1 bg-gym-red rounded-full"></div>
          <p className="mt-4 text-white/70 max-w-2xl text-center">
            Affordable and protein-rich food options with detailed macros
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className={`glass-card overflow-hidden transition-all duration-300 ${
                  expandedItem === index ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className="p-5 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{item.emoji}</span>
                    <div>
                      <h3 className="text-xl font-medium">{item.name}</h3>
                      <p className="text-sm text-white/60">{item.servingSize}</p>
                    </div>
                  </div>
                  <div className="text-white/70">{item.cost}</div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedItem === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
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

                      <div>
                        <h4 className="text-white/80 font-medium mb-2">Ingredients:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {item.ingredients.map((ingredient, i) => (
                            <li key={i} className="text-white/70">{ingredient}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white/80 font-medium mb-2">Recipe:</h4>
                        <p className="text-white/70">{item.recipe}</p>
                      </div>
                    </div>

                    <div className="mt-4 bg-white/5 p-3 rounded-md">
                      <p className="text-sm text-white/60">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;