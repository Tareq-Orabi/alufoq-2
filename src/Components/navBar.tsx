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

/**
 * Navbar — reads lang from context, uses typed translations for labels.
 * No `t(string)` with runtime key lookups; all labels are typed properties.
 */
export const Navbar: React.FC<NavbarProps> = ({ setCurrentPage, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  /** Typed map from page key → translated label */
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
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-white py-4'
      } border-b-4 border-school-red`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-4 group" aria-label="Go to home">
          <div className="relative">
            <img
              src={schoolLogo}
              alt="Al-Ofoq School Logo"
              className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="text-2xl md:text-3xl font-black text-slate-950 tracking-tighter italic uppercase">
              <span className="text-school-red">{isAr ? 'الأفق' : 'ALOFOQ'}</span>
            </span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              {isAr ? 'مدرسة وروضة' : 'School & KG'}
            </span>
          </div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex space-x-8 rtl:space-x-reverse">
            {NAV_PAGES.map((page) => (
              <button
                key={page}
                onClick={() => handleNavClick(page)}
                className={`text-xs font-black uppercase tracking-[0.2em] transition-all relative py-2 group ${
                  currentPage === page ? 'text-school-red' : 'text-slate-600 hover:text-school-red'
                }`}
              >
                {navLabels[page]}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-school-red transition-all duration-300 ${
                    currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Language switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${t.nav.langSwitch}`}
            className="flex items-center gap-3 bg-slate-950 text-white px-5 py-2.5 rounded-xl hover:bg-school-red transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            <IconGlobe className="w-4 h-4 text-school-red" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              {t.nav.langSwitch}
            </span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLanguage}
            aria-label={`Switch to ${t.nav.langSwitch}`}
            className="w-10 h-10 flex items-center justify-center font-black text-[10px] text-slate-950 border-2 border-slate-100 rounded-xl"
          >
            {isAr ? 'EN' : 'AR'}
          </button>
          <button
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="w-10 h-10 flex items-center justify-center text-school-red bg-slate-50 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 top-[76px] bg-slate-950 z-40 md:hidden transition-all duration-500 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="p-10 space-y-6">
          {NAV_PAGES.map((page, i) => (
            <button
              key={page}
              onClick={() => handleNavClick(page)}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`block text-5xl font-black uppercase italic w-full text-left rtl:text-right transition-all ${
                currentPage === page ? 'text-school-red translate-x-4 rtl:-translate-x-4' : 'text-white/20'
              }`}
            >
              {navLabels[page]}
            </button>
          ))}

          <div className="pt-10 mt-10 border-t border-white/5 space-y-4">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
              {t.nav.getInTouch}
            </p>
            <p className="text-xl font-bold text-white tabular-nums" dir="ltr">+962 77091 7917</p>
            <p className="text-lg text-school-red font-medium">info@alufoq.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
