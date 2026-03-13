import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import aboutImage from "@/assets/about-hero.jpg";

const PrivacyPolicy = () => {
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
              Privacy <span className="text-orange-300">Policy</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
              How SipraHub collects, uses, and protects your personal information.
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

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              SipraHub is committed to protecting the privacy and confidentiality of all personal, professional, and client information we collect.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Collection & Purpose</h2>
            <p className="text-muted-foreground mb-4">
              We gather data such as employee records, resumes, payroll details, contact information, project-related information, and IT system usage solely for legitimate business purposes, including human resource management, IT services, regulatory compliance, and ensuring the security of our systems.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Storage & Safeguards</h2>
            <p className="text-muted-foreground mb-4">
              All information is stored securely with appropriate technical and organizational safeguards, including encryption, controlled access, and regular backups, to prevent unauthorized access or misuse.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              Personal and professional data is shared internally only with authorized personnel and externally with trusted third-party service providers under strict confidentiality agreements, and only when necessary to fulfill contractual or legal obligations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Individual Rights & Retention</h2>
            <p className="text-muted-foreground mb-4">
              Individuals have the right to access, correct, or request deletion of their personal data. Data is retained only for as long as required for business, legal, or regulatory purposes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Website Visitors & Cookies</h2>
            <p className="text-muted-foreground mb-4">
              For website visitors, we handle cookies and analytics data transparently, providing options to manage preferences.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Policy Updates</h2>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy may be updated from time to time, and all updates will be communicated through our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
