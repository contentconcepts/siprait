import heroImage from "@/assets/hero-bg.jpg";
import missionImage from "@/assets/mission-vision.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import cybersecurityImage from "@/assets/cybersecurity-hero.jpg";
import aboutImage from "@/assets/about-hero.jpg";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI Trends 2025: The Future of Artificial Intelligence in Business",
    excerpt:
      "Discover the latest AI innovations that are reshaping industries and transforming business operations. From generative AI to edge computing, explore what's coming next.",
    content: `Artificial intelligence continues to evolve at a rapid pace. In 2025, we're seeing generative AI mature beyond novelty into essential business infrastructure. Edge computing brings AI closer to where data is generated, enabling real-time decisions in manufacturing, healthcare, and retail.

Key trends include multimodal models that understand text, images, and audio, increased focus on AI governance and ethics, and the rise of AI-augmented development tools that accelerate software delivery. Organizations that adopt these technologies thoughtfully will gain competitive advantages in efficiency, customer experience, and innovation.`,
    author: "Sarah Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "AI Trends",
    tags: ["AI", "Technology Trends", "Business Innovation"],
    image: missionImage,
    featured: true,
  },
  {
    id: 2,
    title: "Legacy System Modernization: A Complete Guide to Digital Transformation",
    excerpt:
      "Learn how to successfully modernize legacy systems with AI-driven approaches. Discover strategies, best practices, and real-world case studies from our experts.",
    content: `Modernizing legacy systems is one of the most strategic initiatives organizations undertake. This guide walks through assessment frameworks, migration strategies, and how to integrate AI capabilities into modernized architecture. We cover incremental vs. big-bang approaches, managing technical debt, and ensuring business continuity throughout the transition.`,
    author: "Michael Rodriguez",
    date: "January 12, 2025",
    readTime: "12 min read",
    category: "Digital Transformation",
    tags: ["Legacy Systems", "Modernization", "AI Integration"],
    image: teamImage,
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices: How AI Enhances Threat Detection",
    excerpt:
      "Explore how artificial intelligence is revolutionizing cybersecurity. Learn about AI-powered threat detection, automated response systems, and proactive security measures.",
    content: `AI is transforming cybersecurity from reactive to proactive. This article covers how machine learning models detect anomalies, automate incident response, and reduce false positives. We discuss integration with SIEM platforms, the role of AI in zero-trust architectures, and how to balance automation with human oversight.`,
    author: "David Park",
    date: "January 10, 2025",
    readTime: "10 min read",
    category: "Cybersecurity",
    tags: ["AI Security", "Threat Detection", "Best Practices"],
    image: cybersecurityImage,
  },
  {
    id: 4,
    title: "Agile vs. Waterfall: Choosing the Right Development Methodology",
    excerpt:
      "A comprehensive comparison of Agile and Waterfall methodologies. Understand when to use each approach and how to optimize your development process for maximum efficiency.",
    content: `Choosing between Agile and Waterfall depends on project characteristics, team structure, and organizational culture. This guide compares both methodologies, discusses hybrid approaches, and provides decision frameworks. We also explore how AI-assisted project management tools are changing the landscape.`,
    author: "Lisa Thompson",
    date: "January 8, 2025",
    readTime: "7 min read",
    category: "Development",
    tags: ["Agile", "Waterfall", "Project Management"],
    image: teamImage,
  },
  {
    id: 5,
    title: "Cloud Migration Strategies: Moving to the Cloud Successfully",
    excerpt:
      "Navigate your cloud migration journey with confidence. Learn about different migration strategies, common pitfalls to avoid, and how to ensure a smooth transition.",
    content: `Cloud migration requires careful planning across people, process, and technology. We cover lift-and-shift vs. refactoring, multi-cloud considerations, cost optimization, and change management. Real-world examples illustrate how organizations have achieved successful migrations while minimizing disruption.`,
    author: "James Wilson",
    date: "January 5, 2025",
    readTime: "9 min read",
    category: "Cloud Computing",
    tags: ["Cloud Migration", "Infrastructure", "Best Practices"],
    image: heroImage,
  },
  {
    id: 6,
    title: "Machine Learning in Healthcare: Transforming Patient Care",
    excerpt:
      "Discover how machine learning is revolutionizing healthcare delivery. Explore real-world applications, success stories, and the future of AI in medical diagnosis and treatment.",
    content: `Machine learning is enabling breakthroughs in diagnosis, treatment personalization, and operational efficiency. This article explores applications in medical imaging, clinical decision support, and predictive analytics. We discuss regulatory considerations, data privacy, and the importance of human-in-the-loop AI in healthcare.`,
    author: "Dr. Maria Garcia",
    date: "January 3, 2025",
    readTime: "11 min read",
    category: "Healthcare AI",
    tags: ["Machine Learning", "Healthcare", "Medical AI"],
    image: aboutImage,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => slugify(post.title) === slug);
}
