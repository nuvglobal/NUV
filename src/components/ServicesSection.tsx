import { motion } from "framer-motion";
import { Globe, ShoppingCart, Search, Headphones, Shield } from "lucide-react";

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
      icon: Shield,
      title: "Website Maintenance & Security",
      description: "Regular updates, security patches, SSL management, and backup services.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support & Updates",
      description: "Never worry about your site again with our comprehensive support.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0B0B10] to-[#1A1A22]">
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
            <span className="text-[#C4B5FD] font-serif italic">Growth</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#FF3131]/20 rounded-xl mb-3 md:mb-4 group-hover:bg-[#FF3131]/30 transition-colors">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7 text-[#FF3131]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
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
          <div className="bg-gradient-to-r from-[#FF3D81]/10 to-[#C4B5FD]/10 border border-[#FF3D81]/20 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-[#C4B5FD] mb-2">
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