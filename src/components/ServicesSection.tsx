import { motion } from "framer-motion";
import { Globe, ShoppingCart, Search, Headphones } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Design",
      description: "Tailored websites aligned with your brand identity and business goals.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "High-performance online stores built to sell and scale your business.",
    },
    {
      icon: Search,
      title: "SEO & Optimization",
      description: "Speed, visibility, and reach optimization for maximum impact.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support & Updates",
      description: "Never worry about your site again with our comprehensive support.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#1C1C1E] to-[#2A2A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Services, Your{" "}
            <span className="text-[#F7E7CE] font-serif italic">Growth</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-14 h-14 bg-[#00B2A9]/20 rounded-xl mb-4 group-hover:bg-[#00B2A9]/30 transition-colors">
                  <service.icon className="h-7 w-7 text-[#00B2A9]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-[#00B2A9]/10 to-[#F7E7CE]/10 border border-[#00B2A9]/20 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-[#F7E7CE] mb-2">
              Optional Upsell Add-on
            </h4>
            <p className="text-gray-300">
              <span className="text-[#00B2A9] font-semibold">Minimal Ads Integration</span> – 
              Offset costs with subtle ad placements that don't compromise your brand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
