import { motion } from "framer-motion";
import { Home, Lightbulb, Briefcase, Users, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { smoothScrollTo } from "@/lib/utils";

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "why-nuv", label: "Why NUV", icon: Lightbulb },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "about", label: "About", icon: Users },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    // Use Intersection Observer for more accurate section detection
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the middle-upper portion of viewport
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the most visible section
      let maxRatio = 0;
      let mostVisibleSection = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      smoothScrollTo(offsetPosition, 650);
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-[#0B0B10]/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl">
        <div className="flex flex-col gap-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative p-3 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? "bg-[#FF3131] text-white" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-4 px-3 py-2 bg-[#0B0B10] border border-white/10 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="text-sm font-medium text-white">{section.label}</span>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-[#FF3131] rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
