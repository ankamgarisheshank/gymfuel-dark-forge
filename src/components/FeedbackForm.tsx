
import React, { useState } from "react";
import { Send, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackForm: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Feedback submitted:", { name, email });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your valuable feedback.",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section 
      id="feedback"
      className="py-20 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Share Your <span className="gym-gradient bg-clip-text text-transparent">Feedback</span>
          </h2>
          <div className="w-20 h-1 bg-gym-red rounded-full"></div>
          <p className="mt-4 text-white/70 max-w-2xl text-center">
            We value your input to continuously improve GymFuel and better serve your fitness journey.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8">
            {isSubmitted ? (
              <div className="py-8 flex flex-col items-center justify-center animate-scale-in">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-white/70 text-center">
                  Your feedback has been submitted successfully. We appreciate your input!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white/70 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white/70 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white/70 mb-2">Feedback Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gym-red/50 focus:border-transparent transition-all h-32 resize-none"
                    placeholder="Share your thoughts, suggestions, or experiences..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 rounded-md bg-gym-red text-white font-medium flex items-center justify-center transition-all ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gym-red/90 hover:scale-105"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Submit Feedback
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
