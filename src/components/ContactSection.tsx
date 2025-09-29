import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
    plan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createContact = useMutation(api.contacts.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createContact({
        name: formData.name,
        email: formData.email,
        business: formData.business || undefined,
        message: formData.message || undefined,
        plan: formData.plan || undefined,
      });

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        business: "",
        message: "",
        plan: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Build Something{" "}
            <span className="text-[#C4B5FD] font-serif italic">Amazing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-[#00B2A9]"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-[#00B2A9]"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Business/Company
                  </label>
                  <Input
                    type="text"
                    value={formData.business}
                    onChange={(e) => handleInputChange("business", e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-[#00B2A9]"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Interested Plan
                  </label>
                  <Select value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="essential">Essential - ₹25,000</SelectItem>
                      <SelectItem value="growth">Growth - ₹75,000</SelectItem>
                      <SelectItem value="authority">Authority - ₹1,50,000</SelectItem>
                      <SelectItem value="custom">Custom Solution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-[#00B2A9] min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF3131] hover:bg-[#FF3131]/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                Alternative Ways to Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#FF3131]/20 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-[#FF3131]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">WhatsApp</h4>
                    <p className="text-gray-400">Direct chat for quick questions</p>
                    <Button
                      variant="link"
                      className="text-[#FF3131] p-0 h-auto hover:text-[#FF3131]/80"
                      onClick={() => window.open("https://wa.me/918904009869", "_blank")}
                    >
                      Start Chat →
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#FF3D81]/20 rounded-xl">
                  <Mail className="h-6 w-6 text-[#FF3131]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">vex1l.vx@gmail.com</p>
                    <Button
                      variant="link"
                      className="text-[#FF3131] p-0 h-auto hover:text-[#FF3131]/80"
                      onClick={() => window.open("mailto:vex1l.vx@gmail.com", "_blank")}
                    >
                      Send Email →
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#FF3D81]/20 rounded-xl">
                  <Phone className="h-6 w-6 text-[#FF3131]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Quick Payment</h4>
                    <p className="text-gray-400">Ready to get started?</p>
                    <Button
                      variant="link"
                      className="text-[#00B2A9] p-0 h-auto hover:text-[#00B2A9]/80"
                    >
                      Pay Now →
                    </Button>
                  </div>
                </div>
              </div>
            </div>

              <div className="bg-gradient-to-br from-[#FF3D81]/10 to-[#C4B5FD]/10 border border-[#FF3D81]/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-[#C4B5FD] mb-2">
                Response Time
              </h4>
              <p className="text-gray-300 text-sm">
                We typically respond within 2-4 hours during business hours (9 AM - 6 PM IST).
                For urgent projects, WhatsApp is your fastest option.
              </p>
            </div>

            {/* Social Profiles */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Social Profiles</h3>
              <p className="text-gray-400 text-sm mb-4">
                Follow us for updates and case studies.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="group">
                  <div className="w-12 h-12 rounded-xl bg-[#FF3131]/20 flex items-center justify-center border border-white/10 group-hover:bg-[#FF3131]/30 transition-colors">
                    <Instagram className="h-6 w-6 text-[#FF3131]" />
                  </div>
                </a>
                <a href="#" aria-label="Twitter" className="group">
                  <div className="w-12 h-12 rounded-xl bg-[#FF3131]/20 flex items-center justify-center border border-white/10 group-hover:bg-[#FF3131]/30 transition-colors">
                    <Twitter className="h-6 w-6 text-[#FF3131]" />
                  </div>
                </a>
                <a href="#" aria-label="Facebook" className="group">
                  <div className="w-12 h-12 rounded-xl bg-[#FF3131]/20 flex items-center justify-center border border-white/10 group-hover:bg-[#FF3131]/30 transition-colors">
                    <Facebook className="h-6 w-6 text-[#FF3131]" />
                  </div>
                </a>
                <a href="#" aria-label="YouTube" className="group">
                  <div className="w-12 h-12 rounded-xl bg-[#FF3131]/20 flex items-center justify-center border border-white/10 group-hover:bg-[#FF3131]/30 transition-colors">
                    <Youtube className="h-6 w-6 text-[#FF3131]" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}