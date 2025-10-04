import { motion } from "framer-motion";
import { Crown, TrendingUp, Zap } from "lucide-react";

export default function WhyNuvSection() {
  const values = [
    {
      icon: Crown,
      title: "Authority",
      description: "Websites that position you as the leader in your industry.",
    },
    {
      icon: TrendingUp,
      title: "Conversion",
      description: "Designs that turn clicks into clients and visitors into customers.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Fast, responsive, and future-proof builds that perform.",
    },
  ];

  return (
    <section id="why-nuv" className="pt-2 md:pt-2 pb-20 bg-[#0B0B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mt-8 md:mt-12 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            What is{" "}
            <span className="text-[#C4B5FD] font-serif italic">NUV</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We blend design, strategy, and tech to create websites that dominate attention. 
            With NUV, you get a growth weapon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 h-full hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#FF3131]/20 rounded-lg md:rounded-xl mb-4 md:mb-5 group-hover:bg-[#FF3131]/30 transition-colors">
                  <value.icon className="h-6 w-6 md:h-7 md:w-7 text-[#FF3131]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}