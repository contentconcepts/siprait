import { FormEvent, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { UploadCloud, FileText, Mail, Sparkles } from "lucide-react";

const ResumeSubmission = () => {
  const [jobTitle, setJobTitle] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const portfolio = data.get("portfolio")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";
    const subject = encodeURIComponent(`Resume submission${jobTitle ? ` - ${jobTitle}` : ""}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        jobTitle ? `Role of interest: ${jobTitle}` : "",
        portfolio ? `Portfolio: ${portfolio}` : "",
        "",
        "Cover Note:",
        message || "(Provided in the form)",
        "",
        "— Sent via siprahub.com careers portal",
      ]
        .filter(Boolean)
        .join("\n")
    );

    window.location.href = `mailto:careers@siprahub.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <section className="text-center space-y-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 uppercase tracking-[0.3em]">
            Careers
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Share your resume with SipraHub</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Drop us a note with your latest resume and the opportunities you’re interested in. Our hiring team reviews every
            submission and will reach out if there’s a match.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr,0.85fr]">
          <motion.article
            className="bg-card border border-border rounded-3xl p-10 shadow-lg space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <UploadCloud className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Send your details</h2>
                <p className="text-sm text-muted-foreground">
                  Fill in the form and click “Email my resume”. Your email client will open with everything pre-formatted so
                  you can attach your CV or portfolio before sending.
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Full name
                  </label>
                  <Input id="name" name="name" placeholder="Priya Sharma" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium text-muted-foreground">
                    Role of interest
                  </label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="Generative AI Developer"
                    onChange={(event) => setJobTitle(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="portfolio" className="text-sm font-medium text-muted-foreground">
                    Portfolio / LinkedIn (optional)
                  </label>
                  <Input id="portfolio" name="portfolio" placeholder="https://linkedin.com/in/you" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Cover note
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share a short intro, availability, or anything you’d like us to know."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="text-lg font-semibold">
                Email my resume
              </Button>
            </form>
          </motion.article>

          <motion.aside
            className="bg-gradient-primary text-white rounded-3xl p-10 shadow-lg space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-orange-200" />
              <h3 className="text-2xl font-semibold">Tips for a fast review</h3>
            </div>
            <ul className="space-y-4 text-white/90 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <FileText className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-200" />
                Attach a PDF resume (and portfolio links if relevant) once the email window opens.
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-200" />
                We confirm every submission to <a href="mailto:careers@siprahub.com" className="underline">careers@siprahub.com</a> within two working days.
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 mt-0.5 flex-shrink-0 text-orange-200" />
                Mention if you’re interested in internships, full-time roles, or freelance collaborations.
              </li>
            </ul>
          </motion.aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeSubmission;


