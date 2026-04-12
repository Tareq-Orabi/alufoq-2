import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../locales';
import { CALENDAR_DATA, CalendarMonth } from '../../data/calendar';
import { IconCalendar } from '../shared/icons';

/**
 * CalendarSection — academic calendar sidebar.
 * Renders months (via CalendarMonth enum), bilingual event titles,
 * and a PDF download CTA.
 */
const CalendarSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div className="bg-white p-10 rounded-[32px] border-l-4 border-school-red shadow-2xl">
      <h3 className="text-3xl font-black text-slate-950 uppercase italic tracking-tight flex items-center gap-3 mb-10">
        <IconCalendar className="w-7 h-7 text-school-red" />
        {t.calendar.title}
      </h3>

      <div className="space-y-8">
        {(Object.values(CalendarMonth) as CalendarMonth[]).map((month) => {
          const events = CALENDAR_DATA[month];
          return (
            <div key={month} className="space-y-4">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] pb-2 border-b border-slate-100">
                {t.calendar.months[month]}
              </h4>
              {events.map((event, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-2xl font-black text-school-red tabular-nums">{event.date}</span>
                  <p className="text-base text-slate-700 leading-snug pt-1">
                    {isAr ? event.title.ar : event.title.en}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <button
        className="w-full mt-10 text-center text-sm font-bold text-school-red hover:underline"
        aria-label={t.calendar.download}
      >
        {t.calendar.download}
      </button>
    </div>
  );
};

export default CalendarSection;
