/**
 * Academic Calendar Data
 *
 * CalendarMonth enum ensures month keys are type-safe.
 * Future: replace this static file with a CMS API call (e.g. Strapi /academic-calendars).
 */

export const CalendarMonth = {
  January: 'January',
  February: 'February',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December',
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

/**
 * Plain static calendar data. This file is intentionally self-contained
 * and does not reference external event sources.
 */
export const CALENDAR_DATA: Record<CalendarMonth, CalendarEvent[]> = {
  [CalendarMonth.September]: [
    { date: '1–5/9', title: { en: 'Teacher Preparation Week', ar: 'أسبوع تحضير المعلمين' } },
    { date: '8/9', title: { en: 'First Day of School', ar: 'أول يوم دراسي للطلاب' } },
    { date: '15/9', title: { en: 'Orientation Sessions', ar: 'جلسات تعريفية للطلاب' } },
    { date: '28/9', title: { en: 'Parent Meeting', ar: 'اجتماع أولياء الأمور' } },
  ],

  [CalendarMonth.October]: [
    { date: '15/10', title: { en: 'Technical Workshop', ar: 'ورشة تقنية تطبيقية' } },
  ],

  [CalendarMonth.November]: [
    { date: '5/11', title: { en: 'Midterm Exams Start', ar: 'بداية الامتحانات النصفية' } },
    { date: '11/11', title: { en: 'Official Holiday', ar: 'عطلة رسمية' } },
    { date: '18/11', title: { en: 'Midterm Exams End', ar: 'نهاية الامتحانات النصفية' } },
  ],

  [CalendarMonth.December]: [
    { date: '20/12', title: { en: 'Project Submissions', ar: 'تسليم المشاريع' } },
  ],

  [CalendarMonth.January]: [
    { date: '10/1', title: { en: 'Revision Week Start', ar: 'بداية أسبوع المراجعة' } },
  ],

  [CalendarMonth.February]: [
    { date: '1/2', title: { en: 'Final Exams Start', ar: 'بداية الامتحانات النهائية' } },
    { date: '10/2', title: { en: 'Final Exams End', ar: 'نهاية الامتحانات النهائية' } },
    { date: '25/2', title: { en: 'Signing of Cooperation Agreement with Volt Academy', ar: 'توقيع اتفاقية تعاون مع أكاديمية فولت' } },
  ],

  [CalendarMonth.March]: [
    { date: '10/3', title: { en: 'Industry Visit', ar: 'زيارة ميدانية تقنية' } },
    { date: '10/3', title: { en: 'Volt Training Academy Visit (BTEC)', ar: 'زيارة أكاديمية فولت للتدريب (مسار BTEC)' } },
    { date: '24/3', title: { en: 'Interactive Session', ar: 'جلسة تفاعلية' } },
    { date: '24/3', title: { en: 'BTEC Interactive Learning Session', ar: 'جلسة تعليمية تفاعلية BTEC' } },
  ],

  [CalendarMonth.April]: [
    { date: '1/4', title: { en: 'BTEC Intro Session', ar: 'جلسة تعريفية BTEC' } },
    { date: '1/4', title: { en: 'BTEC Intro Session at GJU', ar: 'جلسة تعريفية ببرنامج BTEC في الجامعة الألمانية' } },
    { date: '10/4', title: { en: 'Educational Visit to Futeric', ar: 'زيارة تعليمية لشركة Futeric' } },
    { date: '15/4', title: { en: 'Workshop', ar: 'ورشة تدريبية' } },
    { date: '15/4', title: { en: 'Specialized Technical Workshop', ar: 'ورشة عمل تقنية متخصصة' } },
    { date: '20/4', title: { en: 'Arduino Training', ar: 'تدريب على أردوينو' } },
    { date: '25/4', title: { en: 'BTEC Open Day', ar: 'اليوم المفتوح (BTEC)' } },
  ],

  [CalendarMonth.May]: [
    { date: '20/5', title: { en: 'Revision Week', ar: 'أسبوع المراجعة' } },
  ],

  [CalendarMonth.June]: [
    { date: '5/6', title: { en: 'Final Exams Start', ar: 'بداية الامتحانات النهائية' } },
    { date: '15/6', title: { en: 'Final Exams End', ar: 'نهاية الامتحانات النهائية' } },
    { date: '21/6', title: { en: 'Last Day of School', ar: 'اليوم الأخير من العام الدراسي' } },
  ],

  [CalendarMonth.July]: [],
  [CalendarMonth.August]: [],
};