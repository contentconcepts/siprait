import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Cybersecurity from "./pages/services/Cybersecurity";
import AppliedAI from "./pages/services/AppliedAI";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
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
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/applied-ai-services" element={<AppliedAI />} />
          <Route path="/services/software-development" element={<SoftwareDevelopment />} />
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
