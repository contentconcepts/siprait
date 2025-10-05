import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Target, TrendingUp, BarChart3, Lightbulb, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import missionImage from "@/assets/mission-vision.jpg";

const AppliedAI = () => {
  const capabilities = [
    {
      icon: Search,
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI roadmap tailored to your business needs and objectives.",
      technologies: ["Business Process Analysis", "Data Assessment", "Competitive Intelligence", "Opportunity Mapping"]
    },
    {
      icon: Target,
      title: "AI App Development",
      description: "Build tailored AI solutions and algorithms designed for your unique challenges.",
      technologies: ["Strategic Planning", "Implementation Roadmaps", "Resource Planning", "Success Metrics"]
    },
    {
      icon: TrendingUp,
      title: "AI Integration Services",
      description: "Seamlessly integrate AI into existing systems and workflows without disruption.",
      technologies: ["Cost-Benefit Analysis", "ROI Modeling", "Performance Forecasting", "Value Assessment"]
    },
    {
      icon: BarChart3,
      title: "AI-Powered Automation",
      description: "Automate repetitive tasks and processes with intelligent AI that learns over time.",
      technologies: ["Strategic Planning", "Market Analysis", "Technology Selection", "Implementation Planning"]
    },
    {
      icon: Lightbulb,
      title: "Data Analysis & Insights",
      description: "Extract insights using advanced analytics and visualization tools.",
      technologies: ["Technology Trends", "Innovation Assessment", "Competitive Analysis", "Future Planning"]
    },
    {
      icon: Users,
      title: "AI Training & Education",
      description: "Empower teams through customized training programs and workshops.",
      technologies: ["Change Strategy", "Training Programs", "Organizational Design", "Culture Transformation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${missionImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/40 font-semibold">
              AI Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              AI Services{" "}
              <span className="text-orange-300">Advanced AI Development & Implementation</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Build custom AI solutions with our expert development team. From machine learning models to real-time AI systems, we deliver cutting-edge AI technologies that solve complex business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Start Your AI Project
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Predictive Analytics"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI Development <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI development services covering machine learning, deep learning, computer vision, and real-time AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-8">
                  <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-bounce w-fit mb-6">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {capability.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5B5B5B' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your AI transformation with SipraHub today! Get in touch with our experts for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Schedule Consultation
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>contact@siprahub.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppliedAI;