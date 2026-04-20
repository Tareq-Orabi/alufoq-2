import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import video from '../../assets/مدارس الأفق Final 2025.mp4';

export const VideoSection = () => {
    const { lang } = useLanguage();
    const isRtl = lang === 'ar';

    return (
        <section className="relative w-full py-24 overflow-hidden bg-white">

            {/* Video card */}
            <div className="flex justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="w-full max-w-4xl rounded-2xl border-4 border-red-600 overflow-hidden shadow-lg"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full aspect-video object-cover"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </motion.div>
            </div>

        </section>
    );
};