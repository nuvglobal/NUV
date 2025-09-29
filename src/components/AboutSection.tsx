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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                We're{" "}
                <span className="text-[#C4B5FD] font-serif italic">NUV</span>.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We're not just developers. We're builders of the next digital order. 
                NUV was founded with one vision: to bring businesses powerful websites 
                without the corporate bloat.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                <span className="text-[#FF3D81] font-semibold">Small team</span>, 
                <span className="text-[#C4B5FD] font-semibold"> sharp execution</span>, 
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
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
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

          
        </div>
      </div>
    </section>
  );
}