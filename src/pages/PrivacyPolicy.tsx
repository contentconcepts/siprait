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
              Last Updated: February 2, 2026
            </p>

            <p className="text-muted-foreground mb-8">
              At SipraHub, we are committed to protecting the privacy and security of our users. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, <a href="https://www.siprahub.com" className="text-primary hover:underline">www.siprahub.com</a>, or use our professional services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information that helps us provide a personalized and efficient experience. This includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Personal Information:</strong> Information you provide directly to us, such as your name, email address, phone number, company name, and job title when you fill out a contact form or request a consultation.</li>
              <li><strong>Usage Data:</strong> Details about your visit to our site, including your IP address, browser type, operating system, pages viewed, and the duration of your visit.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve user experience.</li>
              <li><strong>Payment Information:</strong> If applicable, billing details are processed through secure, third-party payment gateways. We do not store sensitive cardholder data on our servers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the data we collect for various professional purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>To provide, maintain, and improve our website and service offerings.</li>
              <li>To communicate with you regarding inquiries, project updates, or promotional materials.</li>
              <li>To analyze website traffic and usage patterns to optimize our content.</li>
              <li>To ensure the security of our platform and prevent fraudulent activity.</li>
              <li>To comply with legal obligations and industry standards.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-4">
              SipraHub does not sell or rent your personal information to third parties. We may share your data only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website or conducting our business (e.g., hosting providers, analytics tools).</li>
              <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred as a business asset.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement industry-standard technical and organizational measures to protect your personal data. While we strive to use commercially acceptable means to protect your information, please remember that no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or to the extent necessary to comply with our legal obligations and resolve disputes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Third-Party Links</h2>
            <p className="text-muted-foreground mb-4">
              Our website may contain links to external sites that are not operated by us. We have no control over, and assume no responsibility for, the content or privacy practices of any third-party sites.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right to object to our processing of your personal data.</li>
              <li>The right to withdraw consent at any time where we relied on your consent to process your information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground mb-4">
              Our services are not directed to anyone under the age of 13. We do not knowingly collect personally identifiable information from children.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none text-muted-foreground mb-4 space-y-1">
              <li><strong>SipraHub Website:</strong> <a href="https://www.siprahub.com" className="text-primary hover:underline">www.siprahub.com</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@siprahub.com" className="text-primary hover:underline">info@siprahub.com</a></li>
            </ul>
          </article>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
