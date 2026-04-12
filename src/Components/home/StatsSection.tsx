import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../locales';
import StatCard from '../shared/StatCard';
import {
  IconCertificate,
  IconUsers,
  IconGraduationCap,
  IconHeart,
} from '../shared/icons';

/** Icons aligned to each stat card by index */
const STAT_ICONS = [
  <IconCertificate className="w-12 h-12" />,
  <IconUsers className="w-12 h-12" />,
  <IconGraduationCap className="w-12 h-12" />,
  <IconHeart className="w-12 h-12" />,
];

/**
 * StatsSection — full-width dark background section with animated dot
 * pattern and a 4-column grid of key school statistics.
 */
const StatsSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="bg-slate-950 text-white py-28 px-6 relative overflow-hidden" aria-label="School Statistics">
      {/* Animated dot background */}
      <div className="absolute inset-0 opacity-[0.15]" aria-hidden="true">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotted-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" className="animate-pulse" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-sm font-black text-school-red uppercase tracking-[0.3em] mb-4">
            {t.stats.tag}
          </h2>
          <p className="text-5xl font-black tracking-tighter leading-tight uppercase italic mb-6">
            {t.stats.title}
          </p>
          <p className="text-xl text-slate-400 font-light leading-relaxed">{t.stats.desc}</p>
        </div>

        {/* Stat cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.cards.map((card, i) => (
            <StatCard
              key={i}
              label={card.label}
              value={card.value}
              icon={STAT_ICONS[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
