import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Server,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Settings,
  Users,
  Mail,
  FileText,
  Building,
  Lock,
  Monitor
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import cloudImage from "@/assets/hero-bg.jpg";

const CloudInfra = () => {
  const capabilities = [
    {
      icon: Cloud,
      title: "Cloud Setup & Migration",
      description: "Streamline your journey to the cloud with expert deployment across AWS, Azure, and Google Cloud Platform.",
      technologies: ["AWS", "Azure", "Google Cloud", "Cloud Architecture"]
    },
    {
      icon: Server,
      title: "On-Prem to Cloud Migration",
      description: "Secure and scalable transition from on-premises infrastructure to the cloud with minimal disruption.",
      technologies: ["Migration Strategy", "Data Transfer", "Application Migration", "Testing & Validation"]
    },
    {
      icon: Database,
      title: "Application Hosting",
      description: "High-performance hosting for web and mobile applications with secure server configurations.",
      technologies: ["Web Hosting", "Mobile Apps", "Server Management", "Performance Optimization"]
    },
    {
      icon: Mail,
      title: "Email Hosting",
      description: "Reliable, secure, and scalable email hosting solutions with advanced spam and threat protection.",
      technologies: ["Microsoft Exchange", "Google Workspace", "Zoho", "Custom Domains"]
    },
    {
      icon: FileText,
      title: "Office 365 Services",
      description: "Complete setup, configuration, and management of Microsoft Office 365 applications and services.",
      technologies: ["Teams", "OneDrive", "SharePoint", "Licensing Management"]
    },
    {
      icon: Shield,
      title: "Infrastructure Security",
      description: "Comprehensive security measures to protect your cloud infrastructure and data assets.",
      technologies: ["Security Architecture", "Access Control", "Monitoring", "Compliance"]
    }
  ];

  const whyChoose = [
    {
      title: "Multi-Platform Expertise",
      description: "Deep knowledge of AWS, Azure, GCP, and Microsoft ecosystems for optimal solution selection"
    },
    {
      title: "Tailored Solutions",
      description: "Customized strategies that align with your specific business goals and technical requirements"
    },
    {
      title: "Security First",
      description: "Robust security measures and compliance standards to protect your data and infrastructure"
    },
    {
      title: "24/7 Support",
      description: "Dedicated support and monitoring to ensure your systems run smoothly and efficiently"
    },
    {
      title: "Cost Optimization",
      description: "Strategic cost management to maximize ROI while maintaining performance and reliability"
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business and adapt to changing demands"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Assessment & Planning",
      duration: "2-3 weeks",
      description: "Comprehensive evaluation of your current infrastructure and development of migration strategy",
      items: ["Infrastructure audit", "Requirements analysis", "Migration planning", "Risk assessment"]
    },
    {
      step: "02",
      title: "Architecture Design",
      duration: "2-3 weeks",
      description: "Design scalable and secure cloud architecture tailored to your business needs",
      items: ["Architecture design", "Security planning", "Scalability planning", "Technology selection"]
    },
    {
      step: "03",
      title: "Migration & Setup",
      duration: "4-8 weeks",
      description: "Execute migration with minimal downtime and establish new cloud infrastructure",
      items: ["Data migration", "Application deployment", "Configuration setup", "Testing & validation"]
    },
    {
      step: "04",
      title: "Optimization",
      duration: "2-3 weeks",
      description: "Fine-tune performance, security, and costs for optimal operation",
      items: ["Performance tuning", "Security hardening", "Cost optimization", "Monitoring setup"]
    },
    {
      step: "05",
      title: "Ongoing Management",
      duration: "Ongoing",
      description: "Continuous monitoring, maintenance, and optimization of your cloud infrastructure",
      items: ["24/7 monitoring", "Regular maintenance", "Performance optimization", "Support & updates"]
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      company: "MedCloud Systems",
      challenge: "Migrating legacy healthcare systems to cloud while maintaining HIPAA compliance and data security",
      solution: "Implemented secure cloud infrastructure with automated backup, disaster recovery, and compliance monitoring",
      technologies: ["AWS Healthcare", "HIPAA Compliance", "Data Encryption", "Backup Systems"],
      quote: "The cloud migration has transformed our operations. We now have better security, improved performance, and significant cost savings while maintaining full compliance.",
      metrics: [
        { label: "Cost reduction", value: "40%" },
        { label: "System uptime", value: "99.9%" },
        { label: "Data recovery time", value: "95% faster" },
        { label: "Compliance score", value: "100%" }
      ],
      stats: {
        developmentTime: "16 weeks",
        roi: "300% cost savings",
        accuracy: "99.9% uptime",
        performance: "<2s response time"
      }
    },
    {
      industry: "E-commerce",
      company: "ShopCloud Retail",
      challenge: "Scaling e-commerce platform to handle seasonal traffic spikes and global expansion",
      solution: "Built auto-scaling cloud infrastructure with global CDN and load balancing for seamless performance",
      technologies: ["Auto-scaling", "Global CDN", "Load Balancing", "Performance Monitoring"],
      quote: "Our cloud infrastructure now handles 10x more traffic during peak seasons without any performance issues. The auto-scaling feature is a game-changer.",
      metrics: [
        { label: "Traffic handling", value: "10x increase" },
        { label: "Page load speed", value: "60% faster" },
        { label: "Global reach", value: "50+ countries" },
        { label: "Customer satisfaction", value: "4.8/5" }
      ],
      stats: {
        developmentTime: "20 weeks",
        roi: "450% revenue growth",
        accuracy: "99.95% uptime",
        performance: "Global <3s load time"
      }
    },
    {
      industry: "Financial Services",
      company: "FinanceCloud Bank",
      challenge: "Building secure, compliant cloud infrastructure for financial services with real-time transaction processing",
      solution: "Deployed enterprise-grade cloud infrastructure with advanced security, compliance, and real-time processing capabilities",
      technologies: ["Financial Cloud", "Real-time Processing", "Security Compliance", "Data Analytics"],
      quote: "The cloud infrastructure has enabled us to process transactions faster while maintaining the highest security standards. Our customers love the improved experience.",
      metrics: [
        { label: "Transaction speed", value: "300% faster" },
        { label: "Security compliance", value: "100%" },
        { label: "System reliability", value: "99.99%" },
        { label: "Customer onboarding", value: "80% faster" }
      ],
      stats: {
        developmentTime: "24 weeks",
        roi: "400% efficiency gain",
        accuracy: "99.99% reliability",
        performance: "Real-time processing"
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
            backgroundImage: `url(${cloudImage})`,
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
              Cloud & Infrastructure Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Harness the Power of{" "}
              <span className="block text-accent-light">Cloud Technology</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              We empower businesses to seamlessly transition to the cloud, ensuring minimal disruption and maximum efficiency. Our comprehensive cloud and infrastructure services are designed to optimize performance, enhance security, and scale with your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="hero" size="xl" className="text-xl font-semibold px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["Cloud Migration", "Infrastructure Management", "Email Hosting", "Office 365", "Security"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cloud Infrastructure <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cloud and infrastructure services covering the full spectrum of modern cloud technologies and solutions.
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

      {/* Why Choose Our Cloud Infrastructure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Cloud Infrastructure</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with cutting-edge cloud technologies to deliver infrastructure solutions that drive business success.
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

      {/* Infrastructure Methodology */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Infrastructure <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful cloud migration and infrastructure optimization with minimal disruption.
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

      {/* Infrastructure Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Infrastructure <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world cloud infrastructure projects showcasing our expertise and successful transformations across industries.
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
                          <span className="font-medium">Implementation Time:</span> {study.stats.developmentTime}
                        </div>
                        <div>
                          <span className="font-medium">ROI:</span> {study.stats.roi}
                        </div>
                        <div>
                          <span className="font-medium">Reliability:</span> {study.stats.accuracy}
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
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies that have enhanced their infrastructure with our cloud solutions. Let's discuss how we can help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Migration
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

export default CloudInfra;