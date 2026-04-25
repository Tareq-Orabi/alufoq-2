import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import sub2 from '../../assets/image10.jpg';
import sub3 from '../../assets/image11.jpg';
import sub4 from '../../assets/image12.jpg';
import sub5 from '../../assets/image13.jpg';
import sub6 from '../../assets/image14.jpg';

type Sponsor = {
    name: string;
    caption: string;
    logo?: string;
};

type SponsorCardProps = {
    sponsor: Sponsor;
    index: number;
};

// 1. Extracted Card Component for cleaner code and individual animation states
const SponsorCard = ({ sponsor, index }: SponsorCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex flex-col items-center overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/60 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-xl"
        >

                <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="h-max w-max object-cover" />
            {/* Soft background glows that intensify on hover */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />


            {/* Animated Bottom Accent Line */}
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-school-red transition-transform duration-500 group-hover:scale-x-100" />
        </motion.div>
    );
};

export const Sub = () => {
    const { lang } = useLanguage();
    const isRtl = lang === 'ar';

    const sponsors = [
        { name: 'Horizon Labs', caption: 'Innovation Partner', logo:   sub2 },
        { name: 'Nova Works', caption: 'Education Sponsor', logo: sub3 },
        { name: 'Aurora Tech', caption: 'Digital Learning', logo: sub4 },
        { name: 'Pulse Creative', caption: 'Design Sponsor', logo: sub5 },
        { name: 'Summit Media', caption: 'Community Partner', logo: sub6 },
    ];

    return (
       <section className="relative w-full overflow-hidden bg-slate-50 px-6 py-16">
            {/* Global Ambient Background */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent" />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        {isRtl ? 'شركاء النجاح' : 'COLLABORATION'}
                    </h2>
                </motion.div>

                {/* Grid Section */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {sponsors.map((sponsor, index) => (
                        <SponsorCard key={sponsor.name} sponsor={sponsor} index={index} />
                    ))}
                </div>
                
            </div>
        </section>
    );
};