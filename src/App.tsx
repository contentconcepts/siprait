import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Cybersecurity from "./pages/services/Cybersecurity";
import AppliedAI from "./pages/services/AppliedAI";
import AIAdvisoryConsulting from "./pages/services/AIAdvisoryConsulting";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import SoftwareDeliveryModels from "./pages/services/SoftwareDeliveryModels";
import AIConsulting from "./pages/services/AIConsulting";
import CloudInfra from "./pages/services/CloudInfra";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/ai-services" element={<AppliedAI />} />
          <Route path="/services/ai-advisory-consulting" element={<AIAdvisoryConsulting />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/software-delivery-models" element={<SoftwareDeliveryModels />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/cloud-infra" element={<CloudInfra />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
