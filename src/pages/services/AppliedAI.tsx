import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Code, Zap, Shield, Target, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import missionImage from "@/assets/mission-vision.jpg";

const AppliedAI = () => {
  const capabilities = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Custom ML algorithms for prediction, classification, and pattern recognition",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"]
    },
    {
      icon: Code,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and language understanding",
      technologies: ["BERT", "GPT", "Transformers", "spaCy"]
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Image and video analysis, object detection, and visual recognition systems",
      technologies: ["OpenCV", "YOLO", "ResNet", "CNN"]
    },
    {
      icon: Zap,
      title: "Predictive Analytics",
      description: "Forecasting models for business intelligence and decision support",
      technologies: ["Time Series", "Regression", "Neural Networks", "Ensemble Methods"]
    },
    {
      icon: Shield,
      title: "Deep Learning",
      description: "Complex neural networks for advanced pattern recognition and decision making",
      technologies: ["Deep Neural Networks", "CNNs", "RNNs", "GANs"]
    },
    {
      icon: Clock,
      title: "Real-time AI",
      description: "Low-latency AI systems for real-time processing and decision making",
      technologies: ["Edge Computing", "Model Optimization", "Streaming", "APIs"]
    }
  ];

  const whyChoose = [
    {
      title: "Custom Solutions",
      description: "Tailored AI models designed specifically for your unique business requirements and data"
    },
    {
      title: "Cutting-edge Technology",
      description: "Latest AI frameworks and techniques ensuring state-of-the-art performance"
    },
    {
      title: "Enterprise Security",
      description: "Built-in security measures, data privacy protection, and compliance standards"
    },
    {
      title: "Scalable Architecture",
      description: "Cloud-native design that scales with your business growth and data volume"
    },
    {
      title: "Rigorous Testing",
      description: "Comprehensive testing methodology ensuring reliability and accuracy"
    },
    {
      title: "Fast Deployment",
      description: "Streamlined deployment process with minimal disruption to existing systems"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Requirements Analysis",
      duration: "2-3 weeks",
      description: "Deep dive into your specific needs, data, and technical requirements",
      items: ["Use case definition", "Data assessment", "Technical architecture", "Performance requirements"]
    },
    {
      step: "02",
      title: "Model Design & Prototyping",
      duration: "4-6 weeks",
      description: "Design AI models and create proof-of-concept prototypes",
      items: ["Algorithm selection", "Model architecture", "Prototype development", "Feasibility validation"]
    },
    {
      step: "03",
      title: "Development & Training",
      duration: "8-12 weeks",
      description: "Full-scale development with iterative training and optimization",
      items: ["Model implementation", "Training pipeline", "Hyperparameter tuning", "Performance optimization"]
    },
    {
      step: "04",
      title: "Testing & Deployment",
      duration: "3-4 weeks",
      description: "Comprehensive testing, integration, and production deployment",
      items: ["Quality assurance", "Integration testing", "Production deployment", "Monitoring setup"]
    },
    {
      step: "05",
      title: "Optimization & Support",
      duration: "Ongoing",
      description: "Ongoing monitoring, optimization, and maintenance support",
      items: ["Performance monitoring", "Model retraining", "Feature enhancements", "Technical support"]
    }
  ];

  const caseStudies = [
    {
      industry: "E-commerce",
      company: "ShopSmart Retail",
      challenge: "Improving product recommendations and inventory management",
      solution: "Developed personalized recommendation engine and demand forecasting system",
      technologies: ["Collaborative Filtering", "Deep Learning", "Time Series Analysis", "Real-time Processing"],
      quote: "The custom AI solution transformed our entire business model. Sales have never been higher and our customers love the personalized experience.",
      metrics: [
        { label: "Sales conversion increase", value: "45%" },
        { label: "Inventory cost reduction", value: "30%" },
        { label: "Recommendation accuracy", value: "85%" },
        { label: "Customer engagement", value: "2.3x" }
      ],
      stats: {
        developmentTime: "16 weeks",
        roi: "320% in first year",
        accuracy: "91.5%",
        performance: "<100ms response time"
      }
    },
    {
      industry: "Healthcare",
      company: "DiagnosticAI Labs",
      challenge: "Automating medical image analysis for faster, more accurate diagnoses",
      solution: "Built computer vision system for X-ray and MRI analysis with diagnostic assistance",
      technologies: ["Convolutional Neural Networks", "Transfer Learning", "Image Segmentation", "DICOM Processing"],
      quote: "This AI system has revolutionized our diagnostic workflow. We can now process more cases with higher accuracy than ever before.",
      metrics: [
        { label: "Diagnostic accuracy", value: "92%" },
        { label: "Faster analysis time", value: "75%" },
        { label: "FDA compliance", value: "Achieved" },
        { label: "Hospital integrations", value: "5 systems" }
      ],
      stats: {
        developmentTime: "20 weeks",
        roi: "250% cost savings",
        accuracy: "94.2%",
        performance: "3 seconds per scan"
      }
    },
    {
      industry: "Financial Services",
      company: "InvestPro Analytics",
      challenge: "Creating intelligent trading algorithms and risk assessment models",
      solution: "Developed ML-powered trading system with real-time risk analysis and portfolio optimization",
      technologies: ["Reinforcement Learning", "Time Series Forecasting", "Risk Modeling", "High-Frequency Trading"],
      quote: "The AI trading system consistently outperforms traditional methods and has become central to our investment strategy.",
      metrics: [
        { label: "Trading performance improvement", value: "28%" },
        { label: "Risk exposure reduction", value: "65%" },
        { label: "Portfolio managed", value: "$50M" },
        { label: "System uptime", value: "99.9%" }
      ],
      stats: {
        developmentTime: "24 weeks",
        roi: "480% performance improvement",
        accuracy: "89.3% prediction rate",
        performance: "<5ms execution time"
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
            backgroundImage: `url(${missionImage})`,
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
              Applied AI Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Applied AI Services
              <span className="block text-orange-300">Intelligent Solutions for Your Business</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
              Build bespoke AI solutions designed specifically for your business needs. From machine learning models to advanced neural networks, we create high-performance AI systems that deliver measurable results.
            </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <Button variant="hero" size="xl" className="text-xl font-semibold px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
              <Link to="/contact">
                Start Your AI Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button variant="outline-white" size="xl" asChild>
              <Link to="/case-studies">
                View Technical Portfolio
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Predictive Analytics"].map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* AI Development Capabilities */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI Development <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI development services covering the full spectrum of artificial intelligence technologies and applications.
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

      {/* Why Choose Our AI Development */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-primary">AI Development</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading expertise combined with cutting-edge technology to deliver AI solutions that exceed expectations.
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
              Our proven development process ensures high-quality AI solutions delivered on time and within budget.
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
              Real-world AI development projects showcasing our technical expertise and innovative solutions across industries.
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
            Join hundreds of companies that have accelerated their growth with our AI-powered solutions. Let's discuss how we can help you achieve your digital transformation goals.
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

export default AppliedAI;