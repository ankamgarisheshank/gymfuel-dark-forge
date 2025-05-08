
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12 pt-20 pb-10"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gym-red/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gym-yellow/10 rounded-full filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gym-gradient bg-clip-text text-transparent">GYM</span>
          <span className="text-white">FUEL</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
          Transform your physique with our scientifically backed nutrition and training resources
        </p>
        
        <a 
          href="#calculator" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gym-red hover:bg-gym-red/90 text-white font-medium transition-all hover:scale-105 group"
        >
          Start Your Journey
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
        </a>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#ticker" className="text-white/60 hover:text-white">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
