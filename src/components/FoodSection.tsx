
import React, { useState } from "react";

interface FoodItem {
  name: string;
  emoji: string;
  ingredients: string[];
  recipe: string;
  cost: string;
}

const foodItems: FoodItem[] = [
  {
    name: "Boiled Eggs",
    emoji: "🥚",
    ingredients: ["Eggs", "Salt"],
    recipe: "Boil for 10 minutes, peel and enjoy.",
    cost: "₹5–6 per egg"
  },
  {
    name: "Grilled Chicken Breast",
    emoji: "🍗",
    ingredients: ["Chicken breast", "Salt", "Pepper", "Basic spices"],
    recipe: "Marinate with spices and grill for 15-20 minutes until fully cooked.",
    cost: "₹100 for 200g"
  },
  {
    name: "Paneer Bhurji",
    emoji: "🧀",
    ingredients: ["Paneer", "Onion", "Tomato", "Green chili", "Garam masala"],
    recipe: "Crumble paneer and cook with sautéed onions, tomatoes and masala.",
    cost: "₹40 per serving"
  },
  {
    name: "Peanut Salad",
    emoji: "🥜",
    ingredients: ["Roasted peanuts", "Onion", "Tomato", "Lemon juice", "Coriander"],
    recipe: "Mix ingredients together and serve with a dash of lemon juice.",
    cost: "₹10–15 per serving"
  },
  {
    name: "Curd with Sprouts",
    emoji: "🥣",
    ingredients: ["Curd (yogurt)", "Green moong sprouts", "Salt", "Cumin powder"],
    recipe: "Mix sprouts with curd, add spices to taste, and chill before serving.",
    cost: "₹15–20 per serving"
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
    <section 
      id="food"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Budget-Friendly <span className="gym-gradient bg-clip-text text-transparent">Indian Gym Foods</span>
          </h2>
          <div className="w-20 h-1 bg-gym-red rounded-full"></div>
          <p className="mt-4 text-white/70 max-w-2xl text-center">
            Affordable and protein-rich food options that won't break the bank.
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
                    <h3 className="text-xl font-medium">{item.name}</h3>
                  </div>
                  <div className="text-white/70">{item.cost}</div>
                </div>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedItem === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-5 pt-0 border-t border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <span className="font-medium">Pro Tip:</span> Prep multiple servings at once to save time during the week.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Why These Foods?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="flex items-start">
                <div className="bg-gym-red/20 p-2 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gym-red">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Protein-Rich</h4>
                  <p className="text-sm text-white/70">
                    All options provide quality protein to support muscle growth and recovery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gym-yellow/20 p-2 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gym-yellow">
                    <path d="M12 2v9"></path>
                    <path d="m9 5 3-3 3 3"></path>
                    <path d="M3 10h18"></path>
                    <path d="M18 21V10"></path>
                    <path d="M21 21H3"></path>
                    <path d="m15 14-3 3-3-3"></path>
                    <path d="M12 17v-7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Affordable</h4>
                  <p className="text-sm text-white/70">
                    Budget-friendly options that provide excellent nutritional value.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gym-red/20 p-2 rounded-full mr-3 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gym-red">
                    <path d="M17 8c0 4-6 9-6 9s-6-5-6-9a6 6 0 0 1 12 0Z"></path>
                    <circle cx="11" cy="8" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Easy to Prepare</h4>
                  <p className="text-sm text-white/70">
                    Simple recipes that require minimal time and cooking expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
