import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Consulting Services", href: "/services/ai-consulting" },
    { name: "IT Staffing", href: "/services/it-staffing" },
    { name: "Cyber Security", href: "/services/cybersecurity" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SH</span>
            </div>
            <span className="text-xl font-bold text-foreground">SipraHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-smooth ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-smooth ${
                isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/industries"
              className={`text-sm font-medium transition-smooth ${
                isActive("/industries") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Industries
            </Link>
            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-smooth ${
                isActive("/case-studies") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-smooth ${
                isActive("/blog") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Blog
            </Link>
            
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              to="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            <div className="space-y-2">
              <span className="block text-sm font-medium text-muted-foreground">Services</span>
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="block pl-4 text-sm text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/industries"
              className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </Link>
            <Link
              to="/case-studies"
              className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className="block text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            
            <Button variant="hero" size="sm" className="w-full" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Free Consultation
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;