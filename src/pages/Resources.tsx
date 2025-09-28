import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Download,
  FileText,
  Book,
  Video,
  CheckCircle,
  TrendingUp,
  Shield,
  Code,
  Cloud,
  Brain,
  Users,
  Calendar,
  Clock,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import missionImage from "@/assets/mission-vision.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import cybersecurityImage from "@/assets/cybersecurity-hero.jpg";
import aboutImage from "@/assets/about-hero.jpg";

const Resources = () => {
  const featuredResources = [
    {
      id: 1,
      title: "AI Strategy Implementation Guide",
      description: "Complete roadmap for implementing AI in your organization, including ROI analysis, technology selection, and change management strategies.",
      type: "PDF Guide",
      size: "2.4 MB",
      pages: 45,
      downloads: 1250,
      rating: 4.8,
      category: "AI Strategy",
      image: missionImage,
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices Checklist",
      description: "Comprehensive checklist covering all aspects of cybersecurity for modern businesses, including AI-specific security considerations.",
      type: "PDF Checklist",
      size: "1.2 MB",
      pages: 28,
      downloads: 980,
      rating: 4.9,
      category: "Security",
      image: cybersecurityImage
    },
    {
      id: 3,
      title: "Legacy System Modernization Framework",
      description: "Step-by-step framework for modernizing legacy systems with AI integration, including risk assessment and migration strategies.",
      type: "PDF Framework",
      size: "3.1 MB",
      pages: 52,
      downloads: 750,
      rating: 4.7,
      category: "Modernization",
      image: teamImage
    }
  ];

  const resourceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Guides, frameworks, and tools for AI implementation",
      icon: Brain,
      count: 15,
      color: "text-blue-600"
    },
    {
      name: "Cybersecurity",
      description: "Security guides, checklists, and compliance frameworks",
      icon: Shield,
      count: 12,
      color: "text-red-600"
    },
    {
      name: "Cloud Computing",
      description: "Cloud migration guides and infrastructure best practices",
      icon: Cloud,
      count: 10,
      color: "text-green-600"
    },
    {
      name: "Software Development",
      description: "Development methodologies, tools, and best practices",
      icon: Code,
      count: 18,
      color: "text-purple-600"
    },
    {
      name: "Digital Transformation",
      description: "Transformation strategies and implementation guides",
      icon: TrendingUp,
      count: 8,
      color: "text-orange-600"
    },
    {
      name: "Project Management",
      description: "PM frameworks, templates, and collaboration tools",
      icon: Users,
      count: 14,
      color: "text-indigo-600"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "AI Implementation in Healthcare: Success Stories and Lessons Learned",
      date: "February 15, 2025",
      time: "2:00 PM EST",
      duration: "45 minutes",
      speaker: "Dr. Sarah Chen",
      attendees: 1250,
      category: "Healthcare AI"
    },
    {
      id: 2,
      title: "Building Secure AI Systems: A Technical Deep Dive",
      date: "February 22, 2025",
      time: "3:00 PM EST",
      duration: "60 minutes",
      speaker: "Michael Rodriguez",
      attendees: 980,
      category: "AI Security"
    },
    {
      id: 3,
      title: "Cloud Migration Strategies: From Planning to Execution",
      date: "March 1, 2025",
      time: "1:00 PM EST",
      duration: "50 minutes",
      speaker: "David Park",
      attendees: 750,
      category: "Cloud Computing"
    }
  ];

  const templates = [
    {
      name: "AI Project Charter Template",
      description: "Comprehensive template for defining AI project scope, objectives, and success metrics",
      type: "Word Document",
      downloads: 650
    },
    {
      name: "Security Assessment Checklist",
      description: "Detailed checklist for conducting comprehensive security assessments",
      type: "Excel Spreadsheet",
      downloads: 420
    },
    {
      name: "Cloud Migration Planning Worksheet",
      description: "Step-by-step worksheet for planning and executing cloud migrations",
      type: "PDF Template",
      downloads: 380
    },
    {
      name: "AI Ethics Guidelines Template",
      description: "Framework for establishing AI ethics guidelines and governance policies",
      type: "Word Document",
      downloads: 290
    }
  ];

  const caseStudies = [
    {
      industry: "Healthcare",
      title: "AI-Powered Diagnostic System Implementation",
      description: "How a major hospital system reduced diagnostic time by 60% using custom AI solutions",
      metrics: ["60% faster diagnosis", "95% accuracy rate", "$2M annual savings"],
      downloadLink: "/resources/case-study-healthcare-ai"
    },
    {
      industry: "Financial Services",
      title: "Fraud Detection System Modernization",
      description: "Transforming legacy fraud detection with AI-powered real-time analysis",
      metrics: ["40% fraud reduction", "99.9% uptime", "ROI 300% in 6 months"],
      downloadLink: "/resources/case-study-fintech-fraud"
    },
    {
      industry: "Manufacturing",
      title: "Predictive Maintenance Implementation",
      description: "Implementing AI-driven predictive maintenance to reduce downtime and costs",
      metrics: ["50% downtime reduction", "25% maintenance cost savings", "15% efficiency increase"],
      downloadLink: "/resources/case-study-manufacturing-ai"
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
            backgroundImage: `url(${aboutImage})`,
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
              Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Expert Resources &{" "}
              <span className="text-orange-300">Tools</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Access our comprehensive library of guides, frameworks, templates, and case studies to accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
                <Link to="/contact">
                  Get Custom Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/blog">
                  Read Latest Insights
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our most popular and highly-rated resources to help you get started with your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Card key={resource.id} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group h-full flex flex-col overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-foreground">
                      {resource.category}
                    </Badge>
                    {resource.featured && (
                      <Badge variant="outline" className="bg-white/90 text-foreground border-white/50">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth leading-tight">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {resource.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {resource.downloads.toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-muted-foreground">
                        {resource.pages} pages • {resource.size}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>
                    
                    <Button size="lg" className="text-lg font-semibold px-6 py-3 bg-primary hover:bg-primary/90 shadow-lg mt-auto" asChild>
                      <Link to={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Download className="mr-2 h-5 w-5" />
                        Download Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Browse by <span className="text-primary">Category</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of resources organized by topic and expertise area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => {
              const categoryImages = [missionImage, cybersecurityImage, heroImage, teamImage, aboutImage, missionImage];
              return (
                <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group overflow-hidden">
                <div className="relative h-32">
                  <img 
                    src={categoryImages[index % categoryImages.length]} 
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-sm">
                      {category.count} resources
                    </Badge>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Upcoming <span className="text-primary">Webinars</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our expert-led webinars to gain deeper insights into AI implementation, cybersecurity, and digital transformation.
            </p>
          </div>

          <div className="space-y-6">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-accent/10 text-accent border-accent/20">
                          {webinar.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {webinar.attendees.toLocaleString()} registered
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {webinar.title}
                      </h3>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {webinar.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {webinar.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {webinar.speaker}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {webinar.duration}
                        </div>
                      </div>
                    </div>
                    <Button size="lg" className="text-lg font-semibold px-6 py-3 bg-primary hover:bg-primary/90 shadow-lg" asChild>
                      <Link to={`/webinar/${webinar.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Register Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Templates & Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Templates */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Free <span className="text-primary">Templates</span>
              </h3>
              <div className="space-y-4">
                {templates.map((template, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                            {template.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            {template.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{template.type}</span>
                            <span>{template.downloads} downloads</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-4">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Success <span className="text-primary">Stories</span>
              </h3>
              <div className="space-y-6">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="outline" className="mb-3">
                          {study.industry}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {study.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.metrics.map((metric, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={study.downloadLink}>
                          Download Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get Exclusive Resources & Updates
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter and be the first to access new resources, webinars, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="xl" className="text-xl font-semibold px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
