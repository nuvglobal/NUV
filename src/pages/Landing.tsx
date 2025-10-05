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

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      {/* INSTAGRAM STORY POSTER SECTION - TEMPORARY */}
      <section className="py-16 bg-[#0B0B10] relative overflow-hidden">
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1E1E1E] to-[#0A0A0A] border-2 border-[#D72638] rounded-3xl p-12 shadow-2xl overflow-hidden"
          >
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#D72638]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Logo/Brand */}
              <div className="flex justify-center">
                <img
                  src="https://harmless-tapir-303.convex.cloud/api/storage/fde5fd9c-bcbc-431d-86cf-6887522b39c4"
                  alt="NUV logo"
                  className="h-16 w-auto rounded-lg"
                />
              </div>

              {/* Main Announcement */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center"
                >
                  <div className="bg-[#D72638] h-1 w-32 rounded-full" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl font-bold text-white leading-tight"
                >
                  NUV <span className="text-[#D72638] font-serif italic">IS LIVE</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-300 max-w-sm mx-auto leading-relaxed"
                >
                  Your digital transformation starts here. Websites that actually work.
                </motion.p>
              </div>

              {/* Website URL */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6 border-t border-white/10"
              >
                <p className="text-[#D4AF37] font-semibold text-lg tracking-wide">
                  nuvgrowth.com
                </p>
              </motion.div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D72638] rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D72638] rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D72638] rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D72638] rounded-br-lg" />
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <WhyNuvSection />
      </motion.div>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ServicesSection />
      </motion.div>

      {/* Gradient Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <CtaSection />
      </motion.div>

      {/* Gradient Divider */}
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