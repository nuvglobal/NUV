import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyNuvSection from "@/components/WhyNuvSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionNavigator from "@/components/SectionNavigator";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Landing() {
  const { scrollY } = useScroll();
  // Simplified parallax with reduced range for better performance
  const ySlow = useTransform(scrollY, [0, 1000], [0, -50]);
  const yFast = useTransform(scrollY, [0, 1000], [0, -100]);

  // Simplified section transition variants with faster animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#0B0B10] relative overflow-hidden"
    >
      {/* Simplified background effects */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: ySlow }}
          className="absolute -top-24 -left-24 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-[#FF3131] to-[#C4B5FD]"
        />
        <motion.div
          style={{ y: yFast }}
          className="absolute top-1/2 right-[-20%] w-[45vw] h-[45vw] rounded-full blur-3xl opacity-15 bg-gradient-to-br from-[#C4B5FD] to-transparent"
        />

        {/* Static grid for better performance */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <Header />
      <SectionNavigator />
      
      <HeroSection />

      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <WhyNuvSection />
      </motion.div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ServicesSection />
      </motion.div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <CtaSection />
      </motion.div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.div>

      <Footer />
    </motion.div>
  );
}