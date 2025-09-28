import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Driven Digital
            <span className="block bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
              Transformation
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
              Domain Expertise, and Scalable Operations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Empowering businesses with innovative solutions, robust processes, and scalable 
            on-prem and offshore delivery models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="glass" size="xl" className="group" asChild>
              <Link to="/services">
                Explore Our Expertise →
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline-white" size="xl" asChild>
              <Link to="/contact">
                <Play className="mr-2 h-5 w-5" />
                Get a Free Consultation →
              </Link>
            </Button>
          </div>

          {/* Stats */}
          
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent-light/50 rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent/60 rounded-full animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>
    </section>;
};
export default HeroSection;