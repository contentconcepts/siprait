import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Privacy Policy for SipraHub
          </h1>
          <p className="text-muted-foreground text-sm mb-12">
            Last Updated: February 2, 2026
          </p>

          <div className="text-foreground">
            <p className="text-muted-foreground leading-relaxed mb-8">
              At SipraHub, we are committed to protecting the privacy and security of our
              users. This Privacy Policy outlines how we collect, use, disclose, and safeguard
              your information when you visit our website,{" "}
              <a href="https://www.siprahub.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30" style={{ color: '#ce2124' }}>www.siprahub.com</a>, or use our
              professional services.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that helps us provide a personalized and efficient
              experience. This includes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>
                <strong className="text-foreground">Personal Information:</strong> Information you provide directly to us, such as
                your name, email address, phone number, company name, and job title
                when you fill out a contact form or request a consultation.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> Details about your visit to our site, including your IP
                address, browser type, operating system, pages viewed, and the
                duration of your visit.
              </li>
              <li>
                <strong className="text-foreground">Cookies and Tracking:</strong> We use cookies and similar tracking
                technologies to track activity on our website and hold certain
                information to improve user experience.
              </li>
              <li>
                <strong className="text-foreground">Payment Information:</strong> If applicable, billing details are processed
                through secure, third-party payment gateways. We do not store
                sensitive cardholder data on our servers.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the data we collect for various professional purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>To provide, maintain, and improve our website and service offerings.</li>
              <li>To communicate with you regarding inquiries, project updates, or promotional materials.</li>
              <li>To analyze website traffic and usage patterns to optimize our content.</li>
              <li>To ensure the security of our platform and prevent fraudulent activity.</li>
              <li>To comply with legal obligations and industry standards.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SipraHub does not sell or rent your personal information to third parties. We
              may share your data only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>
                <strong className="text-foreground">Service Providers:</strong> With trusted third-party vendors who assist us in
                operating our website or conducting our business (e.g., hosting
                providers, analytics tools).
              </li>
              <li>
                <strong className="text-foreground">Legal Requirements:</strong> If required to do so by law or in response to
                valid requests by public authorities.
              </li>
              <li>
                <strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or asset
                sale, your information may be transferred as a business asset.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              4. Data Security
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We implement industry-standard technical and organizational measures to
              protect your personal data. While we strive to use commercially acceptable
              means to protect your information, please remember that no method of
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              5. Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We retain your personal information only for as long as is necessary for the
              purposes set out in this Privacy Policy, or to the extent necessary to comply
              with our legal obligations and resolve disputes.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our website may contain links to external sites that are not operated by us. We
              have no control over, and assume no responsibility for, the content or privacy
              practices of any third-party sites.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              7. Your Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>The right to object to our processing of your personal data.</li>
              <li>The right to withdraw consent at any time where we relied on your consent to process your information.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our services are not directed to anyone under the age of 13. We do not
              knowingly collect personally identifiable information from children.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We may update our Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the "Last
              Updated" date at the top.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-10 mb-4">
              10. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              SipraHub Website:{" "}
              <a href="https://www.siprahub.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/30" style={{ color: '#ce2124' }}>www.siprahub.com</a>
              <br />
              Email: info@siprahub.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
