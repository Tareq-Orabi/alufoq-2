import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NEWS_DATA } from '../Data/schoolData';

interface NewsProps {
    lang: 'en' | 'ar';
}

export const News: React.FC<NewsProps> = ({ lang }) => {
    const [news, setNews] = useState(NEWS_DATA);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<any | null>(null);

    // Tab State for Modal
    const [activeFormTab, setActiveFormTab] = useState<'en' | 'ar'>(lang);

    const isRtl = lang === 'ar';

    const [formData, setFormData] = useState({
        title: '', titleAr: '', excerpt: '', excerptAr: '', image: '', date: '', dateAr: ''
    });

    const handleOpenModal = (item?: any) => {
        if (item) {
            setEditingItem(item);
            setFormData(item);
        } else {
            setEditingItem(null);
            setFormData({
                title: '', titleAr: '', excerpt: '', excerptAr: '',
                image: '', date: 'Apr 12, 2026', dateAr: '١٢ أبريل ٢٠٢٦'
            });
        }
        setActiveFormTab(lang);
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingItem) {
            setNews(news.map(n => n.id === editingItem.id ? { ...n, ...formData } : n));
        } else {
            const newItem = { ...formData, id: Date.now(), comments: "0", categories: ['General'], categoriesAr: ['عام'] };
            setNews([newItem, ...news]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: number) => {
        if (window.confirm(isRtl ? 'حذف هذا الخبر؟' : 'Delete this news item?')) {
            setNews(news.filter(n => n.id !== id));
        }
    };

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="py-24 px-6 bg-slate-50 min-h-screen relative">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-sm font-black text-school-red uppercase tracking-[0.3em] mb-4">
                            {isRtl ? 'آخر التحديثات' : 'Latest Updates'}
                        </h2>
                        <h1 className="text-6xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">
                            {isRtl ? 'أخبار المدرسة' : 'School News'}
                        </h1>
                    </div>
                    <button
                        onClick={() => handleOpenModal()}
                        className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-school-red transition-all shadow-xl active:scale-95"
                    >
                        {isRtl ? '+ نشر خبر جديد' : '+ Post News'}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {news.map((item) => (
                        <motion.article
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col relative border border-slate-100"
                        >
                            <div className={`absolute top-6 ${isRtl ? 'left-6' : 'right-6'} z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0`}>
                                <button onClick={() => handleOpenModal(item)} className="p-3 bg-white shadow-xl rounded-xl text-slate-600 hover:text-blue-600 transition">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </button>
                                <button onClick={() => handleDelete(item.id)} className="p-3 bg-white shadow-xl rounded-xl text-slate-600 hover:text-school-red transition">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </div>

                            <div className="relative h-72 overflow-hidden">
                                <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                            </div>

                            <div className="p-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-school-red transition-colors">
                                    {isRtl ? item.titleAr : item.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2">
                                    {isRtl ? item.excerptAr : item.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        {isRtl ? item.dateAr : item.date}
                                    </span>
                                    <span className="text-xs font-black uppercase text-slate-950 group-hover:translate-x-1 transition-transform">
                                        {isRtl ? 'اقرأ المزيد ←' : 'Read More →'}
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* REFACTORED SMART MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden">

                            <div className="p-8 bg-slate-900 text-white flex flex-col gap-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-black uppercase italic tracking-widest">{editingItem ? 'Edit News' : 'Create News'}</h2>
                                    <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                                <div className="flex bg-white/10 p-1 rounded-xl">
                                    <button type="button" onClick={() => setActiveFormTab('en')} className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition ${activeFormTab === 'en' ? 'bg-white text-slate-950 shadow-lg' : 'text-white/60'}`}>English Content</button>
                                    <button type="button" onClick={() => setActiveFormTab('ar')} className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition ${activeFormTab === 'ar' ? 'bg-white text-slate-950 shadow-lg' : 'text-white/60'}`}>المحتوى العربي</button>
                                </div>
                            </div>

                            <form onSubmit={handleSave} className="p-8 space-y-6">
                                <div className="min-h-[220px]">
                                    {activeFormTab === 'en' ? (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-left-2">
                                            <input required placeholder="Article Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 ring-school-red/20 transition font-bold" />
                                            <textarea required placeholder="Brief excerpt..." rows={4} value={formData.excerpt} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 ring-school-red/20 transition text-sm" />
                                        </div>
                                    ) : (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-right-2" dir="rtl">
                                            <input required placeholder="عنوان الخبر" value={formData.titleAr} onChange={e => setFormData({ ...formData, titleAr: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 ring-school-red/20 transition font-bold text-right" />
                                            <textarea required placeholder="مقتطف قصير..." rows={4} value={formData.excerptAr} onChange={e => setFormData({ ...formData, excerptAr: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 ring-school-red/20 transition text-sm text-right" />
                                        </div>
                                    )}
                                </div>

                                <div className="pt-6 border-t border-slate-100 flex gap-4 items-center">
                                    <div className="flex-grow">
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2 mb-1 block"> Image </label>
                                        <input required type="file" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl text-xs outline-none" />
                                    </div>
                                    {formData.image && <img src={formData.image} className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-50" alt="Preview" />}
                                </div>

                                <button type="submit" className="w-full py-5 bg-school-red text-white font-black rounded-[24px] shadow-2xl shadow-red-200 hover:bg-red-700 transition active:scale-95 uppercase tracking-[0.2em] text-xs">
                                    {editingItem ? 'Update Publication' : 'Confirm & Publish'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};