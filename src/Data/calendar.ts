/**
 * Academic Calendar Data
 *
 * CalendarMonth enum ensures month keys are type-safe.
 * Future: replace this static file with a CMS API call (e.g. Strapi /academic-calendars).
 */

export const CalendarMonth = {
  September: 'September',
  November: 'November',
  June: 'June',
} as const;

export type CalendarMonth = (typeof CalendarMonth)[keyof typeof CalendarMonth];

export interface CalendarEvent {
  /** Display date or date range (e.g. "8" or "23–27") */
  date: string;
  title: {
    en: string;
    ar: string;
  };
}

export const CALENDAR_DATA: Record<CalendarMonth, CalendarEvent[]> = {
  [CalendarMonth.September]: [
    { date: '8', title: { en: 'First Day of School', ar: 'أول يوم دراسي للطلاب' } },
  ],
  [CalendarMonth.November]: [
    { date: '11', title: { en: 'Holiday Day', ar: 'عطلة رسمية' } },
    { date: '23–27', title: { en: 'Eid al-Fitr Holiday', ar: 'عطلة عيد الفطر السعيد' } },
  ],
  [CalendarMonth.June]: [
    { date: '21', title: { en: 'Last Day of School', ar: 'اليوم الأخير من العام الدراسي' } },
  ],
};
