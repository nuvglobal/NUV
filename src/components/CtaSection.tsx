import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

export default function CtaSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      // Faster scroll for instant responsiveness
      smoothScrollTo(offsetPosition, 400);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#FF3D81]/10 to-[#C4B5FD]/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0B0B10]/80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF3131]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Your website is your new{" "}
            <span className="text-[#C4B5FD] font-serif italic">storefront</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Make it unforgettable.
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Join businesses who trust NUV to engineer{" "}
            <span className="text-[#FF3131] font-semibold">growth</span>.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FF3131] hover:bg-[#FF3131]/90 text-white font-bold px-12 py-6 text-xl rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started with NUV
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}