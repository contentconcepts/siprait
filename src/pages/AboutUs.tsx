import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Target, Eye, Heart, CheckCircle, Star, Award } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import missionVision from "@/assets/mission-vision.jpg";
import prasannaHeadshot from "@/assets/prasanna-headshot.jpg";
import senthilHeadshot from "@/assets/senthil-headshot.jpg";
import parthasarathyHeadshot from "@/assets/parthasarathy-headshot.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Prasanna Kumar",
      role: "CEO",
      description: "With extensive experience in setting up digital businesses and running cybersecurity operations, Prasanna provides strategic leadership and a deep understanding of business execution.",
      image: prasannaHeadshot
    },
    {
      name: "Senthil Natarajan",
      role: "Industry Advisor",
      description: "Senthil has worked with Fortune 500 companies worldwide, leading digital transformation initiatives and creating custom AI-powered solutions.",
      image: senthilHeadshot
    },
    {
      name: "Parthasarathy Ganesan",
      role: "Tech Advisor",
      description: "Parthasarathy brings invaluable insights into business process design and implementation, ensuring our solutions are not only technically sound but also seamlessly integrated into your workflows.",
      image: parthasarathyHeadshot
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We believe in honest, transparent, and ethical partnerships with our clients."
    },
    {
      icon: CheckCircle,
      title: "Innovation",
      description: "We are committed to staying ahead of the curve, continuously exploring new technologies to deliver superior results."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for the highest quality in every solution we build, ensuring it is robust, reliable, and secure."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHero} 
            alt="About SipraHub team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-accent-bright">SipraHub</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We are a team of three founders with a combined experience of over <span className="text-accent-bright font-semibold">90 years</span> in providing cutting-edge AI-powered software development solutions.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our expertise spans cybersecurity, artificial intelligence, and business process redesign, honed through years of work with <strong>Fortune 500 companies</strong> in the US and UK. We focus on building secure, efficient, and future-proof IT solutions using the latest technology stacks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just build software; we build <strong>no-nonsense IT solutions</strong> that solve real-world business problems. Our unique approach combines deep technical knowledge with strategic business insight.
              </p>
            </div>
            <div className="relative">
              <img 
                src={teamCollaboration} 
                alt="Team collaboration and innovation" 
                className="rounded-2xl shadow-hero w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={missionVision} 
                alt="Mission and vision visualization" 
                className="rounded-2xl shadow-hero w-full"
              />
            </div>
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with secure, intelligent, and scalable software solutions that drive growth and operational excellence.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a trusted partner in digital transformation, helping businesses harness the power of AI to innovate, compete, and lead in their industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core <span className="text-primary">Principles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The values that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-smooth group text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-smooth">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strength lies in the complementary expertise of our three founders
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-hero transition-smooth group">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={`${member.name} headshot`}
                      className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Approach</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What We Do and How We Do It
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We specialize in developing custom software solutions powered by AI, tailored to your specific needs. From initial strategy to final implementation, we work closely with you to understand your goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether it's enhancing cybersecurity, automating workflows, or creating intelligent business applications, we deliver solutions that provide tangible results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Expertise
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                On the business side, we leverage our experience with top analyst firms to define the best strategy for your business. On the tech front, we use a modern tech stack to deliver solutions that are not only fast and effective but also secure and designed for the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              What Our Clients Say
            </h2>
          </div>
          
          <Card className="bg-white border-0 shadow-hero">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "[Sample Client Name] and the team helped us completely transform our digital strategy. Their deep knowledge of AI and cybersecurity gave us a competitive edge we didn't have before. The project was delivered on time and exceeded our expectations."
              </p>
              <div className="text-primary font-semibold">
                [Name], [Title], [Company]
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Award className="h-12 w-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Awards and Recognition
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-4">
                  • Recognized as a Top Innovator in AI Solutions by [Publication/Organization]
                </p>
                <p className="text-lg text-muted-foreground">
                  • [List any other relevant achievements or certifications]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;