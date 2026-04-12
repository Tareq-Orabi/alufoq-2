import React from 'react';
import school from '../assets/school.jpg';

// --- Types ---
interface CalendarEvent {
    date: string;
    title: { en: string; ar: string };
}

// --- Translation Configuration ---
const content = (isAr: boolean) => ({
    hero: {
        welcome: isAr ? "أهلاً بكم في الأفق" : "Welcome to Al-Ofoq",
        discover: isAr ? "اكتشف" : "Discover",
        school: isAr ? "مدرستنا" : "Our School",
        stats: isAr ? (
            <>نحن موطن لـ <strong className="font-black text-slate-900">500 طالب</strong> و <strong className="font-black text-slate-900">50 خبيراً</strong> من أعضاء هيئة التدريس.</>
        ) : (
            <>We are home to <strong className="font-black text-slate-900">500 students</strong> and <strong className="font-black text-slate-900">50 expert faculty</strong> members.</>
        ),
        desc: isAr
            ? "مدرسة وروضة الأفق هي مؤسسة تعليمية خاصة رائدة في عمان، الأردن. نوفر بيئة تعليمية داعمة تركز على التميز الأكاديمي والنمو الشخصي."
            : "Al-Ofoq School & Kindergarten is a premier private educational institution in Amman, Jordan. We provide a supportive, coeducational environment focused on academic rigor."
    },
    academic: {
        tag: isAr ? "الأساس الأكاديمي" : "Academic Foundation",
        title: isAr ? "تعليم شامل" : "Comprehensive Education",
        tags: isAr
            ? ['المدرسة (الصف 1-12)', 'الروضة (عمر 4-6)', 'برامج BTEC']
            : ['School (Grades 1-12)', 'Kindergarten (Ages 4-6)', 'BTEC Programs'],
        desc: isAr
            ? "تقدم المدرسة مساراً تعليمياً كاملاً يمتد من الروضة حتى المرحلة الثانوية. نحن نهتم بالبنين والبنات، ونوفر بيئة تعليمية مشتركة ديناميكية."
            : "The school offers a complete educational pathway from Kindergarten through secondary levels. We cater to both boys and girls in a dynamic environment.",
        projects: [
            { title: isAr ? "التصميم الخارجي الجديد للمدرسة" : "New Exterior Design of Our School", progress: "50%", target: "$12,000" },
            { title: isAr ? "إنشاء ملعب كرة القدم الجديد" : "Setup New Football Stadium", progress: "13%", target: "$33,000" }
        ]
    },
    calendar: {
        title: isAr ? "التقويم الأكاديمي" : "Academic Calendar",
        download: isAr ? "تحميل التقويم كاملاً (PDF) ←" : "Download Full Calendar (PDF) →",
        months: {
            September: isAr ? "أيلول" : "September",
            November: isAr ? "تشرين الثاني" : "November",
            June: isAr ? "حزيران" : "June"
        }
    },
    stats: {
        tag: isAr ? "أهدافنا وتأثيرنا" : "Our Goals & Impact",
        title: isAr ? "إحصائيات المدرسة" : "School Statistics",
        desc: isAr
            ? "هنا يمكنك مراجعة بعض الإحصائيات الرئيسية التي تعكس نجاح وتفاني مجتمع الأفق."
            : "Here you can review some key statistics reflecting the success and dedication of our Al-Ofoq community.",
        cards: [
            { label: isAr ? "معلمون خبراء معتمدون" : "Certified Expert Teachers", value: "67" },
            { label: isAr ? "طلاب نشطون مسجلون" : "Active Students Enrolled", value: "5,673" },
            { label: isAr ? "نسبة النجاح للجامعات" : "Passing to Universities", value: "97%" },
            { label: isAr ? "أولياء أمور راضون" : "Satisfied & Supportive Parents", value: "100%" }
        ]
    },
    admissions: {
        tag: isAr ? "انضم إلى مجتمعنا" : "Join Our Community",
        title: isAr ? "إجراءات القبول" : "Admissions Process",
        desc: isAr
            ? "نحن نقبل حالياً طلبات الالتحاق من الصف الرابع إلى العاشر للعام الدراسي القادم."
            : "We are currently accepting applications for Grades 4 through 10 for the upcoming academic year.",
        steps: [
            { step: 1, title: isAr ? "طلب معلومات" : "Request Info", desc: isAr ? "ستتلقى رسالة تأكيد بالبريد الإلكتروني تحتوي على تعليمات إكمال الطلب." : "You will receive a confirmation email with instructions to complete our online application." },
            { step: 2, title: isAr ? "التقديم عبر الإنترنت" : "Apply Online", desc: isAr ? "يمكنك تسجيل الدخول وإكمال طلبك باستخدام البيانات المرسلة إليك." : "Login and complete your online application using the credentials emailed to you." },
            { step: 3, title: isAr ? "إرسال النموذج" : "Submit Form", desc: isAr ? "أدخل معلومات الدفع ورسوم الطلب (100 دينار). ستتلقى تأكيداً فورياً." : "Enter payment information and JOD 100.00 application fee. You will receive an email confirmation." }
        ]
    }
});

