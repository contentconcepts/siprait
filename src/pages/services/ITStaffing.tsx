import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Brain, 
  Settings, 
  FileText, 
  CreditCard,
  Clock,
  UserCheck,
  ArrowRight,
  CheckCircle,
  Target,
  Shield,
  Zap,
  Award,
  Globe2
} from "lucide-react";
import { Link } from "react-router-dom";

const ITStaffing = () => {
  const services = [
    {
      icon: Users,
      title: "Pre-screened and Pre-verified Candidates",
      tagline: "Quality Assurance Through Rigorous Evaluation",
      description: "Our meticulous screening process ensures every candidate meets the highest standards of technical expertise and professional competency.",
      features: [
        "Comprehensive skills assessment and technical evaluations",
        "Thorough background verification and credential validation",
        "Cultural fit analysis to ensure seamless team integration",
        "Fast-track recruitment cycles with pre-qualified talent pools"
      ]
    },
    {
      icon: Brain,
      title: "AI-Enhanced Talent Matching",
      tagline: "Precision Hiring with Advanced Technology",
      description: "Leverage our AI-powered matching algorithms to find candidates with the exact technical skills and experience your projects demand.",
      features: [
        "Advanced skill-matching technology for precise candidate selection",
        "Access to specialized professionals across emerging technologies",
        "Continuous candidate database updates with latest market trends",
        "Technical certification verification and competency validation"
      ]
    },
    {
      icon: Settings,
      title: "Tailored Solutions for Every Need",
      tagline: "Customized Staffing Strategies",
      description: "We understand that every organization has unique requirements, team dynamics, and project specifications.",
      features: [
        "Customized job profiling based on company culture and requirements",
        "Flexible engagement models to suit project timelines",
        "Scalable solutions from single hires to entire development teams",
        "Industry-specific expertise across various technology domains"
      ]
    },
    {
      icon: FileText,
      title: "Expert Documentation and Compliance Management",
      tagline: "Seamless Administrative Support",
      description: "Focus on your core business while we handle all administrative complexities and ensure full compliance.",
      features: [
        "Complete contract management and legal documentation",
        "Compliance with labor laws and regulatory requirements",
        "Risk mitigation through proper documentation processes",
        "Streamlined onboarding and administrative procedures"
      ]
    },
    {
      icon: CreditCard,
      title: "Comprehensive Payroll and Benefits Management",
      tagline: "End-to-End Employee Management",
      description: "Simplify your HR operations with our complete payroll and benefits administration services.",
      features: [
        "Robust payroll processing for contract and permanent staff",
        "Benefits administration and tax compliance management",
        "Reduced administrative burden and operational costs",
        "Transparent reporting and account management"
      ]
    }
  ];

  const staffingSolutions = [
    {
      icon: Clock,
      title: "Temporary IT Staffing",
      tagline: "Flexible Solutions for Immediate Needs",
      description: "Ideal for short-term projects, seasonal workload spikes, or specialized technical initiatives requiring immediate expert assistance.",
      features: [
        "Quick deployment of skilled professionals",
        "Cost-effective solution for project-based requirements",
        "Access to niche technical expertise",
        "Flexible engagement periods"
      ]
    },
    {
      icon: UserCheck,
      title: "Permanent IT Staffing",
      tagline: "Long-term Growth Partners",
      description: "For organizations seeking dedicated team members who will contribute to long-term stability, innovation, and organizational growth.",
      features: [
        "Comprehensive candidate evaluation for cultural fit",
        "Focus on career growth alignment and retention",
        "Investment in long-term organizational success",
        "Building stable, high-performing teams"
      ]
    },
    {
      icon: Target,
      title: "Contract-to-Hire Solutions",
      tagline: "Evaluate Before You Commit",
      description: "Perfect for assessing candidate performance and cultural fit through an extended evaluation period before making permanent hiring decisions.",
      features: [
        "Risk mitigation through extended evaluation periods",
        "Seamless conversion from contract to permanent status",
        "Opportunity to assess technical skills in real work environments",
        "Flexible transition based on performance and fit"
      ]
    },
    {
      icon: Zap,
      title: "Project-Based Staffing",
      tagline: "Specialized Teams for Specific Initiatives",
      description: "Ideal for specialized projects requiring specific technical expertise, emerging technologies, or dedicated project teams.",
      features: [
        "Access to niche technical specialists",
        "Dedicated teams for complex technology initiatives",
        "Expertise in emerging technologies and frameworks",
        "Customized team composition based on project requirements"
      ]
    },
    {
      icon: Award,
      title: "Contractual Staffing",
      tagline: "Flexible Professional Engagement",
      description: "Designed for specialized roles with defined duration requirements, providing flexibility without long-term commitments.",
      features: [
        "Specialized skill sets for defined periods",
        "Cost-effective solution for specific expertise needs",
        "Reduced long-term employment obligations",
        "Quick scaling based on project demands"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Planning & Consultation",
      description: "Understanding Your Unique Requirements",
      details: "We begin with an in-depth consultation to understand your technical requirements, company culture, project timelines, and specific staffing needs."
    },
    {
      number: "02",
      title: "Strategic Candidate Sourcing",
      description: "Targeted Talent Identification",
      details: "From our extensive talent network, we identify and shortlist candidates based on technical qualifications, experience, and role-specific requirements."
    },
    {
      number: "03",
      title: "Comprehensive Evaluation",
      description: "Multi-layered Assessment Process",
      details: "Candidates undergo rigorous technical assessments, behavioral interviews, and cultural fit evaluations to ensure optimal matches."
    },
    {
      number: "04",
      title: "Client Interview & Selection",
      description: "Collaborative Decision Making",
      details: "We facilitate client interviews and provide detailed candidate profiles to support informed hiring decisions with complete transparency."
    },
    {
      number: "05",
      title: "Seamless Onboarding",
      description: "Smooth Integration Process",
      details: "After selection, we manage the complete onboarding process, ensuring new hires integrate seamlessly into your existing teams and workflows."
    }
  ];

  const valueProps = [
    {
      icon: Globe2,
      title: "Access to Premium Talent Pool",
      description: "Our extensive network provides access to top-tier IT professionals across various specializations, ensuring you connect with the best candidates for your specific requirements."
    },
    {
      icon: Shield,
      title: "Reduced Hiring Risks",
      description: "Through comprehensive vetting, background checks, and cultural assessments, we minimize the risks associated with bad hires and ensure long-term success."
    },
    {
      icon: Award,
      title: "Quality-First Approach",
      description: "We prioritize quality over quantity, focusing on candidates who not only meet technical requirements but also contribute to your organization's growth and success."
    },
    {
      icon: Target,
      title: "Core Business Focus",
      description: "By handling the entire recruitment process, we enable your internal teams to concentrate on strategic initiatives and core business objectives."
    },
    {
      icon: Brain,
      title: "Industry Expertise",
      description: "Our deep understanding of technology trends, salary benchmarks, and market dynamics ensures a seamless and efficient hiring process."
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
              IT Staffing Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to Exceptional{" "}
              <span className="text-primary-light">IT Talent</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              The modern technology landscape demands agility, expertise, and the right talent at the right time. Partner with SipraHub for comprehensive IT staffing solutions that connect you with pre-vetted, highly qualified professionals who can drive your digital transformation initiatives forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our IT Staffing Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our IT Staffing Services{" "}
              <span className="text-primary">at a Glance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to meet all your IT talent acquisition needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
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

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Value Do Our IT Staffing{" "}
              <span className="text-primary">Solutions Bring?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
                    <prop.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Benefits for Organizations{" "}
              <span className="text-primary">and Professionals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  For Companies
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Connect with highly skilled IT professionals perfectly matched to your project requirements and company culture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Streamlined recruitment process reduces time-to-hire and accelerates project delivery timelines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Cost-effective hiring solutions that reduce overhead expenses and recruitment operational costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Scalable workforce solutions that adapt to project demands and business growth requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  For IT Professionals
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Access to exciting opportunities with top technology companies and innovative startups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Comprehensive career support including contract, permanent, and remote work opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional development opportunities and access to cutting-edge technology projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Interview preparation, career coaching, and ongoing professional guidance and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Staffing Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="text-primary">Staffing Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffingSolutions.map((solution, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth">
                <CardContent className="p-8">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-6">
                    <solution.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {solution.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
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

      {/* Our Process */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Streamlined{" "}
              <span className="text-primary">Staffing Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures optimal talent matching and seamless integration
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="text-2xl font-bold px-4 py-2 bg-primary/10 text-primary border-primary/20">
                        {step.number}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg font-medium text-primary mb-3">
                        {step.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose SipraHub for Your{" "}
              <span className="text-primary">IT Staffing Needs?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
                  <Globe2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Extensive Global Talent Network
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our comprehensive talent network spans across multiple technology domains, providing access to both local and international IT professionals with diverse expertise and experience levels.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Personalized Service Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that every organization has unique requirements. Our personalized approach ensures tailored recruitment strategies that align with your specific business objectives and cultural values.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Proven Track Record of Success
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With years of experience in IT staffing, we have successfully placed thousands of professionals in critical roles across leading technology companies, startups, and enterprise organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Agile and Responsive Service
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our flexible approach allows us to adapt quickly to changing market conditions, evolving project requirements, and shifting business priorities while maintaining service excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Commitment to Long-term Partnerships
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We go beyond simple placement services to build lasting partnerships, providing ongoing support, career development guidance, and continuous talent pipeline management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream IT Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Transform your hiring process with SipraHub's comprehensive IT staffing solutions. Whether you need immediate technical support, long-term team expansion, or specialized project expertise, we have the talent and experience to meet your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITStaffing;