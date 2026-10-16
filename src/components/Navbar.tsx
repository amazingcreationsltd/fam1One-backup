import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
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
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Modal Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-surface/85 backdrop-blur-2xl backdrop-saturate-150 lg:hidden flex flex-col justify-between pt-28 pb-10 px-6 animate-fadeIn">
          <div className="space-y-6">
            <div className="p-1 rounded-full bg-white/5 border border-white/10 flex">
              <button
                onClick={() => {
                  setAudience('brand');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-full text-center transition-all ${
                  audience === 'brand' ? 'bg-accent text-white shadow' : 'text-muted'
                }`}
              >
                For Brands
              </button>
              <button
                onClick={() => {
                  setAudience('creator');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-full text-center transition-all ${
                  audience === 'creator' ? 'bg-accent text-white shadow' : 'text-muted'
                }`}
              >
                For Creators
              </button>
            </div>

            <div className="divide-y divide-white/10 text-lg font-medium space-y-2">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block pt-3 pb-2 text-white hover:text-accent transition-colors"
              >
                Solutions
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block pt-3 pb-2 text-white hover:text-accent transition-colors"
              >
                Showcase & Case Studies
              </a>
              <a
                href="#roster"
                onClick={() => setMobileMenuOpen(false)}
                className="block pt-3 pb-2 text-white hover:text-accent transition-colors"
              >
                Creator Roster
              </a>
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="block pt-3 pb-2 text-white hover:text-accent transition-colors"
              >
                Production Process
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block pt-3 pb-2 text-white hover:text-accent transition-colors"
              >
                Revenue Simulator
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-6">
            <a
              href="#contact"
              onClick={() => {
                setAudience('brand');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-xs bg-accent text-white shadow-lg"
            >
              <span>Schedule Brand Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={() => {
                setAudience('creator');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-xs bg-white/10 text-white border border-white/10"
            >
              <span>Apply for Roster</span>
              <Sparkles className="w-4 h-4 text-accent" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
