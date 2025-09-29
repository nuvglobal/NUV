import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export default function PricingSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      name: "Essential",
      price: "₹25,000",
      popular: false,
      features: [
        "1-Page Premium Website",
        "Minimal Ads Option (earning offset)",
        "Mobile Responsive",
        "1 Revision",
        "Basic SEO Setup",
      ],
    },
    {
      name: "Growth",
      price: "₹75,000",
      popular: true,
      features: [
        "3-5 Page Website",
        "Custom Design",
        "SEO Setup",
        "Ongoing Support (1 month)",
        "Payment / Contact Integration",
        "Analytics Setup",
      ],
    },
    {
      name: "Authority",
      price: "₹1,50,000",
      popular: false,
      features: [
        "5-10 Pages",
        "E-commerce Ready / Full Brand Website",
        "Priority Support",
        "3 Months Updates",
        "Full Analytics + SEO",
        "Premium Hosting Setup",
        "Advanced Integrations",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0B0B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Plans for Every{" "}
            <span className="text-[#C4B5FD] font-serif italic">Stage</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#00B2A9] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
                  <div className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-[#FF3131] bg-[#FF3131]/5' 
                  : 'border-white/10 hover:bg-white/10'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#C4B5FD] mb-4">
                    {plan.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-[#FF3131] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#FF3131] hover:bg-[#FF3131]/90 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
