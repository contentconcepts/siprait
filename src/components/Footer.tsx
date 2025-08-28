import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "AI Consulting", href: "/services/ai-consulting" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "IT Staffing", href: "/services/it-staffing" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SH</span>
              </div>
              <span className="text-xl font-bold">SipraHub</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner for AI-driven digital transformation, 
              delivering innovative solutions that drive measurable business growth.
            </p>
            <div className="flex space-x-4">
              <Button variant="glass" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="glass" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="text-white/80 hover:text-white transition-smooth text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-white/80 hover:text-white transition-smooth text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/60" />
                <span className="text-white/80 text-sm">info@siprahub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80 text-sm">+1-800-SIPRAHUB</span>
              </div>
            </div>
            <Button variant="glass" className="mt-6 w-full" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 SipraHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/60 hover:text-white/80 text-sm transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white/80 text-sm transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;