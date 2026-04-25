import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

// أيقونات مبسطة وأنيقة تتناسب مع التصميم الحديث
const IconStudents = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconTeachers = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconSuccess = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const IconExperience = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StatsSection: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  // بيانات الإحصائيات (يمكنك ربطها بملف الترجمة لاحقاً)
  const statsData = [
    { value: "1500+", label: isAr ? "طالب وطالبة" : "Students", icon: <IconStudents /> },
    { value: "120+", label: isAr ? "معلم وخبير تربوي" : "Expert Teachers", icon: <IconTeachers /> },
    { value: "100%", label: isAr ? "نسبة النجاح" : "Success Rate", icon: <IconSuccess /> },
    { value: "15+", label: isAr ? "عاماً من التميز" : "Years of Excellence", icon: <IconExperience /> },
  ];

  return (
    <section className="relative py-28 bg-slate-900 overflow-hidden" aria-label="School Statistics">
      
      {/* ── 1. خلفية هندسية شبكية (Grid Pattern) ── */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />
      
      {/* تأثير إضاءة مركزي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-school-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── 2. العناوين ── */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-school-red font-bold uppercase tracking-[0.3em] text-sm mb-4 shadow-sm backdrop-blur-sm">
              {isAr ? 'بالأرقام' : 'By the Numbers'}
            </span>
            <h2 className={`font-black text-white ${isAr ? 'text-4xl md:text-5xl leading-tight' : 'text-4xl md:text-5xl tracking-tighter'}`}>
              {isAr ? 'أرقام تعكس ' : 'Numbers that reflect our '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-red to-rose-400">
                {isAr ? 'ريادتنا' : 'Leadership'}
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ── 3. شبكة الإحصائيات (Stats Grid) ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.15, 
                type: "spring", // حركة مرنة للارتقاء بالإحساس البصري
                stiffness: 100 
              }}
              className="group relative"
            >
              {/* توهج يظهر عند تمرير الماوس */}
              <div className="absolute inset-0 bg-school-red/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative h-full bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2">
                
                {/* الأيقونة */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-school-red/20 to-rose-500/10 border border-school-red/30 flex items-center justify-center text-school-red mb-6 group-hover:scale-110 group-hover:text-rose-400 transition-all duration-300">
                  {stat.icon}
                </div>
                
                {/* الرقم الضخم */}
                <div className="font-black text-5xl lg:text-6xl text-white tracking-tight mb-2 font-sans">
                  {stat.value}
                </div>
                
                {/* الوصف */}
                <div className="text-slate-400 font-medium text-lg uppercase tracking-wide">
                  {stat.label}
                </div>

                {/* خط سفلي جمالي يتمدد */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-school-red to-transparent group-hover:w-1/2 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;