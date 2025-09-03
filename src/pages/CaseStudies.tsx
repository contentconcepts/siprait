import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Bot, Code, Users, Clock, DollarSign } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Finance Corp: Advanced Threat Detection System",
      service: "Cybersecurity",
      serviceColor: "bg-red-500",
      client: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Legacy security systems unable to detect sophisticated cyber threats, resulting in multiple security breaches and compliance issues.",
      solution: "Implemented AI-powered threat detection system with real-time monitoring, automated incident response, and comprehensive security analytics.",
      results: [
        "99.7% threat detection accuracy",
        "80% reduction in security incidents",
        "60% faster incident response time",
        "100% compliance with financial regulations"
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      icon: Shield,
      duration: "6 months",
      teamSize: "8 specialists"
    },
    {
      id: 2,
      title: "RetailMax: AI-Powered Customer Intelligence Platform",
      service: "Applied AI",
      serviceColor: "bg-blue-500", 
      client: "RetailMax",
      industry: "E-commerce",
      challenge: "Difficulty in understanding customer behavior patterns and optimizing personalization across multiple channels.",
      solution: "Developed comprehensive AI platform combining machine learning algorithms for customer segmentation, predictive analytics, and personalized recommendations.",
      results: [
        "45% increase in customer engagement",
        "32% boost in conversion rates",
        "28% improvement in customer retention",
        "$2.3M additional revenue in first year"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      icon: Bot,
      duration: "4 months",
      teamSize: "6 AI specialists"
    },
    {
      id: 3,
      title: "TechStart Solutions: Enterprise Resource Management System",
      service: "Software Development",
      serviceColor: "bg-green-500",
      client: "TechStart Solutions", 
      industry: "Technology",
      challenge: "Fragmented business processes across departments with no centralized system for resource management and workflow optimization.",
      solution: "Built custom ERP system with integrated modules for project management, resource allocation, financial tracking, and automated reporting.",
      results: [
        "70% improvement in operational efficiency",
        "50% reduction in project delivery time",
        "85% decrease in manual data entry",
        "ROI of 320% within 18 months"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      icon: Code,
      duration: "8 months",
      teamSize: "12 developers"
    },
    {
      id: 4,
      title: "MedHealth Network: Specialized IT Talent Acquisition",
      service: "IT Staffing",
      serviceColor: "bg-purple-500",
      client: "MedHealth Network",
      industry: "Healthcare Technology",
      challenge: "Urgent need for specialized healthcare IT professionals for digital transformation initiative with strict compliance requirements.",
      solution: "Comprehensive staffing solution providing pre-vetted healthcare IT specialists with required certifications and domain expertise.",
      results: [
        "100% successful placements",
        "40% reduction in hiring timeline",
        "95% candidate retention rate after 1 year",
        "50% cost savings vs traditional recruitment"
      ],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      icon: Users,
      duration: "3 months",
      teamSize: "4 recruiters"
    },
    {
      id: 5,
      title: "ManufacturePro: IoT Security Framework Implementation", 
      service: "Cybersecurity",
      serviceColor: "bg-red-500",
      client: "ManufacturePro Industries",
      industry: "Manufacturing",
      challenge: "Vulnerable IoT devices and industrial systems exposed to cyber attacks with potential for operational disruption.",
      solution: "Implemented comprehensive IoT security framework with device authentication, network segmentation, and continuous monitoring.",
      results: [
        "Zero security breaches post-implementation",
        "90% improvement in device security posture",
        "75% reduction in false security alerts",
        "Achieved ISO 27001 certification"
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      icon: Shield,
      duration: "5 months", 
      teamSize: "6 security experts"
    },
    {
      id: 6,
      title: "LogiFlow: Intelligent Supply Chain Optimization",
      service: "Applied AI",
      serviceColor: "bg-blue-500",
      client: "LogiFlow Logistics",
      industry: "Supply Chain & Logistics",
      challenge: "Inefficient route planning and inventory management leading to increased costs and delivery delays.",
      solution: "Developed AI-driven optimization platform using machine learning for demand forecasting, route optimization, and inventory management.",
      results: [
        "35% reduction in operational costs",
        "42% improvement in delivery times", 
        "25% decrease in inventory holding costs",
        "98% on-time delivery rate achievement"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      icon: Bot,
      duration: "6 months",
      teamSize: "8 AI engineers"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "150+", label: "Successful Projects" },
    { icon: Users, value: "50+", label: "Enterprise Clients" },
    { icon: Clock, value: "98%", label: "On-Time Delivery" },
    { icon: DollarSign, value: "$25M+", label: "Client ROI Generated" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Success <span className="text-accent-bright">Stories</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Discover how SipraHub has transformed businesses across industries with innovative technology solutions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real projects, real results, real impact on our clients' success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="bg-white border-0 shadow-card hover:shadow-hero transition-smooth group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={`${study.client} case study`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${study.serviceColor} text-white border-0`}>
                      {study.service}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                    <study.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="font-medium">{study.client}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Duration: {study.duration}</span>
                      <span>Team: {study.teamSize}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients who have transformed their businesses with SipraHub's innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;