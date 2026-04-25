import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../locales';
import { CALENDAR_DATA, CalendarMonth } from '../../Data/calendar';
import { IconCalendar } from '../shared/icons';

/**
 * CalendarSection — academic calendar sidebar.
 */
const CalendarSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <div className="bg-white p-10 rounded-[32px] border-l-4 border-school-red shadow-2xl">
      <h3 className="text-3xl font-black text-slate-950 uppercase italic tracking-tight flex items-center gap-3 mb-6">
        <IconCalendar className="w-7 h-7 text-school-red" />
        {t.calendar.title}
      </h3>

     
      <div className="space-y-8 max-h-[400px] overflow-y-auto pr-2">
        {/* Render months in academic-friendly order (September → June), then remaining months */}
        {(() => {
          const academicOrder: CalendarMonth[] = [
            CalendarMonth.September,
            CalendarMonth.October,
            CalendarMonth.November,
            CalendarMonth.December,
            CalendarMonth.January,
            CalendarMonth.February,
            CalendarMonth.March,
            CalendarMonth.April,
            CalendarMonth.May,
            CalendarMonth.June,
            CalendarMonth.July,
            CalendarMonth.August,
          ];

          return academicOrder.map((month) => {
            const events = CALENDAR_DATA[month] || [];
            const monthTitle = (t.calendar.months as Record<CalendarMonth, string>)[month] || month;

            return (
              <div key={month} className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] pb-2 border-b border-slate-100">
                  {monthTitle}
                </h4>

                {events.length > 0 ? (
                  events.map((event, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-2xl font-black text-school-red tabular-nums">
                        {event.date}
                      </span>
                      <p className="text-base text-slate-700 leading-snug pt-1">
                        {isAr ? event.title.ar : event.title.en}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-slate-400 italic ps-2">{isAr ? 'لا يوجد فعاليات' : 'No events'}</div>
                )}
              </div>
            );
          });
        })()}
      </div>

   
    </div>
  );
};

export default CalendarSection;