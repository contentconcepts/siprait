import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Globe, 
  Settings, 
  Zap, 
  Code, 
  RefreshCw, 
  Building, 
  Users, 
  Shield, 
  UserCheck,
  ArrowRight
} from "lucide-react";

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Applied AI Services",
      description: "Unlock strategic growth with tailored AI strategies and analytics.",
      color: "text-accent"
    },
    {
      icon: Globe,
      title: "Domain-Agnostic Expertise",
      description: "Tailored solutions for industries like Healthcare, Fintech, and more.",
      color: "text-primary"
    },
    {
      icon: Settings,
      title: "Technology-Agnostic Solutions",
      description: "Best tools for secure, scalable, and future-proof systems.",
      color: "text-success"
    },
    {
      icon: Zap,
      title: "AI-Driven Digital Transformation",
      description: "Automate processes and enhance customer experiences with AI.",
      color: "text-accent"
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Build and maintain innovative, user-friendly applications.",
      color: "text-primary"
    },
    {
      icon: RefreshCw,
      title: "Legacy Systems Modernization",
      description: "Re-engineer systems for scalability and efficiency.",
      color: "text-success"
    },
    {
      icon: Building,
      title: "On-Prem Setup & Management",
      description: "Secure, high-performing in-house teams for enterprise needs.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "ODC Setup & Management",
      description: "Cost-efficient, transparent offshore centers for scalability.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with AI-driven threat detection and security.",
      color: "text-success"
    },
    {
      icon: UserCheck,
      title: "IT Staffing",
      description: "Scale with specialized talent in AI, cloud, and emerging technologies.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">SipraHub</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions 
            designed to drive innovation, efficiency, and scalable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-bounce`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Learn More About Our Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-foreground">
            Transform your business with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
              SipraHub's AI-powered innovation!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;