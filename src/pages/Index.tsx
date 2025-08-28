// SipraHub IT Services Website Homepage

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <KeyFeaturesSection />
      <AboutSection />
      <ServicesOverview />
      <IndustriesSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
