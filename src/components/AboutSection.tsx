import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#17171B] to-[#0B0B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#FF3131]/20 rounded-lg md:rounded-xl mb-2 md:mb-3 mx-auto">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-[#FF3131]" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white">50+</div>
                <div className="text-xs md:text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#FF3131]/20 rounded-lg md:rounded-xl mb-2 md:mb-3 mx-auto">
                  <Target className="h-5 w-5 md:h-6 md:w-6 text-[#FF3131]" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white">4.9/5</div>
                <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#FF3131]/20 rounded-lg md:rounded-xl mb-2 md:mb-3 mx-auto">
                  <Rocket className="h-5 w-5 md:h-6 md:w-6 text-[#FF3131]" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white">2x</div>
                <div className="text-xs md:text-sm text-gray-400">Growth Avg</div>
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}