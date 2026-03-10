"use client";

import { Activity, Menu, X, ArrowUp, Globe, ChevronRight } from "lucide-react";
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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? Math.round((window.scrollY / total) * 100) : 0);
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
    { id: "process", label: t("nav.flow", lang), num: "01" },
    { id: "discovery", label: t("nav.research", lang), num: "02" },
    { id: "definition", label: t("nav.personas", lang), num: "03" },
    { id: "architecture", label: t("nav.ia", lang), num: "04" },
    { id: "outcome", label: t("nav.metrics", lang), num: "05" },
  ];

  const activeIdx = navItems.findIndex((n) => n.id === activeSection);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-transparent/45 backdrop-blur-xl border-b border-ink/10 shadow-sm" : "py-8 bg-transparent"}`}>
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
                  animate={{ opacity: 0.5, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="font-mono text-[11px] tracking-widest text-ink uppercase"
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
                className={`absolute bottom-0 left-0 w-full h-px bg-cedar ${activeSection === item.id ? "opacity-100" : "opacity-0"}`}
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
            className="flex items-center gap-2 px-4 py-2 border border-ink/10 hover:border-cedar/50 transition-all font-mono text-[12px] font-bold tracking-wider uppercase bg-transparent/40 backdrop-blur-sm"
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
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ── Mobile Nav Overlay — Enhanced UI ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-ink/60 backdrop-blur-md lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0.8 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.8 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[85vw] max-w-[380px] lg:hidden flex flex-col overflow-hidden"
              style={{
                background: "linear-gradient(145deg, rgba(28,26,24,0.97) 0%, rgba(28,26,24,0.92) 100%)",
                backdropFilter: "blur(32px)",
                boxShadow: "-24px 0 80px rgba(0,0,0,0.35)"
              }}
            >
              {/* Top bar: brand + close */}
              <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <Activity className="text-cedar w-5 h-5" />
                  <div>
                    <p className="font-mono text-[13px] font-bold text-canvas uppercase tracking-tight">
                      {t("nav.brand", lang)}
                    </p>
                    <p className="font-mono text-[11px] text-cedar/50 tracking-widest uppercase">
                      CASE STUDY
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-canvas/50 hover:text-canvas transition-colors rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress indicator */}
              <div className="px-8 py-4 border-b border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[11px] text-canvas/30 uppercase tracking-widest">
                    {lang === "en" ? "Reading progress" : "閱讀進度"}
                  </span>
                  <span className="font-mono text-[12px] text-cedar font-bold">{scrollProgress}%</span>
                </div>
                <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cedar"
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Nav items */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.id;
                  const isPast = activeIdx > i;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group flex items-center gap-4 px-5 py-4 rounded-2xl mb-2 transition-all duration-300 ${
                        isActive
                          ? "bg-cedar/15 border border-cedar/25"
                          : "hover:bg-white/6 border border-transparent hover:border-white/10"
                      }`}
                    >
                      {/* Number badge */}
                      <span className={`font-mono text-[11px] font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        isActive
                          ? "bg-cedar text-white"
                          : isPast
                          ? "bg-white/15 text-cedar/60"
                          : "bg-white/8 text-canvas/30"
                      }`}>
                        {item.num}
                      </span>

                      {/* Label */}
                      <span className={`font-sans-cn text-[15px] font-medium transition-colors flex-1 ${
                        isActive ? "text-cedar" : "text-canvas/70 group-hover:text-canvas"
                      }`}>
                        {item.label.split(". ")[1] || item.label}
                      </span>

                      {/* Chevron */}
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? "text-cedar opacity-100 translate-x-0" : "text-canvas/20 -translate-x-1 group-hover:translate-x-0 group-hover:text-canvas/40"
                      }`} />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Bottom: language toggle + footer */}
              <div className="px-8 py-6 border-t border-white/8 space-y-4">
                <button
                  onClick={toggleLang}
                  className="w-full flex items-center justify-between px-5 py-3 rounded-xl border border-white/10 hover:border-cedar/30 transition-all font-mono text-[12px] font-bold uppercase tracking-wider"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cedar" />
                    <span className="text-canvas/50">{lang === "en" ? "Language" : "語言"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={lang === "en" ? "text-cedar" : "text-canvas/30"}>EN</span>
                    <span className="text-canvas/20">·</span>
                    <span className={lang === "zh" ? "text-cedar" : "text-canvas/30"}>中</span>
                  </div>
                </button>

                <p className="font-mono text-[11px] text-canvas/20 tracking-widest uppercase text-center">
                  {t("nav.expertReview", lang)}
                </p>
              </div>
            </motion.div>
          </>
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
    <footer className="backdrop-blur-xl bg-white/20 border-t border-ink/10 mt-40 pb-20 pt-32 bg-transparent relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-cedar/5 rounded-full blur-3xl -mr-32 -mt-32" />

       <div className="max-w-screen-2xl mx-auto px-8">
         <div className="grid md:grid-cols-12 gap-16 mb-20">
           <div className="md:col-span-6">
             <div className="flex items-center gap-4 mb-8">
               <Activity className="text-cedar w-8 h-8" />
               <p className="font-display text-3xl font-light">Artisan Logic.</p>
             </div>
             <p className="font-sans-cn text-base font-light opacity-60 leading-relaxed max-w-md">
               透過深度使用者調研與資訊架構優化，為數位空間注入禪意與效率。本報告僅供專業評鑑使用。
             </p>
           </div>

           <div className="md:col-span-6 flex flex-col md:items-end justify-between">
             <motion.button
               onClick={scrollToTop}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="group flex items-center gap-4 font-mono text-[13px] font-bold tracking-[0.4em] uppercase text-cedar hover:text-ink transition-colors"
             >
               {t("footer.backToTop", lang)}{" "}
               <motion.div
                 animate={{ y: [0, -3, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
               >
                 <ArrowUp className="w-4 h-4" />
               </motion.div>
             </motion.button>

             <div className="mt-20 md:mt-0 flex flex-wrap gap-8 font-mono text-[11px] opacity-40 uppercase tracking-[0.2em]">
               <span>Figma / Next.js / Framer Motion</span>
               <span>Built by Jules // Expert UX Engineer</span>
             </div>
           </div>
         </div>

         <div className="border-t border-ink/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[11px] opacity-30 tracking-widest uppercase font-bold">
            <p>© 2026 ZENSELECT STRATEGY. ALL RIGHTS RESERVED.</p>
            <p>INTEGRATED RESEARCH & DESIGN ARCHITECTURE.</p>
         </div>
       </div>
    </footer>
  );
};
