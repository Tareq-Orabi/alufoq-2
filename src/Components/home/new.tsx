import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

const NewsLetterSection: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section className="relative py-24 bg-white overflow-hidden" aria-label="Newsletter and News">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── الحاوية الداكنة الرئيسية ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] bg-slate-950 overflow-hidden shadow-2xl"
        >
          {/* تأثيرات الإضاءة الخلفية داخل الحاوية */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-school-red/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className={`relative z-10 flex flex-col ${isAr ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center p-10 lg:p-16 gap-16`}>
            
            {/* ── 1. قسم النصوص والاشتراك (النصف الأول) ── */}
            <div className="w-full lg:w-1/2">
              
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-school-red" />
                <span className="text-school-red font-bold uppercase tracking-[0.2em] text-sm">
                  {isAr ? 'ابقَ على اطلاع' : 'Stay Updated'}
                </span>
              </div>

              <h2 className={`font-black text-white mb-6 ${isAr ? 'text-4xl lg:text-5xl leading-[1.3]' : 'text-4xl lg:text-5xl leading-tight tracking-tight'}`}>
                {isAr ? 'كن أول من يعلم عن آخر ' : 'Be the first to know about our '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-red to-rose-400">
                  {isAr ? 'أخبار الأفق' : 'Latest News'}
                </span>
              </h2>

              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light max-w-lg">
                {isAr 
                  ? 'اشترك في نشرتنا البريدية لتصلك أحدث الفعاليات، الإعلانات الهامة، وإنجازات طلابنا مباشرة إلى بريدك الإلكتروني.'
                  : 'Subscribe to our newsletter to receive the latest events, important announcements, and student achievements directly in your inbox.'}
              </p>

              {/* حقل الإدخال (Input Form) */}
              <form className="relative max-w-md mb-8 group" onSubmit={(e) => e.preventDefault()}>
                <div className="absolute inset-y-0 flex items-center pointer-events-none text-slate-400 group-focus-within:text-school-red transition-colors rtl:right-5 ltr:left-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
              </form>
            </div>

            {/* ── 2. قسم التوجيه لصفحة الأخبار (النصف الثاني) ── */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative">
              
              {/* بطاقات أخبار وهمية (Mockup Cards) لتعطي إيحاءً بالنشاط */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 h-64 mb-8 pointer-events-none">
                
                {/* البطاقة الخلفية */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, rotate: isAr ? 5 : -5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: isAr ? -6 : 6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-4 left-4 right-4 bottom-4 bg-slate-800 rounded-3xl border border-slate-700 p-6 flex flex-col justify-between shadow-2xl opacity-50"
                >
                  <div className="w-20 h-3 bg-slate-700 rounded-full mb-4" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-slate-700 rounded-full" />
                    <div className="w-2/3 h-4 bg-slate-700 rounded-full" />
                  </div>
                </motion.div>

                {/* البطاقة الأمامية */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-8 flex flex-col justify-between shadow-2xl z-10"
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-school-red/20 text-rose-300 text-xs font-bold rounded-full mb-4">
                      {isAr ? 'عاجل' : 'Latest'}
                    </span>
                    <h3 className="text-white font-bold text-xl leading-snug mb-3">
                      {isAr ? 'تكريم أوائل الطلبة في مسابقة الروبوتات الوطنية' : 'Honoring Top Students in the National Robotics Competition'}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {isAr ? '25 أبريل 2026' : 'April 25, 2026'}
                    </p>
                  </div>
                  
                  {/* أيقونة تفاعلية صغيرة */}
                  <div className="self-end w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <svg className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.div>

              </div>

              {/* الزر الرئيسي للذهاب إلى صفحة الأخبار */}
              <div className="w-full max-w-sm mx-auto lg:mx-0 text-center lg:text-start">
                <a 
                  href="/news" 
                  className="group inline-flex items-center justify-center gap-3 w-full lg:w-auto bg-white text-slate-950 font-black text-lg py-4 px-8 rounded-2xl hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                >
                  {isAr ? 'تصفح بوابة الأخبار' : 'Browse News Portal'}
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 ${isAr ? 'rotate-180 group-hover:-translate-x-2' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NewsLetterSection;