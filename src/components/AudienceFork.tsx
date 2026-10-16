import React, { useRef } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { useAudience } from '../context/AudienceContext';
import { useGSAPScrollReveal } from '../hooks/useGSAPScrollReveal';

export const AudienceFork: React.FC = () => {
  const { audience, setAudience } = useAudience();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPScrollReveal(sectionRef, {
    headerSelector: '.section-header',
    itemsSelector: '.fork-card',
    stagger: 0.16,
  });

  return (
    <section ref={sectionRef} id="fork" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="section-header mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
            Dual Pipeline Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Growth Pathways
          </h2>
          <p className="mt-2 text-muted text-sm sm:text-base max-w-xl">
            Whether accelerating hospitality footfall or defending creator deal equity, our unified infrastructure delivers measurable outcomes.
          </p>
        </div>

        {/* Channel Selector Switch */}
        <div
          className="flex items-center p-1 rounded-full bg-white/[0.05] border border-white/10 self-start md:self-auto"
          role="radiogroup"
          aria-label="Audience View Switcher"
        >
          <button
            onClick={() => setAudience('brand')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
              audience === 'brand'
                ? 'bg-accent text-white shadow-lg shadow-accent/25'
                : 'text-muted hover:text-white'
            }`}
            role="radio"
            aria-checked={audience === 'brand'}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>For Brands</span>
          </button>
          <button
            onClick={() => setAudience('creator')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
              audience === 'creator'
                ? 'bg-accent text-white shadow-lg shadow-accent/25'
                : 'text-muted hover:text-white'
            }`}
            role="radio"
            aria-checked={audience === 'creator'}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>For Creators</span>
          </button>
        </div>
      </div>

      {/* Side-by-side Double-Bezel cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Brand Card */}
        <div
          onClick={() => setAudience('brand')}
          className={`fork-card double-bezel cursor-pointer group transition-all duration-300 ${
            audience === 'brand' ? 'ring-2 ring-accent' : ''
          }`}
        >
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Brands & Hospitality
                </span>
                <span className="text-xs text-muted">Direct Footfall Focus</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Local Footfall & Conversion Funnels
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Deploy vetted creator campaigns linked to sub-second load landing pages. Convert passing social attention into tangible restaurant covers and tracked consumer transactions.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Hyper-Local Footfall Blitzes</h4>
                    <p className="text-xs text-muted mt-0.5">Coordinated dining activations generating predictable multi-week queues.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Conversion-Engineered Landers</h4>
                    <p className="text-xs text-muted mt-0.5">Sub-400ms web platforms with live reservation or checkout funnels.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Complete Rights Clearance</h4>
                    <p className="text-xs text-muted mt-0.5">Pre-negotiated organic and paid advertising licenses with zero ambiguity.</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setAudience('brand')}
              className="inline-flex items-center justify-center pl-6 pr-2 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-xs font-semibold shadow-lg shadow-accent/25 transition-all duration-300 group-hover:shadow-accent/40"
            >
              <span>Schedule Brand Strategy Session</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
          </div>
        </div>

        {/* Creator Card */}
        <div
          onClick={() => setAudience('creator')}
          className={`fork-card double-bezel cursor-pointer group transition-all duration-300 ${
            audience === 'creator' ? 'ring-2 ring-accent' : ''
          }`}
        >
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Creator Representation
                </span>
                <span className="text-xs text-muted">Tier-One Brand Partnerships</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Corporate Representation & Post Desk
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                We handle brand sponsorship outreach, deal defense, contract drafting, and full short-form narrative editing so you focus entirely on your craft.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Direct Corporate Deal Defense</h4>
                    <p className="text-xs text-muted mt-0.5">Tier-one brand negotiations with locked deliverables and 3.4x average rate lift.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Viral 9:16 Video Post-Production</h4>
                    <p className="text-xs text-muted mt-0.5">Audio mastering, pacing optimization, kinetic subtitles, and 48-hour turnarounds.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bespoke Digital Media Kits</h4>
                    <p className="text-xs text-muted mt-0.5">High-converting portfolio landers showcasing verified demographic data.</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setAudience('creator')}
              className="inline-flex items-center justify-center pl-6 pr-2 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-semibold border border-white/10 transition-all duration-300 group-hover:border-white/20"
            >
              <span>Apply for Roster Representation</span>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center ml-3 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
