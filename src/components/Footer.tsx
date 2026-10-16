import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-surface border-t border-white/10 pt-16 pb-10 px-4 sm:px-6 overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Top Direct Contact Strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 mb-12 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
              Direct Senior Partner Desk
            </span>
            <a
              href="mailto:partners@famo1mediaa.agency"
              className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors flex items-center gap-2"
            >
              <span>partners@famo1mediaa.agency</span>
              <ArrowUpRight className="w-5 h-5 text-accent" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-medium">
            <span>Global Office Hubs:</span>
            <span className="text-white">London · New York · Dubai</span>
          </div>
        </div>

        {/* 4 Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="font-display font-black text-white text-base tracking-wider">
              FamO1Mediaa
            </div>
            <p className="text-muted leading-relaxed max-w-xs text-xs">
              Two-sided operational media agency uniting brand footfall conversion and creator deal representation.
            </p>
            <div className="text-[11px] text-muted">
              © 2026 FamO1Mediaa Group Ltd.
            </div>
          </div>

          {/* Brands */}
          <div className="space-y-2.5">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              For Brands
            </div>
            <ul className="space-y-2 text-muted">
              <li><a href="#fork" className="hover:text-white transition-colors">Hospitality Footfall Blitz</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conversion Web Platforms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Monthly Maintenance SLA</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Verified Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Brand Strategy Session</a></li>
            </ul>
          </div>

          {/* Creators */}
          <div className="space-y-2.5">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              For Creators
            </div>
            <ul className="space-y-2 text-muted">
              <li><a href="#roster" className="hover:text-white transition-colors">Talent Representation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">9:16 Video Post-Desk</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Deal Yield Simulator</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Bespoke Digital Media Kits</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Apply for Roster</a></li>
            </ul>
          </div>

          {/* Compliance & Standards */}
          <div className="space-y-2.5">
            <div className="font-bold text-white uppercase tracking-wider text-[11px]">
              Standards & Legal
            </div>
            <ul className="space-y-2 text-muted">
              <li><a href="#workflow" className="hover:text-white transition-colors">Three-Stage Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FTC & ASA Disclosures</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Creator Rights Indemnity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy & Data Handling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Representation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted pt-6 border-t border-white/10 gap-3">
          <div>All rights reserved. Built with modern agency architecture.</div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Back to Top ↑</a>
          </div>
        </div>
      </div>

      {/* Watermark close */}
      <div
        className="text-center font-display font-black select-none pointer-events-none text-muted opacity-[0.06] tracking-tighter text-[16vw] leading-none mt-4 -mb-10"
        aria-hidden="true"
      >
        FamO1Mediaa
      </div>
    </footer>
  );
};
