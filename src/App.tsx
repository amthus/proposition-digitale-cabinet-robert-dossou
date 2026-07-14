/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ChevronDown, ArrowRight, Menu, X, Mail, MapPin, Phone, Globe2, FileText, ExternalLink } from 'lucide-react';
import { translations, Language } from './lang/translations';

// --- Shared Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SEO = ({ title, description }: { title: string, description: string }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

const SkeletonLoader = ({ type = 'text' }: { type?: 'header' | 'text' | 'cards' | 'map' | 'timeline' | 'contact' }) => {
  if (type === 'header') {
    return (
      <div className="bg-forest py-24 px-6 md:px-12 relative overflow-hidden animate-pulse">
        <div className="max-w-4xl space-y-4 relative z-10">
          <div className="h-16 bg-white/10 w-2/3 rounded-sm" />
          <div className="h-6 bg-white/5 w-1/2 rounded-sm" />
        </div>
      </div>
    );
  }

  if (type === 'cards') {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-12 border border-forest/10 bg-pearl/20 space-y-8">
            <div className="w-12 h-1 bg-gold/20" />
            <div className="h-10 bg-forest/10 w-3/4 rounded-sm" />
            <div className="space-y-3">
              <div className="h-4 bg-forest/5 w-full rounded-sm" />
              <div className="h-4 bg-forest/5 w-11/12 rounded-sm" />
              <div className="h-4 bg-forest/5 w-2/3 rounded-sm" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'map') {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 animate-pulse space-y-16">
        <div className="space-y-4 text-center">
          <div className="h-4 bg-forest/10 w-48 mx-auto rounded-sm" />
          <div className="h-10 bg-forest/10 w-96 mx-auto rounded-sm" />
        </div>
        <div className="h-[450px] md:h-[600px] bg-forest/5 rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-12 bg-white border border-forest/10 space-y-4">
              <div className="h-4 bg-gold/20 w-1/3 rounded-sm" />
              <div className="h-16 bg-forest/5 w-full rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'timeline') {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 animate-pulse grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
        <div className="space-y-6">
          <div className="h-8 bg-forest/10 w-2/3 rounded-sm" />
          <div className="h-24 bg-forest/5 w-full rounded-sm" />
        </div>
        <div className="space-y-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="pl-12 relative space-y-4">
              <div className="absolute left-0 top-2 w-4 h-4 bg-forest/20 rounded-full" />
              <div className="h-8 bg-gold/20 w-1/4 rounded-sm" />
              <div className="h-6 bg-forest/10 w-1/2 rounded-sm" />
              <div className="h-16 bg-forest/5 w-full rounded-sm" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'contact') {
    return (
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 animate-pulse grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-24">
        <div className="space-y-12">
          <div className="h-8 bg-forest/10 w-1/2 rounded-sm" />
          <div className="space-y-6">
            <div className="h-12 bg-forest/5 w-full rounded-sm" />
            <div className="h-12 bg-forest/5 w-full rounded-sm" />
            <div className="h-12 bg-forest/5 w-full rounded-sm" />
          </div>
        </div>
        <div className="bg-white p-12 border border-forest/10 space-y-8">
          <div className="grid grid-cols-2 gap-10">
            <div className="h-12 bg-forest/5 w-full rounded-sm" />
            <div className="h-12 bg-forest/5 w-full rounded-sm" />
          </div>
          <div className="h-12 bg-forest/5 w-full rounded-sm" />
          <div className="h-32 bg-forest/5 w-full rounded-sm" />
          <div className="h-16 bg-forest/10 w-full rounded-sm" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 animate-pulse space-y-12">
      <div className="space-y-4">
        <div className="h-10 bg-forest/10 w-1/3 rounded-sm" />
        <div className="h-4 bg-forest/5 w-1/4 rounded-sm" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-b border-forest/10 pb-12 space-y-4">
            <div className="h-8 bg-forest/10 w-2/3 rounded-sm" />
            <div className="h-4 bg-forest/5 w-full rounded-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

const LiveClock = ({ offset }: { offset: number }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      const nd = new Date(utc + (3600000 * offset));
      const hours = String(nd.getHours()).padStart(2, '0');
      const minutes = String(nd.getMinutes()).padStart(2, '0');
      const seconds = String(nd.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [offset]);

  return <span className="font-mono text-xs text-gold font-semibold bg-gold/10 px-2.5 py-1 tracking-wider">{time}</span>;
};

const officeDetails = {
  FR: [
    {
      city: 'Cotonou',
      role: 'Siège Historique & Conseil aux États',
      address: 'Zone Résidentielle, Lot 142, Cotonou, Bénin',
      phone: '+229 21 31 15 15',
      email: 'cotonou@robertdossou.com',
      specialty: 'Droit constitutionnel, contentieux étatique africain, arbitrage régional (OHADA), réformes législatives.',
      timezone: 'Afrique de l\'Ouest (UTC+1)',
      gmtOffset: 1,
    },
    {
      city: 'Paris',
      role: 'Pôle Arbitrage & Droit International',
      address: '12 Rue de la Paix, 75002 Paris, France',
      phone: '+33 1 42 61 20 20',
      email: 'paris@robertdossou.com',
      specialty: 'Arbitrage international d\'investissement, contrats commerciaux internationaux, droit de l\'OMC.',
      timezone: 'Europe Centrale (UTC+1 / UTC+2)',
      gmtOffset: 2,
    },
    {
      city: 'Genève',
      role: 'Arbitrage & Diplomatie Multilatérale',
      address: 'Rue du Rhône 42, 1204 Genève, Suisse',
      phone: '+41 22 310 40 40',
      email: 'geneve@robertdossou.com',
      specialty: 'Médiation internationale, droits de l\'homme, propriété intellectuelle internationale, contentieux multilatéral.',
      timezone: 'Europe Centrale (UTC+1 / UTC+2)',
      gmtOffset: 2,
    }
  ],
  EN: [
    {
      city: 'Cotonou',
      role: 'Historical Headquarters & State Counsel',
      address: 'Residential Zone, Lot 142, Cotonou, Benin',
      phone: '+229 21 31 15 15',
      email: 'cotonou@robertdossou.com',
      specialty: 'Constitutional law, African state litigation, regional arbitration (OHADA), legislative reforms.',
      timezone: 'West Africa Time (UTC+1)',
      gmtOffset: 1,
    },
    {
      city: 'Paris',
      role: 'Arbitration & International Law Hub',
      address: '12 Rue de la Paix, 75002 Paris, France',
      phone: '+33 1 42 61 20 20',
      email: 'paris@robertdossou.com',
      specialty: 'International investment arbitration, international commercial contracts, WTO law.',
      timezone: 'Central European Time (UTC+1 / UTC+2)',
      gmtOffset: 2,
    },
    {
      city: 'Geneva',
      role: 'Arbitration & Multilateral Diplomacy',
      address: 'Rue du Rhône 42, 1204 Geneva, Switzerland',
      phone: '+41 22 310 40 40',
      email: 'geneve@robertdossou.com',
      specialty: 'International mediation, human rights, international intellectual property, multilateral litigation.',
      timezone: 'Central European Time (UTC+1 / UTC+2)',
      gmtOffset: 2,
    }
  ]
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
        <span className="hidden sm:inline">Robert <span className="text-gold">Dossou</span></span>
        <span className="inline sm:hidden">D. <span className="text-gold">Robert</span></span>
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
              <span className="font-serif text-2xl font-bold text-forest uppercase">
                <span className="hidden sm:inline">Robert <span className="text-gold">Dossou</span></span>
                <span className="inline sm:hidden">D. <span className="text-gold">Robert</span></span>
              </span>
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [lang]);

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <SEO title={t.seo.home.title} description={t.seo.home.description} />
        <SkeletonLoader type="header" />
        <SkeletonLoader type="text" />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <SEO title={t.seo.home.title} description={t.seo.home.description} />
      <section className="bg-forest text-white min-h-[85vh] flex flex-col justify-center items-center p-6 md:p-24 relative overflow-hidden">
        <GlobeSVG className="absolute -right-24 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10" />
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.2] mb-8 text-center"
          >
            {t.hero.title.split('. ').map((part, i) => (
              <span key={i} className="block">{part}.</span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-gold/90 font-light max-w-xl mb-12 leading-relaxed text-center"
          >
            {t.hero.subtitle}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-8 py-4 bg-gold text-forest font-bold uppercase text-xs tracking-[3px] hover:bg-white transition-all shadow-lg">
              {t.hero.cta}
            </Link>
            <Link to="/services" className="px-8 py-4 border border-gold text-gold font-bold uppercase text-xs tracking-[3px] hover:bg-gold hover:text-forest transition-all">
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
            <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-12">
              {t.about.founder_stats.map((stat, i) => (
                <div key={i} className="min-w-0">
                  <span className="text-2xl min-[380px]:text-3xl sm:text-4xl font-serif text-gold block mb-1 sm:mb-2">{stat.value}</span>
                  <p className="text-[8px] min-[380px]:text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-ink/40 font-bold leading-tight break-words">{stat.label}</p>
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
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            {t.heritage.events.slice(0, 4).map((event, i) => (
              <div key={i} className="p-4 sm:p-6 lg:p-8 border border-forest/5 bg-pearl/30 flex flex-col justify-center min-h-[140px] sm:min-h-0">
                <span className="text-2xl sm:text-3xl font-serif text-gold block mb-2 sm:mb-4">{event.year}</span>
                <h4 className="font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-2 leading-tight break-words">
                  {event.title}
                </h4>
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

      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold uppercase tracking-[4px] text-xs font-bold mb-6 block">
              {t.testimonials.title}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-forest">
              {t.testimonials.subtitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-pearl/30 p-10 border border-forest/5 flex flex-col justify-between hover:border-gold/30 transition-colors"
              >
                <div>
                  <span className="text-gold font-serif text-6xl block leading-none mb-4">“</span>
                  <p className="text-base text-forest italic font-light leading-relaxed mb-8">
                    {item.quote}
                  </p>
                </div>
                <div className="border-t border-forest/10 pt-6">
                  <h4 className="font-serif text-lg text-forest font-semibold">{item.author}</h4>
                  <p className="text-[11px] uppercase tracking-wider text-gold font-medium mt-1">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const HeritagePage = ({ lang }: { lang: Language }) => {
  const t = translations[lang].heritage;
  const seo = translations[lang].seo.heritage;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [lang]);

  if (isLoading) {
    return (
      <div className="bg-pearl min-h-screen">
        <SEO title={seo.title} description={seo.description} />
        <SkeletonLoader type="header" />
        <SkeletonLoader type="timeline" />
      </div>
    );
  }

  return (
    <div className="bg-pearl min-h-screen">
      <SEO title={seo.title} description={seo.description} />
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
          <div className="lg:sticky lg:top-32 h-fit">
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
  const seo = translations[lang].seo.services;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [lang]);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <SEO title={seo.title} description={seo.description} />
        <SkeletonLoader type="header" />
        <SkeletonLoader type="cards" />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO title={seo.title} description={seo.description} />
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
  const seo = translations[lang].seo.expertise;
  const [isLoading, setIsLoading] = useState(true);
  const [activeLoc, setActiveLoc] = useState<number>(0);
  const details = officeDetails[lang];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [lang]);

  if (isLoading) {
    return (
      <div className="bg-pearl min-h-screen">
        <SEO title={seo.title} description={seo.description} />
        <SkeletonLoader type="header" />
        <SkeletonLoader type="map" />
      </div>
    );
  }

  const mapPins = [
    { city: 'Cotonou', x: 48, y: 72 }, 
    { city: 'Paris', x: 45, y: 34 },   
    { city: 'Geneva', x: 52, y: 38 }   
  ];

  return (
    <div className="bg-pearl min-h-screen">
      <SEO title={seo.title} description={seo.description} />
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="mb-24">
          <h3 className="text-center text-gold uppercase tracking-[6px] text-xs font-bold mb-16">{t.globalPresence}</h3>
          
          <div className="relative h-[450px] md:h-[600px] bg-forest rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
              {Array.from({ length: 144 }).map((_, idx) => (
                <div key={idx} className="border-[0.5px] border-white/30" />
              ))}
            </div>
            
            <svg className="absolute inset-0 w-full h-full text-white/5 pointer-events-none" viewBox="0 0 800 500" preserveAspectRatio="none">
              <path d="M 100 0 Q 200 250 100 500 M 200 0 Q 300 250 200 500 M 300 0 Q 400 250 300 500 M 400 0 Q 500 250 400 500 M 500 0 Q 600 250 500 500 M 600 0 Q 700 250 600 500 M 700 0 Q 800 250 700 500" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="0" y1="200" x2="800" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="0" y1="300" x2="800" y2="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="0" y1="400" x2="800" y2="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path 
                d="M 48 72 Q 43 53 45 34" 
                stroke="#D4AF37" 
                strokeWidth="0.4" 
                fill="none" 
                className="opacity-40"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              />
              <motion.path 
                d="M 48 72 Q 53 55 52 38" 
                stroke="#D4AF37" 
                strokeWidth="0.4" 
                fill="none" 
                className="opacity-40"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse' }}
              />
              <motion.path 
                d="M 45 34 Q 48.5 33 52 38" 
                stroke="#D4AF37" 
                strokeWidth="0.4" 
                fill="none" 
                className="opacity-40"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              />
            </svg>

            {mapPins.map((pin, idx) => {
              const isActive = activeLoc === idx;
              return (
                <div 
                  key={idx}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <div className={`absolute -inset-4 rounded-full transition-all duration-500 ${isActive ? 'bg-gold/25 scale-125' : 'bg-transparent group-hover:bg-gold/10'}`} />
                  
                  <div className="relative cursor-pointer" onClick={() => setActiveLoc(idx)}>
                    <span className={`absolute inline-flex h-4 w-4 rounded-full bg-gold opacity-75 animate-ping ${isActive ? 'block' : 'hidden'}`} />
                    <div className={`w-4 h-4 rounded-full border-2 border-forest transition-all duration-300 ${isActive ? 'bg-gold scale-125 shadow-[0_0_15px_#D4AF37]' : 'bg-white group-hover:bg-gold'}`} />
                  </div>

                  <div className={`absolute left-6 top-1/2 -translate-y-1/2 bg-white text-forest px-3 py-1.5 shadow-xl border border-gold/20 whitespace-nowrap transition-all duration-300 pointer-events-none ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                    <p className="font-serif text-xs font-bold uppercase tracking-wider">{pin.city}</p>
                  </div>
                </div>
              );
            })}
            
            <div className="absolute bottom-6 left-6 bg-forest/80 backdrop-blur-sm border border-white/10 p-4 text-white z-10 hidden sm:block">
              <span className="text-gold uppercase tracking-[3px] text-[9px] font-bold block mb-2">{t.globalPresence}</span>
              <div className="space-y-1.5">
                {mapPins.map((pin, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveLoc(idx)}
                    className={`flex items-center gap-2 text-xs text-left w-full hover:text-gold transition-colors ${activeLoc === idx ? 'text-gold font-bold' : 'text-white/60'}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeLoc === idx ? 'bg-gold' : 'bg-white/40'}`} />
                    {pin.city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mt-12">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeLoc}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-12 border border-forest/5 shadow-md relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none" />
                <div>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-8 pb-6 border-b border-forest/10">
                    <div>
                      <span className="text-gold uppercase tracking-[4px] text-xs font-bold block mb-2">{details[activeLoc].role}</span>
                      <h4 className="text-4xl font-serif text-forest">{details[activeLoc].city}</h4>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="text-[10px] uppercase tracking-wider text-ink/40 font-bold">Heure Locale</span>
                      <LiveClock offset={details[activeLoc].gmtOffset} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold block mb-2">Adresse de l'office</span>
                        <p className="text-base text-forest font-light leading-relaxed">{details[activeLoc].address}</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold block mb-2">Liaison de contact</span>
                        <p className="text-base text-forest font-light mb-1">{details[activeLoc].phone}</p>
                        <a href={`mailto:${details[activeLoc].email}`} className="text-gold text-sm hover:underline font-medium">{details[activeLoc].email}</a>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold block mb-2">Expertise de l'office</span>
                      <p className="text-base text-forest/80 font-light leading-relaxed italic">{details[activeLoc].specialty}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col gap-4">
              {details.map((loc, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveLoc(idx)}
                  className={`p-6 border text-left transition-all duration-300 flex justify-between items-center group relative overflow-hidden h-full min-h-[100px] ${activeLoc === idx ? 'bg-forest text-white border-forest shadow-lg' : 'bg-white hover:bg-pearl/50 border-forest/10 text-forest'}`}
                >
                  <div className="min-w-0 pr-4">
                    <h5 className={`font-serif text-xl mb-1 ${activeLoc === idx ? 'text-white' : 'text-forest'}`}>{loc.city}</h5>
                    <p className={`text-xs truncate uppercase tracking-wider ${activeLoc === idx ? 'text-gold/80' : 'text-ink/50'}`}>{loc.role}</p>
                  </div>
                  <ArrowRight size={18} className={`shrink-0 transition-transform duration-300 ${activeLoc === idx ? 'text-gold translate-x-0' : 'text-forest/30 group-hover:translate-x-1 group-hover:text-forest'}`} />
                </button>
              ))}
            </div>
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
  const seo = translations[lang].seo.publications;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [lang]);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <SEO title={seo.title} description={seo.description} />
        <SkeletonLoader type="header" />
        <SkeletonLoader type="text" />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO title={seo.title} description={seo.description} />
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
  const seo = translations[lang].seo.contact;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [lang]);

  if (isLoading) {
    return (
      <div className="bg-pearl min-h-screen">
        <SEO title={seo.title} description={seo.description} />
        <SkeletonLoader type="header" />
        <SkeletonLoader type="contact" />
      </div>
    );
  }

  return (
    <div className="bg-pearl min-h-screen">
      <SEO title={seo.title} description={seo.description} />
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
  const n = translations[lang].newsletter;
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-forest text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <Link to="/" className="font-serif text-3xl font-bold text-white uppercase mb-8 block">
              <span className="hidden sm:inline">Robert <span className="text-gold">Dossou</span></span>
              <span className="inline sm:hidden">D. <span className="text-gold">Robert</span></span>
            </Link>
            <p className="text-white/50 font-light max-w-md leading-relaxed">
              Excellence juridique et autorité diplomatique au service des institutions et des États à travers le monde.
            </p>
          </div>

          <div className="mt-8 max-w-md">
            <h5 className="text-[10px] font-bold uppercase tracking-[3px] text-gold mb-3">
              {n.title}
            </h5>
            <form onSubmit={handleSubscribe} className="flex bg-white text-forest focus-within:ring-2 focus-within:ring-gold transition-all duration-300">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={n.placeholder} 
                className="bg-white text-forest text-sm px-4 py-3 w-full focus:outline-none placeholder-forest/40 font-light"
              />
              <button 
                type="submit" 
                className="bg-forest text-gold hover:bg-gold hover:text-forest uppercase text-[10px] font-bold tracking-widest px-6 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                {n.button}
                <ArrowRight size={12} className="shrink-0" />
              </button>
            </form>
            <AnimatePresence>
              {isSubscribed && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-gold font-light mt-2"
                >
                  {n.success}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8 min-w-0">
          <div>
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li><Link to="/heritage" className="hover:text-gold transition-colors">{t.heritage}</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">{t.services}</Link></li>
              <li><Link to="/expertise" className="hover:text-gold transition-colors">{t.expertise}</Link></li>
              <li><Link to="/publications" className="hover:text-gold transition-colors">{t.publications}</Link></li>
            </ul>
          </div>
          <div className="min-w-0">
            <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-8">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li>Cotonou, Bénin</li>
              <li>Paris, France</li>
              <li>Genève, Suisse</li>
              <li className="min-w-0">
                <Link 
                  to="/contact" 
                  className="text-gold font-bold hover:text-white transition-colors block truncate max-w-full"
                  title="contact@robertdossou.com"
                >
                  contact@robertdossou.com
                </Link>
              </li>
            </ul>
          </div>
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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}
