import React, { useState } from 'react';
import { Navbar } from './Components/navBar';
import { Home } from './Sections/home';
import { About } from './Sections/about';
import { News } from './Sections/news';
import { Events } from './Sections/events';
import { Footer } from './Components/footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './Context/LanguageContext';

/**
 * PageWrapper handles the entrance and exit animations for each "tab"
 */
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }}
  >
    {children}
  </motion.div>
);

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'news' | 'events'>('home');
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-school-red selection:text-white">

      {/* Navbar handles navigation and language toggling internally via context */}
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <PageWrapper key="home">
              <Home lang={lang} />
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

      <Footer lang={lang} />
    </div>
  );
}

export default App;