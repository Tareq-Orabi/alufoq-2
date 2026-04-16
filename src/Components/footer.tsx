import React from 'react';
import schoolLogo from '../assets/schoolLogo.png';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../locales';
import { IconPin, IconPhone, IconClock } from './shared/icons';

/**
 * Footer — reads language from context and resolves all strings via the
 * typed translations map. No lang prop required.
 */

const facebookLogo = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACLklEQVR4AbSVvXnCMBCG5WyQMl3YgDJdYJLAJMAksAlkEtggKdM573u2HBtbD27iR59POt2/TvZT+udn0kFd169g1+IMLeHInthAV1OxDhwgpOEzglewBxvwCkrDPWWOCBjEVRvMu9E5aDc0rNK+ap4FRKyhJVRYWwADgiQdddl0DtgxioQhDR5Yzx7o3IA661Zp19IUDohej2KbN0oUWett3Y00Q12Du6GnoxVywQsHMC2LAifmxYGS52Om1j3LqdtFDPMCHO++soNYyCgB4xoxqhPlcMSZIG/UkGaw4VoEIztwkT07L8Fab3FmCaI8COoUMhg6CH52YJoDiYmFCiq6lbNxblmtu/MRsoPRxgzGhXJYpi20mP1DB205jPg+Sy9lvu33e118Dx0g+QG8RPdGXMsXBoDYeMxxoCHLQSWquEhVVVmayqc1mc+mXf6ROQ6UtmuoVu09SEzsIEhduwk+weToOzDSKSFvt2W4j9K1/KlD1pb7zacCq8UuoAz2vm0YCsjmEXz2bdPMG9E5GYyUZjDMIMqWHcSCova/MTPsjEV6NiLjcECalkgU221sqsjRhl2nve4MlPYwvTz+lRSSNxtE7qWzqyyPZxa6kYEzsjAl/0zSPQoOnQnbc4ncG8wvqN+lJfN+u9pRRr3AlhSxNMjA/4Gd4WUSZqSgUPiHl4Ck75SSSDwaFhr2Ahog7GZ0GTTL5m0EwO++PS5UfIH33EM2eIAnBoYbSyn9AgAA//8gWV0oAAAABklEQVQDAPAqGEDxGWc2AAAAAElFTkSuQmCC" alt="icon" />

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isAr = lang === 'ar';

  return (
    <footer
      className={`bg-slate-950 text-white pt-20 pb-10 px-6 border-t-8 border-school-red ${isAr ? 'font-arabic' : ''}`}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Column 1: Brand */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <img src={schoolLogo} alt="Al-Ufoq School Logo" className="w-14 h-14 object-contain" loading="lazy" />
            <span className="text-3xl font-black tracking-tighter italic uppercase text-white">
              {t.footer.brand.name}
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm font-light">
            {t.footer.brand.desc}
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/alufoqschools"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
              className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-school-white transition-all group shadow-lg"
            >
              {facebookLogo}
            </a>
          </div>
        </div>

        {/* Column 2: Contacts */}
        <div className="space-y-8">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-white">
            {t.footer.contacts.title}
          </h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 group">
              <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-school-white/10 transition shrink-0">
                <IconPin className="w-5 h-5 text-school-white" />
              </div>
              <span className="text-slate-400 text-sm leading-relaxed">{t.footer.contacts.address}</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-school-white/10 transition shrink-0">
                <IconPhone className="w-5 h-5 text-school-white" />
              </div>
              <span className="text-slate-400 text-sm" dir="ltr">+962 77091 7917</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-school-white/10 transition shrink-0">
                <IconClock className="w-5 h-5 text-school-white" />
              </div>
              <span className="text-slate-200 text-xs font-black uppercase tracking-widest">
                {t.footer.contacts.hours}
              </span>
            </li>
          </ul>
        </div>

        {/* Column 3: Recent Posts */}
        <div className="space-y-8">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-white">
            {t.footer.posts.title}
          </h4>
          <div className="space-y-8">
            {t.footer.posts.items.map((post, i) => (
              <div key={i} className="group cursor-pointer border-l-2 border-slate-900 hover:border-school-white ps-4 transition-all">
                <h5 className="text-sm font-bold text-slate-200 group-hover:text-school-red transition-colors leading-snug">
                  {post.title}
                </h5>
                <p className="text-[10px] text-slate-600 mt-2 uppercase font-black tracking-widest">
                  {post.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Map */}
        <div className="space-y-8">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-school-white">
            {t.footer.location.title}
          </h4>
          <div className="w-full h-44 bg-slate-900 rounded-2xl overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border border-slate-800 p-1">
            <iframe
              src="https://maps.google.com/maps?q=31.8637639,35.8268941&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.75rem' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.footer.location.mapText}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
        <p>{t.footer.copyright.text}</p>

      </div>
    </footer>
  );
};