const CALENDAR_DATA: Record<string, CalendarEvent[]> = {
    September: [{ date: "8", title: { en: "First Day of School", ar: "أول يوم دراسي للطلاب" } }],
    November: [
        { date: "11", title: { en: "Holiday Day", ar: "عطلة رسمية" } },
        { date: "23–27", title: { en: "Eid al-Fitr Holiday", ar: "عطلة عيد الفطر السعيد" } }
    ],
    June: [{ date: "21", title: { en: "Last Day of School", ar: "اليوم الأخير من العام الدراسي" } }]
};

// --- Sub-Components ---
const StatCard: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center relative overflow-hidden group">
        <div className="absolute -bottom-4 -right-4 text-slate-100 group-hover:text-red-50 transition-colors duration-500 scale-150">
            {icon}
        </div>
        <div className="relative z-10">
            <div className="flex justify-center mb-4 text-school-red">{icon}</div>
            <div className="text-4xl md:text-5xl font-black text-school-red mb-3 tracking-tight">{value}</div>
            <div className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-[0.2em] leading-relaxed max-w-[15ch] mx-auto">{label}</div>
        </div>
    </div>
);

const ProjectCard: React.FC<{ title: string; progress: string; target: string; isAr: boolean }> = ({ title, progress, target, isAr }) => (
    <div className="bg-white p-7 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between group transition-all hover:shadow-2xl hover:-translate-y-1">
        <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 rounded-xl text-school-red mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="font-bold text-xl mb-6 text-slate-800 leading-snug group-hover:text-school-red transition">{title}</h4>
        </div>
        <div className="space-y-4">
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                <div className="bg-school-red h-full rounded-full transition-all duration-1000" style={{ width: progress }}></div>
            </div>
            <div className="flex justify-between text-sm font-bold">
                <span className="text-school-red">{progress} {isAr ? 'تم التبرع' : 'Donated'}</span>
                <span className="text-slate-400">{isAr ? 'من' : 'of'} {target}</span>
            </div>
        </div>
    </div>
);

