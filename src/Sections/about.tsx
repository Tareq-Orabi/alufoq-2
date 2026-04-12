
export const About = ({ lang }: { lang: 'en' | 'ar' }) => {
    const isAr = lang === 'ar';

    const content = {
        tag: isAr ? "رسالتنا" : "Our Mission",
        title: isAr ? "تأسست لتلهم" : "Founded to Inspire",
        description: isAr
            ? "تأسست مدرسة الأفق في عام 2010 لتزويد الطلاب ببرامج أكاديمية ممتازة وبيئة تربوية قائمة على علاقات وثيقة بين الطالب والمعلم. نحن مدرسة خاصة توفر تكاليف معقولة ومنهجاً محفزاً لضمان تجربة النجاح اليومي لطلابنا."
            : "Al-Ofoq School was founded in 2010 to provide students with excellent academic programs and a nurturing environment with close student-teacher relationships. We are a private yet affordable school offering a stimulating curriculum and a supportive environment to ensure our students experience success every day.",
        stats: [
            { label: isAr ? "طالباً" : "Students", value: "500+" },
            { label: isAr ? "معلماً" : "Teachers", value: "50+" }
        ],
        highlights: [
            {
                title: isAr ? "برامج أكاديمية ممتازة" : "Excellent Programs",
                desc: isAr ? "تركيز على التميز الأكاديمي منذ عام 2010" : "Focus on academic excellence since 2010"
            },
            {
                title: isAr ? "بيئة داعمة" : "Supportive Environment",
                desc: isAr ? "ضمان نجاح الطلاب وتفوقهم كل يوم" : "Ensuring students experience success every day"
            }
        ]
    };

    return (
        <section id="about" dir={isAr ? 'rtl' : 'ltr'} className={`py-24 px-6 max-w-7xl mx-auto ${isAr ? 'font-arabic' : ''}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8">
                    <div>
                        <span className="text-school-red font-black uppercase tracking-[0.3em] text-xs mb-4 block">
                            {content.tag}
                        </span>
                        <h2 className="text-5xl font-black text-slate-950 tracking-tighter uppercase italic leading-tight">
                            {content.title}
                        </h2>
                    </div>

                    <p className="text-slate-600 text-xl leading-relaxed font-light border-s-4 border-slate-100 ps-6">
                        {content.description}
                    </p>

                    {/* Mission Points Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                        {content.highlights.map((item, i) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-school-red transition-colors">
                                <h4 className="font-bold text-slate-950 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Counter */}
                    <div className="flex gap-8 pt-6 border-t border-slate-100">
                        {content.stats.map((stat, i) => (
                            <div key={i}>
                                <span className="block text-4xl font-black text-school-red tracking-tighter">{stat.value}</span>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Side */}
                <div className="relative">
                    {/* Decorative Background Element */}
                    <div className="absolute -inset-4 bg-red-50 rounded-[40px] -rotate-2 z-0"></div>

                    <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                            alt="Learning at Al-Ofoq"
                            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                        />

                        {/* Floating Badge */}
                        <div className={`absolute bottom-8 ${isAr ? 'left-8' : 'right-8'} bg-white p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block`}>
                            <p className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-tighter">
                                {isAr ? "منذ عام" : "Established"}
                            </p>
                            <p className="text-2xl font-black text-slate-950 italic">2010</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};