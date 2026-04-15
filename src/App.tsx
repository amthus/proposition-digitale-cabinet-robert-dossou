/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, Menu, X, Mail, MapPin, Phone, Globe2, FileText, ExternalLink } from 'lucide-react';
import { translations, Language } from './translations';

// --- Shared Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[lang].nav;

  const navLinks = [
    { name: t.home, href: '/' },
    { name: t.heritage, href: '/heritage' },
    { name: t.services, href: '/services' },
    { name: t.expertise, href: '/expertise' },
    { name: t.publications, href: '/publications' },
    { name: t.contact, href: '/contact' },
  ];

  return (
    <header className="bg-white border-b border-forest/10 py-6 px-6 md:px-12 flex justify-between items-center z-50 sticky top-0 shadow-sm">
      <Link to="/" className="font-serif text-2xl font-bold tracking-tight text-forest uppercase">
        Robert <span className="text-gold">Dossou</span>
      </Link>

      <nav className="hidden xl:flex items-center gap-8 text-[11px] uppercase tracking-[2px] font-semibold">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.href} 
            className={`hover:text-gold transition-colors ${location.pathname === link.href ? 'text-gold' : 'text-forest'}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border border-forest px-3 py-1 text-[10px] font-bold">
          <button 
            onClick={() => setLang('FR')} 
            className={`${lang === 'FR' ? 'bg-forest text-white px-1' : 'text-forest'}`}
          >
            FR
          </button>
          <button 
            onClick={() => setLang('EN')} 
            className={`${lang === 'EN' ? 'bg-forest text-white px-1' : 'text-forest'}`}
          >
            EN
          </button>
        </div>

        <button className="xl:hidden text-forest" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] p-12 flex flex-col gap-8 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl font-bold text-forest uppercase">Robert <span className="text-gold">Dossou</span></span>
              <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            </div>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-3xl font-serif text-forest hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const GlobeSVG = ({ className }: { className?: string }) => (
  <svg className={`opacity-15 text-white pointer-events-none ${className}`} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.2" />
    <ellipse cx="50" cy="50" rx="20" ry="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
    <ellipse cx="50" cy="50" rx="40" ry="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" />
    <line x1="5" y1="30" x2="95" y2="30" stroke="currentColor" strokeWidth="0.1" />
    <line x1="5" y1="70" x2="95" y2="70" stroke="currentColor" strokeWidth="0.1" />
  </svg>
);

const PageHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="bg-forest text-white py-24 px-6 md:px-12 relative overflow-hidden">
    <GlobeSVG className="absolute -right-24 top-1/2 -translate-y-1/2 w-[400px] h-[400px]" />
    <div className="max-w-4xl relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-serif mb-6"
      >
        {title}
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gold/80 font-light max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);

// --- Pages ---

const HomePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="flex flex-col">
      <section className="bg-forest text-white min-h-[85vh] flex flex-col justify-center p-6 md:p-24 relative overflow-hidden">
        <GlobeSVG className="absolute -right-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10" />
        <div className="max-w-5xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[1] mb-8"
          >
            {t.hero.title.split('. ').map((part, i) => (
              <span key={i} className="block">{part}.</span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gold/90 font-light max-w-3xl mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          <div className="flex flex-wrap gap-6">
            <Link to="/contact" className="px-10 py-5 bg-gold text-forest font-bold uppercase text-sm tracking-[3px] hover:bg-white transition-all shadow-lg">
              {t.hero.cta}
            </Link>
            <Link to="/services" className="px-10 py-5 border border-gold text-gold font-bold uppercase text-sm tracking-[3px] hover:bg-gold hover:text-forest transition-all">
              {t.nav.services}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-[4px] text-xs font-bold mb-6 block">{t.about.firm_title}</span>
            <h2 className="text-4xl md:text-6xl font-serif text-forest mb-8">Une Institution d'Excellence</h2>
            <p className="text-lg text-ink/70 leading-relaxed mb-10 font-light">
              {t.about.firm_text}
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-forest/10 pt-10">
              <div>
                <h4 className="text-gold font-serif text-2xl mb-2">1970</h4>
                <p className="text-xs uppercase tracking-widest text-ink/40 font-bold">Année de Fondation</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-2xl mb-2">Global</h4>
                <p className="text-xs uppercase tracking-widest text-ink/40 font-bold">Portée Opérationnelle</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="aspect-[4/5] bg-forest overflow-hidden shadow-2xl relative group">
              <img 
                src="https://picsum.photos/seed/legal-office/800/1000" 
                alt="Cabinet Robert Dossou Office" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-pearl border border-forest/5 p-8 hidden xl:block shadow-xl">
              <GlobeSVG className="w-full h-full text-forest opacity-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-pearl/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] bg-forest relative overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/robert-dossou/800/1000?grayscale" 
                alt="Maître Robert Dossou" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent opacity-40" />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold uppercase tracking-[4px] text-xs font-bold mb-6 block">{t.about.founder_title}</span>
            <h2 className="text-4xl md:text-6xl font-serif text-forest mb-6">{t.about.founder_subtitle}</h2>
            <p className="text-xl text-ink/80 leading-relaxed mb-12 font-light italic border-l-4 border-gold pl-8">
              {t.about.founder_text}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {t.about.founder_stats.map((stat, i) => (
                <div key={i}>
                  <span className="text-4xl font-serif text-gold block mb-2">{stat.value}</span>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-gold uppercase tracking-[4px] text-xs font-bold mb-6 block">{t.nav.heritage}</span>
            <h2 className="text-4xl md:text-6xl font-serif text-forest mb-8">{t.heritage.title}</h2>
            <p className="text-lg text-ink/70 leading-relaxed mb-10 font-light">
              {t.heritage.content}
            </p>
            <Link to="/heritage" className="inline-flex items-center gap-4 text-forest font-bold uppercase tracking-widest group">
              <span>{t.publications.viewAll}</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {t.heritage.events.slice(0, 4).map((event, i) => (
              <div key={i} className="p-8 border border-forest/5 bg-pearl/30">
                <span className="text-3xl font-serif text-gold block mb-4">{event.year}</span>
                <h4 className="font-bold text-sm uppercase mb-2">{event.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-pearl/50 border-y border-forest/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold uppercase tracking-[4px] text-xs font-bold mb-6 block">Valeurs Fondamentales</span>
            <h2 className="text-4xl md:text-6xl font-serif text-forest">L'Excellence comme Standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Intégrité Diplomatique', desc: 'Une éthique absolue dans le conseil aux États et la gestion des litiges internationaux.' },
              { title: 'Rigueur Juridique', desc: 'Une précision chirurgicale dans l\'analyse des textes et la défense des intérêts.' },
              { title: 'Vision Globale', desc: 'Une compréhension profonde des enjeux géopolitiques et économiques mondiaux.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-px h-16 bg-gold mx-auto mb-8" />
                <h4 className="text-xl font-serif text-forest mb-4">{value.title}</h4>
                <p className="text-sm text-ink/60 font-light leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const HeritagePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang].heritage;
  return (
    <div className="bg-pearl min-h-screen">
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
          <div className="sticky top-32 h-fit">
            <h3 className="text-3xl font-serif text-forest mb-8">L'Excellence par l'Histoire</h3>
            <p className="text-ink/60 leading-relaxed font-light">{t.content}</p>
          </div>
          <div className="space-y-24 relative">
            <div className="absolute left-0 top-0 w-px h-full bg-forest/10 ml-[7px]" />
            {t.events.map((event, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-4 h-4 bg-gold rounded-full z-10 border-4 border-pearl" />
                <span className="text-4xl font-serif text-gold block mb-4">{event.year}</span>
                <h4 className="text-2xl font-serif text-forest mb-4">{event.title}</h4>
                <p className="text-lg text-ink/70 font-light leading-relaxed max-w-2xl">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang].services;
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        {t.items.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -10 }}
            className="p-12 border border-forest/5 bg-pearl/20 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-1 bg-gold mb-8 group-hover:w-24 transition-all duration-500" />
              <h3 className="text-3xl font-serif text-forest mb-6">{item.title}</h3>
              <p className="text-lg text-ink/60 font-light leading-relaxed">{item.content}</p>
            </div>
            <Link to="/contact" className="mt-12 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gold">
              Demander une expertise <ArrowRight size={16} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ExpertisePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang].expertise;
  return (
    <div className="bg-pearl min-h-screen">
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="mb-32">
          <h3 className="text-center text-gold uppercase tracking-[6px] text-xs font-bold mb-16">{t.globalPresence}</h3>
          <div className="relative h-[400px] md:h-[600px] bg-forest rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
            <GlobeSVG className="absolute inset-0 w-full h-full opacity-20 scale-150" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 w-full px-12">
              {t.locations.map((loc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-4 h-4 bg-gold rounded-full mx-auto mb-6 shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
                  <h4 className="text-3xl font-serif text-white mb-2">{loc.city}</h4>
                  <p className="text-gold/60 text-sm uppercase tracking-widest">{loc.role}</p>
                </motion.div>
              ))}
            </div>
            {/* Animated connection lines (stylized) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <motion.path 
                d="M 200 300 Q 500 100 800 300" 
                stroke="#D4AF37" 
                strokeWidth="1" 
                fill="none" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.blocks.map((block, i) => (
            <div key={i} className="bg-white p-12 border border-forest/5 shadow-sm">
              <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-6">{block.title}</h4>
              <p className="text-ink/70 font-light leading-relaxed">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PublicationsPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang].publications;
  return (
    <div className="bg-white min-h-screen">
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="space-y-12">
          {t.items.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="group border-b border-forest/10 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1">{item.category}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">{item.date}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-forest group-hover:text-gold transition-colors mb-4">{item.title}</h3>
                <p className="text-sm text-ink/50 uppercase tracking-widest font-bold">Par {item.author}</p>
              </div>
              <button className="flex items-center gap-3 text-forest hover:text-gold transition-colors">
                <FileText size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">Lire le rapport</span>
                <ExternalLink size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;
  return (
    <div className="bg-pearl min-h-screen">
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24">
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-serif text-forest mb-8">{t.address}</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin className="text-gold shrink-0" size={24} />
                <p className="text-ink/70 font-light leading-relaxed">{t.location}</p>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="text-gold shrink-0" size={24} />
                <p className="text-ink/70 font-light leading-relaxed">{t.phone}</p>
              </div>
              <div className="flex items-start gap-6">
                <Mail className="text-gold shrink-0" size={24} />
                <p className="text-ink/70 font-light leading-relaxed">{t.email_addr}</p>
              </div>
            </div>
          </div>
          <div className="p-8 border border-gold/20 bg-gold/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Disponibilité</h4>
            <p className="text-sm text-forest/70 font-light italic">Le cabinet reçoit sur rendez-vous uniquement pour les consultations institutionnelles.</p>
          </div>
        </div>

        <form className="bg-white p-12 shadow-2xl space-y-10 border-t-4 border-gold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative group">
              <input type="text" placeholder=" " className="peer w-full bg-transparent border-b-2 border-forest/10 py-4 focus:border-gold outline-none transition-all placeholder-transparent" />
              <label className="absolute left-0 top-4 text-ink/30 text-xs uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold">
                {t.name}
              </label>
            </div>
            <div className="relative group">
              <input type="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-forest/10 py-4 focus:border-gold outline-none transition-all placeholder-transparent" />
              <label className="absolute left-0 top-4 text-ink/30 text-xs uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold">
                {t.email}
              </label>
            </div>
          </div>
          <div className="relative group">
            <input type="text" placeholder=" " className="peer w-full bg-transparent border-b-2 border-forest/10 py-4 focus:border-gold outline-none transition-all placeholder-transparent" />
            <label className="absolute left-0 top-4 text-ink/30 text-xs uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold">
              {t.subject}
            </label>
          </div>
          <div className="relative group">
            <textarea rows={4} placeholder=" " className="peer w-full bg-transparent border-b-2 border-forest/10 py-4 focus:border-gold outline-none transition-all placeholder-transparent resize-none" />
            <label className="absolute left-0 top-4 text-ink/30 text-xs uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold">
              {t.message}
            </label>
          </div>
          <button className="w-full bg-forest text-white py-6 uppercase tracking-[4px] text-sm font-bold hover:bg-gold transition-all duration-500 shadow-lg">
            {t.send}
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].nav;
  return (
    <footer className="bg-forest text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="font-serif text-3xl font-bold text-white uppercase mb-8 block">
            Robert <span className="text-gold">Dossou</span>
          </Link>
          <p className="text-white/50 font-light max-w-md leading-relaxed">
            Excellence juridique et autorité diplomatique au service des institutions et des États à travers le monde.
          </p>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-light text-white/70">
            <li><Link to="/heritage" className="hover:text-gold transition-colors">{t.heritage}</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">{t.services}</Link></li>
            <li><Link to="/expertise" className="hover:text-gold transition-colors">{t.expertise}</Link></li>
            <li><Link to="/publications" className="hover:text-gold transition-colors">{t.publications}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Contact</h4>
          <ul className="space-y-4 text-sm font-light text-white/70">
            <li>Cotonou, Bénin</li>
            <li>Paris, France</li>
            <li>Genève, Suisse</li>
            <li className="text-gold font-bold">contact@robertdossou.com</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-white/30 gap-4">
        <span>© 2024 Cabinet Robert DOSSOU. Tous droits réservés.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-gold transition-colors">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('FR');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-gold selection:text-white font-sans antialiased">
        <Navbar lang={lang} setLang={setLang} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/heritage" element={<HeritagePage lang={lang} />} />
            <Route path="/services" element={<ServicesPage lang={lang} />} />
            <Route path="/expertise" element={<ExpertisePage lang={lang} />} />
            <Route path="/publications" element={<PublicationsPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
          </Routes>
        </main>

        <Footer lang={lang} />
      </div>
    </Router>
  );
}
