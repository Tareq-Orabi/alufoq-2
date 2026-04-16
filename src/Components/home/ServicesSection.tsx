import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../locales';
import { IconGraduationCap, IconBook, IconBriefcase } from '../shared/icons';

/**
 * ServicesSection — school programs & educational tracks.
 *
 * Top row (3 cols): Overview card | Program list | Campus image
 * Bottom row (3 cols): Educational track cards
 */
const ServicesSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <section
      className="py-24 px-6 bg-slate-50"
      aria-label={t.services.sectionLabel}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* ── Section header ───────────────────────────────────────── */}
        <div className="mb-4">
          <span className="text-school-red font-black uppercase tracking-[0.3em] text-2xl block mb-3">
            {t.services.tag}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-tight">
            {t.services.title}
          </h2>
        </div>

        {/* ── Overview card (full width) ───────────────────────────── */}
        <div className="bg-white rounded-[28px] p-8 md:p-12 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-8 hover:shadow-lg transition-shadow duration-300">
          {/* Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-school-red">
            <IconGraduationCap className="w-8 h-8" />
          </div>
          {/* Content */}
          <div className="flex flex-col gap-3">
            <span className="text-xl font-black text-school-red uppercase tracking-[0.25em] block">
              {t.services.overviewTag}
            </span>
            <h3 className="text-2xl font-black text-slate-900 leading-tight">
              {t.services.overviewTitle}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed font-medium max-w-3xl">
              {t.services.overviewDesc}
            </p>
          </div>
        </div>


        {/* ── Bottom 3-track grid ──────────────────────────────────── */}
        <div>
          <span className="text-2xl font-black text-school-red uppercase tracking-[0.25em] block mb-6">
            {t.services.tracksTag}
          </span>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.tracks.map((track, i) => {
              const icons = [
                <IconGraduationCap className="w-8 h-8" />,
                <IconBook className="w-8 h-8" />,
                <IconBriefcase className="w-8 h-8" />,
              ];
              return (
                <div
                  key={i}
                  className="group bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-red-100 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background number watermark */}
                  <span
                    className="absolute -bottom-4 -end-2 text-[100px] font-black text-slate-50 leading-none select-none group-hover:text-red-50 transition-colors duration-300"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10 flex flex-col gap-5">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-school-red group-hover:bg-school-red group-hover:text-white transition-all duration-300">
                      {icons[i]}
                    </div>
                    {/* Track title */}
                    <div>
                      <span className="text-xl font-black text-slate-400 uppercase tracking-[0.25em] block mb-1">
                        {t.services.trackLabel} {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 leading-tight">
                        {track.title}
                      </h3>
                    </div>
                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {track.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
