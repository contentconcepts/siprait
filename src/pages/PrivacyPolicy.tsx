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
              Last updated: February 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              SipraHub ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect personal information that you voluntarily provide when you contact us, subscribe to our newsletter, apply for a job, or request a consultation. This may include your name, email address, phone number, and any information you include in messages or attachments.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to respond to your inquiries, process job applications, send newsletters (with your consent), improve our services, and comply with legal obligations.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share information with service providers who assist our operations, or when required by law.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
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
