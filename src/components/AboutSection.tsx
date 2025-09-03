import { Card, CardContent } from "@/components/ui/card";
import { Brain, Globe, Settings, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Brain,
      title: "AI-Driven Innovation",
      description: "Leveraging cutting-edge AI technology to transform your business operations and deliver intelligent solutions that drive measurable growth."
    },
    {
      icon: Globe,
      title: "Domain-Agnostic Expertise",
      description: "Deep expertise across multiple industries with the flexibility to adapt our solutions to your specific business challenges and requirements."
    },
    {
      icon: Settings,
      title: "Technology Neutrality",
      description: "Choosing the best technology stack for your needs rather than being locked into specific platforms, ensuring optimal performance and cost-effectiveness."
    },
    {
      icon: Award,
      title: "Proven Methodologies",
      description: "Rigorous development processes and quality assurance practices that ensure scalable, secure, and future-proof solutions for your business."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with extensive experience in AI, software development, cybersecurity, and IT staffing across diverse industry verticals."
    },
    {
      icon: Clock,
      title: "Rapid Delivery",
      description: "Agile development approach with faster time-to-market, allowing you to capitalize on opportunities and stay ahead of the competition."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About SipraHub: Pioneering{" "}
              <span className="text-primary">AI-Driven Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              SipraHub is your trusted partner for AI-driven digital transformation. 
              We combine cutting-edge technology with deep domain expertise to deliver 
              innovative solutions that drive measurable business growth.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our technology-agnostic approach ensures we always choose the best tools 
              for your specific needs, while our proven methodologies guarantee scalable, 
              secure, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;