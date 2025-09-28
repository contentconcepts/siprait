import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  TrendingUp,
  Shield,
  Brain,
  Cloud,
  Users,
  CheckCircle,
  Target,
  Zap,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    // Software Development Cases
    {
      category: "Software Development",
      icon: Users,
      title: "Healthcare Transformation",
      problem: "Inefficient patient care processes and compliance challenges",
      solution: "Deployed AI-powered analytics platform with on-prem setup",
      outcome: "30% improved efficiency and enhanced compliance",
      industry: "Healthcare",
      duration: "6 months",
      team: "12 developers",
      technologies: ["AI/ML", "Cloud Infrastructure", "Data Analytics"]
    },
    {
      category: "Software Development",
      icon: Globe,
      title: "E-Commerce Personalization",
      problem: "Low customer engagement and conversion rates",
      solution: "Built AI-enhanced shopping platform with ODC support",
      outcome: "25% increase in sales through personalized experiences",
      industry: "E-Commerce",
      duration: "4 months",
      team: "8 developers",
      technologies: ["AI/ML", "React", "Node.js", "MongoDB"]
    },
    // Applied AI Cases
    {
      category: "Applied AI Services",
      icon: Brain,
      title: "Manufacturing Process Optimization",
      problem: "Manual quality control processes causing delays and errors",
      solution: "Implemented computer vision AI for automated quality inspection",
      outcome: "40% reduction in inspection time and 95% accuracy improvement",
      industry: "Manufacturing",
      duration: "3 months",
      team: "6 AI specialists",
      technologies: ["Computer Vision", "Python", "TensorFlow", "Edge Computing"]
    },
    {
      category: "Applied AI Services",
      icon: TrendingUp,
      title: "Supply Chain Intelligence",
      problem: "Inventory management inefficiencies and demand forecasting challenges",
      solution: "Deployed predictive analytics AI system for demand forecasting",
      outcome: "35% reduction in inventory costs and 20% improvement in forecast accuracy",
      industry: "Logistics",
      duration: "5 months",
      team: "10 data scientists",
      technologies: ["Machine Learning", "Time Series Analysis", "Python", "AWS"]
    },
    // Cybersecurity Cases
    {
      category: "Cybersecurity",
      icon: Shield,
      title: "Financial Institution Security",
      problem: "High risk of cyber attacks and regulatory compliance requirements",
      solution: "Implemented comprehensive AI-driven security framework with threat detection",
      outcome: "99.9% threat detection accuracy and zero security breaches",
      industry: "Financial Services",
      duration: "8 months",
      team: "15 security experts",
      technologies: ["AI Security", "SIEM", "Threat Intelligence", "Compliance"]
    },
    {
      category: "Cybersecurity",
      icon: Target,
      title: "Healthcare Data Protection",
      problem: "HIPAA compliance challenges and patient data security concerns",
      solution: "Deployed AI-powered data protection and compliance monitoring system",
      outcome: "100% HIPAA compliance and 50% reduction in security incidents",
      industry: "Healthcare",
      duration: "6 months",
      team: "12 security specialists",
      technologies: ["Data Encryption", "AI Monitoring", "Compliance Automation", "Zero Trust"]
    },
    // Cloud & Infrastructure Cases
    {
      category: "Cloud & Infrastructure",
      icon: Cloud,
      title: "Enterprise Cloud Migration",
      problem: "Legacy on-premises infrastructure limiting scalability and performance",
      solution: "Migrated entire infrastructure to AWS with AI-powered monitoring",
      outcome: "60% cost reduction and 300% performance improvement",
      industry: "Technology",
      duration: "10 months",
      team: "20 cloud engineers",
      technologies: ["AWS", "Kubernetes", "Docker", "AI Monitoring"]
    },
    {
      category: "Cloud & Infrastructure",
      icon: Zap,
      title: "Global Content Delivery Network",
      problem: "Slow website performance affecting user experience globally",
      solution: "Implemented multi-cloud CDN with AI-driven traffic optimization",
      outcome: "70% faster page load times and 40% reduction in bandwidth costs",
      industry: "Media & Entertainment",
      duration: "4 months",
      team: "8 infrastructure engineers",
      technologies: ["Multi-Cloud", "CDN", "AI Optimization", "Edge Computing"]
    },
    // AI Consulting Cases
    {
      category: "AI Consulting",
      icon: Brain,
      title: "Retail AI Strategy Implementation",
      problem: "Unclear AI roadmap and lack of data-driven decision making",
      solution: "Developed comprehensive AI strategy with customer analytics and inventory optimization",
      outcome: "25% increase in revenue and 30% improvement in inventory turnover",
      industry: "Retail",
      duration: "12 months",
      team: "8 AI consultants",
      technologies: ["AI Strategy", "Customer Analytics", "Predictive Modeling", "Business Intelligence"]
    },
    {
      category: "AI Consulting",
      icon: TrendingUp,
      title: "Banking Digital Transformation",
      problem: "Traditional banking processes and customer experience challenges",
      solution: "Created AI-powered customer service and fraud detection systems",
      outcome: "50% improvement in customer satisfaction and 90% fraud detection accuracy",
      industry: "Banking",
      duration: "18 months",
      team: "15 AI consultants",
      technologies: ["AI Strategy", "NLP", "Fraud Detection", "Customer Analytics"]
    }
  ];

  const categories = [
    "Software Development",
    "Applied AI Services", 
    "Cybersecurity",
    "Cloud & Infrastructure",
    "AI Consulting"
  ];

  const stats = [
    { label: "Projects Completed", value: "200+", icon: CheckCircle },
    { label: "Industries Served", value: "15+", icon: Globe },
    { label: "Client Satisfaction", value: "98%", icon: TrendingUp },
    { label: "Average ROI", value: "250%", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
              Case Studies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Real Results Across{" "}
              <span className="text-primary-light">Domains and Technologies</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover how SipraHub drives measurable success with tailored solutions across 
              industries and technologies. See the impact of our AI-powered innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/blog">
                  Download Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              SipraHub drives measurable success with tailored solutions!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {study.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {study.industry}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <study.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <span className="w-2 h-2 bg-destructive rounded-full mr-2"></span>
                        Problem
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
                        Outcome
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.outcome}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Duration</span>
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Team Size</span>
                      <span>{study.team}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {study.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored solutions 
              for unique business challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Healthcare", "Financial Services", "Manufacturing", "Retail", 
              "Logistics", "Technology", "Education", "Government", 
              "Energy", "Media", "Real Estate", "Automotive"
            ].map((industry, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm text-foreground">{industry}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join the growing list of successful businesses that have transformed 
            their operations with SipraHub's AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="glass" className="text-lg font-semibold" asChild>
              <Link to="/contact">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;