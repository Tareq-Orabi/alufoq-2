import React, { useState, useEffect } from 'react';
import schoolLogo from '../assets/schoolLogo.png';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../locales';
import { IconGlobe, IconMenu, IconClose } from './shared/icons';

interface NavbarProps {
  setCurrentPage: (page: 'home' | 'about' | 'news' | 'events') => void;
  currentPage: string;
}

type NavPage = 'home' | 'about' | 'events' | 'news';
const NAV_PAGES: NavPage[] = ['home', 'about', 'events', 'news'];

export const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  const navLabels: Record<NavPage, string> = {
    home: t.nav.home,
    about: t.nav.about,
    events: t.nav.events,
    news: t.nav.news,
  };

  const handleNavClick = (page: NavPage) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      dir={isAr ? 'rtl' : 'ltr'}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3' 
          : 'bg-re py-5'
        } border-b border-slate-100/50`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-4 group focus:outline-none" aria-label="Go to home">
          <div className="relative">
            <div className="absolute inset-0 bg-school-red/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={schoolLogo}
              alt="Al-Ufoq School Logo"
              className="relative w-12 h-12 md:w-14 md:h-14 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 drop-shadow-sm"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter italic uppercase">
              <span className="text-school-red">{isAr ? 'الأفق' : 'ALUFOQSCHOOL'}</span>
            </span>
            <span className="text-base font-extrabold text-slate-700 uppercase tracking-[0.1em] mt-0.5">
              {isAr ? 'مدرسة وروضة' : 'School & KG'}
            </span>
          </div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex bg-slate-50/80 p-1.5 rounded-2xl border border-slate-100">
            {NAV_PAGES.map((page) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 px-5 py-2.5 rounded-xl ${
                  currentPage === page 
                    ? 'bg-school-red text-school-white shadow-sm' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
              >
                {navLabels[page]}
              </button>
            ))}
          </div>

          {/* Language switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${t.nav.langSwitch}`}
            className="flex items-center gap-2.5 bg-slate-900 text-white px-5 py-2.5 rounded-2xl hover:bg-school-red hover:shadow-lg hover:shadow-school-red/20 transition-all duration-300 active:scale-95"
          >
            <IconGlobe className="w-4 h-4 opacity-90" />
            <span className="text-[10px] font-black uppercase tracking-widest pt-0.5">
              {t.nav.langSwitch}
            </span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${t.nav.langSwitch}`}
            className="w-11 h-11 flex items-center justify-center font-black text-[10px] text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl border border-slate-100"
          >
            {isAr ? 'EN' : 'AR'}
          </button>
          <button
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className={`w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-300 ${
              isOpen ? 'bg-school-red text-white shadow-lg shadow-school-red/30' : 'bg-slate-50 text-school-red hover:bg-slate-100 border border-slate-100'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 top-[76px] bg-slate-900/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'
          }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full p-8 overflow-y-auto">
          <div className="flex-1 space-y-4 pt-4">
            {NAV_PAGES.map((page, i) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                style={{ transitionDelay: `${i * 75}ms` }}
                className={`block text-5xl font-black uppercase italic w-full text-left rtl:text-right transition-all duration-500 rounded-2xl p-4 ${
                  currentPage === page 
                    ? 'text-school-red bg-white/5 translate-x-2 rtl:-translate-x-2' 
                    : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                  }`}
              >
                {navLabels[page]}
              </button>
            ))}
          </div>

          <div className="pt-8 mt-8 border-t border-white/10 pb-12">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3">
              {t.nav.getInTouch}
            </p>
            <p className="text-xl font-bold text-white tabular-nums tracking-wide mb-1" dir="ltr">+962 77091 7917</p>
            <p className="text-lg text-school-red font-medium">info@alufoqschool.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};