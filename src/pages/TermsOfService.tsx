import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import aboutImage from "@/assets/about-hero.jpg";

const TermsOfService = () => {
  return (
    <PageLayout>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/40 font-semibold">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Terms of <span className="text-orange-300">Service</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
              Terms and conditions governing your use of SipraHub's website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8 -ml-2">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <article className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-6">
              Last updated: March 2026
            </p>

            <p className="text-muted-foreground mb-8">
              Welcome to SipraHub. By accessing or using our services—including our website, HR system, or IT solutions—you agree to comply with these Terms and Services. Please read them carefully before using our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By using our services, you confirm that you have read, understood, and agree to these Terms and Services and all applicable laws and regulations. If you do not agree, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Services Provided</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>IT services, project management support, manpower and HR solutions, and related consulting services.</li>
              <li>Services are provided according to agreements made between the company and clients, employees, or contractors.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Provide accurate, complete, and up-to-date information when accessing our services.</li>
              <li>Keep login credentials, accounts, and any personal or professional data secure and confidential.</li>
              <li>Do not engage in unauthorized or unlawful use of the system, including hacking, sharing confidential information, or disrupting services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Company Responsibilities</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Deliver services with reasonable skill, care, and professionalism.</li>
              <li>Implement security measures to protect user data and service integrity; however, absolute security cannot be guaranteed.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Intellectual Property</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>All content, software, tools, and materials provided by SipraHub are proprietary and protected under intellectual property laws.</li>
              <li>Users may not copy, modify, distribute, or use any content without prior written consent.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Limitation of Liability</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>SipraHub is not liable for indirect, incidental, or consequential damages arising from the use of our services.</li>
              <li>Liability for direct damages is limited to the value of services provided under the applicable agreement.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Termination</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Access to services may be suspended or terminated if a user violates these Terms or engages in unlawful activity.</li>
              <li>Users may terminate their use by discontinuing access or notifying the company.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Amendments</h2>
            <p className="text-muted-foreground mb-4">
              These Terms may be updated periodically. Updated versions will be published on our website and take effect immediately upon posting.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These Terms are governed by the laws of India. Any disputes arising from these Terms will be resolved in the courts of Bengaluru, India.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:contact@siprahub.com" className="text-primary hover:underline">
                contact@siprahub.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsOfService;
