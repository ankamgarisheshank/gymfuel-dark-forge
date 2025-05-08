import React from "react";
import HeadlineTicker from "./HeadlineTicker";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black">
      <HeadlineTicker />

      <div className="container mx-auto py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          {/* Developer Info Section */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            {/* Image */}
            <img
              src="https://res.cloudinary.com/dnbqgzh4t/image/upload/v1746033325/qds3xba9ww3ni7ir9ohw.jpg" // Replace with the actual image path
              alt="Developer"
              className="w-24 h-24 rounded-full mb-3 object-cover"
            />
            {/* Name and Description */}
            <span className="text-white/70 text-sm text-center">
              This website is developed by <strong>ANKAMGARI SHESHANK GOUD</strong>
            </span>
            <span className="text-white/50 text-xs mt-1 text-center">
              Passionate about building user-friendly and scalable web applications.
            </span>
          </div>

          {/* Links Section */}
          <div className="flex space-x-4">
            {/* GitHub Link */}
            <a
              href=" https://github.com/ankamgarisheshank" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0 1 12 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.16.59.67.49A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/ankamgari-sheshank/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Portfolio Link */}
            <a
              href="http://ankamgarisheshank-profile.netlify.app" // Replace with your portfolio link
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <path d="M12 2l9 4.5-9 4.5-9-4.5L12 2z"></path>
                <path d="M12 22V12"></path>
                <path d="M12 12l9-4.5"></path>
                <path d="M3 7.5l9 4.5"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} GymFuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;