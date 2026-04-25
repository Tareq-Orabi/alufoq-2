import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

// استيراد الأيقونات (يمكنك استخدام أي مكتبة أيقونات تفضلها مثل lucide-react أو react-icons، هنا استخدمت SVG مباشر لسهولة النسخ)
const IconShield = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconBrain = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const IconGlobe = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const IconUsers = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const WhyUfoqSection: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const features = [
    {
      title: isAr ? "بيئة آمنة ومحفزة" : "Safe & Stimulating Environment",
      desc: isAr ? "نوفر مساحات تعليمية ذكية ومرافق حديثة تضمن راحة وأمان الطالب وتحفزه على الإبداع والاكتشاف." : "We provide smart learning spaces and modern facilities that ensure student safety and stimulate creativity.",
      icon: <IconShield />,
      colSpan: "lg:col-span-2", // يأخذ مساحة عمودين في الشاشات الكبيرة
      bgClass: "bg-slate-950 text-white", // كرت مظلم للتباين
      iconClass: "bg-white/10 text-white",
    },
    {
      title: isAr ? "مناهج رائدة" : "Leading Curricula",
      desc: isAr ? "توازن مثالي بين المعايير العالمية والهوية الوطنية." : "Perfect balance between global standards and national identity.",
      icon: <IconGlobe />,
      colSpan: "lg:col-span-1",
      bgClass: "bg-school-red text-white", // كرت باللون الأحمر
      iconClass: "bg-white/20 text-white",
    },
    {
      title: isAr ? "تنمية التفكير الناقد" : "Critical Thinking",
      desc: isAr ? "لا نلقّن المعلومة، بل ندرب طلابنا على مهارات التحليل وحل المشكلات ليصبحوا صناع قرار." : "We don't just lecture; we train students in analysis and problem-solving.",
      icon: <IconBrain />,
      colSpan: "lg:col-span-1",
      bgClass: "bg-white text-slate-900 border border-slate-100", // كرت أبيض عادي
      iconClass: "bg-slate-50 text-school-red",
    },
    {
      title: isAr ? "كادر تربوي خبير" : "Expert Educators",
      desc: isAr ? "نخبة من المعلمين المتميزين الشغوفين بتطوير قدرات كل طالب بشكل فردي ومتابعة تقدمه بدقة عالية." : "Elite teachers passionate about developing each student's abilities individually.",
      icon: <IconUsers />,
      colSpan: "lg:col-span-2",
      bgClass: "bg-white text-slate-900 border border-slate-100", // كرت أبيض عادي ولكنه عريض
      iconClass: "bg-red-50 text-school-red",
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      
      {/* ديكور خلفي بسيط */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── 1. ترويسة القسم ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-5 rounded-full bg-white border border-slate-200 text-school-red font-bold tracking-widest text-sm uppercase mb-6 shadow-sm">
              {isAr ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
            </span>
            <h2 className={`font-black text-slate-950 mb-6 ${isAr ? 'text-4xl md:text-5xl lg:text-6xl leading-tight' : 'text-4xl md:text-5xl lg:text-6xl tracking-tighter'}`}>
              {isAr ? 'لماذا مدارس ' : 'Why '}
              <span className="text-school-red">{isAr ? 'الأفق؟' : 'Al-Ufoq?'}</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {isAr 
                ? 'نحن لا نقدم مقعداً دراسياً فحسب، بل نقدم رحلة متكاملة تصنع الفارق في حياة أبنائكم وتعدهم لتحديات المستقبل.'
                : 'We don’t just offer a desk; we offer a comprehensive journey that prepares your children for future challenges.'}
            </p>
          </motion.div>
        </div>

        {/* ── 2. شبكة المميزات (Bento Grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // استخدام hover لرفع الكرت قليلاً وإضافة ظل
              className={`${feature.colSpan} ${feature.bgClass} rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative`}
            >
              
              {/* زخرفة خفيفة خلفية تظهر عند التمرير (Hover Effect) */}
              <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white transform scale-150 rotate-12 pointer-events-none">
                {feature.icon}
              </div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${feature.iconClass}`}>
                  {feature.icon}
                </div>
                
                <h3 className={`text-2xl font-black mb-4 ${feature.bgClass.includes('text-white') ? 'text-white' : 'text-slate-900'}`}>
                  {feature.title}
                </h3>
                
                <p className={`font-medium leading-relaxed text-lg ${feature.bgClass.includes('text-white') ? 'text-white/80' : 'text-slate-600'}`}>
                  {feature.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUfoqSection;