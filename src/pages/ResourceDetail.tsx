import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, FileText, Star } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getResourceBySlug } from "@/data/resources";

const ResourceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = slug ? getResourceBySlug(slug) : undefined;

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  const isFeaturedResource = "type" in resource && "pages" in resource;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: isFeaturedResource
              ? `url(${"image" in resource ? resource.image : ""})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: isFeaturedResource ? undefined : "hsl(var(--primary))",
          }}
        >
          {isFeaturedResource && "image" in resource && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
          )}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-8 -ml-2 text-white hover:bg-white/20">
            <Link to="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </Button>
          <Badge className="mb-4 bg-white/20 text-white border-white/40">
            {isFeaturedResource ? (resource as { category: string }).category : (resource as { industry: string }).industry}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            {resource.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {resource.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-card bg-gradient-card overflow-hidden">
            <CardContent className="p-8">
              {isFeaturedResource && (
                <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {(resource as { type: string }).type}
                  </div>
                  <div className="flex items-center gap-2">
                    {(resource as { pages: number }).pages} pages
                  </div>
                  <div className="flex items-center gap-2">
                    {(resource as { size: string }).size}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    {(resource as { rating: number }).rating}
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {(resource as { downloads: number }).downloads.toLocaleString()} downloads
                  </div>
                </div>
              )}

              {!("type" in resource) && "metrics" in resource && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {(resource as { metrics: string[] }).metrics.map((metric, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {metric}
                    </Badge>
                  ))}
                </div>
              )}

              <p className="text-muted-foreground leading-relaxed mb-8">
                {resource.description}
              </p>

              <Button size="lg" className="font-semibold" asChild>
                <Link to="/contact">
                  <Download className="mr-2 h-5 w-5" />
                  Request Download
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Button variant="outline" size="lg" asChild className="mt-8">
            <Link to="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Resources
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourceDetail;
