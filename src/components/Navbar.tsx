import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';
import { useAudience } from '../context/AudienceContext';

interface NavbarProps {
  isLoaded?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLoaded = false }) => {
  const { theme, toggleTheme } = useTheme();
  const { audience, setAudience } = useAudience();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const [internalLoaded, setInternalLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setInternalLoaded(true);
      return;
    }
    const timer = setTimeout(() => {
      setInternalLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isLoaded]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (navRef.current) {
        gsap.set(navRef.current, { y: 0, opacity: 1, filter: 'blur(0px)', clearProps: 'all' });
      }
      return;
    }

    if (!internalLoaded) {
      if (navRef.current) {
        gsap.set(navRef.current, { y: -25, opacity: 0, filter: 'blur(8px)' });
      }
      return;
    }

    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -25, opacity: 0, filter: 'blur(8px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'filter,willChange',
        }
      );
    }
  }, [internalLoaded]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none px-4 sm:px-6">
        <nav
          ref={navRef}
          className="mt-4 sm:mt-6 mx-auto max-w-6xl flex items-center justify-between pointer-events-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-surface/70 dark:bg-surface/65 backdrop-blur-2xl backdrop-saturate-180 border border-black/10 dark:border-white/12 shadow-[0_16px_36px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_50px_rgba(0,0,0,0.5)] ring-1 ring-black/5 dark:ring-white/5 transition-all duration-300"
          aria-label="Main Navigation"
        >
          {/* Brand Mark */}
          <div className="flex items-center gap-6">
            <a href="#hero" className="flex items-center gap-2.5 group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="font-display font-extrabold text-base tracking-wider text-white group-hover:text-accent transition-colors">
                FamO1Mediaa
              </span>
            </a>

            {/* Dual Audience Pill Switcher */}
            <div
              className="hidden md:flex items-center p-1 rounded-full bg-white/[0.05] border border-white/10"
              role="radiogroup"
              aria-label="Audience View Switcher"
            >
              <button
                onClick={() => setAudience('brand')}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  audience === 'brand'
                    ? 'bg-accent text-white shadow-md shadow-accent/30'
                    : 'text-muted hover:text-white'
                }`}
                role="radio"
                aria-checked={audience === 'brand'}
              >
                For Brands
              </button>
              <button
                onClick={() => setAudience('creator')}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                  audience === 'creator'
                    ? 'bg-accent text-white shadow-md shadow-accent/30'
                    : 'text-muted hover:text-white'
                }`}
                role="radio"
                aria-checked={audience === 'creator'}
              >
                For Creators
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-medium tracking-wide text-muted">
            <a href="#outdoor" className="hover:text-white transition-colors duration-200">
              District Blitz
            </a>
            <a href="#creator-suite" className="hover:text-white transition-colors duration-200">
              Creator Trio
            </a>
            <a href="#services" className="hover:text-white transition-colors duration-200">
              Solutions
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-200">
              Showcase
            </a>
            <a href="#workflow" className="hover:text-white transition-colors duration-200">
              Process
            </a>
            <a href="#calculator" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
              <span>Yield</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </a>
          </div>

          {/* Actions & Theme */}
          <div className="flex items-center gap-3">
            {/* Primary Nested Island CTA */}
            <a
              href="#contact"
              onClick={() => setAudience(audience)}
              className="hidden sm:inline-flex items-center pl-4 pr-1.5 py-1.5 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold shadow-lg shadow-accent/25 transition-all duration-300 group active:scale-[0.98]"
            >
              <span>{audience === 'brand' ? 'Audit Your Brand' : 'Join Talent Roster'}</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>

            {/* Theme Toggle */}
            <button
              id="themeToggleBtn"
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-muted hover:text-white transition-colors" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-muted hover:text-white transition-colors" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 rounded-full bg-surface/80 dark:bg-surface/70 border border-black/10 dark:border-white/15 text-white hover:border-accent/40 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-3.5 relative flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-0.5 bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-0.5 bg-white rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen / Side-Drawer Editorial Takeover */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden overflow-hidden">
            {/* Backdrop Blur Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Sliding Drawer (Right to Left) */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 w-full sm:w-[85vw] max-w-lg bg-surface/95 dark:bg-[#06080C]/98 backdrop-blur-3xl border-l border-black/10 dark:border-white/10 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto shadow-2xl"
              aria-label="Mobile Navigation Drawer"
            >
              {/* Drawer Header Status */}
              <div className="pt-20 sm:pt-16 pb-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                    FamO1Mediaa Navigation
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
                  Live Reel 2026
                </span>
              </div>

              {/* Audience Pill Selector */}
              <div className="my-6 p-1 rounded-full bg-white/[0.04] border border-white/10 flex">
                <button
                  onClick={() => setAudience('brand')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-full text-center transition-all ${
                    audience === 'brand' ? 'bg-accent text-white shadow-md' : 'text-muted'
                  }`}
                >
                  For Brands
                </button>
                <button
                  onClick={() => setAudience('creator')}
                  className={`flex-1 py-2 text-xs font-semibold rounded-full text-center transition-all ${
                    audience === 'creator' ? 'bg-accent text-white shadow-md' : 'text-muted'
                  }`}
                >
                  For Creators
                </button>
              </div>

              {/* Editorial Large Staggered Links */}
              <div className="flex flex-col gap-2 sm:gap-3 py-4 flex-1 justify-center">
                {[
                  { num: '01', label: 'Solutions', href: '#services' },
                  { num: '02', label: 'District Blitz', href: '#outdoor' },
                  { num: '03', label: 'Creator Trio', href: '#creator-suite' },
                  { num: '04', label: 'Showcase Reel', href: '#portfolio' },
                  { num: '05', label: 'Production Process', href: '#workflow' },
                  { num: '06', label: 'Yield Simulator', href: '#calculator' },
                  { num: '07', label: 'Contact Partner Desk', href: '#contact' },
                ].map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 40, opacity: 0 }}
                    transition={{
                      delay: 0.15 + idx * 0.05,
                      duration: 0.55,
                      ease: [0.34, 1.56, 0.64, 1], // Bouncy entrance per reference
                    }}
                    className="group flex items-baseline gap-3 text-white hover:text-accent transition-colors duration-200 select-none py-1"
                  >
                    <span className="text-xs font-mono font-bold text-muted group-hover:text-accent transition-colors">
                      {item.num}
                    </span>
                    <span className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Direct Desk & Global Hubs Contacts Section */}
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: 0.45, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="pt-6 border-t border-white/10 space-y-4 text-xs"
              >
                <div>
                  <span className="text-muted block text-[11px] mb-1">Direct Senior Desk</span>
                  <a
                    href="mailto:partners@famo1mediaa.agency"
                    className="text-base sm:text-lg font-bold text-white hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span>partners@famo1mediaa.agency</span>
                    <ArrowUpRight className="w-4 h-4 text-accent" />
                  </a>
                </div>

                <div className="flex items-center justify-between text-muted text-[11px]">
                  <span>Hubs: London · NY · Dubai</span>
                  <span className="text-white font-medium">© 2026 FamO1Mediaa</span>
                </div>
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
