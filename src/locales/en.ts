import type { Translations } from './types';

/**
 * English translations.
 * Future: replace with i18next en.json namespace or Strapi API response.
 */
export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    events: 'Events',
    news: 'News',
    blog: 'Blog',
    langSwitch: 'العربية',
    getInTouch: 'Get in touch',
  },
  hero: {
    welcome: 'Welcome to Al-Ufoq',
    discover: 'Discover',
    school: 'Our School',
    statsHtml: {
      studentsCount: '500 students',
      facultyCount: '50 expert faculty',
      pre: 'We are home to ',
      mid: ' and ',
      post: ' members.',
    },
    desc: 'Al-Ufoq School & Kindergarten is a premier private educational institution in Amman, Jordan. We provide a supportive, coeducational environment focused on academic rigor.',
  },
  academic: {
    tag: 'Academic Foundation',
    title: 'Comprehensive Education',
    tags: ['School (Grades 1-12)', 'Kindergarten (Ages 4-6)', 'BTEC Programs'],
    desc: 'The school offers a complete educational pathway from Kindergarten through secondary levels. We cater to both boys and girls in a dynamic environment.',
  },
  calendar: {
    title: 'Academic Calendar',
    download: 'Download Full Calendar (PDF) →',
    months: {
      September: 'September',
      November: 'November',
      June: 'June',
    },
  },
  stats: {
    tag: 'Our Goals & Impact',
    title: 'School Statistics',
    desc: 'Here you can review some key statistics reflecting the success and dedication of our Al-Ufoq community.',
    cards: [
      { label: 'Certified Expert Teachers', value: '67' },
      { label: 'Active Students Enrolled', value: '5,673' },
      { label: 'Passing to Universities', value: '97%' },
      { label: 'Satisfied & Supportive Parents', value: '100%' },
    ],
  },
  vision: {
    tag: 'Our Vision',
    title: 'A Leading Educational Model',
    description:
      'Al-Ufoq Secondary School aims to be a leading model in education across Jordan, providing comprehensive education that combines academic excellence with vocational and technical qualification, and preparing a creative generation capable of innovation and competing in local and global labor markets.',
  },
  mission: {
    tag: 'Our Mission',
    title: 'A Stimulating Learning Environment',
    description:
      "Al-Ufoq Secondary School seeks to provide a stimulating learning environment that supports academic learning and the BTEC professional pathway, with a focus on developing programming and technology skills, and promoting commitment and discipline, through modern educational programs, training workshops, and interactive competitions, to build a student's comprehensive personality—scientifically and skillfully—capable of achieving their ambitions and serving their community.",
  },
  goals: {
    tag: 'Our Goals',
    title: 'What We Aim to Achieve',
    items: [
      'Prepare academically and professionally outstanding students capable of meeting modern labor market requirements.',
      "Enhance students' programming and technology skills in line with global digital advancements.",
      'Develop the vocational pathway and BTEC program to empower students with real practical skills.',
      'Consolidate the values of academic commitment, discipline, and responsibility among students.',
      'Provide a stimulating environment for creativity, innovation, and critical thinking.',
      'Support students in choosing their appropriate pathway (academic or vocational) according to their inclinations and abilities.',
      'Organize competitions and training workshops to develop personal and practical skills.',
      'Promote teamwork and cooperation among students.',
      'Build a comprehensive personality for the student combining science, ethics, and life skills.',
      'Prepare a generation capable of representing their country and contributing to societal development.',
    ],
  },
  rules: {
    tag: 'Student Guidelines',
    title: 'Rules of Conduct',
    description:
      'To preserve the vision, mission, and goals of Al-Ufoq Secondary Schools, and to raise a generation that believes in its Lord, belongs to its religion, nation, and country, relying on itself in an educational environment that strengthens the bonds of love between the student, teachers, and school, we present to you the instructions and rules of conduct that help achieve this:',
    items: [
      'Demonstrate good Islamic morals in dealing with everyone.',
      'Maintain personal hygiene and avoid strange haircuts.',
      'Preserve school furniture and public facilities.',
      'Perform all school duties and participate effectively in all activities.',
      'Respect colleagues and school staff without assaulting them.',
      'Commit to not bringing mobile phones to school premises, and if brought, place them in designated lockers at the start of the day.',
      'Schools are a smoke-free zone, so smoking is strictly prohibited.',
      'Writing on doors, walls, seats, and inside school facilities is prohibited.',
      'Carrying any sharp tool or anything that causes harm to others is prohibited.',
      'Avoid fighting and forming student cliques inside and outside schools and buses.',
      'Bringing pictures, magazines, electronic storage devices, or wearing clothes bearing pictures or writings contrary to public morals is prohibited.',
      'Do not use words that offend public modesty.',
    ],
  },
  footer: {
    brand: {
      name: 'Al-Ufoq',
      desc: 'Al-Ufoq holds a rich history and goodwill within the community, providing an extensive foundation for academic and personal growth.',
    },
    contacts: {
      title: 'Contacts',
      address: 'Marka Bridge, Marka, Amman, Jordan',
      hours: 'Sun — Thu: 7AM — 4PM',
    },
    posts: {
      title: 'Recent Posts',
      items: [
        { title: 'Classes Registration Open', date: 'August 22, 2025' },
        { title: 'Drawing and Painting Lessons', date: 'August 22, 2025' },
        { title: 'Administrative Announcement', date: 'August 20, 2025' },
      ],
    },
    location: {
      title: 'Location',
      mapText: 'Interactive Map (Marka, Amman)',
    },
    copyright: {
      text: 'Copyright © Al-Ufoq School',
      dev: 'Developed by',
    },
  },
  shared: {
    donated: 'Donated',
    of: 'of',
    dirArrow: '→',
  },
};
