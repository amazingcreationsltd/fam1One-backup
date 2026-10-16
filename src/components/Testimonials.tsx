import React, { useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useGSAPScrollReveal } from '../hooks/useGSAPScrollReveal';

export const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPScrollReveal(sectionRef, {
    headerSelector: '.section-header',
    itemsSelector: '.testimonial-card',
    stagger: 0.18,
  });

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="section-header mb-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-2">
          Partner Verification
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Verified Partner Perspectives
        </h2>
        <p className="mt-2 text-muted text-sm sm:text-base max-w-xl">
          Direct operational feedback from enterprise brand executives and represented creators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Creator Testimonial */}
        <div className="testimonial-card double-bezel group">
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs mb-4 text-muted">
                <span className="text-accent font-semibold uppercase tracking-wider">Creator Representation</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Creator
                </span>
              </div>
              <blockquote className="text-sm sm:text-base text-white font-medium leading-relaxed">
                &ldquo;They secured three six-figure brand partnerships in my first month and took video post-production completely off my plate. My engagement surged 40% while my administrative overhead vanished.&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Sarah Chen portrait"
                className="w-11 h-11 rounded-full object-cover border border-white/20 shadow-md"
                loading="lazy"
              />
              <div>
                <div className="font-bold text-white text-sm">Sarah Chen</div>
                <div className="text-xs text-muted">Lifestyle & Food Creator · 480K Followers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Testimonial */}
        <div className="testimonial-card double-bezel group">
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs mb-4 text-muted">
                <span className="text-muted font-semibold uppercase tracking-wider">Hospitality Partner</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Brand
                </span>
              </div>
              <blockquote className="text-sm sm:text-base text-white font-medium leading-relaxed">
                &ldquo;Our flagship dining launch had a queue around the block for three consecutive weeks thanks to FamO1Mediaa&rsquo;s hyper-local creator blitz and sub-second booking lander. Measurable revenue attribution from day one.&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                alt="Marco Rossi portrait"
                className="w-11 h-11 rounded-full object-cover border border-white/20 shadow-md"
                loading="lazy"
              />
              <div>
                <div className="font-bold text-white text-sm">Marco Rossi</div>
                <div className="text-xs text-muted">Managing Partner, Osteria Botanica Group</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
