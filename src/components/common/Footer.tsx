import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";

interface FooterProps {
  isLoggedIn: boolean;
}

const Footer = ({ isLoggedIn }: FooterProps) => {
  if (!isLoggedIn) {
    return (
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <Link 
            to="/login"
            className="text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
          >
            © 2025 Farm with AI - Team Agri-Hackers
          </Link>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gradient-earth border-t border-border py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-playfair font-semibold text-foreground">
              Developed by Farm with AI - Team Agri Hackers with ❤️
            </h3>
            <p className="text-muted-foreground">
              Thanks for visiting our website!
            </p>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-6">
            {/* Website Designer Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Gopisetty Sai Charan - Web Designer@Farm with AI</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:saicharangopisetty23@gmail.com" className="hover:underline">
                    saicharangopisetty23@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+91 9502996405" className="hover:underline">
                    +91 95029-96405
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                  <Instagram className="h-4 w-4" />
                  <a href="https://instagram.com/Sai34Charan" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @Sai34Charan
                  </a>
                </div>
              </div>
            </div>

            {/* Team Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Farm with AI - Team Agri Hackers</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:farmwithai27@gmail.com" className="hover:underline">
                    farmwithai27@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+91 9502996405" className="hover:underline">
                    +91 95029-96405
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth">
                  <Instagram className="h-4 w-4" />
                  <a href="https://instagram.com/farmwithai27" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @farmwithai27
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;