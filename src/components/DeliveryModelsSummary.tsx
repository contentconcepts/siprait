import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const items = [
  {
    icon: Building2,
    title: "On‑Premise Delivery",
    desc: "Dedicated experts embedded in your environment for secure, seamless collaboration.",
  },
  {
    icon: Globe,
    title: "Offshore Development Centers",
    desc: "Transparent, cost‑effective teams with the ability to scale as needs evolve.",
  },
  {
    icon: Clock,
    title: "Managed Delivery",
    desc: "End‑to‑end ownership with quality, timelines, and outcomes guaranteed.",
  },
];

const DeliveryModelsSummary = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Flexible <span className="text-primary">Delivery Models</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose how you want to build: on‑premise, via offshore ODCs, or with fully managed delivery. We tailor engagement to your goals, budget, and timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
              <CardContent className="p-8">
                <div className="p-4 rounded-lg bg-muted w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services/software-delivery-models">Explore Delivery Models</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryModelsSummary;


