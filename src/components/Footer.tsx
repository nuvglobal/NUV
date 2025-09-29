import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B0B10] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer mb-4"
              onClick={() => scrollToSection("hero")}
            >
              <span className="text-3xl font-bold text-white tracking-tight">
                N<span className="text-[#00B2A9]">U</span>V
              </span>
            </motion.div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Nexus of Unique Vision. We craft digital identities engineered for growth, 
              authority, and trust. Your website becomes your strongest business asset.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-[#FF3D81] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-nuv")}
                  className="text-gray-400 hover:text-[#00B2A9] transition-colors"
                >
                  Why NUV
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-[#00B2A9] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-400 hover:text-[#00B2A9] transition-colors"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF3D81] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00B2A9] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00B2A9] transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NUV. All Rights Reserved. | Websites that work as hard as you do.
          </p>
        </div>
      </div>
    </footer>
  );
}
