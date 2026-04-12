import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
    lang: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}

const translations: any = {
    en: {
        welcome: "Welcome to Al-Ofoq",
        discover: "Discover Our School",
        apply: "Apply for 2026-27",
        curriculum: "Explore Curriculum",
        statsTitle: "School Statistics",
        teachers: "Certified Expert Teachers",
        students: "Active Students Enrolled",
        university: "Passing to Universities",
        parents: "Supportive Parents",
        news: "School News",
        readMore: "Read More",
    },
    ar: {
        welcome: "مرحباً بكم في مدارس الأفق",
        discover: "اكتشف مدرستنا",
        apply: "تقديم لعام ٢٠٢٦-٢٧",
        curriculum: "استكشف المناهج",
        statsTitle: "إحصائيات المدرسة",
        teachers: "معلمون خبراء معتمدون",
        students: "طلاب مسجلون حالياً",
        university: "القبول في الجامعات",
        parents: "أولياء أمور داعمون",
        news: "أخبار المدرسة",
        readMore: "اقرأ المزيد",
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('en');

    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        // Optional: Change font family for Arabic
        document.body.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : "'Inter', sans-serif";
    }, [lang]);

    const toggleLanguage = () => setLang((prev) => (prev === 'en' ? 'ar' : 'en'));

    const t = (key: string) => translations[lang][key] || key;

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};