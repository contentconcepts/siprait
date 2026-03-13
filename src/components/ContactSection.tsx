import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, ArrowRight, Send, CheckCircle, AlertCircle, Loader2, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

// ─── EmailJS config ────────────────────────────────────────────────────────────
// Replace these three values with your real EmailJS credentials.
// 1. Go to https://www.emailjs.com and create a free account.
// 2. Add an Email Service (e.g. Gmail) and copy the Service ID.
// 3. Create an Email Template and copy the Template ID.
// 4. Copy your Public Key from Account → API Keys.
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
// ──────────────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;z
  company: string;
  service: string;
  project: string;
  contactTime: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  project?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "software-development", label: "Software Development" },
  { value: "applied-ai",           label: "Applied AI Services" },
  { value: "ai-consulting",        label: "AI Consulting Services" },
  { value: "cybersecurity",        label: "Cybersecurity" },
  { value: "cloud-infrastructure", label: "Cloud & Infrastructure" },
  { value: "odc-setup",            label: "ODC Setup" },
  { value: "maintenance",          label: "System Maintenance" },
];

const TIME_OPTIONS = [
  { value: "morning",   label: "Morning (9 AM – 12 PM)" },
  { value: "afternoon", label: "Afternoon (12 PM – 5 PM)" },
  { value: "evening",   label: "Evening (5 PM – 8 PM)" },
  { value: "flexible",  label: "Flexible" },
];

const INITIAL_FORM: FormData = {
  name: "", email: "", company: "", service: "", project: "", contactTime: "",
};

/* ─── Validation ─────────────────────────────────────────────────────────────── */
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim())
    errors.name = "Full name is required.";

  if (!data.email.trim()) {
    errors.email = "Business email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service)
    errors.service = "Please select a service.";

  if (!data.project.trim())
    errors.project = "Please describe your project.";

  return errors;
}

/* ─── Component ───────────────────────────────────────────────────────────────── */
const ContactSection = () => {
  const [form, setForm]           = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors]       = useState<FormErrors>({});
  const [status, setStatus]       = useState<SubmitStatus>("idle");
  const { toast }                 = useToast();

  /* Field helpers */
  const field = (key: keyof FormData) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [key]: e.target.value }));
      if (errors[key as keyof FormErrors])
        setErrors(prev => ({ ...prev, [key]: undefined }));
    },
  });

  const handleSelectChange = (key: keyof FormData) => (value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors])
      setErrors(prev => ({ ...prev, [key]: undefined }));
  };

  /* Submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("loading");

    const templateParams = {
      from_name:    form.name,
      from_email:   form.email,
      company:      form.company || "—",
      service:      SERVICE_OPTIONS.find(s => s.value === form.service)?.label ?? form.service,
      project:      form.project,
      contact_time: TIME_OPTIONS.find(t => t.value === form.contactTime)?.label ?? "Flexible",
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setForm(INITIAL_FORM);
      setErrors({});
      toast({
        title: "Message sent! 🎉",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at contact@siprahub.com.",
        variant: "destructive",
      });
    } finally {
      // Reset status after a short delay so the button returns to normal
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  /* ─── Render ──────────────────────────────────────────────────────────────── */
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Build and{" "}
            <span className="text-primary">Scale Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Start your AI-driven transformation with SipraHub today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Contact Form ─────────────────────────────────────────────────── */}
          <Card className="bg-gradient-card border-0 shadow-card animate-fade-up" id="contact-form">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get Free Consultation
              </h3>

              {/* ✅ Success banner */}
              {status === "success" && (
                <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 animate-fade-up">
                  <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-0.5">Our team will reach out within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* ❌ Error banner */}
              {status === "error" && (
                <div className="flex items-start gap-3 mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 animate-fade-up">
                  <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold">Failed to send message</p>
                    <p className="text-sm mt-0.5">
                      Please try again or email{" "}
                      <a href="mailto:contact@siprahub.com" className="underline font-medium">
                        contact@siprahub.com
                      </a>
                      {" "}directly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full Name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Share your full name"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      className={errors.name ? "border-red-400 focus-visible:ring-red-400" : ""}
                      {...field("name")}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Business Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@company.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      className={errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
                      {...field("email")}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Let us know your organization" {...field("company")} />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <Label htmlFor="service">
                    Service Interest <span className="text-primary">*</span>
                  </Label>
                  <Select value={form.service} onValueChange={handleSelectChange("service")}>
                    <SelectTrigger
                      id="service"
                      aria-describedby={errors.service ? "service-error" : undefined}
                      className={errors.service ? "border-red-400 focus:ring-red-400" : ""}
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map(o => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p id="service-error" className="text-xs text-red-500 mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <Label htmlFor="project">
                    Project Description <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="project"
                    placeholder="Specify needs (e.g., new development, ODC, maintenance)"
                    className={`min-h-[100px] ${errors.project ? "border-red-400 focus-visible:ring-red-400" : ""}`}
                    aria-describedby={errors.project ? "project-error" : undefined}
                    aria-invalid={!!errors.project}
                    value={form.project}
                    onChange={(e) => {
                      setForm(prev => ({ ...prev, project: e.target.value }));
                      if (errors.project) setErrors(prev => ({ ...prev, project: undefined }));
                    }}
                  />
                  {errors.project && (
                    <p id="project-error" className="text-xs text-red-500 mt-1">{errors.project}</p>
                  )}
                </div>

                {/* Preferred Contact Time */}
                <div className="space-y-2">
                  <Label htmlFor="contact-time">Preferred Contact Time</Label>
                  <Select value={form.contactTime} onValueChange={handleSelectChange("contactTime")}>
                    <SelectTrigger id="contact-time">
                      <SelectValue placeholder="Choose a convenient time" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_OPTIONS.map(o => (
                        <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Response-time hint */}
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  We typically respond within&nbsp;<strong>24 hours</strong>
                </p>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={status === "loading"}
                  className="w-full text-lg font-semibold px-6 py-4 text-primary hover:text-primary/80 shadow-lg border border-primary/20 transition-all duration-200"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 h-6 w-6" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* ── Contact Information ───────────────────────────────────────────── */}
          <div className="space-y-8 animate-fade-up delay-300">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your business? Our experts are here to help you
                navigate your AI-driven digital transformation journey.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <a
                      href="mailto:contact@siprahub.com"
                      className="text-primary font-medium text-lg hover:underline"
                    >
                      contact@siprahub.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Why Choose SipraHub?</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Free initial consultation",
                  "Tailored AI-driven solutions",
                  "Proven track record of success",
                  "24/7 ongoing support",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;