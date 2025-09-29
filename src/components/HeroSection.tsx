import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax effects tied to scroll
  const { scrollY } = useScroll();
  const parallaxSlow = useTransform(scrollY, [0, 600], [0, -60]);
  const parallaxFast = useTransform(scrollY, [0, 600], [0, -120]);

  return (
    <section id="hero" className="min-h-[22vh] md:min-h-[26vh] bg-[#0B0B10] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Convert static blobs to parallax motion elements */}
        <motion.div
          style={{ y: parallaxSlow }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B2A9]/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: parallaxFast }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F7E7CE]/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1 md:pt-8 md:pb-2">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
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
                <span className="text-[#C4B5FD] font-serif italic">work</span>{" "}
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
                <span className="text-[#C4B5FD] font-semibold">growth</span>,{" "}
                <span className="text-[#C4B5FD] font-semibold">authority</span>, and{" "}
                <span className="text-[#C4B5FD] font-semibold">trust</span>. Whether
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
                className="bg-[#FF3131] hover:bg-[#FF3131]/90 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                Build My Website
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("pricing")}
                variant="outline"
                className="border-[#C4B5FD] text-[#C4B5FD] hover:bg-[#C4B5FD] hover:text-[#0B0B10] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
              >
                See Pricing
              </Button>
            </motion.div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}