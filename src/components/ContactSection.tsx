import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, ArrowRight, Send } from "lucide-react";

const ContactSection = () => {
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
            Get in touch with our experts to discuss your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get Free Consultation
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Share your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email</Label>
                    <Input id="email" type="email" placeholder="your@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Let us know your organization" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-development">Software Development</SelectItem>
                      <SelectItem value="applied-ai">Applied AI Services</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="it-staffing">IT Staffing</SelectItem>
                      <SelectItem value="odc-setup">ODC Setup</SelectItem>
                      <SelectItem value="maintenance">System Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Project Description</Label>
                  <Textarea 
                    id="project" 
                    placeholder="Specify needs (e.g., new development, ODC, maintenance)"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-time">Preferred Contact Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a convenient time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                      <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to transform your business? Our experts are here to help you 
                navigate your AI-driven digital transformation journey.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground">info@siprahub.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1-800-SIPRAHUB</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-primary rounded-xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-4">Why Choose SipraHub?</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-3" />
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-3" />
                  Tailored AI-driven solutions
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-3" />
                  Proven track record of success
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 mr-3" />
                  24/7 ongoing support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;