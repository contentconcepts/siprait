import { useState, FormEvent } from "react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Tag,
  User,
  TrendingUp,
  Lightbulb,
  Shield,
  Code,
  Cloud,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import missionImage from "@/assets/mission-vision.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import cybersecurityImage from "@/assets/cybersecurity-hero.jpg";
import aboutImage from "@/assets/about-hero.jpg";
import { blogPosts, slugify } from "@/data/blogPosts";

const Blog = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setNewsletterEmail("");
    toast.success("Thanks for subscribing! We'll send you our latest insights.");
  };

  const categories = [
    { name: "AI Trends", count: 15, icon: TrendingUp },
    { name: "Digital Transformation", count: 12, icon: Lightbulb },
    { name: "Cybersecurity", count: 18, icon: Shield },
    { name: "Development", count: 22, icon: Code },
    { name: "Cloud Computing", count: 14, icon: Cloud },
    { name: "Healthcare AI", count: 8, icon: Brain }
  ];

  const featuredTopics = [
    {
      title: "AI Implementation Guide",
      description: "Step-by-step guide to implementing AI in your organization",
      posts: 5
    },
    {
      title: "Cloud Security Best Practices",
      description: "Essential security measures for cloud environments",
      posts: 8
    },
    {
      title: "Legacy System Modernization",
      description: "Strategies for updating and modernizing legacy systems",
      posts: 6
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
              Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Thought Leadership in{" "}
              <span className="text-orange-300">AI and Technology</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
              Stay informed with SipraHub's expert insights, industry analysis,
              and practical knowledge for your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button
                variant="glass"
                size="xl"
                className="text-xl font-semibold px-8 py-4 border-2 border-white/40 shadow-lg backdrop-blur-sm"
                onClick={() => document.getElementById("newsletter-signup")?.scrollIntoView({ behavior: "smooth" })}
              >
                Subscribe to Newsletter
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/resources">
                  Download Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Article</span>
            </h2>
          </div>

          <Card className="bg-gradient-card border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                </div>
                <div className="p-8">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Featured Article
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="lg" className="text-lg font-semibold px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                    <Link to={`/blog/${slugify(blogPosts[0].title)}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our latest insights on AI, technology trends, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="lg" className="mt-auto" asChild>
                      <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Read More
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

      {/* Categories & Topics */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Categories */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Browse by <span className="text-primary">Category</span>
              </h3>
              <div className="space-y-4">
                {categories.map((category, index) => (
                  <Link key={index} to={`/blog?category=${encodeURIComponent(category.name)}`}>
                    <Card className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-bounce">
                              <category.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                                {category.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {category.count} articles
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Topics */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Featured <span className="text-primary">Topics</span>
              </h3>
              <div className="space-y-6">
                {featuredTopics.map((topic, index) => (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {topic.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {topic.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">
                          {topic.posts} articles
                        </Badge>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to="/blog">
                            Explore
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter-signup" className="py-20 scroll-mt-24 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter and get the latest articles, insights, and resources delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email for newsletter subscription"
            />
            <Button type="submit" size="xl" className="text-xl font-semibold px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
