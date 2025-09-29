import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#2A2A2E] to-[#1C1C1E]">
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                We're{" "}
                <span className="text-[#F7E7CE] font-serif italic">NUV</span>.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We're not just developers. We're builders of the next digital order. 
                NUV was founded with one vision: to bring businesses powerful websites 
                without the corporate bloat.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                <span className="text-[#00B2A9] font-semibold">Small team</span>, 
                <span className="text-[#F7E7CE] font-semibold"> sharp execution</span>, 
                <span className="text-white font-semibold"> big results</span>.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#00B2A9]/20 rounded-xl mb-3 mx-auto">
                  <Users className="h-6 w-6 text-[#00B2A9]" />
                </div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#00B2A9]/20 rounded-xl mb-3 mx-auto">
                  <Target className="h-6 w-6 text-[#00B2A9]" />
                </div>
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#00B2A9]/20 rounded-xl mb-3 mx-auto">
                  <Rocket className="h-6 w-6 text-[#00B2A9]" />
                </div>
                <div className="text-2xl font-bold text-white">2x</div>
                <div className="text-sm text-gray-400">Growth Avg</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96">
              {/* Abstract team visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B2A9]/10 to-[#F7E7CE]/10 rounded-3xl"></div>
              
              {/* Geometric representation of team */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#00B2A9] rounded-full opacity-80"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-[#F7E7CE] rounded-full opacity-70"></div>
              <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-white rounded-full opacity-60"></div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <line x1="100" y1="100" x2="300" y2="130" stroke="#00B2A9" strokeWidth="2" opacity="0.3" />
                <line x1="300" y1="130" x2="150" y2="270" stroke="#F7E7CE" strokeWidth="2" opacity="0.3" />
                <line x1="150" y1="270" x2="100" y2="100" stroke="white" strokeWidth="2" opacity="0.3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
