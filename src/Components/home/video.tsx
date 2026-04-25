import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

import videoFile from '../../assets/مدارس الأفق Final 2025.mp4';

const VideoPromoSection: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">

      {/* خلفية ناعمة */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center">

        {/* ───── Badge ───── */}
        <div className="mb-6">
          <span className="px-4 py-2 text-sm font-semibold bg-red-50 text-school-red rounded-full border border-red-100">
            {isAr ? ' بيئة تعليمية حديثة' : ' Modern Learning Environment'}
          </span>
        </div>

        {/* ───── Title ───── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            {isAr ? 'الحياة داخل مدارس الأفق' : 'Life Inside Al-Ufoq Schools'}
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            {isAr
              ? 'نصنع بيئة تعليمية متكاملة تجمع بين المعرفة والتطبيق العملي.'
              : 'We create a complete educational environment combining knowledge and real-world practice.'}
          </p>
        </motion.div>

        {/* ───── Stats (إحساس مدرسة حقيقية) ───── */}
        
        {/* ───── Video ───── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-5xl"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            >
              <source src={videoFile} type="video/mp4" />
            </video>

            {/* Overlay خفيف */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />


          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export { VideoPromoSection as VideoSection };