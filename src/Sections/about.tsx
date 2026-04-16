import { translations } from '../locales';
import image4 from '../assets/image4.jpg';

export const About = ({ lang }: { lang: 'en' | 'ar' }) => {
    const isAr = lang === 'ar';
    const t = translations[lang];

    return (
        <section id="about" dir={isAr ? 'rtl' : 'ltr'} className={`py-24 px-6 max-w-7xl mx-auto space-y-24 ${isAr ? 'font-arabic' : ''}`}>

            {/* 1. Vision Section */}
            <div className="bg-slate-900 rounded-[32px] p-8 lg:p-16 text-white border-4 border-slate-800">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text */}
                    <div className="space-y-6 max-w-2xl">
                        <span className="text-school-white font-black uppercase tracking-[0.3em] text-3xl block">
                            {t.vision.tag}
                        </span>

                        <h2 className={`font-black tracking-tight leading-tight ${isAr ? '' : 'text-5xl lg:text-7xl uppercase italic tracking-tighter'}`} style={{ fontSize: isAr ? '65px' : undefined }}>
                            {t.vision.title}
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed font-bold border-s-4 border-slate-700 ps-6">
                            {t.vision.description}
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-red-500/10 rounded-[40px] -rotate-2 z-0"></div>

                        <img
                            src={image4}
                            alt="vision"
                            className="relative z-10 rounded-[24px] shadow-2xl border-4 border-white/10"
                        />

                        <span
                            className={`absolute -top-6 ${isAr ? '-right-4' : '-left-4'} text-[140px] font-black text-white/5 leading-none select-none`}
                        >
                            "
                        </span>
                    </div>

                </div>
            </div>

            {/* 2. Mission Section */}
            <div className="bg-slate-50 rounded-[32px] p-12 lg:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
                <div className="absolute pointer-events-none inset-0 border-2 border-slate-100 rounded-[32px] m-4"></div>
                <div className="relative z-10">
                    <span className="inline-block text-school-red font-black uppercase tracking-[0.3em] text-3xl mb-4">
                        {t.mission.tag}
                    </span>
                    <h2 className={`font-black text-slate-950 tracking-tight leading-tight mb-8 ${isAr ? '' : 'text-4xl lg:text-5xl uppercase italic tracking-tighter'}`} style={{ fontSize: isAr ? '65px' : undefined }}>
                        {t.mission.title}
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-bold max-w-3xl mx-auto">
                        {t.mission.description}
                    </p>
                </div>
            </div>

            {/* 3. Goals Section (Cards) */}
            <div>
                <div className="text-center mb-12">
                    <span className="text-school-red font-black uppercase tracking-[0.3em] text-3xl mb-4 block">
                        {t.goals.tag}
                    </span>
                    <h2 className={`font-black text-slate-950 tracking-tight ${isAr ? '' : 'text-4xl uppercase italic tracking-tighter'}`} style={{ fontSize: isAr ? '65px' : undefined }}>
                        {t.goals.title}
                    </h2>
                </div>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                    {t.goals.items.map((item, i) => (
                        <li key={i} className="p-8 bg-white rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <span className="inline-flex w-10 h-10 rounded-full bg-red-50 text-school-red items-center justify-center text-sm font-black mb-6 group-hover:bg-school-red group-hover:text-white transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-slate-700 leading-relaxed font-bold">
                                {item}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>


            {/* 4. Rules Section (Numbered List) */}
            <div className="bg-slate-900 rounded-[32px] p-8 lg:p-16 text-white border-4 border-slate-800">
                <div className="max-w-3xl mb-12">
                    <span className="text-school-white font-black uppercase tracking-[0.3em] text-3xl mb-4 block">
                        {t.rules.tag}
                    </span>
                    <h2 className={`font-black tracking-tight mb-6 ${isAr ? '' : 'text-4xl uppercase italic tracking-tighter'}`} style={{ fontSize: isAr ? '65px' : undefined }}>
                        {t.rules.title}
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-bold">
                        {t.rules.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    {t.rules.items.map((item, i) => (
                        <div key={i} className="flex flex-col gap-2 p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/30">
                            <span className="text-school-red font-black text-sm">
                                {isAr ? 'قاعدة' : 'Rule'} {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="text-slate-300 text-sm leading-relaxed font-bold">{item}</p>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};
