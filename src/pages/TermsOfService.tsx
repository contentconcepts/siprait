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
              Last updated: February 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using the SipraHub website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Use of Services</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use our website and services only for lawful purposes. You may not use our services to transmit harmful code, violate any applicable laws, or infringe on the rights of others.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content on this website, including text, graphics, logos, and software, is the property of SipraHub or its licensors and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              Our website and services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or that our services will be error-free.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law, SipraHub shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.
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
