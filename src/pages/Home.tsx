import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/common/TypingAnimation";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  const handleTypingComplete = () => {
    setShowButton(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Logo and Title */}
          <Link to="/login" className="inline-block">
            <div className="flex flex-col items-center space-y-4 cursor-pointer hover:scale-105 transition-spring">
              <img 
                src="src\assets\Farm with AI.png" 
                alt="Farm with AI Logo" 
                className="h-24 w-24 drop-shadow-lg"
              />
              <h1 className="text-6xl md:text-7xl font-playfair font-bold text-white drop-shadow-lg">
                Farm with AI
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
                Cultivating the Future of Agriculture, Intelligently.
              </p>
            </div>
          </Link>

          {/* Typing Animation */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <TypingAnimation
              text="Hi Folks, welcome to Farm with AI. We are here to revolutionize agriculture by empowering farmers with the tools of tomorrow. Let's grow together."
              onComplete={handleTypingComplete}
              className="text-lg md:text-xl text-white font-medium leading-relaxed"
              speed={50}
            />
          </div>

          {/* Get Started Button */}
          {showButton && (
            <div className="fade-in-up">
              <Link to="/login">
                <Button className="btn-hero relative overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Started</span>
                    <span className="text-xl">🌱</span>
                  </span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;