export const Home: React.FC<{ lang: 'en' | 'ar' }> = ({ lang }) => {
    const isAr = lang === 'ar';
    const t = content(isAr);

    return (
        <div className={`overflow-x-hidden bg-white text-slate-900 selection:bg-red-50 selection:text-school-red ${isAr ? 'font-arabic' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>

            {/* HERO SECTION */}
            <section className="relative bg-slate-50 lg:min-h-[90vh] flex items-center">
                <div className={`absolute inset-0 z-0 overflow-hidden ${isAr ? 'lg:right-1/3' : 'lg:left-1/3'}`}>
                    <img src={school} alt="Campus" className="w-full h-full object-cover transform scale-105" />
                    <div className={`absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 lg:from-transparent z-10 ${isAr ? 'rotate-180' : ''}`}></div>
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 lg:py-24 w-full">
                    <div className={`lg:max-w-[65%] bg-white/20 p-10 md:p-20 rounded-2xl rounded-tr-[80px] rounded-bl-[80px] ${isAr ? 'border-r-4 border-school-red' : 'border-l-4 border-school-red'} relative overflow-hidden`}>
                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-3 text-school-red font-black uppercase tracking-[0.3em] text-xs mb-8">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-school-red opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-school-red"></span>
                                </span>
                                {t.hero.welcome}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[0.95] tracking-tighter text-slate-950 uppercase italic">
                                {t.hero.discover} <br />
                                <span className="text-school-red not-italic">{t.hero.school}</span>
                            </h1>
                            <div className="space-y-8 text-xl text-slate-700 leading-relaxed font-light">
                                <p className={`border-school-red ${isAr ? 'border-r-4 pr-6' : 'border-l-4 pl-6'}`}>{t.hero.stats}</p>
                                <p className="max-w-2xl">{t.hero.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACADEMIC SECTION */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-sm font-black text-school-red uppercase tracking-[0.3em] mb-4">{t.academic.tag}</h2>
                            <p className="text-5xl font-black tracking-tighter uppercase italic text-slate-950">{t.academic.title}</p>
                        </div>
                        <div className="bg-slate-50 p-8 md:p-12 rounded-[32px] border border-slate-100">
                            <div className="flex flex-wrap gap-3 mb-8">
                                {t.academic.tags.map(tag => (
                                    <span key={tag} className="px-5 py-2.5 bg-white border border-slate-100 rounded-full text-sm font-bold text-slate-800 shadow-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-school-red"></span>{tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg font-light mb-10">{t.academic.desc}</p>
                            <div className="grid md:grid-cols-2 gap-8">
                                {t.academic.projects.map((p, i) => (
                                    <ProjectCard key={i} {...p} isAr={isAr} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[32px] border-l-4 border-school-red shadow-2xl">
                        <h3 className="text-3xl font-black text-slate-950 uppercase italic tracking-tight flex items-center gap-3 mb-10">
                            <svg className="w-7 h-7 text-school-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002 2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            {t.calendar.title}
                        </h3>
                        <div className="space-y-8">
                            {Object.entries(CALENDAR_DATA).map(([month, events]) => (
                                <div key={month} className="space-y-4">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] pb-2 border-b border-slate-100">
                                        {t.calendar.months[month as keyof typeof t.calendar.months] || month}
                                    </h4>
                                    {events.map((event, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <span className="text-2xl font-black text-school-red tabular-nums">{event.date}</span>
                                            <p className="text-base text-slate-700 leading-snug pt-1">{isAr ? event.title.ar : event.title.en}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-10 text-center text-sm font-bold text-school-red hover:underline">{t.calendar.download}</button>
                    </div>
                </div>
            </section>

            {/* RESTORED STATISTICS SECTION */}
            <section className="bg-slate-950 text-white py-28 px-6 relative overflow-hidden">
                {/* Animated Background Dots */}
                <div className="absolute inset-0 opacity-[0.15]">
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
                    <div className="text-center mb-20 max-w-2xl mx-auto">
                        <h2 className="text-sm font-black text-school-red uppercase tracking-[0.3em] mb-4">{t.stats.tag}</h2>
                        <p className="text-5xl font-black tracking-tighter leading-tight uppercase italic mb-6">{t.stats.title}</p>
                        <p className="text-xl text-slate-400 font-light leading-relaxed">{t.stats.desc}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* 1. Certified Expert Teachers */}
                        <StatCard
                            label={t.stats.cards[0].label}
                            value={t.stats.cards[0].value}
                            icon={
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            }
                        />

                        {/* 2. Active Students */}
                        <StatCard
                            label={t.stats.cards[1].label}
                            value={t.stats.cards[1].value}
                            icon={
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            }
                        />

                        {/* 3. University Passing */}
                        <StatCard
                            label={t.stats.cards[2].label}
                            value={t.stats.cards[2].value}
                            icon={
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            }
                        />

                        {/* 4. Parent Satisfaction */}
                        <StatCard
                            label={t.stats.cards[3].label}
                            value={t.stats.cards[3].value}
                            icon={
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* ADMISSIONS SECTION */}
            <section className="py-28 px-6 max-w-7xl mx-auto bg-white">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-black text-school-red uppercase tracking-[0.3em] mb-4">{t.admissions.tag}</h2>
                    <p className="text-5xl font-black tracking-tighter uppercase italic mb-6 text-slate-950">{t.admissions.title}</p>
                    <p className="text-xl text-slate-600 font-light">{t.admissions.desc}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {t.admissions.steps.map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 relative group hover:border-school-red transition shadow-sm hover:shadow-2xl">
                            <div className={`text-[120px] font-black text-slate-50 absolute -top-12 ${isAr ? 'right-4' : 'left-4'} group-hover:text-red-50 transition-colors`}>{item.step}</div>
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <h4 className="text-2xl font-black text-slate-950 mb-3 uppercase italic tracking-tighter">{item.title}</h4>
                                <p className="text-base text-slate-600 mb-8 leading-relaxed font-light">{item.desc}</p>
                                <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition ${i === 2 ? 'bg-school-red text-white shadow-xl shadow-red-200' : 'border-2 border-slate-200 text-slate-400 group-hover:border-school-red group-hover:text-school-red'}`}>
                                    {item.title} {isAr ? '←' : '→'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};