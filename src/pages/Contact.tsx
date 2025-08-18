import { useState, useEffect, useRef } from "react"; // Added useRef
import emailjs from '@emailjs/browser'; // Added EmailJS import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, MessageSquare, Loader2 } from "lucide-react"; // Added Loader2 icon
import { useToast } from "@/hooks/use-toast";

// --- Accessing Environment Variables ---
// Vite exposes env variables on the import.meta.env object.
// Make sure your .env file has these variables prefixed with VITE_
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null); // Added a ref for the form
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // This hook correctly checks for URL params on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject');
    if (subject) {
      setFormData(prev => ({ ...prev, subject: decodeURIComponent(subject) }));
    }
  }, []); // Empty dependency array ensures this runs only once

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "Email service is not configured correctly. Please contact support.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true); // Set loading to true

    try {
      // --- EmailJS Integration ---
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY);

      toast({
        title: "Message Sent! �",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("FAILED...", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medium border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl font-playfair font-bold">
                Contact Farm with AI
              </CardTitle>
              <p className="text-muted-foreground">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* --- Added the ref to the form element --- */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name" // This name MUST match your EmailJS template variable
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email" // This name MUST match your EmailJS template variable
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject" // This name MUST match your EmailJS template variable
                    type="text"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message" // This name MUST match your EmailJS template variable
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                {/* --- Updated Button with loading state --- */}
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-smooth" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Additional Contact Information */}
              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="font-playfair font-semibold text-lg">Other Ways to Reach Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold">General Inquiries</h4>
                    <p className="text-muted-foreground">team@farmwithai.com</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Technical Support</h4>
                    <p className="text-muted-foreground">support@farmwithai.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;