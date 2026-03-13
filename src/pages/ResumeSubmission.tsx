import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import {
  Upload,
  FileText,
  Mail,
  Sparkles,
  Linkedin,
  Globe,
  User,
  Briefcase,
  CheckCircle,
  AlertCircle,
  Loader2,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

// ─── EmailJS config ───────────────────────────────────────────────────────────
// Re-use the same credentials from ContactSection, or set up a separate
// "resume-submission" template in your EmailJS dashboard.
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_RESUME_TEMPLATE_ID";  // Template for resumes
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

const ROLE_OPTIONS = [
  "AI / ML Engineer",
  "Generative AI Developer",
  "Software Developer (Full-Stack)",
  "Software Developer (Backend)",
  "Software Developer (Frontend)",
  "Cybersecurity Analyst",
  "Cloud & DevOps Engineer",
  "AI Consultant",
  "Business Analyst",
  "Project Manager",
  "UI / UX Designer",
  "Other / Open to All",
];

const AVAILABILITY_OPTIONS = [
  "Immediately",
  "Within 2 weeks",
  "Within 1 month",
  "Within 3 months",
  "Not actively looking — open to opportunities",
];

const WORK_TYPE_OPTIONS = [
  "Full-time",
  "Part-time",
  "Freelance / Contract",
  "Internship",
  "Open to any",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  role: string;
  portfolio: string;
  availability: string;
  workType: string;
  coverNote: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  coverNote?: string;
  resume?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL: FormState = {
  name: "", email: "", phone: "", role: "", portfolio: "",
  availability: "", workType: "", coverNote: "",
};

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_MB = 5;

function validate(f: FormState): FormErrors {
  const e: FormErrors = {};
  if (!f.name.trim()) e.name = "Full name is required.";
  if (!f.email.trim()) {
    e.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
    e.email = "Please enter a valid email address.";
  }
  if (!f.role) e.role = "Please select a role of interest.";
  if (!f.coverNote.trim()) e.coverNote = "Please write a short cover note.";
  return e;
}

const ResumeSubmission = () => {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const { toast } = useToast();

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [key]: e.target.value }));
      if (errors[key as keyof FormErrors])
        setErrors(prev => ({ ...prev, [key]: undefined }));
    },
  });

  const handleSelect = (key: keyof FormState) => (val: string) => {
    setForm(prev => ({ ...prev, [key]: val }));
    if (errors[key as keyof FormErrors])
      setErrors(prev => ({ ...prev, [key]: undefined }));
  };

  const handleFileChange = (file: File | null) => {
    if (!file) { setResumeFile(null); return; }
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setErrors(prev => ({ ...prev, resume: "Only PDF, DOC, or DOCX files are accepted." }));
      setResumeFile(null);
      return;
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setErrors(prev => ({ ...prev, resume: `File must be smaller than ${MAX_FILE_MB} MB.` }));
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
    setErrors(prev => ({ ...prev, resume: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (!resumeFile) newErrors.resume = "Please upload your resume (PDF, DOC, or DOCX).";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "—",
          role: form.role,
          portfolio: form.portfolio || "—",
          availability: form.availability || "Not specified",
          work_type: form.workType || "Not specified",
          cover_note: form.coverNote,
          resume_filename: resumeFile?.name || "—",
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm(INITIAL);
      setResumeFile(null);
      setErrors({});
      toast({ title: "Resume submitted! 🎉", description: "Our hiring team will review and reach out within 2 working days." });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      toast({
        title: "Submission failed",
        description: "Please try again or email careers@siprahub.com directly.",
        variant: "destructive",
      });
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary" asChild>
              <Link to="/careers" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Link>
            </Button>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/40 font-semibold">
              Careers at SipraHub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Send Your{" "}
              <span className="text-orange-300">Resume</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed font-medium">
              Don't see a role that fits? Share your details and let us find the right opportunity for you.
              Our hiring team reviews every submission personally.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr,0.8fr] gap-12 items-start">

            {/* ── Form Card ─────────────────────────────────────────────── */}
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-10 animate-fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">Your Details</h2>
                  <p className="text-sm text-muted-foreground">Fields marked <span className="text-primary font-medium">*</span> are required</p>
                </div>
              </div>

              {/* Success banner */}
              {status === "success" && (
                <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 animate-fade-up">
                  <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Resume submitted successfully!</p>
                    <p className="text-sm mt-0.5">We'll review your application and reach out within 2 working days.</p>
                  </div>
                </div>
              )}

              {/* Error banner */}
              {status === "error" && (
                <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 animate-fade-up">
                  <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Submission failed</p>
                    <p className="text-sm mt-0.5">
                      Please try again or email{" "}
                      <a href="mailto:careers@siprahub.com" className="underline font-medium">careers@siprahub.com</a>
                      {" "}directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-1">
                      <User className="h-4 w-4 text-muted-foreground" />
                      Full Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name" placeholder="Priya Sharma"
                      className={errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
                      aria-invalid={!!errors.name}
                      {...field("name")}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-1">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email" type="email" placeholder="you@example.com"
                      className={errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
                      aria-invalid={!!errors.email}
                      {...field("email")}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Role */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" placeholder="+91 98765 43210" {...field("phone")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      Role of Interest <span className="text-primary">*</span>
                    </Label>
                    <Select value={form.role} onValueChange={handleSelect("role")}>
                      <SelectTrigger
                        id="role"
                        className={errors.role ? "border-red-400 focus:ring-red-400" : ""}
                      >
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLE_OPTIONS.map(r => (
                          <SelectItem key={r} value={r}>{r}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.role && <p className="text-xs text-red-500">{errors.role}</p>}
                  </div>
                </div>

                {/* Portfolio + LinkedIn */}
                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="flex items-center gap-1">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    Portfolio / LinkedIn / GitHub (optional)
                  </Label>
                  <Input id="portfolio" placeholder="https://linkedin.com/in/you" {...field("portfolio")} />
                </div>

                {/* Availability + Work type */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Select value={form.availability} onValueChange={handleSelect("availability")}>
                      <SelectTrigger id="availability">
                        <SelectValue placeholder="When can you start?" />
                      </SelectTrigger>
                      <SelectContent>
                        {AVAILABILITY_OPTIONS.map(a => (
                          <SelectItem key={a} value={a}>{a}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workType">Work Type</Label>
                    <Select value={form.workType} onValueChange={handleSelect("workType")}>
                      <SelectTrigger id="workType">
                        <SelectValue placeholder="Full-time, freelance…" />
                      </SelectTrigger>
                      <SelectContent>
                        {WORK_TYPE_OPTIONS.map(w => (
                          <SelectItem key={w} value={w}>{w}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Cover Note */}
                <div className="space-y-2">
                  <Label htmlFor="coverNote">
                    Cover Note <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="coverNote"
                    placeholder="Tell us about yourself — your experience, key skills, what excites you about AI and what you're looking for."
                    rows={5}
                    className={errors.coverNote ? "border-red-400 focus-visible:ring-red-400" : ""}
                    aria-invalid={!!errors.coverNote}
                    value={form.coverNote}
                    onChange={e => {
                      setForm(prev => ({ ...prev, coverNote: e.target.value }));
                      if (errors.coverNote) setErrors(prev => ({ ...prev, coverNote: undefined }));
                    }}
                  />
                  {errors.coverNote && <p className="text-xs text-red-500">{errors.coverNote}</p>}
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    Resume / CV <span className="text-primary">*</span>
                    <span className="ml-1 text-muted-foreground font-normal">(PDF, DOC, DOCX — max {MAX_FILE_MB} MB)</span>
                  </Label>
                  <label
                    htmlFor="resume-upload"
                    onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={e => {
                      e.preventDefault();
                      setDragOver(false);
                      handleFileChange(e.dataTransfer.files?.[0] ?? null);
                    }}
                    className={[
                      "flex flex-col items-center justify-center gap-2 w-full rounded-xl border-2 border-dashed px-6 py-8 cursor-pointer transition-colors",
                      dragOver
                        ? "border-primary bg-primary/5"
                        : errors.resume
                          ? "border-red-400 bg-red-50"
                          : resumeFile
                            ? "border-green-400 bg-green-50"
                            : "border-border bg-muted/30 hover:border-primary hover:bg-primary/5",
                    ].join(" ")}
                  >
                    {resumeFile ? (
                      <>
                        <CheckCircle className="h-8 w-8 text-green-500" />
                        <span className="text-sm font-medium text-green-700 text-center break-all">{resumeFile.name}</span>
                        <span className="text-xs text-muted-foreground">Click to replace</span>
                      </>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground text-center">
                          <span className="font-semibold text-primary">Click to upload</span> or drag &amp; drop your resume
                        </span>
                        <span className="text-xs text-muted-foreground">PDF, DOC, DOCX up to {MAX_FILE_MB} MB</span>
                      </>
                    )}
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="sr-only"
                      onChange={e => handleFileChange(e.target.files?.[0] ?? null)}
                    />
                  </label>
                  {errors.resume && <p className="text-xs text-red-500">{errors.resume}</p>}
                </div>

                {/* Response time hint */}
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  We review every submission and respond within <strong>&nbsp;2 working days</strong>
                </p>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full text-base font-semibold"
                >
                  {status === "loading" ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting…</>
                  ) : (
                    <><FileText className="mr-2 h-5 w-5" /> Submit Your Resume</>
                  )}
                </Button>
              </form>
            </div>

            {/* ── Sidebar ───────────────────────────────────────────────── */}
            <div className="space-y-6 animate-fade-up delay-300">

              {/* Why join us */}
              <div className="bg-gradient-primary rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-orange-200" />
                  <h3 className="text-xl font-semibold">Why SipraHub?</h3>
                </div>
                <ul className="space-y-4 text-white/90 text-sm leading-relaxed">
                  {[
                    "Work on cutting-edge AI products used by real businesses across Healthcare, Insurance, and Publishing.",
                    "Small, elite team — your impact is visible from day one.",
                    "Remote-friendly culture with async-first collaboration.",
                    "Direct mentorship from leadership with Fortune 500 backgrounds.",
                    "Opportunity to grow into senior and lead roles as we scale.",
                  ].map(tip => (
                    <li key={tip} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-orange-200" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tips */}
              <div className="bg-white rounded-3xl shadow-card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Tips for a fast review</h3>
                </div>
                <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3">
                    <FileText className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    Include a PDF resume — keep it to 1–2 pages with quantifiable achievements.
                  </li>
                  <li className="flex items-start gap-3">
                    <Linkedin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    Add your LinkedIn or GitHub — a live profile speeds up review significantly.
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    Mention if you're open to internships, full-time, or freelance in the cover note.
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    Direct email also works:{" "}
                    <a href="mailto:careers@siprahub.com" className="text-primary font-medium hover:underline">
                      careers@siprahub.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResumeSubmission;
