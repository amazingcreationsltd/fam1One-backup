import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Clapperboard, Share2, Sparkles, Check, ArrowRight, ChevronDown } from 'lucide-react';

interface CreatorService {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  points: string[];
  specs: { label: string; val: string }[];
  deliverable: string;
}

const CREATOR_SERVICES: CreatorService[] = [
  {
    id: 'scripting',
    step: 'Phase 01',
    title: 'Retention-Engineered Scripting',
    subtitle: 'Algorithmic Hook Architecture',
    description:
      'We eliminate drop-offs in the first 3 seconds with proprietary retention loops, open-loop psychology, and pacing structures built specifically for vertical algorithms.',
    icon: <FileText className="w-5 h-5 text-accent" />,
    points: [
      '3-Second Visual & Verbal Hook Formulas',
      'Curiosity Gap & Open-Loop Retention Engineering',
      'Format-Specific Beats for TikTok, Reels & Shorts',
      'Sponsor Integration Without Audience Fatigue'
    ],
    specs: [
      { label: 'Hook Retention Goal', val: '> 80%' },
      { label: 'Average Watch-Through', val: '68.4%' },
      { label: 'Script Turnaround', val: '24 Hours' }
    ],
    deliverable: 'Complete teleprompter scripts with shot lists and B-roll cues'
  },
  {
    id: 'capturing-editing',
    step: 'Phase 02',
    title: 'Capturing + 4K Vertical Editing',
    subtitle: 'Studio & On-Location Production',
    description:
      'Cinematic multicam filming paired with post-desk retention editing: custom sound design, rhythm-matched cuts, native dynamic typography, and colour grading.',
    icon: <Clapperboard className="w-5 h-5 text-accent" />,
    points: [
      'On-Location 4K ProRes Production & Lighting Rig',
      'Dynamic Typography & Kinetic Motion Graphics',
      'Multi-Layered Sound FX & Foley Engineering',
      'Strict 48-Hour Revision Turnaround SLA'
    ],
    specs: [
      { label: 'Video Export Quality', val: '4K ProRes 60' },
      { label: 'Turnaround Time', val: '48h SLA' },
      { label: 'Revision Cycles', val: 'Unlimited' }
    ],
    deliverable: 'Platform-optimized, ready-to-post 9:16 master files'
  },
  {
    id: 'social-handling',
    step: 'Phase 03',
    title: 'Full-Service Social Media Handling',
    subtitle: 'Channel Optimization & Deal Brokerage',
    description:
      'We run your distribution so you only focus on creation: optimal posting cadence, algorithmic tagging, comment section routing, and tier-1 brand sponsorship brokerage.',
    icon: <Share2 className="w-5 h-5 text-accent" />,
    points: [
      'Cross-Platform Syndicate Distribution (IG, TT, YT)',
      'Community Management & Engagement Multipliers',
      'Sponsorship Rate-Card Negotiation & Contract Legalities',
      'Monthly Revenue Analytics & Attributed Metric Audits'
    ],
    specs: [
      { label: 'Daily Management', val: '7 Days / Wk' },
      { label: 'Deal Equity Margin', val: 'Tier-1 High' },
      { label: 'Growth Acceleration', val: '+210% YoY' }
    ],
    deliverable: 'Dedicated account director & full monthly revenue distribution'
  }
];

const springTransition = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 40,
  mass: 1,
};

export const CreatorStudioSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('scripting');
  const [mobileOpenId, setMobileOpenId] = useState<string | null>('scripting');
  const activeService = CREATOR_SERVICES.find((s) => s.id === activeTab) || CREATOR_SERVICES[0];

  return (
    <section id="creator-suite" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Editorial Split Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Creator Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Creator Trio: From Idea to Monetization
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            A specialized 3-stage studio pipeline designed for high-calibre lifestyle, food, and culture creators who want to scale their content and business without burnout.
          </p>
        </div>

        {/* 3 Step Pill Selector (Desktop only) */}
        <div className="hidden lg:flex items-center p-1.5 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-md">
          {CREATOR_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === s.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'text-muted hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span>{s.step}</span>
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE ACCORDION VIEW (< lg) */}
      <div className="block lg:hidden space-y-3.5">
        {CREATOR_SERVICES.map((service) => {
          const isOpen = mobileOpenId === service.id;

          return (
            <div
              key={service.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-surface/95 border-accent/40 shadow-xl shadow-accent/5'
                  : 'bg-surface/50 border-white/10'
              } backdrop-blur-xl`}
            >
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => setMobileOpenId(isOpen ? null : service.id)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3.5 pr-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-accent/15 border border-accent/30 text-accent'
                        : 'bg-white/[0.04] border border-white/10 text-muted'
                    }`}
                  >
                    {service.icon}
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block">
                      {service.step}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white tracking-tight leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={springTransition}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                    isOpen
                      ? 'bg-accent text-white border-accent shadow-md shadow-accent/25'
                      : 'bg-white/[0.04] text-muted border-white/10'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Accordion Collapsible Body */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? 'auto' : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={springTransition}
                className="overflow-hidden"
              >
                <div className="px-5 pb-6 pt-2 border-t border-white/5 space-y-4">
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white block">
                      Execution Highlights:
                    </span>
                    <div className="space-y-2">
                      {service.points.map((pt, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white/90"
                        >
                          <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Specs */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {service.specs.map((sp, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-center"
                      >
                        <div className="text-[10px] text-muted font-medium mb-0.5">{sp.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                          {sp.val}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable & CTA */}
                  <div className="pt-3 border-t border-white/10 space-y-3">
                    <div className="text-[11px] text-muted">
                      <strong>Deliverable:</strong> {service.deliverable}
                    </div>
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-accent text-white text-xs font-semibold shadow-lg shadow-accent/25 active:scale-[0.98] transition-all"
                    >
                      <span>Apply for Representation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* DESKTOP 2-COLUMN INTERACTIVE VIEW (>= lg) */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: 3 Stepper Selection List */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          {CREATOR_SERVICES.map((service) => {
            const isSelected = activeTab === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-surface/90 border-accent/40 shadow-xl shadow-accent/5'
                    : 'bg-surface/40 hover:bg-surface/70 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {service.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-accent text-white' : 'bg-white/[0.05] text-muted'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs text-muted mt-1 font-medium">{service.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Detail Panel with Framer Motion */}
        <div className="lg:col-span-7 double-bezel">
          <div className="double-bezel-inner p-6 sm:p-9 flex flex-col justify-between h-full space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                className="space-y-6 flex-1"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center">
                      {activeService.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                        {activeService.step} Focus
                      </span>
                      <h4 className="font-display text-2xl font-bold text-white tracking-tight">
                        {activeService.title}
                      </h4>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted leading-relaxed font-normal">
                  {activeService.description}
                </p>

                {/* Key Points */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white block">
                    Execution Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.points.map((pt, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-muted"
                      >
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-white/90">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Specs */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {activeService.specs.map((sp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center"
                    >
                      <div className="text-[11px] text-muted font-medium mb-0.5">{sp.label}</div>
                      <div className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {sp.val}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Action Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted">
                <strong>Standard Deliverable:</strong> {activeService.deliverable}
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center pl-5 pr-2 py-2 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold shadow-lg shadow-accent/25 transition-all duration-300 shrink-0"
              >
                <span>Apply for Representation</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-2.5 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
