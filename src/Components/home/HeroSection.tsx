import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

// استيراد الصور الخاصة بمدارس الأفق
import image3 from '../../assets/image3.jpg';
import image16 from '../../assets/image16.jpg';
import image17 from '../../assets/image17.jpg';
import image18 from '../../assets/image18.jpg';
import image19 from '../../assets/image19.jpg';

const SLIDES = [
  { id: 1, image: image3, alt: 'مدارس الأفق - واجهة 1' },
  { id: 2, image: image16, alt: 'مدارس الأفق - واجهة 2' },
  { id: 3, image: image17, alt: 'مدارس الأفق - واجهة 3' },
  { id: 4, image: image18, alt: 'مدارس الأفق - واجهة 4' },
  { id: 5, image: image19, alt: 'مدارس الأفق - واجهة 5' },
];

const HeroSliderSection: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // التبديل التلقائي للصور كل 5 ثوانٍ لإعطاء وقت كافٍ للاستمتاع بالأنيميشن
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === SLIDES.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? SLIDES.length - 1 : prevIndex - 1));
  };

  return (
    <section className="relative w-full h-[75vh] lg:h-[90vh] overflow-hidden bg-slate-950" aria-label="Image Slider">
      
      {/* ── 1. حاوية الصور المتحركة بتأثير Zoom-out ناعم جداً ── */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={SLIDES[currentIndex].image}
          alt={SLIDES[currentIndex].alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* ── 2. طبقة التدرج اللوني (Vignette & Gradient) لتركيز الإضاءة بالمنتصف ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 pointer-events-none" />

      {/* ── 3. النصوص التفاعلية القوية ── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        
        {/* كلمة الأفق: تأثير سينمائي (Blur + Scale) */}
        <motion.div
          key={`title-${currentIndex}`} // الـ key يضمن إعادة الأنيميشن مع كل صورة
          initial={{ opacity: 0, scale: 1.3, filter: 'blur(15px)', y: 20 }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} // Custom spring-like easing
        >
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 mb-4 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] tracking-wide">
            الأفــق
          </h1>
        </motion.div>

        {/* الشعار اللفظي: تأثير الرفع من العدم (Masked Reveal) */}
        <div className="overflow-hidden py-4">
          <motion.div
            key={`subtitle-${currentIndex}`}
            initial={{ opacity: 0, y: "120%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)] leading-tight">
              معرفة تُتقن…{" "}
              <span className="relative inline-block text-school-red whitespace-nowrap">
                مستقبل يُبنى
                
                {/* الخط المضيء (Glowing Underline) الذي يُرسم أسفل الكلمة */}
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "circOut" }}
                  className={`absolute -bottom-2 lg:-bottom-4 left-0 right-0 h-1.5 lg:h-2 bg-school-red rounded-full shadow-[0_0_20px_rgba(220,38,38,0.9)] ${isAr ? 'origin-right' : 'origin-left'}`}
                />
              </span>
            </p>
          </motion.div>
        </div>
        
      </div>

      {/* ── 4. أزرار التنقل (الأسهم) ── */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none z-20">
        <button
          onClick={isAr ? nextSlide : prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-white hover:bg-school-red hover:border-school-red hover:scale-110 transition-all duration-300 group shadow-2xl"
          aria-label="السابق"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isAr ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
          </svg>
        </button>

        <button
          onClick={isAr ? prevSlide : nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg border border-white/10 text-white hover:bg-school-red hover:border-school-red hover:scale-110 transition-all duration-300 group shadow-2xl"
          aria-label="التالي"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isAr ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
          </svg>
        </button>
      </div>

      {/* ── 5. مؤشرات النقاط المحدثة (Interactive Pagination) ── */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative flex h-4 w-4 items-center justify-center"
            aria-label={`الذهاب للصورة ${index + 1}`}
          >
            <span 
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                currentIndex === index ? 'bg-school-red scale-100 shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'bg-white/40 scale-75 group-hover:scale-100 group-hover:bg-white/80'
              }`} 
            />
            {/* دائرة خارجية تظهر فقط للعنصر النشط */}
            {currentIndex === index && (
              <motion.span
                layoutId="activeDotOutline"
                className="absolute -inset-2 rounded-full border border-school-red/50"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      
    </section>
  );
};

export default HeroSliderSection;