import { Card, CardContent } from "@/components/ui/card";
import { Heart, Banknote, ShoppingCart, Truck, Film } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "AI-powered patient care, compliance, and analytics platforms."
    },
    {
      icon: Banknote,
      title: "Fintech",
      description: "AI-driven fraud detection, risk analysis, and digital banking solutions."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      description: "Personalized shopping and AI-optimized supply chain management."
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "AI-enhanced routing, inventory, and tracking systems."
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      description: "Recommendation engines and content monetization with AI."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Innovating Across{" "}
            <span className="text-primary">Domains and Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            SipraHub delivers domain-neutral, technology-agnostic results across industries, 
            ensuring tailored solutions that meet your specific sector requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4 group-hover:bg-accent/20 transition-smooth">
                  <industry.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-smooth">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-foreground">
            SipraHub delivers{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              domain-neutral, technology-agnostic results
            </span>
            {" "}across industries!
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;