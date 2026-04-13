import React from 'react';
import image3 from '../../assets/image3.jpg';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../locales';

/**
 * HeroSection — full-bleed hero with campus image, welcome badge,
 * headline, and descriptive stats paragraph.
 *
 * All content comes from the typed translation object; no inline conditionals.
 */
const HeroSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  const { pre, studentsCount, mid, facultyCount, post } = t.hero.statsHtml;

  return (
    <section className="relative bg-slate-50 lg:min-h-[90vh] flex items-center" aria-label="Hero">
      {/* Background campus image — positioned based on text direction */}
      <div className={`absolute inset-0 z-0 overflow-hidden ${isAr ? 'lg:right-1/4' : 'lg:left-1/4'}`}>
        <img
          src={image3}
          alt="Al-Ufoq school campus"
          className="w-full h-full object-cover transform scale-105"
          loading="lazy"
        />
        {/* Soft edge fade instead of a heavy white wash, keeping the image sharp */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-slate-50 from-0% via-slate-50/20 to-transparent to-50% z-10 ${isAr ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 lg:py-24 w-full">
        <div
          className={`lg:max-w-[55%] bg-white/80 shadow-2xl backdrop-blur-sm p-8 md:p-14 rounded-2xl rounded-tr-[80px] rounded-bl-[80px] ${isAr ? 'border-r-4 border-school-red' : 'border-l-4 border-school-red'
            } relative overflow-hidden`}
        >
          <div className="relative z-10">
            {/* Welcome badge */}
            <span className="inline-flex items-center gap-3 text-school-red font-black uppercase tracking-[0.3em] text-xs mb-8">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-school-red opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-school-red" />
              </span>
              {t.hero.welcome}
            </span>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter text-slate-950 uppercase italic">
              {t.hero.discover} <br />
              <span className="text-school-red not-italic">{t.hero.school}</span>
            </h1>

            {/* Stat + description */}
            <div className="space-y-8 text-xl text-slate-700 leading-relaxed font-light">
              <p className={`border-school-red ${isAr ? 'border-r-4 pr-6' : 'border-l-4 pl-6'}`}>
                {pre}
                <strong className="font-black text-slate-900">{studentsCount}</strong>
                {mid}
                <strong className="font-black text-slate-900">{facultyCount}</strong>
                {post}
              </p>
              <p className="max-w-2xl">{t.hero.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
