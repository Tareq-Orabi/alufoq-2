import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SchoolEvent } from '../Data/schoolData';
import { EVENTS_DATA } from '../Data/schoolData';

interface EventsProps {
    lang: 'en' | 'ar';
}

export const Events: React.FC<EventsProps> = ({ lang }) => {
    const [events, setEvents] = useState<SchoolEvent[]>(EVENTS_DATA);
    const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState<SchoolEvent | null>(null);

    // UI State for the Modal form
    const [activeFormTab, setActiveFormTab] = useState<'en' | 'ar'>(lang);

    const isRtl = lang === 'ar';

    const [formData, setFormData] = useState<Partial<SchoolEvent>>({
        title: '', titleAr: '', day: '', month: '', monthAr: '', time: '', location: '', locationAr: ''
    });

    const handleOpenModal = (event?: SchoolEvent) => {
        if (event) {
            setEditingEvent(event);
            setFormData(event);
        } else {
            setEditingEvent(null);
            setFormData({
                title: '', titleAr: '', day: '', month: '', monthAr: '',
                time: '', location: '', locationAr: ''
            });
        }
        setActiveFormTab(lang); // Default modal language to current app language
        setIsModalOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingEvent) {
            setEvents(events.map(ev => ev.id === editingEvent.id ? { ...ev, ...formData } as SchoolEvent : ev));
        } else {
            const newEvent = { ...formData, id: Date.now() } as SchoolEvent;
            setEvents([newEvent, ...events]);
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id: number) => {
        if (window.confirm(isRtl ? 'هل أنت متأكد من الحذف؟' : 'Are you sure you want to delete this event?')) {
            setEvents(events.filter(ev => ev.id !== id));
            setSelectedEvent(null);
        }
    };

    return (
        <section dir={isRtl ? 'rtl' : 'ltr'} className="py-24 px-6 max-w-6xl mx-auto min-h-[600px] relative">
            <AnimatePresence mode="wait">
                {!selectedEvent ? (
                    <motion.div key="list" initial={{ opacity: 0, x: isRtl ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isRtl ? -20 : 20 }} className="space-y-8">
                        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="text-center md:text-start">
                                <h2 className="text-4xl font-black uppercase italic text-slate-900">
                                    {isRtl ? 'الفعاليات القادمة' : 'Upcoming Events'}
                                </h2>
                            </div>
                            <button
                                onClick={() => handleOpenModal()}
                                className="bg-school-red text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:scale-105 transition active:scale-95"
                            >
                                {isRtl ? '+ إضافة فعالية' : '+ Add Event'}
                            </button>
                        </div>

                        <div className="grid gap-6">
                            {events.map((event) => (
                                <div key={event.id} className="group bg-white border border-slate-100 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-8 cursor-pointer hover:shadow-2xl transition-all">
                                    <div onClick={() => setSelectedEvent(event)} className="bg-school-red text-white w-24 h-24 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition">
                                        <span className="text-3xl font-black">{event.day}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest">{isRtl ? event.monthAr : event.month.substring(0, 3)}</span>
                                    </div>
                                    <div onClick={() => setSelectedEvent(event)} className="flex-grow text-center md:text-start">
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-school-red transition">{isRtl ? event.titleAr : event.title}</h3>
                                        <p className="text-slate-500 text-sm mt-2 flex items-center justify-center md:justify-start gap-2">
                                            {event.time} • {isRtl ? event.locationAr : event.location}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={(e) => { e.stopPropagation(); handleOpenModal(event); }} className="p-4 bg-slate-50 text-slate-400 rounded-full hover:bg-blue-50 hover:text-blue-600 transition">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                        </button>
                                        <button onClick={(e) => { e.stopPropagation(); handleDelete(event.id); }} className="p-4 bg-slate-50 text-slate-400 rounded-full hover:bg-red-50 hover:text-red-600 transition">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="details" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
                        <div className="bg-slate-950 p-8 text-white flex justify-between items-center">
                            <button onClick={() => setSelectedEvent(null)} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-school-red transition">
                                <svg className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                {isRtl ? 'العودة' : 'Back'}
                            </button>
                            <div className="flex gap-4">
                                <button onClick={() => handleOpenModal(selectedEvent)} className="px-4 py-2 bg-white/10 hover:bg-blue-600 rounded-lg text-xs font-bold transition">EDIT</button>
                                <button onClick={() => handleDelete(selectedEvent.id)} className="px-4 py-2 bg-school-red rounded-lg text-xs font-bold transition">DELETE</button>
                            </div>
                        </div>
                        <div className="p-16">
                            <h1 className="text-6xl font-black text-slate-900 uppercase italic mb-6">
                                {isRtl ? selectedEvent.titleAr : selectedEvent.title}
                            </h1>
                            <p className="text-xl text-slate-600">Event Location: {isRtl ? selectedEvent.locationAr : selectedEvent.location}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* REFACTORED SMART MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white w-full max-w-xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden">

                            {/* Modal Header & Language Toggle */}
                            <div className="bg-slate-900 p-8 text-white flex flex-col gap-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-black uppercase italic tracking-widest">
                                        {editingEvent ? 'Edit Event' : 'New Event'}
                                    </h2>
                                    <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white transition">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>

                                <div className="flex bg-white/10 p-1 rounded-xl w-full">
                                    <button
                                        type="button"
                                        onClick={() => setActiveFormTab('en')}
                                        className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeFormTab === 'en' ? 'bg-white text-slate-950 shadow-lg' : 'text-white/60 hover:text-white'}`}
                                    >
                                        English Data
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveFormTab('ar')}
                                        className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeFormTab === 'ar' ? 'bg-white text-slate-950 shadow-lg' : 'text-white/60 hover:text-white'}`}
                                    >
                                        البيانات العربية
                                    </button>
                                </div>
                            </div>

                            <form onSubmit={handleSave} className="p-8 space-y-6">
                                {/* Language Specific Fields */}
                                <div className="space-y-4">
                                    {activeFormTab === 'en' ? (
                                        <>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Event Title</label>
                                                <input required value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-school-red outline-none transition" placeholder="Graduation Ceremony" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Month Name</label>
                                                <input required value={formData.month} onChange={e => setFormData({ ...formData, month: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-school-red outline-none transition" placeholder="September" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Venue/Location</label>
                                                <input required value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-school-red outline-none transition" placeholder="Main Hall" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="space-y-1 text-right">
                                                <label className="text-[10px] font-black uppercase text-slate-400 mr-2">عنوان الفعالية</label>
                                                <input required dir="rtl" value={formData.titleAr} onChange={e => setFormData({ ...formData, titleAr: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-school-red outline-none transition text-right" placeholder="حفل التخرج" />
                                            </div>
                                            <div className="space-y-1 text-right">
                                                <label className="text-[10px] font-black uppercase text-slate-400 mr-2">اسم الشهر</label>
                                                <input required dir="rtl" value={formData.monthAr} onChange={e => setFormData({ ...formData, monthAr: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-school-red outline-none transition text-right" placeholder="سبتمبر" />
                                            </div>
                                            <div className="space-y-1 text-right">
                                                <label className="text-[10px] font-black uppercase text-slate-400 mr-2">الموقع / القاعة</label>
                                                <input required dir="rtl" value={formData.locationAr} onChange={e => setFormData({ ...formData, locationAr: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 focus:border-school-red outline-none transition text-right" placeholder="القاعة الرئيسية" />
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Shared Fields (Date & Time) */}
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Day (No.)</label>
                                        <input required value={formData.day} onChange={e => setFormData({ ...formData, day: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none" placeholder="15" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Time</label>
                                        <input required value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none" placeholder="09:00 AM" />
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-5 bg-school-red text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-red-200 hover:bg-red-700 transition active:scale-95">
                                    {editingEvent ? 'Update Event Record' : 'Publish New Event'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};