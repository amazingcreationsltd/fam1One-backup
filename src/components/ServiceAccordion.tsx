import React, { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { ChevronDown, Megaphone, Users, Utensils, Share2, Sparkles, Video, Calendar } from 'lucide-react';

export interface AccordionItemData {
  id: number;
  category: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  badge?: string;
  metrics?: { label: string; value: string }[];
}

const springTransition = {
  type: 'spring' as const,
  stiffness: 500,
  damping: 40,
  mass: 1,
};

const ACCORDION_ITEMS: AccordionItemData[] = [
  {
    id: 1,
    category: 'Brand Architecture',
    title: 'Marketing Campaigns & Performance Conversion',
    icon: <Megaphone className="w-5 h-5 text-accent" />,
    content:
      'We architect synchronized multi-channel growth campaigns combining paid algorithmic media with organic creator blitzes. Every campaign is backed by sub-second booking pages and measurable transaction attribution from day one.',
    metrics: [
      { label: 'Attributed ROAS', value: '4.2x Avg' },
      { label: 'Conversion Speed', value: '< 380ms TTFB' }
    ]
  },
  {
    id: 2,
    category: 'Talent Brokerage',
    title: 'Tier-One Influencer Partnerships & Contract Indemnity',
    icon: <Users className="w-5 h-5 text-accent" />,
    content:
      'Zero guesswork matchmaking. We audit demographic follower integrity, negotiate tier-one deal equity, and lock down 100% legal usage rights so brands scale safely and creators earn transparent commercial equity.',
    metrics: [
      { label: 'Audit Floor', value: '> 4.8% Engagement' },
      { label: 'Usage Clearance', value: '100% Guaranteed' }
    ]
  },
  {
    id: 3,
    category: 'Outdoor & Hyper-Local',
    title: 'Outdoor Campaigns: 3–5 Curated Restaurants Per District',
    icon: <Utensils className="w-5 h-5 text-emerald-400" />,
    badge: 'Signature Engine',
    content:
      'We curate 3 to 5 premier restaurants and lifestyle flagships in every target district, then deploy high-impact localized creator blitzes, digital window takeovers, and geofenced customer booking funnels that create multi-week queues.',
    metrics: [
      { label: 'District Footfall Lift', value: '+340% Average' },
      { label: 'Curated Roster', value: '3–5 Spots / District' }
    ]
  },
  {
    id: 4,
    category: 'Daily Relevance',
    title: 'Hands-On Daily Social Media Management',
    icon: <Share2 className="w-5 h-5 text-accent" />,
    content:
      'Content creation, algorithmic scheduling, trend-jacking, comment routing, and community care. Our operators run your brand channels 7 days a week to ensure your business remains culturally and algorithmically relevant every single day.',
    metrics: [
      { label: 'Posting Frequency', value: 'Daily 7/7 Cadence' },
      { label: 'Retention Score', value: '84.2% Hook Avg' }
    ]
  },
  {
    id: 5,
    category: 'Creator Studio',
    title: 'Creator Trio: Scripting, Capturing + 4K Editing, Social Handling',
    icon: <Video className="w-5 h-5 text-accent" />,
    badge: 'Creator Suite',
    content:
      'A complete operational cockpit for represented talent: 1. Scripting (algorithmic hook structures) → 2. Capturing + 4K Editing (cinematic 9:16 post-production with 48h turnarounds) → 3. Social Media Handling (deal brokerage & syndicate distribution).',
    metrics: [
      { label: 'Revision Turnaround', value: '< 48 Hours' },
      { label: 'Video Quality', value: 'ProRes 4K Vertical' }
    ]
  },
  {
    id: 6,
    category: 'Future Scope',
    title: 'Future Scope → Event Management & Experiential Pop-Ups',
    icon: <Calendar className="w-5 h-5 text-accent" />,
    badge: 'Upcoming Roadmap',
    content:
      'Expanding into high-production physical activations: VIP dining launches, invite-only creator summits, brand immersive pop-ups, and district-wide hospitality galas engineered to dominate real-world and digital feeds alike.',
    metrics: [
      { label: 'Rollout Phase', value: 'Q3/Q4 Expansion' },
      { label: 'Event Capacity', value: 'VIP to 1,000+ Guests' }
    ]
  }
];

export const ServiceAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(3); // Default open to Signature Outdoor District campaign

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header - Editorial Asymmetrical Distribution */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Operational Breakdown</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Full-Spectrum Service Architecture
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            Everything your brand or creator roster needs to command cultural attention and measurable revenue, built into a synchronized physics-based delivery system.
          </p>
        </div>

        {/* Status Pill */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-md self-start lg:self-auto text-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold">Active Operational Capacity: 94%</span>
        </div>
      </div>

      {/* Watermelon UI Inspired Card Split Accordion */}
      <MotionConfig transition={springTransition}>
        <div className="space-y-3">
          {ACCORDION_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                initial={false}
                animate={{
                  borderRadius: isOpen ? 24 : 18,
                  scale: isOpen ? 1 : 0.995,
                }}
                className={`relative overflow-hidden transition-colors duration-300 border ${
                  isOpen
                    ? 'bg-surface/95 border-accent/30 shadow-2xl shadow-accent/5'
                    : 'bg-surface/60 hover:bg-surface/80 border-white/10 hover:border-white/20'
                } backdrop-blur-xl`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-4 sm:gap-5 flex-1 pr-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-accent/15 border border-accent/30 text-accent scale-105'
                          : 'bg-white/[0.04] border border-white/10 text-muted group-hover:text-white'
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                          {item.category}
                        </span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-accent/15 text-accent border border-accent/20">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Arrow Pill */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={springTransition}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                      isOpen
                        ? 'bg-accent text-white border-accent shadow-md shadow-accent/25'
                        : 'bg-white/[0.04] text-muted border-white/10 group-hover:border-white/20 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Animated Accordion Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={springTransition}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-white/5 space-y-4">
                    <p className="text-sm sm:text-base text-muted font-normal leading-relaxed max-w-4xl">
                      {item.content}
                    </p>

                    {item.metrics && item.metrics.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                        {item.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-center"
                          >
                            <span className="text-[11px] text-muted font-medium">{m.label}</span>
                            <span className="text-sm sm:text-base font-bold text-white mt-0.5 tracking-tight">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </MotionConfig>
    </section>
  );
};
