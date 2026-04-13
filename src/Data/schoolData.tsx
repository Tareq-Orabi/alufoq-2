import type { NewsItem, SchoolEvent, NewsArticle } from '../types/interface';
import image from '../assets/image.jpg';
import image2 from '../assets/image2.jpg';


export type { NewsItem, SchoolEvent, NewsArticle };

export const EVENTS_DATA: SchoolEvent[] = [
    {
        id: 1,
        day: "10",
        month: "April",
        monthAr: "أبريل",
        title: "Signing of a cooperation agreement between Volt Academy for Training and Al-Ufuq Kindergarten and Secondary Schools",
        titleAr: "توقيع اتفاقية تعاون بين أكاديمية فولت للتدريب و روضة ومدارس الأفق الثانوية لاستكمال برنامج التعليم الثانوي البريطاني ( BTEC )",
        excerpt: "Our School celebrating National Parent Involvement Day on April 10.",
        location: "Amman, Jordan, salaam street",
        locationAr: "عمان، الأردن، شارع السلام",
        time: "All day",
        fullDateRange: "April 10, 2026",
        image: image
    },
    {
        id: 2,
        day: "8",
        month: "April",
        monthAr: "أبريل",
        title: "As part of the school’s plan to guide students in choosing their paths, the school administration, faculty, and students visited the Volt Training Academy to view the engineering workshops specializing in automotive mechanics and to provide a comprehensive and clear explanation of the technical path (BTEC).",
        titleAr: `ضمن خطه المدرسه في توجيه الطلاب لاختيار مساراتهم ، كان لاداره المدرسه والهيئة  التدريسيه  والطلاب  زياره لاكاديميه فولت للتدريب ؛ وذلك للاطلاع على المشاغل الهندسيه الخاصه بميكانيك السيارات وتقديم شرح وافي وواضح عن المسار التقني (BTEC).`,
        excerpt: "Year 6 pupils are invited to join us for a Taster Day on either Thursday 19th or Sunday 22nd.",
        location: "Amman, Jordan, salaam street",
        locationAr: "عمان، الأردن، شارع السلام",
        time: "All day",
        fullDateRange: "April 8, 2026",
        image: image2
    },

];

export const NEWS_DATA: NewsArticle[] = [
    {
        id: 1,
        categories: ["Uncategorized", "Classes"],
        categoriesAr: ["غير مصنف", "فصول"],
        title: `A cooperation agreement was signed between Volt Academy for Training and Al-Ufuq Kindergarten and Secondary Schools to complete the British BTEC (British Secondary Education Certificate) program. Volt Academy for Training and Al-Ufuq School signed a joint cooperation agreement aimed at strengthening the partnership between the two parties in the field of education and vocational training. This agreement aims to complete the British BTEC program and offer it to students according to the highest accredited academic standards.

The agreement was signed by Eng. Alian Al-Huwaidi, General Manager of Volt Academy, and Ms. Rinad Abdulhadi, Principal of Al-Ufuq School.

This agreement comes as part of both institutions' commitment to providing distinguished educational opportunities for students wishing to complete their studies according to the British system, thus enhancing their academic competencies and future skills.

Representatives from both sides expressed their satisfaction with this step, which will broaden the horizons of cooperation and exchange of expertise. They affirmed their shared commitment to providing high-quality educational programs that meet students' needs and keep pace with global developments in the field of education.

This agreement is expected to enable students to enroll in the British BTEC program through flexible educational pathways that combine `,


        titleAr: `توقيع اتفاقية تعاون بين أكاديمية فولت للتدريب و روضة ومدارس الأفق الثانوية لاستكمال برنامج التعليم الثانوي البريطاني ( BTEC )
وقّعت أكاديمية فولت للتدريب ومدرسة الأفق اتفاقية تعاون مشترك تهدف إلى توثيق الشراكة بين الطرفين في مجال التعليم والتدريب المهني، وذلك لاستكمال برنامج التعليم الثانوي البريطاني (بيتك – BTEC) وتقديمه للطلبة وفق أعلى المعايير الأكاديمية المعتمدة.
وقد وقع الاتفاقية عن أكاديمية فولت مديرها العام المهندس عليان الهويدي، وعن مدرسة الأفق مديرتها الأستاذة ريناد عبدالهادي.
ويأتي توقيع هذه الاتفاقية في إطار حرص المؤسستين على توفير فرص تعليمية متميزة للطلاب الراغبين في استكمال دراستهم وفق النظام البريطاني، بما يعزز من كفاءاتهم الأكاديمية ومهاراتهم المستقبلية.
وأعرب ممثلو الجانبين عن سعادتهم بهذه الخطوة التي من شأنها توسيع آفاق التعاون وتبادل الخبرات، مؤكدين التزامهم المشترك بتقديم برامج تعليمية عالية الجودة تلبي احتياجات الطلبة وتواكب التطورات العالمية في مجال التعليم.
ومن المتوقع أن تسهم هذه الاتفاقية في تمكين الطلبة من الالتحاق ببرنامج التعليم الثانوي البريطاني (BTEC) عبر مسارات تعليمية مرنة تجمع`,
        excerpt: "Our focus on providing individual attention and a well rounded curriculum has helped us become known as one of the best private elementary schools.",
        excerptAr: "ساعدنا تركيزنا على توفير الاهتمام الفردي والمنهج المتكامل في أن نصبح معروفين كواحدة من أفضل المدارس الابتدائية الخاصة.",
        date: "April 10, 2026",
        dateAr: "١٠ أبريل ٢٠٢٦",
        comments: "Comments Off",
        image: image
    },

];
