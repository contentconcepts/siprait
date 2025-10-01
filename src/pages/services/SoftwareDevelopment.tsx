import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Link } from "react-router-dom";
import { Code, RefreshCcw, Wrench, Building, Globe2, CheckCircle, ArrowRight, Settings, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

const SoftwareDevelopment = () => {
  const capabilities = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Transform your vision into reality with custom-built solutions designed specifically for your business needs.",
      technologies: ["Web Applications", "Mobile Apps", "Enterprise Systems", "AI Integration"]
    },
    {
      icon: Building,
      title: "Domain-Specific Solutions",
      description: "Receive bespoke software tailored to the unique challenges and workflows of your industry, including Healthcare, Logistics, and E-commerce.",
      technologies: ["Healthcare", "Logistics", "E-commerce", "Finance"]
    },
    {
      icon: Settings,
      title: "Technology-Optimized Development",
      description: "We engineer high-performance applications that are secure by design, using a modern and optimal technology stack to ensure scalability and reliability.",
      technologies: ["Scalable Architecture", "Secure Coding", "Modern Tech Stack", "Performance Optimization"]
    },
    {
      icon: RefreshCcw,
      title: "Legacy Modernization",
      description: "Revitalize your existing infrastructure with modern technologies like AI, cloud computing, and microservices to unlock new capabilities and improve performance.",
      technologies: ["Cloud Migration", "Microservices", "AI Integration", "System Re-engineering"]
    },
    {
      icon: Wrench,
      title: "On-Premise Delivery",
      description: "Access a dedicated team of experts who work directly within your infrastructure, ensuring maximum security and a seamless integration with your existing environment.",
      technologies: ["On-Site Teams", "Direct Collaboration", "Infrastructure Control", "Custom Solutions"]
    },
    {
      icon: Globe2,
      title: "Offshore Development Centers",
      description: "Benefit from a dedicated offshore team that provides a transparent, efficient, and cost-effective extension of your in-house capabilities.",
      technologies: ["Dedicated Teams", "Cost Optimization", "Scalable Resources", "Full Transparency"]
    }
  ];

  const whyChoose = [
    {
      title: "Domain-Agnostic Expertise",
      description: "Tailored solutions for industries like Healthcare, Fintech, Logistics, and E-commerce with deep domain knowledge"
    },
    {
      title: "Technology-Agnostic Solutions",
      description: "Best tools for secure, scalable, and future-proof systems using optimal technology stacks"
    },
    {
      title: "Flexible Engagement Models",
      description: "Contract, contract-to-hire, and permanent IT solutions to match your specific needs"
    },
    {
      title: "Global Talent Access",
      description: "Offshore, nearshore, and onshore teams for maximum scalability and cost-effectiveness"
    },
    {
      title: "End-to-End Project Management",
      description: "Full-spectrum project management from strategic planning to post-launch support"
    },
    {
      title: "AI-Driven Innovation",
      description: "Integrate cutting-edge AI technologies to enhance your software solutions and business processes"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Requirements Analysis",
      duration: "2-3 weeks",
      description: "Deep dive into your specific needs, data, and technical requirements",
      items: ["Use case definition", "Technical architecture", "Performance requirements", "Security assessment"]
    },
    {
      step: "02",
      title: "Design & Architecture",
      duration: "3-4 weeks",
      description: "Create scalable, secure, and maintainable system architecture",
      items: ["System design", "Technology selection", "Security planning", "Scalability planning"]
    },
    {
      step: "03",
      title: "Development & Testing",
      duration: "8-16 weeks",
      description: "Agile development with continuous testing and quality assurance",
      items: ["Agile development", "Continuous testing", "Code reviews", "Performance optimization"]
    },
    {
      step: "04",
      title: "Deployment & Support",
      duration: "2-3 weeks",
      description: "Seamless deployment with ongoing maintenance and support",
      items: ["Production deployment", "Monitoring setup", "Documentation", "Training & support"]
    },
    {
      step: "05",
      title: "Maintenance & Optimization",
      duration: "Ongoing",
      description: "Continuous monitoring, optimization, and feature enhancements",
      items: ["Performance monitoring", "Bug fixes", "Feature updates", "Technical support"]
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      company: "MedTech Solutions",
      challenge: "Modernizing legacy patient management system with AI-powered analytics",
      solution: "Developed modern web application with AI-driven patient insights and predictive analytics",
      technologies: ["React", "Node.js", "Machine Learning", "Cloud Infrastructure"],
      quote: "The new system has transformed our patient care delivery. We can now provide more personalized and efficient healthcare services.",
      metrics: [
        { label: "Patient satisfaction increase", value: "40%" },
        { label: "Processing time reduction", value: "65%" },
        { label: "Data accuracy improvement", value: "95%" },
        { label: "Cost savings", value: "$500K annually" }
      ],
      stats: {
        developmentTime: "18 weeks",
        roi: "280% in first year",
        accuracy: "98.5%",
        performance: "<2s response time"
      }
    },
    {
      industry: "E-commerce",
      company: "RetailMax Platform",
      challenge: "Building scalable e-commerce platform with AI-powered recommendations",
      solution: "Created cloud-native e-commerce platform with personalized product recommendations and inventory management",
      technologies: ["Vue.js", "Python", "AI/ML", "Microservices"],
      quote: "Our new platform handles 10x more traffic while providing personalized shopping experiences that customers love.",
      metrics: [
        { label: "Sales increase", value: "150%" },
        { label: "Conversion rate improvement", value: "35%" },
        { label: "Platform scalability", value: "10x traffic" },
        { label: "Customer satisfaction", value: "4.8/5" }
      ],
      stats: {
        developmentTime: "20 weeks",
        roi: "420% revenue growth",
        accuracy: "92% recommendation accuracy",
        performance: "99.9% uptime"
      }
    },
    {
      industry: "Financial Services",
      company: "FinanceFlow Systems",
      challenge: "Developing secure financial transaction platform with real-time fraud detection",
      solution: "Built enterprise-grade financial platform with AI-powered fraud detection and compliance automation",
      technologies: ["Angular", "Java", "Blockchain", "AI Security"],
      quote: "The platform's security and AI capabilities have made us a trusted partner for high-value financial transactions.",
      metrics: [
        { label: "Fraud detection accuracy", value: "99.2%" },
        { label: "Transaction processing speed", value: "300%" },
        { label: "Compliance automation", value: "90%" },
        { label: "System security", value: "Zero breaches" }
      ],
      stats: {
        developmentTime: "24 weeks",
        roi: "350% cost reduction",
        accuracy: "99.2% fraud detection",
        performance: "<100ms transaction time"
      }
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
            backgroundImage: `url(${heroImage})`,
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
              Software Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Software Development Services{" "}
              <span className="text-orange-300">Building Your AI-Powered Vision</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Transform your business with innovative, scalable, and secure software solutions that leverage cutting-edge AI technology to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/case-studies">
                  Explore Case Studies
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["Custom Development", "Legacy Modernization", "Cloud Migration", "AI Integration", "Security"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Software Development <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software development services covering the full spectrum of modern application development and system integration.
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

      {/* Why Choose Our Software Development */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Software Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with cutting-edge technology to deliver software solutions that exceed expectations.
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

      {/* Development Methodology */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Development <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven development process ensures high-quality software solutions delivered on time and within budget.
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

      {/* Technical Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technical <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world software development projects showcasing our technical expertise and innovative solutions across industries.
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
                          <span className="font-medium">Development Time:</span> {study.stats.developmentTime}
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies that have accelerated their growth with our software solutions. Let's discuss how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
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

export default SoftwareDevelopment;