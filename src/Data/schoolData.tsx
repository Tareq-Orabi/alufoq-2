import type { NewsItem, SchoolEvent, NewsArticle } from '../Types/interface';
import image from '../assets/image.jpg';
import image2 from '../assets/image2.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image15 from '../assets/image15.jpg';


export type { NewsItem, SchoolEvent, NewsArticle };

export const EVENTS_DATA: SchoolEvent[] = [
    {
        id: 1,
        day: "25",
        month: "February",
        monthAr: "فبراير",
        title: "Signing of a cooperation agreement between Volt Academy for Training and Al-Ufuq Kindergarten and Secondary Schools",
        titleAr: "توقيع اتفاقية تعاون بين أكاديمية فولت للتدريب و روضة ومدارس الأفق الثانوية لاستكمال برنامج التعليم الثانوي البريطاني ( BTEC )",
        excerpt: "Our School celebrating National Parent Involvement Day on April 10.",
        location: " Na'ur area, Amman",
        locationAr: " مدارس الأفق الثانوية",
        time: "All day",
        fullDateRange: "February 25, 2026",
        image: image
    },
    {
        id: 2,
        day: "10",
        month: "March",
        monthAr: "مارس",
        title: "As part of the school’s plan to guide students in choosing their paths, the school administration, faculty, and students visited the Volt Training Academy to view the engineering workshops specializing in automotive mechanics and to provide a comprehensive and clear explanation of the technical path (BTEC).",
        titleAr: `ضمن خطه المدرسه في توجيه الطلاب لاختيار مساراتهم ، كان لاداره المدرسه والهيئة  التدريسيه  والطلاب  زياره لاكاديميه فولت للتدريب ؛ وذلك للاطلاع على المشاغل الهندسيه الخاصه بميكانيك السيارات وتقديم شرح وافي وواضح عن المسار التقني (BTEC).`,
        excerpt: "Year 6 pupils are invited to join us for a Taster Day on either Thursday 19th or Sunday 22nd.",
        location: " Amman",
        locationAr: " Volt Training Academy",
        time: "All day",
        fullDateRange: "March 10, 2026",
        image: image2
    },
    {
        id: 3,
        day: "24",
        month: "March",
        monthAr: "مارس",
        title: "BTEC Interactive Learning Session — Bridging Theory and Practice",
        titleAr: "جلسة تعليمية تفاعلية BTEC — ربط النظرية بالتطبيق العملي",
        excerpt: "Students engage in hands-on learning paths within an interactive environment that simulates real-world work settings.",
        location: "Al-Ufuq Secondary School",
        locationAr: "مدارس الأفق الثانوية",
        time: "All day",
        fullDateRange: "March 24, 2026",
        image: image5
    },
    {
        id: 4,
        day: "1",
        month: "April",
        monthAr: "أبريل",
        title: "Introductory Session on the BTEC Program at the German Jordanian University",
        titleAr: "جلسة تعريفية ببرنامج BTEC في الجامعة الألمانية الأردنية",
        excerpt: "Al-Ufuq School, in cooperation with the Community Support Services Department at GJU, held a guidance session to empower students with knowledge about the British BTEC program.",
        location: "German Jordanian University",
        locationAr: "الجامعة الألمانية الأردنية",
        time: "All day",
        fullDateRange: "April 1, 2026",
        image: image6
    },
    {
        id: 5,
        day: "10",
        month: "April",
        monthAr: "أبريل",
        title: "Educational Visit to Futeric for IT Students",
        titleAr: "زيارة تعليمية لطلاب تقنية المعلومات إلى شركة Futeric",
        excerpt: "Al-Ufuq Secondary School organized an educational visit for IT students to Futeric to bridge the gap between academic learning and practical application.",
        location: "Futeric",
        locationAr: "Futeric",
        time: "All day",
        fullDateRange: "April 10, 2026",
        image: image7
    },
    {
        id: 6,
        day: "15",
        month: "April",
        monthAr: "أبريل",
        title: "Al-Ufuq Secondary School Students Apply Their Practical Skills in a Specialized Technical Workshop",
        titleAr: "طلاب مدارس الأفق الثانوية يطبّقون مهاراتهم العملية في ورشة عمل تقنية متخصصة",
        excerpt: "Students participated in a specialized workshop on disassembling and examining the components of technical devices, using real professional tools in group work.",
        excerptAr: "شارك الطلاب في ورشة عمل متخصصة في فك وفحص مكونات الأجهزة التقنية باستخدام أدوات احترافية حقيقية ضمن مجموعات عمل.",
        description: `As part of its educational approach based on hands-on learning, Al-Ufuq Secondary School organized a practical activity for its students, where they participated in a specialized workshop on disassembling and examining the components of technical devices and systems.

During the activity, students worked in groups using real professional tools, learning about the parts of electronic devices and how they work, in addition to acquiring basic maintenance and technical diagnostic skills.

This type of activity aims to enhance students' practical understanding and connect theoretical concepts with real-world application, thus contributing to the development of their analytical thinking and teamwork skills.

The school administration emphasized that these initiatives are part of preparing students capable of dealing with future technological challenges by providing an interactive learning environment that focuses on practical experience and direct experimentation.`,
        descriptionAr: `ضمن نهجها التربوي القائم على التعلم العملي، نظمت مدارس الأفق الثانوية نشاطًا تطبيقيًا لطلابها، شاركوا فيه في ورشة عمل متخصصة تتضمّنت فك وفحص مكونات الأجهزة والمنظومات التقنية.

خلال النشاط، عمل الطلاب في مجموعات باستخدام أدوات احترافية حقيقية، وتعرّفوا على مكونات الأجهزة الإلكترونية وآلية عملها، إضافةً إلى اكتساب مهارات الصيانة الأساسية والتشخيص التقني.

يهدف هذا النوع من النشاطات إلى تعزيز الفهم العملي لدى الطلاب وربط المفاهيم النظرية بالتطبيق الواقعي، مما يُسهم في تنمية تفكيرهم التحليلي ومهارات العمل الجماعي.

وأكدت إدارة المدرسة أن هذه المبادرات تندرج ضمن إعداد طلاب قادرين على التعامل مع التحديات التكنولوجية المستقبلية، وذلك بتوفير بيئة تعليمية تفاعلية تُركّز على التجربة العملية والتجريب المباشر.`,
        location: "Al-Ufuq Secondary School",
        locationAr: "مدارس الأفق الثانوية",
        time: "All day",
        fullDateRange: "April 15, 2026",
        image: image8
    },
    {
        id: 7,
        day: "20",
        month: "April",
        monthAr: "أبريل",
        title: "Al-Ufuq Secondary School Students Participate in Arduino Training",
        titleAr: "طلاب مدارس الأفق الثانوية يشاركون في تدريب على أردوينو",
        excerpt: "Students assembled electronic circuits using breadboards, connected sensors and motors, and learned programming fundamentals to control Arduino systems.",
        excerptAr: "ركّب الطلاب دوائر إلكترونية باستخدام اللوحات التجريبية، ووصلوا الحساسات والمحركات، وتعلّموا أساسيات البرمجة للتحكّم في أنظمة أردوينو.",
        description: `As part of its ongoing efforts to promote applied learning, Al-Ufuq Secondary School organized a practical training session for its students on using Arduino systems, aiming to develop their skills in electronics and programming.

During the training, students assembled electronic circuits using breadboards and connected various components such as sensors and motors. They also learned the fundamentals of programming to control these systems and implement simple projects.

This activity aligns with the school's commitment to integrating modern technology concepts into the educational process, providing students with the opportunity to apply their learning practically, thus enhancing their innovation and engineering thinking skills.

The school administration emphasized that Arduino training is a crucial step in preparing students for future fields, particularly robotics and the Internet of Things (IoT), through an interactive learning environment based on experimentation and discovery.`,
        descriptionAr: `ضمن جهودها المتواصلة لتعزيز التعلم التطبيقي، نظمت مدارس الأفق الثانوية جلسةً تدريبيةً عمليةً لطلابها على استخدام أنظمة أردوينو، بهدف تطوير مهاراتهم في الإلكترونيات والبرمجة.

خلال التدريب، ركّب الطلاب دوائر إلكترونية باستخدام اللوحات التجريبية، ووصلوا مختلف المكونات كالحساسات والمحركات، كما تعلّموا أسس البرمجة للتحكّم في هذه المنظومات وتنفيذ مشاريع بسيطة.

يتوافق هذا النشاط مع حرص المدرسة على دمج مفاهيم التكنولوجيا الحديثة في العملية التعليمية، مما يتيح للطلاب فرصة تطبيق ما يتعلمونه عمليًا، معزّزًا بذلك مهاراتهم في الابتكار والتفكير الهندسي.

وأكدت إدارة المدرسة أن التدريب على أردوينو يُعدّ خطوةً محوريةً في تهيئة الطلاب لمجالات المستقبل، لا سيما الروبوتيكا وإنترنت الأشياء (IoT)، عبر بيئة تعليمية تفاعلية تقوم على التجريب والاكتشاف.`,
        location: "Al-Ufuq Secondary School",
        locationAr: "مدارس الأفق الثانوية",
        time: "All day",
        fullDateRange: "April 6, 2026",
        image: image9
    },
    
    {
    id: 8,
    day: "25",
    month: "April",
    monthAr: "أبريل",
    title: "BTEC Open Day at Al-Ufuq Schools",
    titleAr: "اليوم المفتوح (BTEC) في مدارس الأفق",
    excerpt: "Join our open day to explore the BTEC system, understand study and assessment methods, and تجربه ورشات تفاعلية للطلاب.",
    description: "تدعوكم مدارس الأفق التربوي لحضور اليوم المفتوح لبرنامج BTEC، وذلك يوم السبت الموافق 25/4.\n\nيهدف هذا اليوم إلى تعريف أولياء الأمور بنظام BTEC بشكل عملي وواضح، من خلال شرح آلية الدراسة، نظام التقييم، والمسارات التعليمية المتاحة، مع الإجابة على جميع الاستفسارات بكل شفافية.\n\nكما يتضمن اليوم مجموعة من التجارب العملية وورشات تدريبية تفاعلية مخصصة للطلاب، تتيح لهم فرصة حقيقية لاستكشاف التخصصات المختلفة، وتطبيق المهارات بأنفسهم ضمن بيئة تعليمية حديثة ومحفزة.\n\nبانتظاركم لتعيشوا التجربة معنا وتكتشفوا مستقبل التعليم التطبيقي.",
    location: "Al-Ufuq Secondary School",
    locationAr: "مدارس الأفق الثانوية",
    time: "—",
    fullDateRange: "April 25, 2026",
    image: image15
}
    

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
    {
        id: 2,
        categories: ["BTEC", "Community"],
        categoriesAr: ["BTEC", "مجتمع"],
        title: `Introductory Session on the BTEC Program at the German Jordanian University

As part of its efforts to raise awareness among children in the local community, Al-Ufuq School, in cooperation with the Community Support Services Department at the German Jordanian University, held an introductory and guidance session about the British BTEC program.

The session aimed to empower students and provide them with the necessary knowledge to enroll in the program, enabling them to acquire the practical and cognitive skills that will prepare them for a promising future.`,
        titleAr: `جلسة تعريفية ببرنامج BTEC في الجامعة الألمانية الأردنية

في إطار جهودها الرامية إلى نشر الوعي بين أبناء المجتمع المحلي، أقامت مدرسة الأفق، بالتعاون مع دائرة خدمات دعم المجتمع في الجامعة الألمانية الأردنية، جلسةً تعريفيةً وتوجيهيةً حول برنامج التعليم الثانوي البريطاني BTEC.

هدفت الجلسة إلى تمكين الطلاب وتزويدهم بالمعرفة اللازمة للالتحاق بالبرنامج، مما يُتيح لهم اكتساب المهارات العملية والمعرفية التي تُعدّهم لمستقبل واعد.`,
        excerpt: "Al-Ufuq School, in cooperation with the Community Support Services Department at GJU, held a guidance session to empower students with knowledge about the British BTEC program.",
        excerptAr: "أقامت مدرسة الأفق، بالتعاون مع دائرة خدمات دعم المجتمع في الجامعة الألمانية الأردنية، جلسةً تعريفيةً وتوجيهيةً حول برنامج التعليم الثانوي البريطاني BTEC لتمكين الطلاب وتزويدهم بالمعرفة اللازمة.",
        date: "April 14, 2026",
        dateAr: "١٤ أبريل ٢٠٢٦",
        comments: "Comments Off",
        image: image6
    },
    {
        id: 3,
        categories: ["IT", "Field Visit"],
        categoriesAr: ["تقنية معلومات", "زيارة ميدانية"],
        title: `Educational Visit to Futeric for IT Students

Al-Ufuq Secondary School organized an educational visit for its Information Technology (IT) students to Futeric, as part of its ongoing efforts to bridge the gap between academic learning and practical application, and to enhance students' experience in the job market.

During the visit, students were introduced to the latest IT technologies and learned about the work environment within companies specializing in computers and programming. They received a detailed explanation of software development mechanisms and the importance of technical skills in this rapidly evolving sector.

The school administration emphasized that these visits are part of its experiential learning approach, which aims to empower students to gain real-world experience that reinforces their understanding of theoretical content and helps them define their future career paths.

Such initiatives contribute to preparing qualified students who possess the necessary skills and knowledge to enter the job market, especially in the ever-evolving fields of modern technology.`,
        titleAr: `زيارة تعليمية لطلاب تقنية المعلومات إلى شركة Futeric

نظمت مدارس الأفق الثانوية زيارةً تعليميةً لطلابها في تخصص تقنية المعلومات إلى شركة Futeric، وذلك ضمن جهودها المتواصلة لسد الفجوة بين التعلم الأكاديمي والتطبيق العملي، وتعزيز تجربة الطلاب في سوق العمل.

خلال الزيارة، اطّلع الطلاب على أحدث تقنيات تقنية المعلومات، وتعرّفوا على بيئة العمل داخل الشركات المتخصصة في الحواسيب والبرمجة، وحصلوا على شرح مفصّل حول آليات تطوير البرمجيات وأهمية المهارات التقنية في هذا القطاع سريع التطور.

وأكدت إدارة المدرسة أن هذه الزيارات تندرج ضمن نهجها في التعلم التجريبي، الذي يهدف إلى تمكين الطلاب من اكتساب خبرة عملية حقيقية تعزّز فهمهم للمحتوى النظري، وتُسهم في تحديد مساراتهم المهنية المستقبلية.

تُسهم مثل هذه المبادرات في إعداد طلاب مؤهلين يمتلكون المهارات والمعارف اللازمة للاندماج في سوق العمل، لا سيما في مجالات التقنية الحديثة المتطورة باستمرار.`,
        excerpt: "Al-Ufuq Secondary School organized an educational visit for IT students to Futeric, bridging the gap between academic learning and practical application.",
        excerptAr: "نظمت مدارس الأفق الثانوية زيارةً تعليميةً لطلاب تقنية المعلومات إلى شركة Futeric، ضمن جهودها لسد الفجوة بين التعلم الأكاديمي وسوق العمل.",
        date: "April 12, 2026",
        dateAr: "١٢ أبريل ٢٠٢٦",
        comments: "Comments Off",
        image: image7
    },

];
