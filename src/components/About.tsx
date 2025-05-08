
import React from "react";
import { Dumbbell } from "lucide-react";

const About: React.FC = () => {
  return (
    <section 
      id="about"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95"></div>
      
      {/* Animated gym-themed background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 text-white/5 animate-float">
          <Dumbbell size={140} />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-white/5 animate-float" style={{ animationDelay: "2s" }}>
          <Dumbbell size={120} />
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-pulse-light">
            Abouttttttt <span className="gym-gradient bg-clip-text text-transparent">GymFuel</span>
          </h2>
          <div className="w-20 h-1 bg-gym-red rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-white/90 mb-6 animate-fade-in">
            At GymFuel, we believe in science-based nutrition and training to help you achieve your fitness goals. 
            Founded by fitness enthusiasts and nutrition experts, our mission is to provide you with tools and resources
            that simplify the journey to your dream physique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card p-6 transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gym-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gym-red">
                  <path d="M2 12h2l4-8v16l-4-8H2z"></path>
                  <path d="M9.5 12H22"></path>
                  <path d="M13 12v-3"></path>
                  <path d="M13 15v-3"></path>
                  <path d="M16 12v-3"></path>
                  <path d="M16 15v-3"></path>
                  <path d="M19 12v-3"></path>
                  <path d="M19 15v-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Precise Nutrition</h3>
              <p className="text-white/70">Scientifically calculated macros tailored to your goals and body composition.</p>
            </div>
            
            <div className="glass-card p-6 transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gym-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gym-yellow">
                  <path d="M3 17h2c.6 0 1-.4 1-1v-1c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v1c0 .6.4 1 1 1h2"></path>
                  <path d="M6 10h12c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1z"></path>
                  <path d="M7 10V5c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Budget-Friendly</h3>
              <p className="text-white/70">Affordable meal options and recipes that don't compromise on quality or taste.</p>
            </div>
            
            <div className="glass-card p-6 transform transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-gym-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gym-red">
                  <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Goal-Oriented</h3>
              <p className="text-white/70">Custom-tailored plans whether you're cutting, maintaining, or building muscle.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
