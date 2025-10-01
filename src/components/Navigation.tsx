import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/siprahub-logo.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const services = [{
    name: "Software Development",
    href: "/services/software-development"
  }, {
    name: "Applied AI Services",
    href: "/services/applied-ai-services"
  }, {
    name: "Cybersecurity",
    href: "/services/cybersecurity"
  }, {
    name: "Cloud & Infrastructure",
    href: "/services/cloud-infra"
  }, {
    name: "Flexible Delivery Models",
    href: "/services/software-delivery-models"
  }];
  return <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center h-24 overflow-hidden">
            <img src={logo} alt="SipraHub" className="w-auto object-contain" style={{ height: '50px' }} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium transition-smooth ${isActive("/") ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Home
            </Link>
            <Link to="/about" className={`text-sm font-medium transition-smooth ${isActive("/about") ? "text-primary" : "text-foreground hover:text-primary"}`}>
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-smooth">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map(service => <DropdownMenuItem key={service.href} asChild>
                    <Link to={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

                    <Link to="/blog" className={`text-sm font-medium transition-smooth ${isActive("/blog") ? "text-primary" : "text-foreground hover:text-primary"}`}>
                      Blog
                    </Link>
                    <Link to="/resources" className={`text-sm font-medium transition-smooth ${isActive("/resources") ? "text-primary" : "text-foreground hover:text-primary"}`}>
                      Resources
                    </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 border border-primary/20">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link to="/" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            
            <div className="space-y-2">
              <span className="block text-sm font-medium text-muted-foreground">Services</span>
              {services.map(service => <Link key={service.href} to={service.href} className="block pl-4 text-sm text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
                  {service.name}
                </Link>)}
            </div>
            <Link to="/blog" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link to="/resources" className="block text-sm font-medium text-foreground hover:text-primary transition-smooth" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
          </div>}
      </div>
    </nav>;
};
export default Navigation;