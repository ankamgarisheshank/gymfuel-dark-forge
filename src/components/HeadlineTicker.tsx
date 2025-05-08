
import React from "react";

const headlines = [
  "🏋️ Push Your Limits Daily with GymFuel",
  "💪 Macros. Mindset. Muscle.",
  "🔥 Track Your Goals, Fuel Your Gains",
  "🥗 Nutrition Made Simple For Maximum Results",
  "⚡ Transform Your Body, Energize Your Life"
];

const HeadlineTicker: React.FC = () => {
  return (
    <section 
      id="ticker" 
      className="bg-gym-red/10 py-3 border-y border-white/10 overflow-hidden"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[...headlines, ...headlines].map((headline, index) => (
          <div 
            key={index} 
            className="inline-block mx-8 text-white/90 font-medium"
          >
            {headline}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadlineTicker;
