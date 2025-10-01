// SipraHub IT Services Website Homepage

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import DeliveryModelsSummary from "@/components/DeliveryModelsSummary";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="mb-0">
        <HeroSection />
      </div>
      <div className="mt-0">
        <ServicesOverview />
      </div>
      <KeyFeaturesSection />
      <DeliveryModelsSummary />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
