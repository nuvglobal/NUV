import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyNuvSection from "@/components/WhyNuvSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#1C1C1E]"
    >
      <Header />
      <HeroSection />
      <WhyNuvSection />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}