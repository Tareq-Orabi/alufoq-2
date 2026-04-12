import React, { useState, useEffect } from 'react';
import schoolLogo from '../assets/schoolLogo.png';
import { useLanguage } from '../Context/LanguageContext';

interface NavbarProps {
    setCurrentPage: (page: 'home' | 'about' | 'news' | 'events') => void;
    currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, currentPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { t, lang, toggleLanguage } = useLanguage();
    const isAr = lang === 'ar';

    const menuItems: ('home' | 'about' | 'events' | 'news')[] = ['home', 'about', 'events', 'news'];

    const handleNavClick = (page: 'home' | 'about' | 'news' | 'events') => {
        setCurrentPage(page);
        setIsOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => { if (window.innerWidth > 768) setIsOpen(false); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav
            dir={isAr ? 'rtl' : 'ltr'}
            className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-white py-4'
                } border-b-4 border-school-red`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo Section */}
                <button onClick={() => handleNavClick('home')} className="flex items-center gap-4 group">
                    <div className="relative">
                        <img
                            src={schoolLogo}
                            alt="Al-Ofoq Logo"
                            className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        />
                    </div>
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-2xl md:text-3xl font-black text-slate-950 tracking-tighter italic uppercase">
                            AL-<span className="text-school-red">OFOQ</span>
                        </span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            {isAr ? "مدرسة وروضة" : "School & KG"}
                        </span>
                    </div>
                </button>

                {/* Right Side Items: Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex space-x-8 rtl:space-x-reverse">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavClick(item)}
                                className={`text-xs font-black uppercase tracking-[0.2em] transition-all relative py-2 group
                                    ${currentPage === item ? 'text-school-red' : 'text-slate-600 hover:text-school-red'}`}
                            >
                                {t(item)}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-school-red transition-all duration-300 
                                    ${currentPage === item ? 'w-full' : 'w-0 group-hover:w-full'}`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Language Switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-3 bg-slate-950 text-white px-5 py-2.5 rounded-xl hover:bg-school-red transition-all active:scale-95 shadow-lg shadow-slate-200"
                    >
                        <svg className="w-4 h-4 text-school-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        <span className="text-[10px] font-black uppercase tracking-widest">
                            {isAr ? 'English' : 'العربية'}
                        </span>
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={toggleLanguage}
                        className="w-10 h-10 flex items-center justify-center font-black text-[10px] text-slate-950 border-2 border-slate-100 rounded-xl"
                    >
                        {isAr ? 'EN' : 'AR'}
                    </button>
                    <button
                        className="w-10 h-10 flex items-center justify-center text-school-red bg-slate-50 rounded-xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6" /></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            <div className={`fixed inset-0 top-[76px] bg-slate-950 z-40 md:hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                }`}>
                <div className="p-10 space-y-6">
                    {menuItems.map((item, i) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(item)}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            className={`block text-5xl font-black uppercase italic w-full text-left rtl:text-right transition-all
                                ${currentPage === item ? 'text-school-red translate-x-4 rtl:-translate-x-4' : 'text-white/20'}`}
                        >
                            {t(item)}
                        </button>
                    ))}

                    <div className="pt-10 mt-10 border-t border-white/5 space-y-4">
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                            {isAr ? "معلومات التواصل" : "Get in touch"}
                        </p>
                        <p className="text-xl font-bold text-white tabular-nums">+962 77091 7917</p>
                        <p className="text-lg text-school-red font-medium">info@alufoq.com</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};