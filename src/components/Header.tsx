import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add scroll progress bar motion values
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, restDelta: 0.001 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll with header offset for consistent desktop behavior
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B10]/95 backdrop-blur-md border-b border-white/10"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#FF3131] origin-left pointer-events-none"
        style={{ scaleX: progress }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src="https://harmless-tapir-303.convex.cloud/api/storage/fde5fd9c-bcbc-431d-86cf-6887522b39c4"
              alt="NUV logo"
              className="h-8 w-auto rounded-md"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-[#00B2A9] transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-nuv")}
              className="text-white hover:text-[#00B2A9] transition-colors font-medium"
            >
              Why NUV
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[#00B2A9] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#00B2A9] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#00B2A9] hover:bg-[#00B2A9]/90 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#00B2A9] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white hover:text-[#00B2A9] transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-nuv")}
                className="text-white hover:text-[#00B2A9] transition-colors font-medium text-left"
              >
                Why NUV
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-[#00B2A9] transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-[#00B2A9] transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#00B2A9] hover:bg-[#00B2A9]/90 text-white font-semibold w-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}