import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, AlertCircle, Zap } from "lucide-react";
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
    <section id="hero" className="min-h-[22vh] md:min-h-[26vh] pt-20 pb-16 md:pb-20 bg-[#0B0B10] relative overflow-hidden">
      {/* Simplified background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D72638]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-center space-x-2 text-[#D72638]">
                <Sparkles size={18} className="md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">
                  Nexus of Unique Vision
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Websites that{" "}
                <span className="text-[#D72638] font-serif italic">work</span>{" "}
                as hard as you do.
              </h1>

              <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                We craft digital identities engineered for{" "}
                <span className="text-[#D72638] font-semibold">growth</span>,{" "}
                <span className="text-[#D72638] font-semibold">authority</span>, and{" "}
                <span className="text-[#D72638] font-semibold">trust</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#D72638] hover:bg-[#D72638]/90 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:scale-105 group"
              >
                Build My Website
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-[#D72638] text-[#D72638] hover:bg-[#D72638] hover:text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Story Layout: The Problem → The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12"
        >
          {/* The Problem */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-[#B3B3B3]/20 rounded-lg">
                <AlertCircle className="h-5 w-5 text-[#B3B3B3]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">The Problem</h3>
            </div>
            <p className="text-sm md:text-base text-[#B3B3B3] leading-relaxed">
              Most businesses settle for generic templates that blend into the noise. 
              Your website becomes just another page—forgettable, slow, and ineffective. 
              In a world where first impressions happen in <span className="text-white font-semibold">3 seconds</span>, 
              you can't afford to be average.
            </p>
          </div>

          {/* The Solution */}
          <div className="bg-gradient-to-br from-[#D72638]/10 to-[#D4AF37]/5 backdrop-blur-sm border border-[#D72638]/30 rounded-xl p-6 md:p-8 hover:border-[#D72638]/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-[#D72638]/20 rounded-lg">
                <Zap className="h-5 w-5 text-[#D72638]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">The Solution</h3>
            </div>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              NUV engineers <span className="text-[#D72638] font-semibold">digital weapons</span>—not just websites. 
              We blend design, strategy, and technology to create experiences that command attention, 
              convert visitors into customers, and scale with your ambition. 
              Your website becomes your <span className="text-[#D4AF37] font-semibold">24/7 growth engine</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}