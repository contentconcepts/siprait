import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/siprahub-logo.jpg";

const Footer = () => {
  const services = [
    { name: "Software Development", href: "/services/software-development" },
    { name: "Applied AI Services", href: "/services/applied-ai-services" },
    { name: "AI Consulting Services", href: "/services/ai-consulting" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "Cloud & Infrastructure", href: "/services/cloud-infra" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: '#5B5B5B' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src={logo} alt="SipraHub" className="h-10 brightness-0 invert" />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your trusted partner for AI-driven digital transformation, 
              delivering innovative solutions that drive measurable business growth.
            </p>
            <div className="flex space-x-4">
              <Button variant="glass" size="icon" className="w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 shadow-lg">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 shadow-lg">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="w-12 h-12 bg-white/20 hover:bg-white/30 border border-white/30 shadow-lg">
                <Github className="h-5 w-5" />
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
            <Button variant="glass" size="lg" className="mt-6 w-full text-lg font-semibold px-6 py-3 bg-white/20 hover:bg-white/30 border border-white/30 shadow-lg" asChild>
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