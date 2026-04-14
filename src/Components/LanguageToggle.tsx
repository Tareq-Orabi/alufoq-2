import { useLanguage } from '../Context/LanguageContext';

export const LanguageToggle = () => {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl border border-white/10 hover:border-school-red transition-all"
        >
            <span className="text-xs font-bold uppercase tracking-widest">
                {lang === 'en' ? 'العربية' : 'English'}
            </span>
            <div className="w-6 h-6 rounded-full bg-school-red flex items-center justify-center text-[10px] font-black">
                {lang === 'en' ? 'AR' : 'EN'}
            </div>
        </button>
    );
};