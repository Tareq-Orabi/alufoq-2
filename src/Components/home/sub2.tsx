import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

// أيقونات المسارات
const IconBTEC = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const IconNational = () => (
  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
  </svg>
);

const ProgramsSection: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden" aria-label="Educational Programs">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── 1. ترويسة القسم ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-slate-100 border border-slate-200 text-school-red font-bold tracking-widest text-sm uppercase mb-4 shadow-sm">
              {isAr ? 'مساراتنا التعليمية' : 'Our Pathways'}
            </span>
            <h2 className={`font-black text-slate-950 mb-6 ${isAr ? 'text-4xl md:text-5xl leading-tight' : 'text-4xl md:text-5xl tracking-tighter'}`}>
              {isAr ? 'اختر المسار الذي يبني ' : 'Choose the Path to Your '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-red to-rose-500">
                {isAr ? 'مستقبلك' : 'Future'}
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ── 2. بطاقات البرامج (كروت ضخمة وتفاعلية) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 🌟 مسار BTEC (تم إبرازه بتصميم داكن وفخم) 🌟 */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative bg-slate-950 rounded-[2.5rem] p-10 lg:p-14 overflow-hidden shadow-2xl flex flex-col justify-between h-full border border-slate-800"
          >
            {/* تأثير إضاءة خلفية للكرت التقني */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-school-red/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-school-red/30 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-school-red to-rose-600 flex items-center justify-center text-white shadow-lg shadow-school-red/30">
                  <IconBTEC />
                </div>
                {/* شارة الاعتماد */}
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {isAr ? 'معتمد دولياً' : 'Internationally Accredited'}
                </span>
              </div>

              <h3 className="text-4xl font-black text-white mb-4 tracking-tight">
                {isAr ? 'برنامج BTEC العالمي' : 'Global BTEC Program'}
              </h3>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {isAr 
                  ? 'التعليم المهني والتقني الأقوى عالمياً. نؤهل طلبتنا لسوق العمل من خلال تدريب عملي حقيقي داخل مختبرات حديثة وورش عمل متطورة تحاكي بيئة العمل الاحترافية.'
                  : 'The world’s leading vocational program. We prepare students for the job market through real practical training in modern labs and advanced workshops.'}
              </p>

              {/* نقاط القوة في BTEC */}
              <ul className="space-y-4 mb-12">
                {[
                  isAr ? 'مختبرات تكنولوجية وعلمية متطورة' : 'Advanced tech & science labs',
                  isAr ? 'ورش عمل تطبيقية احترافية' : 'Professional practical workshops',
                  isAr ? 'شهادة معتمدة عالمياً من Pearson' : 'Globally accredited Pearson certificate'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                    <svg className="w-6 h-6 text-school-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* الزر الخاص بـ BTEC */}
            <a href="/programs#btec" className="relative z-10 w-full py-4 rounded-xl bg-school-red text-white font-bold text-center text-lg hover:bg-rose-600 transition-colors shadow-[0_10px_20px_rgba(220,38,38,0.2)]">
              {isAr ? 'تفاصيل مسار BTEC' : 'Explore BTEC Path'}
            </a>
          </motion.div>


          {/* 📚 البرنامج الوطني (تصميم مشرق وأنيق) 📚 */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="group relative bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-200 flex flex-col justify-between h-full"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="w-20 h-20 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-800 shadow-sm">
                  <IconNational />
                </div>
              </div>

              <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
                {isAr ? 'البرنامج الوطني' : 'National Program'}
              </h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {isAr 
                  ? 'تأسيس أكاديمي قوي وفق أحدث المناهج الوطنية. نركز على بناء المهارات الأساسية للطلبة وإعدادهم بامتياز لاجتياز مرحلة التوجيهي وتحقيق أعلى النتائج.'
                  : 'Strong academic foundation according to the latest national curricula. We prepare students excellently to achieve the highest results in Tawjihi.'}
              </p>

              <ul className="space-y-4 mb-12">
                {[
                  isAr ? 'إعداد أكاديمي شامل ومكثف' : 'Comprehensive academic preparation',
                  isAr ? 'تأسيس قوي لمرحلة التوجيهي' : 'Strong foundation for Tawjihi',
                  isAr ? 'تعزيز الهوية واللغة العربية' : 'Enhancing identity & Arabic language'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <svg className="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* الزر الخاص بالبرنامج الوطني */}
            <a href="/programs#national" className="relative z-10 w-full py-4 rounded-xl bg-white border-2 border-slate-900 text-slate-900 font-bold text-center text-lg hover:bg-slate-900 hover:text-white transition-colors">
              {isAr ? 'تفاصيل البرنامج الوطني' : 'Explore National Path'}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;