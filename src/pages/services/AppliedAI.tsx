import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Code, Zap, Shield, Target, Clock, CheckCircle, Search, TrendingUp, BarChart3, Lightbulb, Users } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${missionImage})`,
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
              AI Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              AI Services{" "}
              <span className="text-orange-300">Advanced AI Development & Implementation</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Build custom AI solutions with our expert development team. From machine learning models to real-time AI systems, we deliver cutting-edge AI technologies that solve complex business challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button variant="glass" size="xl" className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm" asChild>
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
              Comprehensive AI development services covering machine learning, deep learning, computer vision, and real-time AI systems.
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