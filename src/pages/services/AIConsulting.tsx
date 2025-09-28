import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Brain,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Globe,
  Settings,
  BarChart3,
  Lightbulb,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-hero.jpg";

const AIConsulting = () => {
  const capabilities = [
    {
      icon: Search,
      title: "Opportunity Identification",
      description: "Uncover high-impact AI opportunities in your operations through comprehensive analysis of your business processes, data assets, and competitive landscape.",
      technologies: ["Business Process Analysis", "Data Assessment", "Competitive Intelligence", "Opportunity Mapping"]
    },
    {
      icon: Target,
      title: "Strategic Roadmaps",
      description: "Develop AI strategies aligned with your business goals, including implementation timelines, resource allocation, and success metrics.",
      technologies: ["Strategic Planning", "Implementation Roadmaps", "Resource Planning", "Success Metrics"]
    },
    {
      icon: TrendingUp,
      title: "ROI Analysis",
      description: "Prioritize initiatives with AI-driven analytics for maximum returns, providing detailed cost-benefit analysis and projected outcomes.",
      technologies: ["Cost-Benefit Analysis", "ROI Modeling", "Performance Forecasting", "Value Assessment"]
    },
    {
      icon: BarChart3,
      title: "AI Strategy Development",
      description: "Create comprehensive AI strategies that align with your business objectives and market positioning.",
      technologies: ["Strategic Planning", "Market Analysis", "Technology Selection", "Implementation Planning"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Identify emerging AI technologies and trends that can provide competitive advantages for your business.",
      technologies: ["Technology Trends", "Innovation Assessment", "Competitive Analysis", "Future Planning"]
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your organization through AI transformation with change management strategies and training programs.",
      technologies: ["Change Strategy", "Training Programs", "Organizational Design", "Culture Transformation"]
    }
  ];

  const whyChoose = [
    {
      title: "Strategic Expertise",
      description: "Deep understanding of AI technologies and their business applications across industries"
    },
    {
      title: "Proven Methodologies",
      description: "Time-tested frameworks and approaches for successful AI transformation"
    },
    {
      title: "Industry Knowledge",
      description: "Specialized expertise across healthcare, finance, retail, and manufacturing sectors"
    },
    {
      title: "Custom Solutions",
      description: "Tailored strategies that align with your unique business goals and constraints"
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive support from strategy development to implementation and optimization"
    },
    {
      title: "Measurable Results",
      description: "Clear metrics and KPIs to track progress and demonstrate value"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Assessment",
      duration: "2-3 weeks",
      description: "Understanding your AI readiness and identifying opportunities for transformation",
      items: ["Business process analysis", "Technology assessment", "Data readiness evaluation", "Competitive analysis"]
    },
    {
      step: "02",
      title: "Strategy Development",
      duration: "3-4 weeks",
      description: "Creating comprehensive AI strategies aligned with your business objectives",
      items: ["Strategic roadmap creation", "Technology selection", "Implementation planning", "Risk assessment"]
    },
    {
      step: "03",
      title: "ROI Analysis & Prioritization",
      duration: "2-3 weeks",
      description: "Evaluating potential returns and prioritizing initiatives for maximum impact",
      items: ["Cost-benefit analysis", "ROI modeling", "Initiative prioritization", "Resource planning"]
    },
    {
      step: "04",
      title: "Implementation Planning",
      duration: "3-4 weeks",
      description: "Detailed planning for AI implementation with timelines and milestones",
      items: ["Project planning", "Resource allocation", "Timeline creation", "Success metrics"]
    },
    {
      step: "05",
      title: "Ongoing Support",
      duration: "Ongoing",
      description: "Continuous support and optimization throughout your AI transformation journey",
      items: ["Progress monitoring", "Strategy adjustments", "Performance optimization", "Change management"]
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      company: "MedCare Systems",
      challenge: "Developing AI strategy for improving patient outcomes and operational efficiency",
      solution: "Created comprehensive AI roadmap focusing on predictive analytics and automated diagnostics",
      technologies: ["Predictive Analytics", "Machine Learning", "Data Integration", "Clinical Decision Support"],
      quote: "The AI strategy provided clear direction for our digital transformation. We've seen significant improvements in patient care and operational efficiency.",
      metrics: [
        { label: "Patient outcome improvement", value: "35%" },
        { label: "Operational cost reduction", value: "25%" },
        { label: "Diagnostic accuracy increase", value: "40%" },
        { label: "Staff productivity gain", value: "30%" }
      ],
      stats: {
        developmentTime: "12 weeks",
        roi: "280% in first year",
        accuracy: "94% prediction accuracy",
        performance: "3x faster diagnosis"
      }
    },
    {
      industry: "Financial Services",
      company: "FinanceFirst Bank",
      challenge: "Implementing AI-driven risk management and fraud detection strategy",
      solution: "Developed comprehensive AI strategy for enhanced security and customer experience",
      technologies: ["Risk Modeling", "Fraud Detection", "Customer Analytics", "Regulatory Compliance"],
      quote: "The AI consulting approach helped us transform our risk management capabilities while maintaining regulatory compliance.",
      metrics: [
        { label: "Fraud detection improvement", value: "60%" },
        { label: "Risk assessment accuracy", value: "45%" },
        { label: "Customer satisfaction", value: "25%" },
        { label: "Compliance efficiency", value: "50%" }
      ],
      stats: {
        developmentTime: "16 weeks",
        roi: "350% cost savings",
        accuracy: "98% fraud detection",
        performance: "Real-time processing"
      }
    },
    {
      industry: "Manufacturing",
      company: "IndustrialTech Corp",
      challenge: "Creating AI strategy for predictive maintenance and quality control",
      solution: "Designed AI roadmap for IoT integration and predictive analytics in manufacturing",
      technologies: ["Predictive Maintenance", "IoT Integration", "Quality Control", "Supply Chain Optimization"],
      quote: "The AI strategy transformed our manufacturing operations. We now have predictive capabilities that prevent costly downtime.",
      metrics: [
        { label: "Downtime reduction", value: "50%" },
        { label: "Quality improvement", value: "35%" },
        { label: "Maintenance cost savings", value: "40%" },
        { label: "Production efficiency", value: "25%" }
      ],
      stats: {
        developmentTime: "20 weeks",
        roi: "420% ROI achieved",
        accuracy: "96% prediction accuracy",
        performance: "99.5% uptime"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              AI Consulting Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Consulting Services
              <span className="block text-accent-light">Strategic Growth Through AI</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Unlock strategic growth with tailored AI strategies and analytics. Transform your business 
              with data-driven insights and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/blog">
                  Download AI Strategy Guide
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["Strategy Development", "ROI Analysis", "Implementation Planning", "Change Management", "Performance Optimization"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Consulting Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI Consulting <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI consulting services covering the full spectrum of strategic AI transformation and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-8">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth w-fit mb-6">
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

      {/* Why Choose Our AI Consulting */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">AI Consulting</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with proven methodologies to deliver AI strategies that drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Methodology */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Consulting <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven consulting process ensures successful AI transformation from strategy to implementation.
            </p>
          </div>

          <div className="space-y-8">
            {methodology.map((phase, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                        {phase.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-foreground">
                          {phase.title}
                        </h3>
                        <Badge variant="outline" className="w-fit">
                          {phase.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-6">
                        {phase.description}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {phase.items.map((item) => (
                          <div key={item} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Consulting <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world AI consulting projects showcasing our strategic expertise and successful transformations across industries.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <Badge variant="outline" className="mb-4">
                        {study.industry}
                      </Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {study.company}
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground mb-4">{study.challenge}</p>
                        
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground mb-4">{study.solution}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "{study.quote}"
                      </blockquote>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Results & Metrics</h4>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="text-center p-4 rounded-lg bg-primary/5">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {metric.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Consulting Duration:</span> {study.stats.developmentTime}
                        </div>
                        <div>
                          <span className="font-medium">ROI:</span> {study.stats.roi}
                        </div>
                        <div>
                          <span className="font-medium">Accuracy:</span> {study.stats.accuracy}
                        </div>
                        <div>
                          <span className="font-medium">Performance:</span> {study.stats.performance}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies that have accelerated their growth with our AI consulting services. Let's discuss how we can help you achieve your AI transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>+1 (555) 123-4567 | hello@siprahub.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIConsulting;