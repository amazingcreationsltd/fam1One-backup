import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAudience } from '../context/AudienceContext';

interface HeroProps {
  isLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isLoaded = false }) => {
  const { setAudience } = useAudience();
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const consoleRef = useRef<HTMLDivElement>(null);
  const [internalLoaded, setInternalLoaded] = React.useState(false);

  // Metrics Card Refs
  const statsCardRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);
  const stat4Ref = useRef<HTMLDivElement>(null);
  const count1Ref = useRef<HTMLSpanElement>(null);
  const count2Ref = useRef<HTMLSpanElement>(null);
  const count3Ref = useRef<HTMLSpanElement>(null);
  const count4Ref = useRef<HTMLSpanElement>(null);

  // Safety fallback: auto-trigger reveal if isLoaded takes longer than 2.0s
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

  // Keep hero elements and stats card hidden until preloader fades out
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!internalLoaded) {
      gsap.set([badgeRef.current, titleRef.current, descRef.current, ctaRef.current], {
        opacity: 0,
        y: 40,
        filter: 'blur(14px)',
      });
      gsap.set(consoleRef.current, {
        opacity: 0,
        y: 45,
        filter: 'blur(12px)',
        scale: 0.98,
      });
      gsap.set(statsCardRef.current, {
        opacity: 0,
        y: 35,
        filter: 'blur(10px)',
      });
      gsap.set([stat1Ref.current, stat2Ref.current, stat3Ref.current, stat4Ref.current], {
        opacity: 0,
        y: 16,
      });

      if (count1Ref.current) count1Ref.current.textContent = '0M+';
      if (count2Ref.current) count2Ref.current.textContent = '0+';
      if (count3Ref.current) count3Ref.current.textContent = '+0%';
      if (count4Ref.current) count4Ref.current.textContent = '0.0%';
    }
  }, [internalLoaded]);

  // Stagger reveal sequence triggers AFTER loading animation fades out
  useEffect(() => {
    if (!internalLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(
        [
          badgeRef.current,
          titleRef.current,
          descRef.current,
          ctaRef.current,
          consoleRef.current,
          statsCardRef.current,
          stat1Ref.current,
          stat2Ref.current,
          stat3Ref.current,
          stat4Ref.current,
        ],
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          clearProps: 'all',
        }
      );
      if (count1Ref.current) count1Ref.current.textContent = '50M+';
      if (count2Ref.current) count2Ref.current.textContent = '120+';
      if (count3Ref.current) count3Ref.current.textContent = '+340%';
      if (count4Ref.current) count4Ref.current.textContent = '84.2%';
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.08, // Crisp beat right as curtain pulls up
        defaults: { ease: 'power3.out' }
      });

      // 1. Stagger reveal for the .text-center hero content
      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.75, clearProps: 'filter,willChange' }
      )
      .fromTo(
        titleRef.current,
        { y: 45, opacity: 0, filter: 'blur(16px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.95, clearProps: 'filter,willChange' },
        '-=0.55'
      )
      .fromTo(
        descRef.current,
        { y: 35, opacity: 0, filter: 'blur(12px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, clearProps: 'filter,willChange' },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { y: 25, opacity: 0, filter: 'blur(8px)', scale: 0.96 },
        { y: 0, opacity: 1, filter: 'blur(0px)', scale: 1, duration: 0.8, clearProps: 'filter,scale,willChange' },
        '-=0.55'
      )
      .fromTo(
        consoleRef.current,
        { y: 50, opacity: 0, filter: 'blur(12px)', scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1.05,
          clearProps: 'filter,scale,willChange'
        },
        '-=0.5'
      )
      // 2. Reveal the Metrics Card Container
      .fromTo(
        statsCardRef.current,
        { y: 35, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.75,
          clearProps: 'filter,willChange'
        },
        '-=0.3'
      );

      // 3. Count Animations: Reveal and count up one by one in a crisp sequential cascade
      // Stat 1: 50M+ Verified Organic Views
      const c1 = { val: 0 };
      tl.fromTo(
        stat1Ref.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, clearProps: 'scale,willChange' },
        '+=0.05'
      )
      .to(
        c1,
        {
          val: 50,
          duration: 0.8,
          ease: 'power2.out',
          onUpdate: () => {
            if (count1Ref.current) count1Ref.current.textContent = `${Math.round(c1.val)}M+`;
          },
          onComplete: () => {
            if (count1Ref.current) count1Ref.current.textContent = '50M+';
          }
        },
        '<'
      );

      // Stat 2: 120+ Brand Deals Brokered
      const c2 = { val: 0 };
      tl.fromTo(
        stat2Ref.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, clearProps: 'scale,willChange' },
        '-=0.15'
      )
      .to(
        c2,
        {
          val: 120,
          duration: 0.8,
          ease: 'power2.out',
          onUpdate: () => {
            if (count2Ref.current) count2Ref.current.textContent = `${Math.round(c2.val)}+`;
          },
          onComplete: () => {
            if (count2Ref.current) count2Ref.current.textContent = '120+';
          }
        },
        '<'
      );

      // Stat 3: +340% Average Footfall Surge
      const c3 = { val: 0 };
      tl.fromTo(
        stat3Ref.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, clearProps: 'scale,willChange' },
        '-=0.15'
      )
      .to(
        c3,
        {
          val: 340,
          duration: 0.85,
          ease: 'power2.out',
          onUpdate: () => {
            if (count3Ref.current) count3Ref.current.textContent = `+${Math.round(c3.val)}%`;
          },
          onComplete: () => {
            if (count3Ref.current) count3Ref.current.textContent = '+340%';
          }
        },
        '<'
      );

      // Stat 4: 84.2% 3-Second Hook Retention
      const c4 = { val: 0 };
      tl.fromTo(
        stat4Ref.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, clearProps: 'scale,willChange' },
        '-=0.15'
      )
      .to(
        c4,
        {
          val: 84.2,
          duration: 0.9,
          ease: 'power2.out',
          onUpdate: () => {
            if (count4Ref.current) count4Ref.current.textContent = `${c4.val.toFixed(1)}%`;
          },
          onComplete: () => {
            if (count4Ref.current) count4Ref.current.textContent = '84.2%';
          }
        },
        '<'
      );

      // Parallax scroll scrub for ambient glow
      if (glowRef.current && sectionRef.current) {
        gsap.to(glowRef.current, {
          y: 90,
          scale: 1.15,
          opacity: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [internalLoaded]);

  return (
    <section ref={sectionRef} id="hero" className="relative pt-32 sm:pt-40 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background Ambient Glow */}
      <div
        ref={glowRef}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[260px] bg-accent/15 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      {/* Editorial Distributed Hero Layout */}
      <div className="mb-14">
        {/* Typography & Direct Action */}
        <div className="max-w-4xl space-y-6 text-left">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-muted backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white">FamO1Mediaa Engine</span>
            <span className="text-muted">·</span>
            <span>Outdoor & Digital Commerce</span>
          </div>

          <h1
            ref={titleRef}
            className="font-display font-extrabold text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.04] text-balance"
          >
            Two-Sided Growth Engine For Brands & Creators
          </h1>

          <p
            ref={descRef}
            className="text-base sm:text-lg text-muted font-normal leading-relaxed max-w-2xl"
          >
            We bridge hyper-local marketing campaigns, tier-1 influencer partnerships, curated 3–5 restaurant district outdoor blitzes, and daily hands-on social media handling with an elite creator production trio.
          </p>

          {/* Nested Island CTA Group */}
          <div ref={ctaRef} className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={() => setAudience('brand')}
              className="group inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold shadow-xl shadow-accent/25 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Audit Your Brand</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center ml-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </a>

            <a
              href="#contact"
              onClick={() => setAudience('creator')}
              className="group inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Creator Representation</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-3 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </a>
          </div>

          {/* Live System Signal Badges */}
          <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              3–5 Spots / District
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Daily Social Handling
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Future Scope: Events
            </span>
          </div>
        </div>

        {/* Live Operations Radar Card (Commented out per request) */}
        {/*
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-7 rounded-3xl bg-surface/85 backdrop-blur-xl border border-white/10 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Live Operations Radar
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-accent/15 text-accent border border-accent/20">
                Syndicate V3.2
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent" /> Outdoor Campaign Blitz
                  </span>
                  <span className="text-emerald-400 font-bold">+340% Footfall</span>
                </div>
                <p className="text-[11px] text-muted">Active in Soho & Central across 4 curated hospitality dining spots.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Daily Social Media Desk
                  </span>
                  <span className="text-white font-bold">7-Day Cadence</span>
                </div>
                <p className="text-[11px] text-muted">Continuous community routing, comment conversion, and viral hook pushes.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/40" /> Creator Trio Pipeline
                  </span>
                  <span className="text-accent font-bold">48h SLA</span>
                </div>
                <p className="text-[11px] text-muted">Scripting → 4K Capturing & Editing → Social Media Distribution.</p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-muted">
              <span>Next District Onboarding:</span>
              <span className="text-white font-semibold">Mayfair & West End</span>
            </div>
          </div>
        </div>
        */}
      </div>

      {/* Double-Bezel Split Console */}
      <div ref={consoleRef} className="double-bezel">
        <div className="double-bezel-inner p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Bay: Brand Footfall & Conversion Pipeline */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Commerce Architecture
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Hyper-Local Footfall & Conversion Landers
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Deploy vetted foodie and lifestyle creator blitzes paired with sub-second web architecture. Every campaign delivers verified restaurant covers and traceable customer acquisition.
              </p>

              {/* Metric Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] text-muted font-medium mb-0.5">Footfall Surge</div>
                  <div className="text-lg font-bold text-white tracking-tight">+340%</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] text-muted font-medium mb-0.5">Attributed ROAS</div>
                  <div className="text-lg font-bold text-emerald-400 tracking-tight">4.2x</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] text-muted font-medium mb-0.5">Stack TTFB</div>
                  <div className="text-lg font-bold text-white tracking-tight">&lt; 380ms</div>
                </div>
              </div>
            </div>

            {/* Right Bay: Cinematic Visual Showcase */}
            <div className="relative rounded-2xl overflow-hidden bg-surface-subtle border border-white/10 group aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Osteria Botanica dining launch activation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-5 dark-overlay-content">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    Osteria Botanica Launch
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                    <TrendingUp className="w-3.5 h-3.5" /> +340% Footfall Lift
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Agency Metrics Strip */}
      <div
        ref={statsCardRef}
        className="mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-surface/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/5 dark:shadow-black/25 transition-all duration-300 hover:border-accent/30"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
          {/* Stat 1: 50M+ */}
          <div ref={stat1Ref} className="flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight tabular-nums">
              <span ref={count1Ref}>50M+</span>
            </div>
            <div className="text-xs sm:text-sm text-muted mt-1.5 font-medium">Verified Organic Views</div>
          </div>

          {/* Stat 2: 120+ */}
          <div ref={stat2Ref} className="flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight tabular-nums">
              <span ref={count2Ref}>120+</span>
            </div>
            <div className="text-xs sm:text-sm text-muted mt-1.5 font-medium">Brand Deals Brokered</div>
          </div>

          {/* Stat 3: +340% */}
          <div ref={stat3Ref} className="flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-500 dark:text-emerald-400 tracking-tight tabular-nums">
              <span ref={count3Ref}>+340%</span>
            </div>
            <div className="text-xs sm:text-sm text-muted mt-1.5 font-medium">Average Footfall Surge</div>
          </div>

          {/* Stat 4: 84.2% */}
          <div ref={stat4Ref} className="flex flex-col items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent tracking-tight tabular-nums">
              <span ref={count4Ref}>84.2%</span>
            </div>
            <div className="text-xs sm:text-sm text-muted mt-1.5 font-medium">3-Second Hook Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};
