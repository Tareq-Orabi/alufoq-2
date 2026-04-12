/**
 * `useLanguage` hook — convenience re-export from the context module.
 *
 * Consumers import from here rather than from the context file directly,
 * keeping the context implementation detail isolated and making future
 * migration to Zustand / Jotai a one-file change.
 */
export { useLanguage } from '../context/LanguageContext';
