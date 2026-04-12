import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import HeroSection from '../components/home/HeroSection';
import AcademicSection from '../components/home/AcademicSection';
import StatsSection from '../components/home/StatsSection';

/**
 * Home page — thin orchestrator that composes section components.
 * Contains no business logic or translations; those live in each section.
 * RTL/LTR and font class are set here at the page level.
 */
const Home: React.FC = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  return (
    <div
      className={`overflow-x-hidden bg-white text-slate-900 selection:bg-red-50 selection:text-school-red ${isAr ? 'font-arabic' : ''
        }`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <HeroSection />
      <AcademicSection />
      <StatsSection />
    </div>
  );
};

export default Home;

// Named export for backward-compat with any existing imports
export { Home };
