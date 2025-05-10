import React, { useState, useEffect } from "react";
import { Calculator, Check, Info, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MacroResults {
  calories: number;
  protein: number;
  fats: number;
  carbs: number;
}

interface WeightRecommendation {
  idealRange: string;
  bmi: number;
  bmiCategory: string;
  toLose?: number;
  toGain?: number;
}

const MacroCalculator: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [results, setResults] = useState<MacroResults | null>(null);
  const [weightRecommendation, setWeightRecommendation] = useState<WeightRecommendation | null>(null);
  const [showResults, setShowResults] = useState(false);

  const sendTelegramNotification = async (userName: string) => {
    try {
      const response = await fetch('/.netlify/functions/telegram-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Notification failed");
      return true;
    } catch (error) {
      console.error("Notification error:", error);
      return false;
    }
  };

  const calculateIdealWeight = (heightCm: number, gender: string): WeightRecommendation => {
    const weightKg = parseFloat(weight);
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    
    let bmiCategory = "";
    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi < 25) bmiCategory = "Normal weight";
    else if (bmi < 30) bmiCategory = "Overweight";
    else bmiCategory = "Obese";
    
    let idealMin, idealMax;
    if (gender === "male") {
      idealMin = 50 + 0.9 * (heightCm - 152);
      idealMax = idealMin + 5;
    } else if (gender === "female") {
      idealMin = 45.5 + 0.9 * (heightCm - 152);
      idealMax = idealMin + 5;
    } else {
      const maleMin = 50 + 0.9 * (heightCm - 152);
      const femaleMin = 45.5 + 0.9 * (heightCm - 152);
      idealMin = (maleMin + femaleMin) / 2;
      idealMax = idealMin + 5;
    }
    
    let toLose, toGain;
    if (weightKg > idealMax) {
      toLose = Math.round(weightKg - idealMax);
    } else if (weightKg < idealMin) {
      toGain = Math.round(idealMin - weightKg);
    }
    
    return {
      idealRange: `${Math.round(idealMin)} - ${Math.round(idealMax)} kg`,
      bmi: parseFloat(bmi.toFixed(1)),
      bmiCategory,
      toLose,
      toGain
    };
  };

  const calculateMacros = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const weightKg = parseFloat(weight);
    const heightCm = parseFloat(height);
    const ageYears = parseFloat(age);
    
    if (!name) {
      toast({
        title: "Name is required",
        description: "Please enter your name to continue.",
        variant: "destructive",
      });
      return;
    }

    await sendTelegramNotification(name);
    const recommendation = calculateIdealWeight(heightCm, gender);
    setWeightRecommendation(recommendation);

    // BMR calculation
    let bmr: number;
    if (gender === "male") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
    } else if (gender === "female") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
    } else {
      const maleBMR = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
      const femaleBMR = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161;
      bmr = (maleBMR + femaleBMR) / 2;
    }
    
    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      very: 1.725
    };
    
    const tdee = bmr * activityMultipliers[activityLevel];
    
    // Goal adjustment
    const goalMultipliers = {
      lose: 0.8,
      maintain: 1,
      gain: 1.15
    };
    
    const calories = Math.round(tdee * goalMultipliers[goal]);
    const protein = Math.round(weightKg * (goal === "gain" ? 2 : goal === "lose" ? 2.2 : 1.8));
    const fats = Math.round((calories * 0.25) / 9);
    const carbs = Math.round((calories - (protein * 4) - (fats * 9)) / 4);
    
    setResults({ calories, protein, fats, carbs });
    toast({
      title: "Macros Calculated!",
      description: "Your personalized macros are ready.",
    });
    setShowResults(true);
  };
  
  return (
    <section id="calculator" className="py-12 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-center">
            Macro <span className="gym-gradient bg-clip-text text-transparent">Calculator</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gym-red rounded-full"></div>
          <p className="mt-4 text-white/70 max-w-2xl text-center text-sm md:text-base px-2">
            Calculate your personalized macro nutrients based on your goals and body composition.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Calculator Form */}
            <div className="glass-card p-4 sm:p-6 animate-fade-in">
              <form onSubmit={calculateMacros}>
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="name" className="block text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="age" className="block text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">Age</label>
                  <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent focus:scale-105 transition-all"
                    placeholder="Age in years"
                    min="15"
                    max="80"
                    required
                  />
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="gender" className="block text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">Gender</label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    required
                  >
                    <option value="male" className="bg-black text-white">Male</option>
                    <option value="female" className="bg-black text-white">Female</option>
                    <option value="other" className="bg-black text-white">Other</option>
                  </select>
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="weight" className="block text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">Weight (kg)</label>
                  <input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    placeholder="Weight in kg"
                    min="30"
                    max="200"
                    step="0.1"
                    required
                  />
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="height" className="block text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">Height (cm)</label>
                  <input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    placeholder="Height in cm"
                    min="120"
                    max="220"
                    required
                  />
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="activity" className="block text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">Activity Level</label>
                  <select
                    id="activity"
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    required
                  >
                    <option value="sedentary" className="bg-black text-white">Sedentary (office job, little exercise)</option>
                    <option value="light" className="bg-black text-white">Light (light exercise 1-3 days/week)</option>
                    <option value="moderate" className="bg-black text-white">Moderate (moderate exercise 3-5 days/week)</option>
                    <option value="very" className="bg-black text-white">Very Active (hard exercise 6-7 days/week)</option>
                  </select>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="goal" className="block text-white/70 mb-1 sm:mb-2 text-sm sm:text-base">Goal</label>
                  <select
                    id="goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    required
                  >
                    <option value="lose" className="bg-black text-white">Lose Fat</option>
                    <option value="maintain" className="bg-black text-white">Maintain</option>
                    <option value="gain" className="bg-black text-white">Gain Muscle</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 text-sm sm:text-base rounded-md bg-gym-red hover:bg-gym-red/90 text-white font-medium flex items-center justify-center transition-all hover:scale-105"
                >
                  <Calculator size={18} className="mr-2" />
                  Calculate Macros
                </button>
              </form>
            </div>
            
            {/* Results Section */}
            <div className={`glass-card p-4 sm:p-6 ${showResults ? "animate-scale-in" : "opacity-70"}`}>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
                Your Daily Macros
              </h3>
              
              {results ? (
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white/10 rounded-lg p-3 sm:p-4 transform transition-all hover:scale-[1.02] hover:shadow-lg">
                    <div className="text-xs sm:text-sm text-white/60 mb-1">Daily Calories</div>
                    <div className="text-2xl sm:text-3xl font-bold gym-gradient bg-clip-text text-transparent">
                      {results.calories}
                      <span className="text-sm sm:text-base font-normal text-white/60 ml-1">kcal</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="bg-white/10 rounded-lg p-2 sm:p-4 transform transition-all hover:scale-[1.03] hover:shadow-lg">
                      <div className="text-xs sm:text-sm text-white/60 mb-1">Protein</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {results.protein}
                        <span className="text-xs sm:text-base font-normal text-white/60 ml-1">g</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-2 sm:p-4 transform transition-all hover:scale-[1.03] hover:shadow-lg">
                      <div className="text-xs sm:text-sm text-white/60 mb-1">Fats</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {results.fats}
                        <span className="text-xs sm:text-base font-normal text-white/60 ml-1">g</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-2 sm:p-4 transform transition-all hover:scale-[1.03] hover:shadow-lg">
                      <div className="text-xs sm:text-sm text-white/60 mb-1">Carbs</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {results.carbs}
                        <span className="text-xs sm:text-base font-normal text-white/60 ml-1">g</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Weight Recommendation Section */}
                  {weightRecommendation && (
                    <div className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10 transform transition-all hover:scale-[1.01]">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <Target size={18} className="text-gym-red mr-2" />
                        <h4 className="font-medium text-sm sm:text-base">Your Weight Analysis</h4>
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/60">Current BMI:</span>
                          <span className="font-medium">
                            {weightRecommendation.bmi} ({weightRecommendation.bmiCategory})
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-white/60">Ideal Weight Range:</span>
                          <span className="font-medium">{weightRecommendation.idealRange}</span>
                        </div>
                        
                        {weightRecommendation.toLose && (
                          <div className="flex justify-between animate-pulse">
                            <span className="text-white/60">Weight to Lose:</span>
                            <span className="font-medium text-gym-red">
                              {weightRecommendation.toLose} kg
                            </span>
                          </div>
                        )}
                        
                        {weightRecommendation.toGain && (
                          <div className="flex justify-between animate-pulse">
                            <span className="text-white/60">Weight to Gain:</span>
                            <span className="font-medium text-green-400">
                              {weightRecommendation.toGain} kg
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-3 sm:mt-4 flex items-start text-xs sm:text-sm text-white/70">
                        <Info size={14} className="text-gym-red/80 mr-2 mt-0.5 flex-shrink-0" />
                        <p>
                          These recommendations are based on standard BMI calculations. 
                          For athletes or muscular individuals, body fat percentage may be a better indicator.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 border border-white/10 rounded-lg bg-white/5 transform transition-all hover:scale-[1.01] text-xs sm:text-sm">
                    <div className="flex items-start">
                      <div className="bg-gym-red/20 p-1 rounded-full">
                        <Check size={14} className="text-gym-red" />
                      </div>
                      <p className="ml-2 text-white/70">
                        These macros are personalized based on your body composition and goals. Adjust as needed based on your progress.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-48 sm:h-64">
                  <Calculator size={36} className="text-white/20 mb-3 sm:mb-4" />
                  <p className="text-white/50 text-center text-sm sm:text-base px-2">
                    Fill out the form and click "Calculate Macros" to see your personalized nutrition plan
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacroCalculator;