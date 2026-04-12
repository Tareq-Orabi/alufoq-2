import React from 'react';
import schoolLogo from '../assets/schoolLogo.png';
import facebookLogo from '../assets/FBLogo.png';

interface FooterProps {
    lang: 'en' | 'ar';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
    const isAr = lang === 'ar';

    const t = {
        brand: {
            name: isAr ? "الأفق" : "Al-Ofoq",
            desc: isAr
                ? "تمتلك مدارس الأفق تاريخاً غنياً من العطاء والسمعة الطيبة في المجتمع المحلي، مما مكننا من بناء بيئة تعليمية متميزة."
                : "Al-Ofoq holds a rich history and goodwill within the community, providing an extensive foundation for academic and personal growth."
        },
        contacts: {
            title: isAr ? "اتصل بنا" : "Contacts",
            address: isAr ? "جسر ماركا، ماركا، عمان، الأردن" : "Marka Bridge, Marka, Amman, Jordan",
            hours: isAr ? "الأحد — الخميس: 7 صباحاً — 4 مساءً" : "Sun — Thu: 7AM — 4PM"
        },
        posts: {
            title: isAr ? "آخر الأخبار" : "Recent Posts",
            items: [
                { title: isAr ? "بدء التسجيل للعام الدراسي الجديد" : "Classes Registration Open", date: "August 22, 2025" },
                { title: isAr ? "دروس الرسم والفنون التشكيلية" : "Drawing and Painting Lessons", date: "August 22, 2025" },
                { title: isAr ? "إعلان من الإدارة العامة" : "Administrative Announcement", date: "August 20, 2025" }
            ]
        },
        location: {
            title: isAr ? "الموقع" : "Location",
            mapText: isAr ? "خريطة تفاعلية (ماركا، عمان)" : "Interactive Map (Marka, Amman)"
        },
        copyright: {
            text: isAr ? "حقوق النشر © مدرسة الأفق" : "Copyright © Al-Ofoq School",
            dev: isAr ? "تطوير بواسطة" : "Developed by"
        }
    };

    return (
        <footer
            className={`bg-slate-950 text-white pt-20 pb-10 px-6 border-t-8 border-school-red ${isAr ? 'font-arabic' : ''}`}
            dir={isAr ? 'rtl' : 'ltr'}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                {/* Column 1: Brand */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <img src={schoolLogo} alt="Logo" className="w-14 h-14 object-contain" />
                        <span className="text-3xl font-black tracking-tighter italic uppercase text-white">
                            {t.brand.name}
                        </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm font-light">
                        {t.brand.desc}
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/alufoqschools"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-school-red transition-all group shadow-lg"
                        >
                            <img src={facebookLogo} alt="Facebook" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Contacts */}
                <div className="space-y-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-red">{t.contacts.title}</h4>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 group">
                            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-school-red/10 transition">
                                <svg className="w-5 h-5 text-school-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <span className="text-slate-400 text-sm leading-relaxed">{t.contacts.address}</span>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-school-red/10 transition">
                                <svg className="w-5 h-5 text-school-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <span className="text-slate-400 text-sm dir-ltr">+962 77091 7917</span>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-school-red/10 transition">
                                <svg className="w-5 h-5 text-school-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="text-slate-200 text-xs font-black uppercase tracking-widest">{t.contacts.hours}</span>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Recent Posts */}
                <div className="space-y-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-red">{t.posts.title}</h4>
                    <div className="space-y-8">
                        {t.posts.items.map((post, i) => (
                            <div key={i} className="group cursor-pointer border-l-2 border-slate-900 hover:border-school-red ps-4 transition-all">
                                <h5 className="text-sm font-bold text-slate-200 group-hover:text-school-red transition-colors leading-snug">
                                    {post.title}
                                </h5>
                                <p className="text-[10px] text-slate-600 mt-2 uppercase font-black tracking-widest">{post.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 4: Map */}
                <div className="space-y-8">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-red">{t.location.title}</h4>
                    <div className="w-full h-44 bg-slate-900 rounded-2xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-slate-800 p-1">
                        <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center text-slate-700 text-[10px] uppercase font-black tracking-tighter text-center px-4">
                            {t.location.mapText}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                <p>{t.copyright.text}</p>
                <p>
                    {t.copyright.dev} <span className="text-slate-300 hover:text-school-red cursor-pointer transition">WBTech Co.</span>
                </p>
            </div>
        </footer>
    );
};