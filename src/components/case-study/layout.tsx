"use client";

import { Activity, Menu, X, ArrowUp, Globe } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { t } from "@/lib/translations";

export const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { lang, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = ["process", "discovery", "definition", "architecture", "outcome"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "process", label: t("nav.flow", lang) },
    { id: "discovery", label: t("nav.research", lang) },
    { id: "definition", label: t("nav.personas", lang) },
    { id: "architecture", label: t("nav.ia", lang) },
    { id: "outcome", label: t("nav.metrics", lang) },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-canvas/95 backdrop-blur-xl border-b border-ink/10 shadow-sm' : 'py-8 bg-transparent'}`}>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-cedar origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <motion.div
            animate={{ rotate: isScrolled ? 360 : 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <Activity className="text-cedar w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <p className="font-mono text-sm font-bold tracking-tighter text-ink uppercase">{t("nav.brand", lang)}</p>
            <AnimatePresence>
              {!isScrolled && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 0.5, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="font-mono text-[10px] tracking-widest text-ink uppercase"
                >
                  {t("nav.subtitle", lang)}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 font-mono text-xs font-bold uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-2 transition-all duration-300 group ${
                activeSection === item.id ? "text-cedar" : "text-ink opacity-60 hover:opacity-100"
              }`}
            >
              {item.label}
              <motion.span
                className={`absolute bottom-0 left-0 w-full h-px bg-cedar ${activeSection === item.id ? 'opacity-100' : 'opacity-0'}`}
                layoutId="navUnderline"
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-cedar transition-all duration-300 group-hover:w-full opacity-50" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLang}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 border border-ink/10 hover:border-cedar/50 transition-all font-mono text-[11px] font-bold tracking-wider uppercase bg-white/80 backdrop-blur-sm"
          >
            <Globe className="w-3.5 h-3.5 text-cedar" />
            <span className={lang === "en" ? "text-cedar" : "text-ink/40"}>EN</span>
            <span className="text-ink/20">|</span>
            <span className={lang === "zh" ? "text-cedar" : "text-ink/40"}>中</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-ink hover:text-cedar transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-ink text-canvas lg:hidden flex flex-col items-center justify-center gap-12"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-display font-light hover:text-cedar transition-colors"
              >
                {item.label.split('. ')[1]}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              className="absolute bottom-10 font-mono text-[10px] tracking-widest uppercase"
            >
              {t("nav.expertReview", lang)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  const { lang } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-ink/10 mt-40 pb-20 pt-32 bg-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-cedar/5 rounded-full blur-3xl -mr-32 -mt-32" />

       <div className="max-w-screen-2xl mx-auto px-8">
         <div className="grid md:grid-cols-12 gap-16 mb-20">
           <div className="md:col-span-6">
             <div className="flex items-center gap-4 mb-8">
               <Activity className="text-cedar w-8 h-8" />
               <p className="font-display text-3xl font-light">Artisan Logic.</p>
             </div>
             <p className="font-sans-cn text-lg font-light opacity-60 leading-relaxed max-w-md">
               透過深度使用者調研與資訊架構優化，為數位空間注入禪意與效率。本報告僅供專業評鑑使用。
             </p>
           </div>

           <div className="md:col-span-6 flex flex-col md:items-end justify-between">
             <button
               onClick={scrollToTop}
               className="group flex items-center gap-4 font-mono text-xs font-bold tracking-[0.4em] uppercase text-cedar hover:text-ink transition-colors"
             >
               {t("footer.backToTop", lang)} <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
             </button>

             <div className="mt-20 md:mt-0 flex flex-wrap gap-8 font-mono text-[10px] opacity-40 uppercase tracking-[0.2em]">
               <span>Figma / Next.js / Framer Motion</span>
               <span>Built by Jules // Expert UX Engineer</span>
             </div>
           </div>
         </div>

         <div className="border-t border-ink/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] opacity-30 tracking-widest uppercase font-bold">
            <p>© 2026 ZENSELECT STRATEGY. ALL RIGHTS RESERVED.</p>
            <p>INTEGRATED RESEARCH & DESIGN ARCHITECTURE.</p>
         </div>
       </div>
    </footer>
  );
};
