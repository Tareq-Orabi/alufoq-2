import React, { useState } from 'react';
import { Navbar } from './components/navBar';
import { Home } from './pages/Home';
import { About } from './sections/about';
import { News } from './sections/news';
import { Events } from './sections/events';
import { Footer } from './components/footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './hooks/useLanguage';

type Page = 'home' | 'about' | 'news' | 'events';

/**
 * PageWrapper — entrance/exit animation shell for each route.
 */

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  // About/News/Events still use the old lang-prop pattern (out of scope for this refactor).
  // We read from context here and pass it down so they remain reactive to language changes.
  const { lang } = useLanguage();

  return (
    <div 
      className={`min-h-screen flex flex-col bg-white selection:bg-school-red selection:text-white ${lang === 'ar' ? 'font-arabic' : ''}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Navbar reads lang from context internally */}
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <PageWrapper key="home">
              <Home />
            </PageWrapper>
          )}

          {currentPage === 'about' && (
            <PageWrapper key="about">
              <About lang={lang} />
            </PageWrapper>
          )}

          {currentPage === 'news' && (
            <PageWrapper key="news">
              <News lang={lang} />
            </PageWrapper>
          )}

          {currentPage === 'events' && (
            <PageWrapper key="events">
              <Events lang={lang} />
            </PageWrapper>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
