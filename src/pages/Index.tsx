
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeadlineTicker from "@/components/HeadlineTicker";
import About from "@/components/About";
import MacroCalculator from "@/components/MacroCalculator";
import FoodSection from "@/components/FoodSection";
import FeedbackForm from "@/components/FeedbackForm";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <Hero />
      <HeadlineTicker />
      <About />
      <MacroCalculator />
      <FoodSection />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default Index;
