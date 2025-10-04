import { motion } from "framer-motion";
import { Home, Lightbulb, Briefcase, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { smoothScrollTo } from "@/lib/utils";

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isScrollingRef = useRef(false);

  const sections = [
    { id: "hero", label: "Home", icon: Home },
    { id: "why-nuv", label: "Why NUV", icon: Lightbulb },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    // Use Intersection Observer for more accurate section detection
    const observerOptions = {
      root: null,
      // Better mobile detection - adjusted for bottom navigation bar
      rootMargin: "-80px 0px -120px 0px",
      // More granular thresholds for smoother detection
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't update during programmatic scrolling
      if (isScrollingRef.current) return;

      // Find the most visible section with better logic
      let maxVisibility = 0;
      let mostVisibleSection = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Calculate visibility score based on intersection ratio and viewport position
          const rect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight / viewportHeight;
          
          // Prefer sections that occupy more viewport space
          const visibility = entry.intersectionRatio * 0.6 + visibilityRatio * 0.4;

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = entry.target.id;
          }
        }
      });

      // Only update if we have a clear winner
      if (mostVisibleSection && maxVisibility > 0.15) {
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
      // Set scrolling flag to prevent observer updates during scroll
      isScrollingRef.current = true;
      
      // Immediately update active state for instant visual feedback
      setActiveSection(sectionId);
      
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      
      // Faster scroll duration for more responsive feel
      smoothScrollTo(offsetPosition, 400);
      
      // Clear scrolling flag after animation completes with buffer
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  return (
    <>
      {/* Desktop Sidebar - Full Size (lg and up) - MOVED TO RIGHT */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
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
                  
                  {/* Tooltip - now appears on LEFT side */}
                  <div className="absolute right-full mr-4 px-3 py-2 bg-[#0B0B10] border border-white/10 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="text-sm font-medium text-white">{section.label}</span>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionDesktop"
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

      {/* Tablet Sidebar - Compact (md to lg) - MOVED TO RIGHT */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden md:block lg:hidden"
      >
        <div className="bg-[#0B0B10]/80 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-xl">
          <div className="flex flex-col gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group relative p-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "bg-[#FF3131] text-white" 
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                  
                  {/* Tooltip for tablet - now appears on LEFT */}
                  <div className="absolute right-full mr-3 px-2 py-1 bg-[#0B0B10] border border-white/10 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="text-xs font-medium text-white">{section.label}</span>
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionTablet"
                      className="absolute inset-0 bg-[#FF3131] rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Mobile Bottom Navigation Bar (below md) - IMPROVED DETECTION */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
      >
        <div className="bg-[#0B0B10]/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-2xl">
          <div className="flex items-center gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative p-2.5 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-[#FF3131] text-white" 
                      : "bg-white/5 text-gray-400"
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSectionMobile"
                      className="absolute inset-0 bg-[#FF3131] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}