import { translations } from '../locales';

export const Blog = ({ lang }: { lang: 'en' | 'ar' }) => {
    const isAr = lang === 'ar';
    const t = translations[lang];

    return (
        <section id="blog" dir={isAr ? 'rtl' : 'ltr'} className={`py-24 px-6 max-w-7xl mx-auto space-y-24 ${isAr ? 'font-arabic' : ''}`}>
            {/* 4. Rules Section (Numbered List) */}
            <div className="bg-slate-900 rounded-[32px] p-8 lg:p-16 text-white border-4 border-slate-800">
                <div className="max-w-3xl mb-12">
                    <span className="text-school-red font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                        {t.rules.tag}
                    </span>
                    <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-6">
                        {t.rules.title}
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-light">
                        {t.rules.description}
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    {t.rules.items.map((item, i) => (
                        <div key={i} className="flex flex-col gap-2 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/30">
                            <span className="text-school-red font-black text-sm">
                                {isAr ? 'قاعدة' : 'Rule'} {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
