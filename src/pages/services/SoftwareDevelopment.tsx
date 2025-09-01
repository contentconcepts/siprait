import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Code, RefreshCcw, Wrench, Building, Globe2, CheckCircle, ArrowRight } from "lucide-react";

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      tagline: "Crafting Tailored, AI-Enhanced Applications",
      description: "Transform your vision into reality with custom-built solutions designed specifically for your business needs.",
      features: [
        "Tailored Solutions: Develop web, mobile, and enterprise applications perfectly aligned with your business goals",
        "Technology-Agnostic Approach: Utilize optimal technology stacks for maximum scalability, security, and AI integration",
        "User-Centric Design: Deliver intuitive, AI-driven user experiences that maximize engagement and conversion"
      ],
      cta: "Create innovative solutions that drive sustainable growth with SipraHub's expertise."
    },
    {
      icon: RefreshCcw,
      title: "Legacy System Modernization",
      tagline: "Future-Proof Your Business with AI Integration",
      description: "Breathe new life into your existing systems with modern architecture and AI capabilities.",
      features: [
        "System Re-engineering: Align outdated systems with modern business requirements using AI-powered solutions",
        "Cloud & Microservices Migration: Transition to scalable, AI-enhanced cloud architectures",
        "Seamless Integration: Connect legacy systems with modern AI-driven applications without disruption"
      ],
      cta: "Modernize with SipraHub to eliminate inefficiencies and reduce operational costs significantly."
    },
    {
      icon: Wrench,
      title: "Application Maintenance & Upgrades",
      tagline: "Ensuring Peak Performance with AI-Driven Insights",
      description: "Keep your applications running at optimal performance with proactive maintenance and intelligent upgrades.",
      features: [
        "Proactive Monitoring: AI-driven analytics prevent disruptions and continuously optimize performance",
        "Bug Fixes & Enhancements: Continuous AI-supported improvements ensure maximum reliability",
        "Scalability Upgrades: Adapt systems with AI capabilities to meet evolving business demands"
      ],
      cta: "Keep your systems thriving with SipraHub's AI-powered maintenance solutions."
    },
    {
      icon: Building,
      title: "On-Premises Setup & Management",
      tagline: "AI-Enhanced In-House Development Teams",
      description: "Build secure, high-performing development teams integrated seamlessly into your enterprise environment.",
      features: [
        "High-Performing Teams: Establish secure, AI-integrated development teams tailored for enterprise needs",
        "Workflow Integration: Ensure seamless compliance and implement AI-driven development processes",
        "Operational Efficiency: Focus on core business while we handle scalability with AI-enhanced operations"
      ],
      cta: "Take control of your development with SipraHub's AI-powered on-premises solutions."
    },
    {
      icon: Globe2,
      title: "ODC Setup & Management",
      tagline: "Scalable Offshore Development Centers with AI",
      description: "Establish cost-effective, dedicated development centers that leverage AI for enhanced productivity and quality.",
      features: [
        "Dedicated Centers: Build AI-supported Offshore Development Centers designed for scalability and efficiency",
        "Secure Infrastructure: Implement AI-driven governance frameworks for seamless global collaboration",
        "Cost Efficiency: Reduce operational costs by up to 50% through AI optimization and offshore advantages"
      ],
      cta: "Scale smarter and more efficiently with SipraHub's AI-powered ODC solutions."
    }
  ];

  const methodology = [
    {
      step: 1,
      title: "Domain Understanding",
      description: "Deep dive into your industry to create perfectly tailored solutions"
    },
    {
      step: 2,
      title: "Technology Selection",
      description: "Choose optimal technology stacks for your specific use case and requirements"
    },
    {
      step: 3,
      title: "Custom Software Development",
      description: "Build innovative web, mobile, and enterprise applications with AI integration"
    },
    {
      step: 4,
      title: "On-Premises Setup",
      description: "Establish secure, scalable in-house teams with seamless AI integration"
    },
    {
      step: 5,
      title: "ODC Setup",
      description: "Create cost-effective offshore development teams with transparent governance"
    },
    {
      step: 6,
      title: "AI Integration",
      description: "Automate and optimize business processes with cutting-edge AI solutions"
    },
    {
      step: 7,
      title: "Continuous Improvement",
      description: "Implement regular feedback loops for ongoing optimization and enhancement"
    }
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
              Software Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Software Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90 font-medium">
              Building Your AI-Powered Vision
            </p>
            <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transform your business with innovative, scalable, and secure software solutions that leverage cutting-edge AI technology to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="glass" className="text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Explore Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Software Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your business through innovative technology and AI integration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-medium mb-3">
                    {service.tagline}
                  </CardDescription>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-primary font-medium italic">
                    {service.cta}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Development Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proven Process for Innovation and Scalability
            </p>
            <p className="text-muted-foreground mt-4 max-w-4xl mx-auto">
              Our systematic approach ensures every project delivers exceptional results through proven methodologies and cutting-edge technology integration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methodology.map((step, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Software Development?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our AI-powered software development services can accelerate your business growth and innovation.
          </p>
          <Button size="xl" variant="glass" className="text-lg font-semibold">
            Start Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;