import { motion } from "framer-motion";
import { AlertCircle, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#17171B] to-[#0B0B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Why Choose{" "}
              <span className="text-[#C4B5FD] font-serif italic">NUV</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-5">
              We're a lean team that delivers enterprise-level results without the overhead. 
              Every project gets our full attention and expertise.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              <span className="text-[#FF3131] font-semibold">Proven track record</span>, 
              <span className="text-[#C4B5FD] font-semibold"> fast execution</span>, 
              <span className="text-white font-semibold"> measurable growth</span>.
            </p>
          </div>

          {/* Story Layout: The Problem → The Solution */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}