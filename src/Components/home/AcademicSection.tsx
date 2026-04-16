import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../locales';
import CalendarSection from './CalendarSection';

/**
 * AcademicSection — two-column layout:
 *  - Left (2/3): Academic overview, tag pills, description, project cards
 *  - Right (1/3): CalendarSection sidebar
 *
 * Both columns read from the typed translation object via useLanguage().
 */
const AcademicSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="py-24 px-6 bg-white" aria-label="Academic Programs">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
        {/* Left — Academic content */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-black text-school-red uppercase tracking-[0.3em] mb-4">
              {t.academic.tag}
            </h2>
            <p className={`font-black text-slate-950 tracking-tight ${lang === 'ar' ? '' : 'text-5xl tracking-tighter uppercase italic'}`} style={{ fontSize: lang === 'ar' ? '80px' : undefined }}>
              {t.academic.title}
            </p>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[32px] border border-slate-100">
            {/* Program tag pills */}
            <div className="flex flex-wrap gap-3 mb-8" role="list" aria-label="Available programs">
              {t.academic.tags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="px-5 py-2.5 bg-white border border-slate-100 rounded-full text-sm font-bold text-slate-800 shadow-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-school-red" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed text-lg font-light mb-10">
              {t.academic.desc}
            </p>

          </div>
        </div>

        {/* Right — Academic calendar sidebar */}
        <CalendarSection />
      </div>
    </section>
  );
};

export default AcademicSection;
