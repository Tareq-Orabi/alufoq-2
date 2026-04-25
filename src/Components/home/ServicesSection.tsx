import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

import image3 from '../../assets/image17.jpg';

const VisionSection: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const visionPoints = [
    "غرس مبادئ ديننا الحنيف وقيمنا الأصيلة، بالتوازي مع تنمية التفكير الإبداعي والتحليل المنطقي.",
    "تعزيز مهارات التفكير الناقد ليكون الطلبة قادرين على فهم العالم والتفاعل معه بوعي.",
    "تقديم تعليم مستدام وفق معايير حديثة مدعوم ببرامج إثرائية قوية.",
    "تطوير مهارات التواصل والاندماج في بيئات متعددة الثقافات باستخدام التكنولوجيا."
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

      {/* Background watermark */}
      <div className={`absolute top-10 opacity-[0.02] select-none pointer-events-none ${isAr ? '-left-20' : '-right-20'}`}>
        <h2 className="text-[15rem] lg:text-[20rem] font-black leading-none">ALUFOQ</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-20 ${isAr ? '' : 'lg:flex-row-reverse'}`}>

          {/* ───── TEXT ───── */}
          <div className="w-full lg:w-1/2 z-10">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: isAr ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-school-red" />
              <span className="text-school-red font-black uppercase tracking-[0.2em] text-sm">
                {isAr ? 'رؤيتنا ورسالتنا' : 'Our Vision & Mission'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`font-black text-slate-950 mb-6 ${isAr ? 'text-4xl lg:text-5xl leading-tight' : 'text-4xl lg:text-5xl uppercase tracking-tighter'}`}
            >
              {isAr ? 'التعليم ليس مجرد معرفة، بل ' : 'Education is '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-school-red to-rose-500">
                {isAr ? 'بناء إنسان متكامل' : 'Building a Human'}
              </span>
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed font-medium mb-10 border-school-red/30 rtl:border-r-4 ltr:border-l-4 rtl:pr-6 ltr:pl-6"
            >
              {isAr
                ? 'نهيّئ لطلبتنا بيئة تعليمية متكاملة ترتكز على القيم، وتواكب التطور الحديث.'
                : 'We provide a value-driven educational environment aligned with modern development.'}
            </motion.p>

            {/* Points */}
            <div className="space-y-4 mb-10">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.15) }}
                  className="flex items-start gap-4 group hover:bg-slate-50 p-3 rounded-xl transition"
                >
                  <div className="mt-1.5 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-school-red group-hover:text-white transition-colors duration-300">
                    <svg className="w-3.5 h-3.5 text-school-red group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium text-[1rem] group-hover:text-slate-800 transition">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Trust Box */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-6">
              <p className="text-sm text-slate-700 font-medium">
                {isAr
                  ? 'نُعدّ جيلاً يمتلك المعرفة والقيم لمواجهة تحديات المستقبل بثقة.'
                  : 'We prepare a generation equipped with knowledge and values for the future.'}
              </p>
            </div>

            {/* CTA */}
            

          </div>

          {/* ───── IMAGE ───── */}
          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">

            {/* Background shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50/50 rounded-full blur-3xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200 bg-white group">

                {/* Badges */}
                

                

                {/* Image */}
                <img
                  src={image3}
                  alt="Al-Ufoq Campus"
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-[3/4] transition-transform duration-[1.5s] group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

                {/* Bottom Card */}
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                    
                    
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;