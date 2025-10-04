import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { useMutation, useAction } from "convex/react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    countryCode: "+91",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createContact = useMutation(api.contacts.create);
  const sendContactEmail = useAction(api.emails.sendContactEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        business: formData.business || undefined,
        phone: formData.phone ? `${formData.countryCode}${formData.phone}` : undefined,
        message: formData.message || undefined,
      };

      // Save to database
      await createContact(contactData);

      // Send email notification
      await sendContactEmail(contactData);

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        business: "",
        phone: "",
        countryCode: "+91",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Let's Build Something{" "}
            <span className="text-[#C4B5FD] font-serif italic">Amazing</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project.
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
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange("countryCode", e.target.value)}
                    className="bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 focus:border-[#00B2A9] focus:outline-none focus:ring-1 focus:ring-[#00B2A9] w-24"
                  >
                    <option value="+93">🇦🇫 +93</option>
                    <option value="+355">🇦🇱 +355</option>
                    <option value="+213">🇩🇿 +213</option>
                    <option value="+376">🇦🇩 +376</option>
                    <option value="+244">🇦🇴 +244</option>
                    <option value="+54">🇦🇷 +54</option>
                    <option value="+374">🇦🇲 +374</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+43">🇦🇹 +43</option>
                    <option value="+994">🇦🇿 +994</option>
                    <option value="+973">🇧🇭 +973</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+375">🇧🇾 +375</option>
                    <option value="+32">🇧🇪 +32</option>
                    <option value="+501">🇧🇿 +501</option>
                    <option value="+975">🇧🇹 +975</option>
                    <option value="+591">🇧🇴 +591</option>
                    <option value="+387">🇧🇦 +387</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+673">🇧🇳 +673</option>
                    <option value="+359">🇧🇬 +359</option>
                    <option value="+855">🇰🇭 +855</option>
                    <option value="+237">🇨🇲 +237</option>
                    <option value="+1">🇨🇦 +1</option>
                    <option value="+56">🇨🇱 +56</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+57">🇨🇴 +57</option>
                    <option value="+506">🇨🇷 +506</option>
                    <option value="+385">🇭🇷 +385</option>
                    <option value="+53">🇨🇺 +53</option>
                    <option value="+357">🇨🇾 +357</option>
                    <option value="+420">🇨🇿 +420</option>
                    <option value="+45">🇩🇰 +45</option>
                    <option value="+593">🇪🇨 +593</option>
                    <option value="+20">🇪🇬 +20</option>
                    <option value="+503">🇸🇻 +503</option>
                    <option value="+372">🇪🇪 +372</option>
                    <option value="+251">🇪🇹 +251</option>
                    <option value="+358">🇫🇮 +358</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+995">🇬🇪 +995</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+233">🇬🇭 +233</option>
                    <option value="+30">🇬🇷 +30</option>
                    <option value="+502">🇬🇹 +502</option>
                    <option value="+509">🇭🇹 +509</option>
                    <option value="+504">🇭🇳 +504</option>
                    <option value="+852">🇭🇰 +852</option>
                    <option value="+36">🇭🇺 +36</option>
                    <option value="+354">🇮🇸 +354</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+98">🇮🇷 +98</option>
                    <option value="+964">🇮🇶 +964</option>
                    <option value="+353">🇮🇪 +353</option>
                    <option value="+972">🇮🇱 +972</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+962">🇯🇴 +962</option>
                    <option value="+7">🇰🇿 +7</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+965">🇰🇼 +965</option>
                    <option value="+996">🇰🇬 +996</option>
                    <option value="+856">🇱🇦 +856</option>
                    <option value="+371">🇱🇻 +371</option>
                    <option value="+961">🇱🇧 +961</option>
                    <option value="+218">🇱🇾 +218</option>
                    <option value="+370">🇱🇹 +370</option>
                    <option value="+352">🇱🇺 +352</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+960">🇲🇻 +960</option>
                    <option value="+356">🇲🇹 +356</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+373">🇲🇩 +373</option>
                    <option value="+377">🇲🇨 +377</option>
                    <option value="+976">🇲🇳 +976</option>
                    <option value="+382">🇲🇪 +382</option>
                    <option value="+212">🇲🇦 +212</option>
                    <option value="+95">🇲🇲 +95</option>
                    <option value="+977">🇳🇵 +977</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+64">🇳🇿 +64</option>
                    <option value="+505">🇳🇮 +505</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+850">🇰🇵 +850</option>
                    <option value="+389">🇲🇰 +389</option>
                    <option value="+47">🇳🇴 +47</option>
                    <option value="+968">🇴🇲 +968</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+970">🇵🇸 +970</option>
                    <option value="+507">🇵🇦 +507</option>
                    <option value="+595">🇵🇾 +595</option>
                    <option value="+51">🇵🇪 +51</option>
                    <option value="+63">🇵🇭 +63</option>
                    <option value="+48">🇵🇱 +48</option>
                    <option value="+351">🇵🇹 +351</option>
                    <option value="+974">🇶🇦 +974</option>
                    <option value="+40">🇷🇴 +40</option>
                    <option value="+7">🇷🇺 +7</option>
                    <option value="+966">🇸🇦 +966</option>
                    <option value="+221">🇸🇳 +221</option>
                    <option value="+381">🇷🇸 +381</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+421">🇸🇰 +421</option>
                    <option value="+386">🇸🇮 +386</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+94">🇱🇰 +94</option>
                    <option value="+249">🇸🇩 +249</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+963">🇸🇾 +963</option>
                    <option value="+886">🇹🇼 +886</option>
                    <option value="+992">🇹🇯 +992</option>
                    <option value="+255">🇹🇿 +255</option>
                    <option value="+66">🇹🇭 +66</option>
                    <option value="+216">🇹🇳 +216</option>
                    <option value="+90">🇹🇷 +90</option>
                    <option value="+993">🇹🇲 +993</option>
                    <option value="+256">🇺🇬 +256</option>
                    <option value="+380">🇺🇦 +380</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+598">🇺🇾 +598</option>
                    <option value="+998">🇺🇿 +998</option>
                    <option value="+58">🇻🇪 +58</option>
                    <option value="+84">🇻🇳 +84</option>
                    <option value="+967">🇾🇪 +967</option>
                    <option value="+260">🇿🇲 +260</option>
                    <option value="+263">🇿🇼 +263</option>
                  </select>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value.replace(/\D/g, ""))}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-[#00B2A9] flex-1"
                  />
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
                {isSubmitting ? "Sending..." : "Send Email"}
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
                      onClick={() => window.open("https://wa.me/917876079309", "_blank")}
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
                    <p className="text-gray-400">thenuvhq@gmail.com</p>
                    <Button
                      variant="link"
                      className="text-[#FF3131] p-0 h-auto hover:text-[#FF3131]/80"
                      onClick={() => window.open("mailto:thenuvhq@gmail.com", "_blank")}
                    >
                      Send Email →
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