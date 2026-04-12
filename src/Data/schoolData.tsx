import type { NewsItem, SchoolEvent, NewsArticle } from '../Types/interface';

export type { NewsItem, SchoolEvent, NewsArticle };

export const EVENTS_DATA: SchoolEvent[] = [
    {
        id: 1,
        day: "5",
        month: "February",
        monthAr: "فبراير",
        title: "National Parent Involvement Day",
        titleAr: "اليوم الوطني لمشاركة أولياء الأمور",
        excerpt: "Our School celebrating National Parent Involvement Day on December 3.",
        location: "Las Vegas, NV 82601, US",
        locationAr: "لاس فيغاس، الولايات المتحدة",
        time: "All day",
        fullDateRange: "February 5 - May 2, 2026",
        phone: "+1 998 71 150 30 20",
        email: "o.sherwood@stylemixthemes.net"
    },
    {
        id: 2,
        day: "8",
        month: "March",
        monthAr: "مارس",
        title: "Year 7 Taster Days",
        titleAr: "أيام تجربة السنة السابعة",
        excerpt: "Year 6 pupils are invited to join us for a Taster Day on either Thursday 19th or Sunday 22nd.",
        location: "New York, WY 82601, US",
        locationAr: "نيويورك، الولايات المتحدة",
        time: "All day",
        fullDateRange: "March 8, 2026",
        phone: "+1 998 71 150 30 20",
        email: "admissions@alufoq.com"
    },
    {
        id: 3,
        day: "16",
        month: "March",
        monthAr: "مارس",
        title: "A social event of Pasta & Prosecco",
        titleAr: "فعالية اجتماعية (باستا وبروسيكو)",
        excerpt: "The school PTFA would like to invite you to enjoy an evening of Pasta and Prosecco.",
        location: "Seattle, IL 85976, US",
        locationAr: "سياتل، إلينوي، الولايات المتحدة",
        time: "8:00 am - 9:00 pm",
        fullDateRange: "March 16, 2026",
        phone: "+1 998 71 150 30 20",
        email: "ptfa@alufoq.com"
    },
    {
        id: 4,
        day: "15",
        month: "April",
        monthAr: "أبريل",
        title: "Henry Cluster Council",
        titleAr: "مجلس هنري كلوستر",
        excerpt: "Discussion and community dialogue with school staff, parents and community members.",
        location: "Napoli, Pizarro 41/22",
        locationAr: "نابولي، بيزارو 41/22",
        time: "4:30 pm",
        fullDateRange: "April 15, 2026",
        phone: "+1 998 71 150 30 20",
        email: "council@alufoq.com"
    }
];

export const NEWS_DATA: NewsArticle[] = [
    {
        id: 1,
        categories: ["Uncategorized", "Classes"],
        categoriesAr: ["غير مصنف", "فصول"],
        title: "Our Focus on Individual Attention",
        titleAr: "تركيزنا على الاهتمام الفردي",
        excerpt: "Our focus on providing individual attention and a well rounded curriculum has helped us become known as one of the best private elementary schools.",
        excerptAr: "ساعدنا تركيزنا على توفير الاهتمام الفردي والمنهج المتكامل في أن نصبح معروفين كواحدة من أفضل المدارس الابتدائية الخاصة.",
        date: "August 22, 2025",
        dateAr: "٢٢ أغسطس ٢٠٢٥",
        comments: "Comments Off",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800"
    },
    {
        id: 2,
        categories: ["Athletics", "Uncategorized"],
        categoriesAr: ["رياضة", "غير مصنف"],
        title: "Drawing and Painting Lessons",
        titleAr: "دروس الرسم والتلوين",
        excerpt: "Each class is taught by a Master’s degree-certified teacher. Children with hearing loss receive additional services.",
        excerptAr: "يتم تدريس كل فصل من قبل معلم معتمد حاصل على درجة الماجستير. يتلقى الأطفال الذين يعانون من ضعف السمع خدمات إضافية.",
        date: "August 22, 2025",
        dateAr: "٢٢ أغسطس ٢٠٢٥",
        comments: "Comments Off",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800"
    },
    {
        id: 3,
        categories: ["Uncategorized"],
        categoriesAr: ["غير مصنف"],
        title: "Administration",
        titleAr: "الإدارة المدرسية",
        excerpt: "Welcome to Alufooq School. Our administration is here to assist you with all enrollment and student support needs.",
        excerptAr: "مرحباً بكم في مدرسة الأفق. إدارتنا هنا لمساعدتكم في جميع احتياجات التسجيل ودعم الطلاب.",
        date: "August 20, 2025",
        dateAr: "٢٠ أغسطس ٢٠٢٥",
        comments: "Comments Off",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
    },
    {
        id: 4,
        categories: ["Athletics", "School life", "Olympiad"],
        categoriesAr: ["رياضة", "الحياة المدرسية", "الأولمبياد"],
        title: "Independent Schools Show",
        titleAr: "عرض المدارس المستقلة",
        excerpt: "The Workshop focused on Dr. Templeton’s The Jareks, adapted by Edward Ford and brought to the stage by Nathan Xavier.",
        excerptAr: "ركزت ورشة العمل على كتاب 'The Jareks' للدكتور تمبلتون، والذي أعده إدوارد فورد وأخرجه ناثان كزافييه.",
        date: "August 1, 2025",
        dateAr: "١ أغسطس ٢٠٢٥",
        comments: "Comments Off",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800"
    },
    {
        id: 5,
        categories: ["High School", "Athletics"],
        categoriesAr: ["المرحلة الثانوية", "رياضة"],
        title: "High School Students Core Syllabus",
        titleAr: "المنهج الأساسي لطلاب الثانوية",
        excerpt: "Every kindergarten through sixth grade student enjoys a core syllabus of language arts, mathematics, science and social studies.",
        excerptAr: "يتمتع كل طالب من الروضة حتى الصف السادس بمنهج أساسي يشمل فنون اللغة والرياضيات والعلوم والدراسات الاجتماعية.",
        date: "August 1, 2025",
        dateAr: "١ أغسطس ٢٠٢٥",
        comments: "Comments Off",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800"
    },
    {
        id: 6,
        categories: ["School life", "Preparing"],
        categoriesAr: ["الحياة المدرسية", "التحضير"],
        title: "Considering a Private Elementary School?",
        titleAr: "هل تفكر في مدرسة ابتدائية خاصة؟",
        excerpt: "Del Mar Pines School is one of the best. Explore why preparing for early education is vital for your child's success.",
        excerptAr: "تعد مدرسة ديل مار باينز واحدة من الأفضل. اكتشف لماذا يعد التحضير للتعليم المبكر أمراً حيوياً لنجاح طفلك.",
        date: "November 26, 2015",
        dateAr: "٢٦ نوفمبر ٢٠١٥",
        comments: "Comments Off",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800"
    }
];