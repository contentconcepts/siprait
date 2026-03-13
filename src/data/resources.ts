import missionImage from "@/assets/mission-vision.jpg";
import cybersecurityImage from "@/assets/cybersecurity-hero.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

export interface FeaturedResource {
  id: number;
  title: string;
  description: string;
  type: string;
  size: string;
  pages: number;
  downloads: number;
  rating: number;
  category: string;
  image: string;
  featured?: boolean;
}

export interface CaseStudyResource {
  industry: string;
  title: string;
  description: string;
  metrics: string[];
  slug: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const featuredResources: FeaturedResource[] = [
  {
    id: 1,
    title: "AI Strategy Implementation Guide",
    description:
      "Complete roadmap for implementing AI in your organization, including ROI analysis, technology selection, and change management strategies.",
    type: "PDF Guide",
    size: "2.4 MB",
    pages: 45,
    downloads: 1250,
    rating: 4.8,
    category: "AI Strategy",
    image: missionImage,
    featured: true,
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices Checklist",
    description:
      "Comprehensive checklist covering all aspects of cybersecurity for modern businesses, including AI-specific security considerations.",
    type: "PDF Checklist",
    size: "1.2 MB",
    pages: 28,
    downloads: 980,
    rating: 4.9,
    category: "Security",
    image: cybersecurityImage,
  },
  {
    id: 3,
    title: "Legacy System Modernization Framework",
    description:
      "Step-by-step framework for modernizing legacy systems with AI integration, including risk assessment and migration strategies.",
    type: "PDF Framework",
    size: "3.1 MB",
    pages: 52,
    downloads: 750,
    rating: 4.7,
    category: "Modernization",
    image: teamImage,
  },
];

export const caseStudyResources: CaseStudyResource[] = [
  {
    industry: "Healthcare",
    title: "AI-Powered Diagnostic System Implementation",
    description:
      "How a major hospital system reduced diagnostic time by 60% using custom AI solutions",
    metrics: ["60% faster diagnosis", "95% accuracy rate", "$2M annual savings"],
    slug: "case-study-healthcare-ai",
  },
  {
    industry: "Financial Services",
    title: "Fraud Detection System Modernization",
    description:
      "Transforming legacy fraud detection with AI-powered real-time analysis",
    metrics: ["40% fraud reduction", "99.9% uptime", "ROI 300% in 6 months"],
    slug: "case-study-fintech-fraud",
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance Implementation",
    description:
      "Implementing AI-driven predictive maintenance to reduce downtime and costs",
    metrics: [
      "50% downtime reduction",
      "25% maintenance cost savings",
      "15% efficiency increase",
    ],
    slug: "case-study-manufacturing-ai",
  },
];

export function getResourceBySlug(slug: string): FeaturedResource | CaseStudyResource | undefined {
  const featured = featuredResources.find((r) => slugify(r.title) === slug);
  if (featured) return featured;
  return caseStudyResources.find((r) => r.slug === slug);
}
