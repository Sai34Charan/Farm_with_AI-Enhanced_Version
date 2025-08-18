import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavbarProps {
  isLoggedIn: boolean;
  userProfile?: {
    name: string;
    avatar?: string;
  };
}

const Navbar = ({ isLoggedIn, userProfile }: NavbarProps) => {
  const [logoClicked, setLogoClicked] = useState(false);
  const location = useLocation();

  const handleLogoClick = () => {
    if (logoClicked) {
      // Navigate to signup if clicked while enlarged
      if (!isLoggedIn) {
        window.location.href = "/signup";
      }
    } else {
      setLogoClicked(true);
      setTimeout(() => setLogoClicked(false), 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40 shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <div 
            className={`flex items-center space-x-3 cursor-pointer logo-scale ${logoClicked ? 'enlarged' : ''}`}
            onClick={handleLogoClick}
          >
            <img 
              src="src\assets\Farm with AI.png" 
              alt="Farm with AI Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-playfair font-bold text-foreground">
              Farm with AI
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('blogs')}
                className="hover:bg-primary/10 transition-smooth"
              >
                Recent Blogs
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('eshop')}
                className="hover:bg-primary/10 transition-smooth"
              >
                E-Shop
              </Button>
              <Link to="/contact">
                <Button 
                  variant="ghost"
                  className="hover:bg-primary/10 transition-smooth"
                >
                  Contact Us
                </Button>
              </Link>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to="/contact">
                      <Avatar className="cursor-pointer hover:scale-110 transition-smooth border-2 border-primary/20 hover:border-primary/40">
                        <AvatarImage src={userProfile?.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {userProfile?.name?.charAt(0) || "👨‍🌾"}
                        </AvatarFallback>
                      </Avatar>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Free trial</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground transition-smooth">
                  Signup
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-gradient-primary hover:opacity-90 transition-smooth">
                  Login
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = "/login"}
                className="hover:bg-primary/10 transition-smooth"
              >
                Contact Us
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;