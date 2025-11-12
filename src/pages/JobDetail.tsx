import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Users, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const JobDetail = () => {
  const { jobId } = useParams();
  
  // Job data - in a real app, this would come from an API
  const jobs = {
    "1": {
      id: 1,
      title: "Software Development /Gen AI Developer Intern",
      location: "Bengaluru, Karnataka",
      workMode: "Work from Home/Hybrid",
      categories: ["Software Development", "Generative AI/AI"],
      description: "Are you ready to move beyond classroom theory and start building real software? At SipraHub, we offer a hands-on internship designed for those who learn best by doing. We're seeking passionate, self-motivated interns to join our Chennai team and contribute directly to our products.\n\nThis is not a traditional internship where you watch from the sidelines. You will be an active member of our development team from your first day, writing code, solving complex problems, and shipping features to production.",
      responsibilities: [
        "Write, test, and deploy code for our live applications",
        "Take full ownership of small projects, from initial concept to final launch",
        "Collaborate directly with our developers and designers to build and refine features",
        "Participate actively in team meetings and contribute your ideas"
      ],
      requirements: [
        "Is a natural self-starter with a strong desire to learn and grow",
        "Enjoys tinkering, building projects, and solving problems independently",
        "Has a solid foundation in at least one programming language (e.g., JavaScript, Python, etc.)",
        "Is an excellent communicator who thrives in a fast-paced environment"
      ],
      applicationInfo: "To apply, please send a brief introduction about yourself and a link to your work to contact@siprahub.com"
    },
    "2": {
      id: 2,
      title: "Business Development Executive - Generative AI Solutions",
      location: "Bengaluru, Karnataka",
      workMode: "Work from Home/Hybrid",
      category: "Sales",
      description: "We are seeking a dynamic and ambitious Business Development Executive to drive the adoption of our innovative Generative AI solutions. This is a critical role for our growth, perfect for a tech-savvy sales professional who is passionate about AI and eager to evangelize its potential to prospective clients. You will be responsible for building our sales pipeline, nurturing client relationships, and closing deals that shape the future of our business.",
      responsibilities: [
        "Identify and qualify new business opportunities through strategic prospecting, market research, industry events, and networking",
        "Develop a deep understanding of our Generative AI solutions and clearly articulate their value proposition and ROI to potential clients across various industries",
        "Manage the end-to-end sales cycle, from initial contact and discovery calls to conducting product demonstrations, preparing proposals, and negotiating contracts",
        "Build and maintain strong, long-lasting relationships with key stakeholders and decision-makers at prospective client organizations",
        "Collaborate closely with our technical and product teams to ensure client requirements are met and to provide valuable market feedback for product development",
        "Maintain accurate records of all sales activities, pipeline status, and customer interactions in our CRM system",
        "Achieve and consistently exceed monthly and quarterly sales targets"
      ],
      requirements: [
        "1-2 years of proven experience in B2B sales or business development, preferably within the SaaS, technology, or IT services sector",
        "A demonstrable track record of meeting and exceeding sales quotas",
        "Excellent communication, interpersonal, and presentation skills, with the ability to explain complex technical concepts to a non-technical audience",
        "A strong interest in and fundamental understanding of artificial intelligence, machine learning, and emerging technologies",
        "Self-motivated, results-oriented, with a proactive approach to building a robust sales pipeline",
        "Bachelor's degree in Business, Marketing, Information Technology, or a related field"
      ],
      preferredQualifications: [
        "Direct experience selling AI/ML, data analytics, or cloud solutions",
        "Familiarity with the core concepts of Generative AI (e.g., Large Language Models (LLMs), prompt engineering)",
        "An existing network of contacts in target industries such as BFSI, Retail, Healthcare, or Manufacturing"
      ],
      whatWeOffer: [
        "A competitive salary and an attractive, uncapped incentive structure",
        "Significant opportunities for professional growth and career advancement in the rapidly expanding AI industry",
        "A collaborative and innovative work environment where your contributions have a direct impact",
        "Comprehensive training on our Generative AI products and the evolving AI landscape"
      ],
      applicationInfo: "If you are a driven sales professional with a passion for cutting-edge technology, we want to hear from you. Please apply by sending your resume and a brief cover letter explaining why you are interested in selling Generative AI solutions to contact@siprahub.com"
    }
  };

  const job = jobs[jobId as keyof typeof jobs];

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-8">The job you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/careers">Back to Careers</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link to="/careers" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Careers
            </Link>
          </Button>
        </div>

        {/* Job Header */}
        <div className="bg-white rounded-lg border border-border shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{job.title}</h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {job.workMode}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {(job.categories || [job.category]).join(", ")}
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Button size="lg" asChild>
                <Link to="/careers/jobs">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white rounded-lg border border-border shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">About the Role</h2>
          <div className="prose prose-gray max-w-none">
            {job.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="bg-white rounded-lg border border-border shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">What You Will Do</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-lg border border-border shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">We Are Looking for Someone Who</h2>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preferred Qualifications (if exists) */}
        {job.preferredQualifications && (
          <div className="bg-white rounded-lg border border-border shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Preferred Qualifications (Bonus Points)</h2>
            <ul className="space-y-3">
              {job.preferredQualifications.map((qualification, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{qualification}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* What We Offer (if exists) */}
        {job.whatWeOffer && (
          <div className="bg-white rounded-lg border border-border shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
            <ul className="space-y-3">
              {job.whatWeOffer.map((offer, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{offer}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* How to Apply */}
        <div className="bg-gradient-primary rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
          <p className="text-white/90 mb-6">{job.applicationInfo}</p>
          <Button variant="outline-white" size="lg" asChild>
            <Link to="/careers/jobs">Apply Now</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetail;
