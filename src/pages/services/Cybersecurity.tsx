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
  AlertTriangle
} from "lucide-react";
import cybersecurityImage from "@/assets/cybersecurity-hero.jpg";

const Cybersecurity = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Driven Cybersecurity Assessment & Audit",
      description: "Identify vulnerabilities across IT infrastructure, including AI-driven systems.",
      features: ["AI System Vulnerability Detection", "Compliance Assessment", "Risk Analysis"]
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description: "Simulate real-world attacks to evaluate system defenses.",
      features: ["Network VAPT", "Web App Testing", "Mobile App Security"]
    },
    {
      icon: Zap,
      title: "Incident Response & Recovery",
      description: "Respond swiftly to cyber incidents to minimize downtime.",
      features: ["24/7 Incident Response", "AI System Breach Recovery", "Forensic Analysis"]
    },
    {
      icon: Cloud,
      title: "AI-Driven Cloud Security",
      description: "Secure data and applications across cloud, hybrid, and on-premises environments.",
      features: ["Cloud Migration Security", "Hybrid Environment Protection", "AI App Compliance"]
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Protect networks from unauthorized access with comprehensive security measures.",
      features: ["Firewall & VPN Setup", "Intrusion Detection", "IoT Security"]
    },
    {
      icon: Globe,
      title: "AI-Driven Application Security Testing",
      description: "Comprehensive security testing for applications, including AI-powered systems.",
      features: ["SAST & DAST", "AI Algorithm Security", "Runtime Vulnerability Testing"]
    },
    {
      icon: Shield,
      title: "AI System Security",
      description: "Specialized security for AI-powered systems against adversarial threats.",
      features: ["AI Model Protection", "Data Pipeline Security", "Red Team Testing"]
    },
    {
      icon: Users,
      title: "Cybersecurity Staffing Services",
      description: "Scale your security team with specialized AI-driven cybersecurity talent.",
      features: ["Security Specialists", "AI Security Experts", "24/7 SOC Teams"]
    }
  ];

  const benefits = [
    "AI-enhanced threat detection and prevention",
    "Compliance with industry standards and regulations",
    "Proactive vulnerability management",
    "24/7 security monitoring and response",
    "Specialized AI system protection",
    "Cost-effective security solutions"
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Cybersecurity Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Cybersecurity 
              <span className="block text-accent-light">Tailored for Your Business</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              We provide a robust suite of cybersecurity services to protect your business, 
              ensure compliance, and enhance operational resilience with AI-powered security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="xl">
                Get Security Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download Security Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Cybersecurity Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Protect your IT environment, including AI-powered systems, against vulnerabilities, 
              manipulation, and malicious attacks with our comprehensive security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our{" "}
                <span className="text-primary">Cybersecurity Services?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our comprehensive cybersecurity approach combines traditional security measures 
                with AI-enhanced protection, ensuring your systems are defended against both 
                current and emerging threats.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg">
                Schedule Security Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Threat Landscape</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cyber threats are evolving rapidly, with AI-powered attacks becoming more 
                    sophisticated. Traditional security measures alone are no longer sufficient.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-lg bg-success/10">
                      <Shield className="h-6 w-6 text-success" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Our Approach</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We combine AI-driven threat detection with proven security methodologies 
                    to provide comprehensive protection for your digital assets and AI systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">AI Security Focus</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specialized protection for AI models, data pipelines, and machine learning 
                    systems against adversarial attacks and model manipulation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Don't wait for a security incident. Get a comprehensive cybersecurity 
            assessment and protect your business with our AI-enhanced security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="xl">
              Start Free Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Contact Security Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cybersecurity;