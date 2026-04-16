/**
 * Translations — single source of truth for all i18n key shapes.
 *
 * Future: swap this object for i18next namespace definitions.
 * Keys map 1:1 with what i18next's `t()` would accept, e.g. "hero.welcome".
 */
export interface Translations {
  nav: {
    home: string;
    about: string;
    events: string;
    news: string;
    langSwitch: string;
    getInTouch: string;
  };
  hero: {
    welcome: string;
    discover: string;
    school: string;
    statsHtml: {
      studentsCount: string;
      facultyCount: string;
      pre: string;
      mid: string;
      post: string;
    };
    desc: string;
  };
  academic: {
    tag: string;
    title: string;
    tags: string[];
    desc: string;
  };
  calendar: {
    title: string;
    download: string;
    months: {
      September: string;
      November: string;
      June: string;
    };
  };
  stats: {
    tag: string;
    title: string;
    desc: string;
    cards: Array<{ label: string; value: string }>;
  };
  vision: {
    tag: string;
    title: string;
    description: string;
  };
  mission: {
    tag: string;
    title: string;
    description: string;
  };
  goals: {
    tag: string;
    title: string;
    items: string[];
  };
  rules: {
    tag: string;
    title: string;
    description: string;
    items: string[];
  };
  footer: {
    brand: {
      name: string;
      desc: string;
    };
    contacts: {
      title: string;
      address: string;
      hours: string;
    };
    posts: {
      title: string;
      items: Array<{ title: string; date: string }>;
    };
    location: {
      title: string;
      mapText: string;
    };
    copyright: {
      text: string;
      dev: string;
    };
  };
  shared: {
    donated: string;
    of: string;
    dirArrow: string;
  };
  services: {
    sectionLabel: string;
    tag: string;
    title: string;
    overviewTag: string;
    overviewTitle: string;
    overviewDesc: string;
    programsTag: string;
    programs: string[];
    tracksTag: string;
    trackLabel: string;
    tracks: Array<{ title: string; desc: string }>;
  };
}
