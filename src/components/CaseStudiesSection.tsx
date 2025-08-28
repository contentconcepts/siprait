import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: TrendingUp,
      title: "Healthcare Transformation",
      industry: "Healthcare",
      problem: "Inefficient patient care processes and compliance challenges.",
      solution: "Deployed AI-powered analytics platform with on-prem setup.",
      outcome: "30% improved efficiency and enhanced compliance.",
      color: "bg-success/10 text-success"
    },
    {
      icon: Shield,
      title: "Fintech Fraud Detection",
      industry: "Fintech",
      problem: "High risk of financial fraud in digital transactions.",
      solution: "Implemented AI-driven fraud detection using cloud-based tech stack.",
      outcome: "Reduced fraud risks by 40%.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce Personalization",
      industry: "E-Commerce",
      problem: "Low customer engagement and conversion rates.",
      solution: "Built AI-enhanced shopping platform with ODC support.",
      outcome: "25% increase in sales through personalized experiences.",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Real Results Across{" "}
            <span className="text-primary">Domains and Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how SipraHub's tailored AI solutions have delivered measurable 
            success and transformative outcomes for businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${study.color}`}>
                    <study.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {study.industry}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {study.title}
                </h3>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-destructive">Problem: </span>
                    <span className="text-muted-foreground">{study.problem}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Solution: </span>
                    <span className="text-muted-foreground">{study.solution}</span>
                  </div>
                  <div>
                    <span className="font-medium text-success">Outcome: </span>
                    <span className="text-muted-foreground">{study.outcome}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <Button variant="hero" size="lg" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <p className="text-lg font-semibold text-foreground">
            SipraHub drives{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              measurable success
            </span>
            {" "}with tailored solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;