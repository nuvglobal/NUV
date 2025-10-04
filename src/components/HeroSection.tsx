import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      smoothScrollTo(offsetPosition, 400);
    }
  };

  return (
    <section id="hero" className="min-h-[22vh] md:min-h-[26vh] pt-20 bg-[#0B0B10] relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B2A9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F7E7CE]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-1 md:pb-2">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center space-x-2 text-[#FF3131]">
                <Sparkles size={18} className="md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">
                  Nexus of Unique Vision
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Websites that{" "}
                <span className="text-[#C4B5FD] font-serif italic">work</span>{" "}
                as hard as you do.
              </h1>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                We craft digital identities engineered for{" "}
                <span className="text-[#C4B5FD] font-semibold">growth</span>,{" "}
                <span className="text-[#C4B5FD] font-semibold">authority</span>, and{" "}
                <span className="text-[#C4B5FD] font-semibold">trust</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#FF3131] hover:bg-[#FF3131]/90 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105 group"
              >
                Build My Website
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-[#C4B5FD] text-[#C4B5FD] hover:bg-[#C4B5FD] hover:text-[#0B0B10] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}