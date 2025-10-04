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
  const ySlow = useTransform(scrollY, [0, 1000], [0, -100]);
  const yFast = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  // Section transition variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0B10] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: ySlow, rotate }}
          className="absolute -top-24 -left-24 w-[60vw] h-[60vw] rounded-full blur-3xl"
        >
          <div className="w-full h-full bg-[conic-gradient(from_180deg_at_50%_50%,_#FF3131_0%,_transparent_35%,_#C4B5FD_65%,_transparent_100%)] opacity-20" />
        </motion.div>
        <motion.div
          style={{ y: yFast }}
          className="absolute top-1/2 right-[-20%] w-[45vw] h-[45vw] rounded-full blur-3xl"
        >
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#C4B5FD33_0%,_transparent_60%)]" />
        </motion.div>

        <motion.div
          style={{ y: ySlow }}
          className="absolute inset-0 opacity-[0.06]"
        >
          <div className="w-full h-full [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:32px_32px] [background-position:0_0,0_0]" />
        </motion.div>

        <motion.div
          style={{ y: yFast }}
          className="absolute inset-0"
        >
          <div className="absolute left-10 top-24 w-1.5 h-1.5 rounded-full bg-[#FF3131] opacity-70" />
          <div className="absolute left-1/3 top-1/3 w-1 h-1 rounded-full bg-[#C4B5FD] opacity-60" />
          <div className="absolute right-24 top-1/2 w-1.5 h-1.5 rounded-full bg-[#FF3D81] opacity-60" />
          <div className="absolute right-1/4 bottom-24 w-1 h-1 rounded-full bg-white opacity-40" />
          <div className="absolute left-1/2 bottom-10 w-1 h-1 rounded-full bg-[#C4B5FD] opacity-50" />
        </motion.div>
      </div>

      <Header />
      <SectionNavigator />
      
      {/* Hero with fade in */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      {/* Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      {/* Why NUV with slide up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C4B5FD]/5 to-transparent pointer-events-none" />
        <WhyNuvSection />
      </motion.div>

      {/* Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent" />

      {/* Services with slide up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3131]/5 to-transparent pointer-events-none" />
        <ServicesSection />
      </motion.div>

      {/* Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      {/* About with slide up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      {/* Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#C4B5FD]/30 to-transparent" />

      {/* CTA with slide up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <CtaSection />
      </motion.div>

      {/* Section Divider */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#FF3131]/30 to-transparent" />

      {/* Contact with slide up */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.div>

      <Footer />
    </motion.div>
  );
}