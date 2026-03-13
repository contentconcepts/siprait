import { useEffect, useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, ExternalLink } from "lucide-react";
import heroImage from "@/assets/about-hero.jpg";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LegalSection {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface LegalPageLayoutProps {
    title: string;
    titleHighlight: string;
    subtitle: string;
    lastUpdated: string;
    sections: LegalSection[];
    /** Link to the other legal page (cross-reference) */
    crossLink: { label: string; to: string };
}

// ─── Component ────────────────────────────────────────────────────────────────

const LegalPageLayout = ({
    title,
    titleHighlight,
    subtitle,
    lastUpdated,
    sections,
    crossLink,
}: LegalPageLayoutProps) => {
    const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Highlight the TOC link whose section is currently in view
    useEffect(() => {
        observerRef.current?.disconnect();
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: "-20% 0px -70% 0px" }
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observerRef.current?.observe(el);
        });
        return () => observerRef.current?.disconnect();
    }, [sections]);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* ── Hero ──────────────────────────────────────────────────────────── */}
            <section className="relative text-white py-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/40 font-semibold">
                        Legal
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        {title} <span className="text-orange-300">{titleHighlight}</span>
                    </h1>
                    <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* ── Two-column layout ─────────────────────────────────────────────── */}
            <section className="py-16 bg-gradient-subtle">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-[260px,1fr] lg:gap-12 items-start">

                        {/* ── Sticky Sidebar (TOC) ──────────────────────────────────── */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-28 space-y-6">

                                {/* Back link */}
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </Link>

                                {/* Last updated badge */}
                                <div className="flex items-center gap-2">
                                    <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold">
                                        ✓ Updated {lastUpdated}
                                    </span>
                                </div>

                                {/* TOC */}
                                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                                        On this page
                                    </p>
                                    <nav className="space-y-1">
                                        {sections.map((s, i) => (
                                            <button
                                                key={s.id}
                                                onClick={() => scrollTo(s.id)}
                                                className={`
                          w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200
                          ${activeId === s.id
                                                        ? "bg-primary/10 text-primary font-semibold"
                                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                                    }
                        `}
                                            >
                                                <span className={`
                          text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0
                          ${activeId === s.id
                                                        ? "bg-primary text-white"
                                                        : "bg-muted text-muted-foreground"
                                                    }
                        `}>
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                <span className="leading-tight">{s.title}</span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                {/* Cross-link to other legal page */}
                                <Link
                                    to={crossLink.to}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-card border border-border hover:border-primary/40 hover:shadow-glow transition-all duration-200 group"
                                >
                                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <FileText className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Also read</p>
                                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {crossLink.label}
                                        </p>
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto shrink-0" />
                                </Link>

                            </div>
                        </aside>

                        {/* ── Article ───────────────────────────────────────────────── */}
                        <article className="space-y-6">

                            {/* Mobile: last updated + back */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 lg:hidden mb-6">
                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </Link>
                                <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold self-start sm:self-auto">
                                    ✓ Updated {lastUpdated}
                                </span>
                            </div>

                            {/* Sections */}
                            {sections.map((section, index) => (
                                <div
                                    key={section.id}
                                    id={section.id}
                                    className="bg-white rounded-2xl shadow-card border-l-4 border-primary/25 overflow-hidden scroll-mt-32 transition-all duration-200 hover:border-primary/60 hover:shadow-card"
                                >
                                    <div className="p-8">
                                        {/* Section header */}
                                        <div className="flex items-start gap-4 mb-5">
                                            <span className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <h2 className="text-xl font-bold text-foreground leading-snug pt-1.5">
                                                {section.title}
                                            </h2>
                                        </div>

                                        {/* Section body */}
                                        <div className="pl-14 text-muted-foreground leading-relaxed text-[15px]">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Mobile cross-link */}
                            <Link
                                to={crossLink.to}
                                className="lg:hidden flex items-center gap-3 p-4 rounded-2xl bg-white shadow-card border border-border hover:border-primary/40 transition-all duration-200 group"
                            >
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <FileText className="h-4 w-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Also read</p>
                                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {crossLink.label}
                                    </p>
                                </div>
                                <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto shrink-0" />
                            </Link>

                        </article>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LegalPageLayout;
