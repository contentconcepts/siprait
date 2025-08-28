import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Users, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications, legacy modernization, and scalable solutions with AI integration.",
      features: [
        "Domain-Agnostic Expertise",
        "Technology-Agnostic Solutions",
        "On-Prem & ODC Setup"
      ],
      link: "/services/software-development"
    },
    {
      icon: Brain,
      title: "Applied AI Services",
      description: "Custom AI development, machine learning models, and intelligent automation solutions.",
      features: [
        "Custom ML Models",
        "Computer Vision & NLP",
        "Real-time AI Systems"
      ],
      link: "/services/applied-ai-services"
    },
    {
      icon: Users,
      title: "IT Staffing",
      description: "Flexible staffing models with specialized talent in AI, cloud, and emerging technologies.",
      features: [
        "Contract & Permanent Solutions",
        "AI & Cloud Expertise",
        "Global Delivery Models"
      ],
      link: "/services/it-staffing"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "AI-enhanced threat detection, vulnerability assessments, and comprehensive security solutions.",
      features: [
        "AI-Driven Security Assessment",
        "Penetration Testing & VAPT",
        "24/7 SOC Monitoring"
      ],
      link: "/services/cybersecurity"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Core Offerings: Comprehensive{" "}
            <span className="text-primary">AI-Powered Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Drive growth with SipraHub's tailored, AI-enhanced services designed 
            to transform your business operations and accelerate innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-white transition-smooth">
                  <Link to={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;