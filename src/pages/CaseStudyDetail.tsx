import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
// Import case study images
import dhiChatInterface from "@/assets/dhi-chat-interface.png";
import dhiLandingPage from "@/assets/dhi-landing-page.png";
import copilotInterface from "@/assets/copilot-interface.png";

const CaseStudyDetail = () => {
  const { id } = useParams();
  
  // Case study data - in a real app, this would come from an API
  const caseStudies: Record<string, any> = {
    "1": {
      id: 1,
      title: "Digital Assistant for Clinic - 24/7 Patient Queries",
      company: "Poorna Neuro",
      industry: "Healthcare",
      useCase: "24/7 Patient Support",
      businessFunction: "Patient Services",
      aiTechnologies: ["Natural Language Processing", "Voice AI", "Multilingual AI"],
      metrics: [
        { label: "Languages Supported", value: "6" },
        { label: "Availability", value: "24/7" },
        { label: "Staff Time Freed", value: "40%" }
      ],
      stats: {
        duration: "3 months",
        team: "5 AI engineers",
        revenue: "N/A",
        employees: "20+"
      },
      about: "Poorna Neuro is a specialized neurology clinic providing comprehensive neurological care to patients. With a diverse patient base speaking multiple regional languages, the clinic needed to ensure consistent, accessible communication across all touchpoints.",
      challenge: "Patients needed doctor, service and location details outside clinic hours, but had no way to get instant answers. Administrative staff were overloaded with repetitive queries, pulling time from complex tasks. The clinic wanted consistent, accurate, multilingual information for a diverse patient base.",
      challengeQuote: "Our patients were calling after hours with basic questions, and we had no way to help them. Our staff was spending too much time on repetitive queries when they should have been focused on more important tasks.",
      solution: "SipraHub built 'Dhi', a natural voice and text assistant with low-latency audio for hands-free conversations. The solution provides full multilingual support across six regional languages (English, Hindi, Tamil, Telugu, Kannada, Malayalam) to maximise accessibility. Safety guardrails restrict knowledge to verified clinic information and politely decline medical advice, ensuring patient safety and regulatory compliance.",
      solutionQuote: "With Dhi, our patients can get instant answers at any hour, in their preferred language. The system has transformed how we communicate with our patients and freed up our staff to focus on what matters most.",
      results: [
        "Patients receive instant, accurate answers at any hour, in their preferred language and mode",
        "Staff time is freed for scheduling, billing and patient care, improving operational efficiency",
        "A modern digital front door that strengthens the clinic's brand and accessibility",
        "40% reduction in administrative staff workload handling routine queries",
        "Support for 6 regional languages ensuring accessibility for diverse patient base",
        "24/7 availability providing consistent service outside clinic hours"
      ],
      testimonial: "Dhi has been a game-changer for our clinic. Our patients love the instant responses in their preferred language, and our staff can focus on more meaningful work. This is the future of patient communication.",
      testimonialAuthor: "Dr. Rajesh B Iyer",
      testimonialRole: "",
      testimonialCompany: "Poorna Neuro",
      images: [
        {
          url: dhiChatInterface,
          alt: "Dhi AI Assistant Chat Interface",
          caption: "Dhi's conversational interface provides instant responses to patient queries"
        },
        {
          url: dhiLandingPage,
          alt: "Meet Dhi - Your 24/7 Healthcare Assistant",
          caption: "Dhi supports six regional languages for maximum accessibility"
        }
      ]
    },
    "2": {
      id: 2,
      title: "AI Service Desk Co-pilot for Insurance",
      company: "Insurance Company",
      industry: "Insurance",
      useCase: "Live Agent Augmentation",
      businessFunction: "Customer Support",
      aiTechnologies: ["Natural Language Processing", "Sentiment Analysis", "Knowledge Management"],
      metrics: [
        { label: "Resolution Time", value: "-30%" },
        { label: "Service Quality", value: "+45%" },
        { label: "Training Time", value: "-50%" }
      ],
      stats: {
        duration: "2 months",
        team: "4 AI specialists",
        revenue: "N/A",
        employees: "150+"
      },
      about: "A leading insurance company with a large customer support team handling thousands of live chat interactions daily. The company needed to improve service quality and consistency while reducing the time and cost of training new agents.",
      challenge: "Service quality varied in stressful live chats and empathy was inconsistent. Agents spent time identifying intent and sentiment, extracting policy data and searching knowledge. There was no real-time procedural guidance on next best actions, which increased handling time and errors.",
      challengeQuote: "Our agents were struggling to maintain consistent quality during high-pressure interactions. They spent too much time searching for information instead of helping customers, and we saw service quality varying significantly across our team.",
      solution: "SipraHub developed an AI co-pilot that provides live analysis of customer intent and sentiment so agents understand goals and tone instantly. The system offers one-click suggested replies plus automatic extraction of key details like policy numbers and names. Contextual checklists and quick actions enable agents to take immediate action, for example opening a claim form directly from the chat.",
      solutionQuote: "The AI co-pilot has transformed how our agents work. They get instant insights into customer needs and sentiment, with suggested responses and actions that help them resolve issues faster and more empathetically.",
      results: [
        "Faster resolutions with fewer errors through real-time co-pilot support",
        "More consistent, empathetic responses that raise service quality",
        "Lower training time and higher agent productivity, leading to happier customers",
        "30% reduction in average resolution time",
        "45% improvement in customer satisfaction scores",
        "50% reduction in new agent training time"
      ],
      testimonial: "The AI co-pilot has revolutionized our customer support operations. Our agents are more confident, efficient, and empathetic. Customer satisfaction has soared, and we're able to get new agents productive much faster.",
      testimonialAuthor: "Sarah Williams",
      testimonialRole: "Head of Customer Support",
      testimonialCompany: "Insurance Company",
      images: [
        {
          url: copilotInterface,
          alt: "AI Co-Pilot Real-time Assistance Interface",
          caption: "Real-time intent and sentiment analysis with suggested responses for faster, more empathetic customer support"
        }
      ]
    },
    "3": {
      id: 3,
      title: "Editorial Management Platform",
      company: "ContentConcepts Editorial Services",
      industry: "Publishing",
      useCase: "End-to-end Manuscript Editing Workflow",
      businessFunction: "Operations",
      aiTechnologies: ["Workflow Automation", "Document Management", "Authentication Systems"],
      metrics: [
        { label: "User Roles", value: "3" },
        { label: "Email Templates", value: "7" },
        { label: "Workflow Automation", value: "100%" }
      ],
      stats: {
        duration: "4 months",
        team: "6 developers",
        revenue: "N/A",
        employees: "15+"
      },
      about: "ContentConcepts Editorial Services is a USA-based editorial services company providing manuscript editing services to academic and professional clients. With a distributed team of editors and growing client base, they needed a comprehensive platform to manage the entire editing workflow from quote request to final delivery.",
      challenge: "ContentConcepts faced significant operational challenges with conflicting role models between platform roles and application roles, unreliable authentication and redirect handling during sign-in and sign-out, and complex status management across customers, editors, and administrators. Additionally, handling uploads and versions of original and edited files required reliable feedback mechanisms to ensure smooth operations.",
      challengeQuote: "We needed a platform that could seamlessly manage the entire manuscript editing workflow while handling multiple user roles, complex status transitions, and reliable file management. Our existing processes were manual and error-prone.",
      solution: "SipraHub developed a comprehensive editorial management platform with a clear multi-role model using a custom 'app_role' field, role-based routing, and granular permissions. The platform includes a public quote flow with real-time pricing by word count and service type, delivery estimates, document upload, and automatic job IDs with PR-, SE-, and PE- prefixes. The customer dashboard enables quote requests, simulated payments, status tracking, and file downloads. The editor dashboard supports assignment acceptance/rejection, multi-file uploads, progress tracking with status badges, and completion emails. An admin panel provides live statistics, order assignment, user management, and an email template manager. The solution features stable Google OAuth with fallback methods, error handling, explicit redirect URLs, and robust Base64 file handling with array-based document storage and progress indicators.",
      solutionQuote: "The platform has transformed our operations. We now have complete visibility into every manuscript's journey, automated notifications keep everyone informed, and our editors can focus on what they do best—editing.",
      results: [
        "Streamlined operations through automated assignment and notifications",
        "Role-based access with tailored interfaces for each user type (customers, editors, administrators)",
        "Real-time tracking that gives all stakeholders visibility of manuscript status",
        "Scalable, modular architecture that supports rapid feature additions",
        "Professional, responsive user experience with clear loading, error and success states",
        "Seven automated email templates for new orders, assignments, acceptances, rejections, and completions",
        "Reliable file handling with progress indicators and version management"
      ],
      testimonial: "SipraHub's editorial management platform has completely transformed how we operate. Our team can now manage hundreds of manuscripts simultaneously with complete visibility and control. The automated workflows save us countless hours every week.",
      testimonialAuthor: "Sarah Miller",
      testimonialRole: "Operations Director",
      testimonialCompany: "ContentConcepts Editorial Services"
    }
  };

  const study = caseStudies[id || ""];

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden" style={{ backgroundColor: '#ce2124' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary" asChild>
              <Link to="/case-studies" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/40">
              {study.industry}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {study.title}
            </h1>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {study.metrics.map((metric: any, index: number) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm text-white/80 leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{study.about}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Industry</div>
              <div className="font-semibold text-foreground text-lg">{study.industry}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Company Size</div>
              <div className="font-semibold text-foreground text-lg">{study.stats.employees}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Duration</div>
              <div className="font-semibold text-foreground text-lg">{study.stats.duration}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Team Size</div>
              <div className="font-semibold text-foreground text-lg">{study.stats.team}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Challenge</h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            {study.company} sought a solution to address their business challenges
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.challenge}</p>
          {study.challengeQuote && (
            <div className="bg-white rounded-lg p-6 border-l-4 border-primary mt-8">
              <p className="text-lg italic text-foreground mb-4">"{study.challengeQuote}"</p>
              <div className="text-sm text-muted-foreground">
                — {study.testimonialAuthor}{study.testimonialRole && `, ${study.testimonialRole}`}, {study.testimonialCompany}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Solution</h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            SipraHub helps {study.company} achieve their goals without sacrificing performance
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.solution}</p>
          {study.solutionQuote && (
            <div className="bg-gradient-subtle rounded-lg p-6 border-l-4 border-primary mt-8">
              <p className="text-lg italic text-foreground mb-4">"{study.solutionQuote}"</p>
              <div className="text-sm text-muted-foreground">
                — {study.testimonialAuthor}{study.testimonialRole && `, ${study.testimonialRole}`}, {study.testimonialCompany}
              </div>
            </div>
          )}

          {/* Solution Images */}
          {study.images && study.images.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-8">
              {study.images.map((image: any, index: number) => (
                <div key={index} className="space-y-3">
                  <div className="rounded-lg overflow-hidden border border-border shadow-lg bg-white">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-auto"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-center text-muted-foreground italic">{image.caption}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Benefits</h2>
          <p className="text-xl font-semibold text-foreground mb-6">
            {study.company} transforms operations from a challenge to a competitive advantage
          </p>
          
          <ul className="space-y-3 mb-12 list-none">
            {study.results.map((result: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span className="text-lg text-foreground">{result}</span>
              </li>
            ))}
          </ul>

          {/* Testimonial Quote */}
          <div className="bg-white rounded-lg p-8 border border-border shadow-card">
            <p className="text-xl italic text-foreground mb-6 leading-relaxed">
              "{study.testimonial}"
            </p>
            <div>
              <div className="font-semibold text-foreground">{study.testimonialAuthor}</div>
              <div className="text-sm text-muted-foreground">
                {study.testimonialRole ? `${study.testimonialRole}, ` : ''}{study.testimonialCompany}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#5B5B5B' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join {study.company} and other successful businesses that have transformed 
            their operations with SipraHub's AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-white" size="lg" asChild>
              <Link to="/contact" className="text-white">
                Schedule Consultation
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-white/80">
            <p>contact@siprahub.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
