import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyNuvSection from "@/components/WhyNuvSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Landing() {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 1000], [0, -100]);
  const yFast = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

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
      <HeroSection />
      <WhyNuvSection />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
}