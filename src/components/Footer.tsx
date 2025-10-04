import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      // Faster scroll for instant responsiveness
      smoothScrollTo(offsetPosition, 400);
    }
  };

  return (
    <footer className="bg-[#0B0B10] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer mb-4"
              onClick={() => scrollToSection("hero")}
            >
              <img
                src="https://harmless-tapir-303.convex.cloud/api/storage/fde5fd9c-bcbc-431d-86cf-6887522b39c4"
                alt="NUV logo"
                className="h-9 w-auto rounded-md"
              />
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