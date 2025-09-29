import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-[#1C1C1E] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B2A9]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F7E7CE]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-2 text-[#00B2A9]"
              >
                <Sparkles size={20} />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Nexus of Unique Vision
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                Websites that{" "}
                <span className="text-[#F7E7CE] font-serif italic">work</span>{" "}
                as hard as you do.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                At NUV, we don't just build websites. We craft digital identities
                engineered for{" "}
                <span className="text-[#F7E7CE] font-semibold">growth</span>,{" "}
                <span className="text-[#F7E7CE] font-semibold">authority</span>, and{" "}
                <span className="text-[#F7E7CE] font-semibold">trust</span>. Whether
                you're a startup or a scaling brand, your site becomes your strongest
                business asset.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#00B2A9] hover:bg-[#00B2A9]/90 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                Build My Website
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("pricing")}
                variant="outline"
                className="border-[#F7E7CE] text-[#F7E7CE] hover:bg-[#F7E7CE] hover:text-[#1C1C1E] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
              >
                See Pricing
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Abstract Futuristic Graphic */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B2A9]/20 to-transparent rounded-3xl"></div>
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00B2A9] rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#F7E7CE] rounded-full blur-lg opacity-40 animate-pulse delay-1000"></div>
              
              {/* Geometric Shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#00B2A9]/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#F7E7CE]/20 rounded-full"
              ></motion.div>
              
              {/* Central Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#00B2A9] to-[#F7E7CE] rounded-lg shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
