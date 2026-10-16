import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, TrendingUp, UtensilsCrossed, Calendar, ArrowUpRight, ShieldCheck, Flame, Radio } from 'lucide-react';

interface RestaurantItem {
  name: string;
  cuisine: string;
  neighborhood: string;
  lift: string;
  views: string;
  highlight: string;
  image: string;
}

interface DistrictData {
  id: string;
  name: string;
  subtitle: string;
  activeBlitz: string;
  restaurants: RestaurantItem[];
}

const DISTRICT_DATA: DistrictData[] = [
  {
    id: 'soho',
    name: 'Soho & Central',
    subtitle: 'High-Density Dining & Lifestyle Hub',
    activeBlitz: 'Batch 14 Live',
    restaurants: [
      {
        name: 'Osteria Botanica',
        cuisine: 'Modern Italian & Hand-Rolled Pasta',
        neighborhood: 'Dean Street, Soho',
        lift: '+340%',
        views: '4.8M',
        highlight: '3-week continuous queue surge after viral truffle tagliolini hook',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Kuro Charcoal Grill',
        cuisine: 'Robata & Wagyu Tasting',
        neighborhood: 'Wardour Street, Soho',
        lift: '+285%',
        views: '3.9M',
        highlight: '98% table reservation sellout within 48 hours of creator preview',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Velvet Hour Patisserie',
        cuisine: 'Artisanal Bakery & Specialty Coffee',
        neighborhood: 'Berwick Street, Soho',
        lift: '+410%',
        views: '6.2M',
        highlight: 'Morning pastry sellout at 10:15 AM attributed to 9:16 viral reels',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Neon Lotus Bar & Dumplings',
        cuisine: 'Pan-Asian Speakeasy & Dim Sum',
        neighborhood: 'Gerrard Street, Soho',
        lift: '+290%',
        views: '3.4M',
        highlight: 'Late-night bar revenue up 3.2x with foodie influencer blitz',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'mayfair',
    name: 'Mayfair & West End',
    subtitle: 'Luxury Gastronomy & Flagship Hospitality',
    activeBlitz: 'Curated Roster V2',
    restaurants: [
      {
        name: 'Maison Vivienne',
        cuisine: 'French Contemporary & Fine Wine',
        neighborhood: 'Mount Street, Mayfair',
        lift: '+215%',
        views: '2.9M',
        highlight: 'High-net-worth cover increase & bespoke private dining bookings',
        image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Akira Robata Room',
        cuisine: 'Authentic Omakase & Rare Sake',
        neighborhood: 'Dover Street, Mayfair',
        lift: '+310%',
        views: '5.1M',
        highlight: 'Omakase seats booked out 6 weeks in advance via custom landing funnel',
        image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'The Burlington Social',
        cuisine: 'Bespoke Cocktail & Oyster Parlour',
        neighborhood: 'Cork Street, Mayfair',
        lift: '+260%',
        views: '3.1M',
        highlight: 'Weekend cocktail covers doubled through targeted creator hosting',
        image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'shoreditch',
    name: 'Shoreditch Arts',
    subtitle: 'Trendsetter Concepts & Creative Fast-Casual',
    activeBlitz: 'Street-Level Takeover',
    restaurants: [
      {
        name: 'Smokestack Cantina',
        cuisine: 'Smoked Brisket Tacos & Agave Bar',
        neighborhood: 'Redchurch Street, Shoreditch',
        lift: '+480%',
        views: '7.8M',
        highlight: 'Street line wrapped around 2 blocks after viral cheese-pull short',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Ferment & Fire Pizza',
        cuisine: '72hr Sourdough & Craft Ciders',
        neighborhood: 'Boxpark, Shoreditch',
        lift: '+320%',
        views: '4.2M',
        highlight: 'Average daily pizza dough capacity tripled with sub-second lander',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Matcha Alchemy Club',
        cuisine: 'Ceremonial Grade Matcha & Japanese Toast',
        neighborhood: 'Shoreditch High Street',
        lift: '+390%',
        views: '5.5M',
        highlight: 'Morning footfall surge driven by lifestyle aesthetic creators',
        image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export const DistrictOutdoorShowcase: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('soho');
  const currentDistrict = DISTRICT_DATA.find((d) => d.id === selectedDistrict) || DISTRICT_DATA[0];

  return (
    <section id="outdoor" className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header with Distributed Left-Right Layout */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Radio className="w-3 h-3 animate-ping" />
            <span>Curated District Outdoor Campaigns</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
            Strictly 3–5 Restaurants Per District
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base leading-relaxed">
            We deliberately do not work with everyone. We hand-select only 3 to 5 premier restaurants and local businesses in every district, pairing street-level outdoor buzz with creator takeovers and daily social management.
          </p>
        </div>

        {/* District Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-md">
          {DISTRICT_DATA.map((district) => (
            <button
              key={district.id}
              onClick={() => setSelectedDistrict(district.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                selectedDistrict === district.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'text-muted hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{district.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main District Showcase Console */}
      <div className="double-bezel mb-8">
        <div className="double-bezel-inner p-6 sm:p-8 space-y-8">
          {/* Active District Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                <Flame className="w-4 h-4 text-accent" />
                <span>Active Geo-Targeted Footfall Deployment</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {currentDistrict.name} — {currentDistrict.subtitle}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {currentDistrict.activeBlitz}
              </span>
              <span className="text-xs text-muted font-medium hidden sm:inline">
                Exclusive District Cap: 5 Brands Max
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDistrict}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentDistrict.restaurants.map((rest, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden bg-surface-subtle/80 border border-white/10 hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Photo & Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={rest.image}
                      alt={rest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4 dark-overlay-content">
                      <div className="flex justify-between items-start">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/10">
                          {rest.neighborhood}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black bg-emerald-500/90 text-white flex items-center gap-1 shadow-lg">
                          <TrendingUp className="w-3 h-3" /> {rest.lift} Lift
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-xs text-accent font-semibold mb-1 flex items-center gap-1.5">
                        <UtensilsCrossed className="w-3.5 h-3.5" />
                        <span>{rest.cuisine}</span>
                      </div>
                      <h4 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                        {rest.name}
                      </h4>
                      <p className="mt-2 text-xs text-muted leading-relaxed">
                        {rest.highlight}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <span className="text-muted font-medium">Attributed Reach:</span>
                      <span className="text-white font-bold">{rest.views} Views</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* District Synergies Footer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-muted">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>
                <strong>Non-Compete Assurance:</strong> We never sign direct competitor cuisines in the same district cohort.
              </span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-bold text-accent hover:text-white transition-colors shrink-0"
            >
              <span>Lock Your District Spot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Future Scope Callout Box */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-surface via-surface-subtle to-surface border border-accent/20 overflow-hidden shadow-xl shadow-black/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-[11px] font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Future Scope → Launching Late 2026</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Event Management & Experiential Pop-Ups
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Transforming online virality into high-production physical experiences: exclusive dining premieres, VIP creator galas, retail pop-ups, and brand anniversary activations.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center pl-6 pr-2 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs sm:text-sm font-semibold border border-white/10 transition-all duration-300 shrink-0"
          >
            <span>Inquire Early Event Access</span>
            <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center ml-3 transition-transform duration-300 group-hover:scale-105">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
