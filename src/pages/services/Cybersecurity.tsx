import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Shield,
  Search,
  Zap,
  Cloud,
  Network,
  Smartphone,
  Globe,
  Brain,
  Users,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Lock,
  Eye,
  Database,
  Monitor,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import cybersecurityImage from "@/assets/cybersecurity-hero.jpg";

const Cybersecurity = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "AI-Driven Security Assessment",
      description: "Comprehensive vulnerability assessment using AI to identify and mitigate risks across your infrastructure.",
      technologies: ["AI Vulnerability Scanning", "Risk Assessment", "Compliance Auditing", "Security Analytics"]
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Simulate real-world attacks to evaluate system defenses and provide actionable security insights.",
      technologies: ["Network Penetration Testing", "Web Application Testing", "Social Engineering", "Red Team Exercises"]
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Swift response to cyber incidents with rapid recovery and prevention strategies for AI systems.",
      technologies: ["24/7 SOC Monitoring", "Incident Analysis", "Forensic Investigation", "Recovery Planning"]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure data and applications across cloud, hybrid, and on-premises environments with AI-enhanced protection.",
      technologies: ["Cloud Security Architecture", "Data Encryption", "Access Management", "Compliance Monitoring"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Comprehensive network protection with firewalls, VPNs, and intrusion detection systems.",
      technologies: ["Firewall Management", "VPN Solutions", "Intrusion Detection", "Network Monitoring"]
    },
    {
      icon: Smartphone,
      title: "Application Security",
      description: "Security testing for web and mobile applications with AI-driven vulnerability detection.",
      technologies: ["SAST/DAST Testing", "Mobile App Security", "API Security", "Code Review"]
    }
  ];

  const whyChoose = [
    {
      title: "AI-Enhanced Security",
      description: "Advanced AI-powered threat detection and automated response systems for proactive protection"
    },
    {
      title: "Comprehensive Coverage",
      description: "Full-spectrum security services covering all aspects of your digital infrastructure"
    },
    {
      title: "Industry Expertise",
      description: "Deep knowledge of security frameworks, compliance standards, and emerging threats"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response capabilities"
    },
    {
      title: "Compliance Focus",
      description: "Ensuring adherence to industry regulations and security standards"
    },
    {
      title: "Proactive Approach",
      description: "Preventive security measures and continuous threat intelligence to stay ahead of attackers"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Security Assessment",
      duration: "2-3 weeks",
      description: "Comprehensive evaluation of your current security posture and vulnerability identification",
      items: ["Vulnerability scanning", "Risk assessment", "Compliance audit", "Security gap analysis"]
    },
    {
      step: "02",
      title: "Strategy Development",
      duration: "2-3 weeks",
      description: "Creating comprehensive security strategies tailored to your specific needs and risks",
      items: ["Security roadmap", "Policy development", "Technology selection", "Implementation planning"]
    },
    {
      step: "03",
      title: "Implementation",
      duration: "4-8 weeks",
      description: "Deploying security solutions and establishing monitoring and response capabilities",
      items: ["Solution deployment", "Security configuration", "Monitoring setup", "Staff training"]
    },
    {
      step: "04",
      title: "Testing & Validation",
      duration: "2-3 weeks",
      description: "Comprehensive testing of security measures and validation of effectiveness",
      items: ["Penetration testing", "Security validation", "Performance testing", "Compliance verification"]
    },
    {
      step: "05",
      title: "Ongoing Support",
      duration: "Ongoing",
      description: "Continuous monitoring, maintenance, and optimization of security measures",
      items: ["24/7 monitoring", "Incident response", "Regular updates", "Security optimization"]
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      company: "MedSecure Systems",
      challenge: "Protecting patient data and medical systems from cyber threats while maintaining HIPAA compliance",
      solution: "Implemented comprehensive AI-driven security framework with real-time threat detection and automated response",
      technologies: ["AI Threat Detection", "Data Encryption", "Access Control", "Compliance Monitoring"],
      quote: "The AI-powered security system has transformed our cybersecurity posture. We now have real-time protection against evolving threats while maintaining full compliance.",
      metrics: [
        { label: "Threat detection improvement", value: "85%" },
        { label: "Incident response time", value: "90% faster" },
        { label: "Compliance score", value: "100%" },
        { label: "Security incidents", value: "Zero breaches" }
      ],
      stats: {
        developmentTime: "16 weeks",
        roi: "400% cost savings",
        accuracy: "99.5% threat detection",
        performance: "Real-time response"
      }
    },
    {
      industry: "Financial Services",
      company: "SecureBank Corp",
      challenge: "Securing financial transactions and customer data against sophisticated cyber attacks",
      solution: "Deployed multi-layered security architecture with AI-driven fraud detection and behavioral analytics",
      technologies: ["Behavioral Analytics", "Fraud Detection", "Transaction Monitoring", "Risk Assessment"],
      quote: "Our security transformation has made us a trusted partner for high-value transactions. The AI system catches threats we never knew existed.",
      metrics: [
        { label: "Fraud detection accuracy", value: "99.8%" },
        { label: "False positive reduction", value: "70%" },
        { label: "Transaction security", value: "100%" },
        { label: "Customer trust score", value: "4.9/5" }
      ],
      stats: {
        developmentTime: "20 weeks",
        roi: "500% risk reduction",
        accuracy: "99.8% fraud detection",
        performance: "<100ms response"
      }
    },
    {
      industry: "Manufacturing",
      company: "IndustrialSecure Ltd",
      challenge: "Protecting industrial control systems and IoT devices from cyber attacks",
      solution: "Implemented specialized security framework for industrial environments with OT/IT integration",
      technologies: ["Industrial Security", "IoT Protection", "Network Segmentation", "Threat Intelligence"],
      quote: "The specialized security approach has protected our critical infrastructure while enabling digital transformation initiatives.",
      metrics: [
        { label: "System uptime", value: "99.9%" },
        { label: "Threat prevention", value: "95%" },
        { label: "Incident response", value: "80% faster" },
        { label: "Compliance achievement", value: "100%" }
      ],
      stats: {
        developmentTime: "24 weeks",
        roi: "350% risk reduction",
        accuracy: "98% threat prevention",
        performance: "99.9% uptime"
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
            backgroundImage: `url(${cybersecurityImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/40 font-semibold">
              Cybersecurity Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Cybersecurity
              <span className="block text-orange-300">Tailored for Your Business</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
              We provide a robust suite of cybersecurity services to protect your business, 
              ensure compliance, and enhance operational resilience. Our solutions safeguard your IT environment, 
              including AI-powered systems, against vulnerabilities, manipulation, and malicious attacks, 
              ensuring secure and trustworthy operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Get Security Assessment
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/blog">
                  Download Security Guide
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {["AI Security", "Penetration Testing", "Incident Response", "Cloud Security", "Compliance"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cybersecurity <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity services covering the full spectrum of digital protection and threat management.
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

      {/* Why Choose Our Cybersecurity */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">Cybersecurity</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with advanced AI technology to deliver cybersecurity solutions that protect your business.
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

      {/* Security Methodology */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Security <span className="text-primary">Methodology</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven security methodology ensures comprehensive protection and continuous improvement of your cybersecurity posture.
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

      {/* Security Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Security <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world cybersecurity projects showcasing our expertise and successful protection of critical business systems.
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
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of companies that have enhanced their security posture with our comprehensive cybersecurity solutions. Let's discuss how we can protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Security Assessment
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

export default Cybersecurity;