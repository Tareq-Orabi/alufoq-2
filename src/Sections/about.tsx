import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { translations } from '../locales';
import image4 from '../assets/image4.jpg';

// ==========================================
// Types & Shared Animation Variants
// ==========================================

// Abstracted variants keep the markup clean
const getFadeInUp = (prefersReduced: boolean | null, delay = 0): Variants => ({
    hidden: { opacity: 0, y: prefersReduced ? 0 : 40 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: "spring" as const, 
            stiffness: 70, 
            damping: 20, 
            delay 
        } 
    }
});

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

// ==========================================
// Sub-components (Modularity)
// ==========================================

const SectionBadge = ({ text }: { text: string }) => (
    <motion.span 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-school-red/10 border border-school-red/20 text-school-red font-black uppercase tracking-[0.2em] text-sm mb-6"
    >
        <span className="w-2 h-2 rounded-full bg-school-red animate-pulse" aria-hidden="true" />
        {text}
    </motion.span>
);

const GoalCard = ({ item, index, isAr }: { item: string; index: number; isAr: boolean }) => {
    const prefersReduced = useReducedMotion();
    return (
        <motion.article 
            variants={getFadeInUp(prefersReduced)}
            className="group relative p-8 bg-white rounded-[24px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-school-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
                <span className="inline-flex w-12 h-12 rounded-full bg-slate-50 text-slate-300 group-hover:bg-school-red group-hover:text-white items-center justify-center text-xl font-black mb-6 transition-colors duration-300 shadow-inner">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-slate-700 leading-relaxed font-bold flex-grow">
                    {item}
                </p>
            </div>
        </motion.article>
    );
};

const RuleItem = ({ item, index, isAr }: { item: string; index: number; isAr: boolean }) => {
    // Dynamic X-axis origin based on language direction
    const dirModifier = isAr ? 10 : -10; 
    
    return (
        <motion.div 
            whileHover={{ x: dirModifier, backgroundColor: "rgba(255,255,255,0.08)" }}
            className="flex items-start gap-4 p-5 rounded-2xl bg-slate-800/30 border border-slate-700/50 transition-all duration-300"
            role="listitem"
        >
            <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-school-red shadow-[0_0_12px_rgba(220,38,38,0.6)]" aria-hidden="true" />
            <div>
                <span className="block text-school-red font-black text-xs uppercase tracking-wider mb-1 opacity-80">
                    {isAr ? 'قاعدة' : 'Rule'} {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed font-bold">{item}</p>
            </div>
        </motion.div>
    );
};

// ==========================================
// Main Component
// ==========================================

export const About = ({ lang }: { lang: 'en' | 'ar' }) => {
    const isAr = lang === 'ar';
    const t = translations[lang];
    const prefersReduced = useReducedMotion();
    
    // Scroll tracking for parallax effects
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section 
            id="about" 
            ref={containerRef}
            dir={isAr ? 'rtl' : 'ltr'} 
            className={`py-32 px-6 max-w-7xl mx-auto space-y-32 ${isAr ? 'font-arabic' : ''}`}
        >
            {/* 1. Vision Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={getFadeInUp(prefersReduced)}
                className="relative bg-slate-950 rounded-[40px] p-8 lg:p-16 border border-slate-800 overflow-hidden shadow-2xl"
            >
                {/* Decorative ambient light */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-school-red/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <SectionBadge text={t.vision.tag} />
                        
                        <h2 className={`font-black text-white leading-[1.1] ${isAr ? 'text-6xl lg:text-7xl' : 'text-5xl lg:text-7xl uppercase italic tracking-tighter'}`}>
                            {t.vision.title}
                        </h2>

                        <p className="text-slate-400 text-lg lg:text-xl leading-relaxed font-medium border-s-4 border-school-red/80 ps-6 rounded-s-sm">
                            {t.vision.description}
                        </p>
                    </div>

                    <div className="relative lg:h-[500px] flex items-center justify-center">
                        {/* Parallax Image Wrapper */}
                        <motion.figure 
                            style={prefersReduced ? {} : { y: yParallax }}
                            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
                        >
                            <img
                                src={image4}
                                alt={t.vision.title}
                                loading="lazy"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 border-[6px] border-white/10 rounded-[24px] pointer-events-none mix-blend-overlay" />
                        </motion.figure>
                    </div>
                </div>
            </motion.div>

            {/* 2. Mission Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={getFadeInUp(prefersReduced)}
                className="bg-slate-50 rounded-[40px] p-12 lg:p-24 text-center max-w-5xl mx-auto relative group overflow-hidden"
            >
                <div className="absolute inset-0 border-[3px] border-slate-100 rounded-[40px] m-4 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                    <SectionBadge text={t.mission.tag} />
                    
                    <h2 className={`font-black text-slate-950 mb-8 leading-[1.1] ${isAr ? 'text-5xl lg:text-6xl' : 'text-4xl lg:text-6xl uppercase italic tracking-tighter'}`}>
                        {t.mission.title}
                    </h2>
                    
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-bold max-w-3xl mx-auto balance-text">
                        {t.mission.description}
                    </p>
                </div>
            </motion.div>

            {/* 3. Goals Section */}
            <div>
                <div className="text-center mb-16 flex flex-col items-center">
                    <SectionBadge text={t.goals.tag} />
                    <h2 className={`font-black text-slate-950 ${isAr ? 'text-5xl lg:text-6xl' : 'text-4xl lg:text-6xl uppercase italic tracking-tighter'}`}>
                        {t.goals.title}
                    </h2>
                </div>
                
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                >
                    {t.goals.items.map((item, i) => (
                        <GoalCard key={i} item={item} index={i} isAr={isAr} />
                    ))}
                </motion.div>
            </div>

            {/* 4. Rules Section */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={getFadeInUp(prefersReduced)}
                className="bg-slate-950 rounded-[40px] p-8 lg:p-16 text-white border border-slate-800/50 shadow-xl"
            >
                <div className="max-w-3xl mb-16">
                    <SectionBadge text={t.rules.tag} />
                    <h2 className={`font-black leading-[1.1] mb-6 ${isAr ? 'text-5xl lg:text-6xl' : 'text-4xl lg:text-6xl uppercase italic tracking-tighter'}`}>
                        {t.rules.title}
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                        {t.rules.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4" role="list">
                    {t.rules.items.map((item, i) => (
                        <RuleItem key={i} item={item} index={i} isAr={isAr} />
                    ))}
                </div>
            </motion.div>
            
        </section>
    );
};