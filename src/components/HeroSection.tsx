import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Target, Rocket } from "lucide-react";
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

        {/* Why Choose NUV - Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 space-y-8"
        >
          {/* Descriptive Text */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              We're a lean team that delivers enterprise-level results without the overhead. 
              Every project gets our full attention and expertise.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-[#D72638] font-semibold">Proven track record</span>, 
              <span className="text-white font-semibold"> fast execution</span>, 
              <span className="text-white font-semibold"> measurable growth</span>.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#D72638]/20 rounded-xl md:rounded-2xl mb-4 mx-auto">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-[#D72638]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-400">Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#D72638]/20 rounded-xl md:rounded-2xl mb-4 mx-auto">
                <Target className="h-8 w-8 md:h-10 md:w-10 text-[#D72638]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-sm md:text-base text-gray-400">Satisfaction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#D72638]/20 rounded-xl md:rounded-2xl mb-4 mx-auto">
                <Rocket className="h-8 w-8 md:h-10 md:w-10 text-[#D72638]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2x</div>
              <div className="text-sm md:text-base text-gray-400">Growth Avg</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}