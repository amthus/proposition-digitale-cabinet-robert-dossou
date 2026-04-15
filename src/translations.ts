export type Language = 'FR' | 'EN';

export const translations = {
  FR: {
    nav: {
      home: 'Accueil',
      heritage: 'Héritage',
      services: 'Services',
      expertise: 'Expertise',
      publications: 'Publications',
      contact: 'Contact',
    },
    hero: {
      title: 'Droit International. Arbitrage. Expertise Constitutionnelle.',
      subtitle: 'Le Cabinet Robert DOSSOU incarne l\'excellence juridique et la diplomatie au service des États et des institutions globales.',
      cta: 'Consultation Institutionnelle',
    },
    about: {
      firm_title: 'Le Cabinet',
      firm_text: 'Fondé en 1970, le Cabinet Robert DOSSOU est une institution juridique de premier plan, reconnue pour son expertise exceptionnelle en droit international, en arbitrage et en conseil stratégique aux États. Alliant tradition juridique et vision contemporaine, nous accompagnons nos clients dans la résolution de litiges complexes et la conduite de réformes institutionnelles majeures.',
      founder_title: 'Maître Robert DOSSOU',
      founder_subtitle: 'Une Figure d\'Autorité Internationale',
      founder_text: 'Ancien Président de la Cour Constitutionnelle du Bénin, ancien Doyen de la Faculté de Droit et figure centrale de la transition démocratique de 1990, Maître Robert DOSSOU est un juriste dont l\'autorité dépasse les frontières. Avocat et arbitre international, il a consacré sa carrière à la promotion de l\'État de droit et à la défense des intérêts souverains avec une rigueur intellectuelle inégalée.',
      founder_stats: [
        { label: 'Années d\'Expérience', value: '50+' },
        { label: 'Arbitrages Internationaux', value: '100+' },
        { label: 'Conseils aux États', value: '15+' }
      ]
    },
    heritage: {
      title: 'Parcours & Héritage',
      subtitle: 'Une autorité bâtie sur des décennies d\'engagement au plus haut niveau de l\'État et du droit international.',
      content: 'Depuis sa fondation, le Cabinet Robert DOSSOU s\'est imposé comme une institution de référence. Notre héritage est celui d\'une rigueur intellectuelle mise au service de la paix, de la démocratie et de la justice. Nous avons accompagné des transitions historiques et conseillé des chefs d\'État sur des questions de souveraineté cruciales.',
      events: [
        { year: '1970', title: 'Fondation', description: 'Création du cabinet à Cotonou, posant les bases d\'une rigueur juridique sans compromis.' },
        { year: '1990', title: 'Transition Démocratique', description: 'Rôle pivot dans la Conférence Nationale, modèle de transition pacifique en Afrique.' },
        { year: '2008', title: 'Cour Constitutionnelle', description: 'Présidence de la Cour Constitutionnelle, renforçant l\'autorité du droit.' },
        { year: '2015', title: 'Arbitrage Global', description: 'Expansion des activités d\'arbitrage international à Paris, Genève et La Haye.' },
        { year: '2024', title: 'Rayonnement', description: 'Conseil stratégique aux États et arbitrage de dossiers complexes à l\'échelle mondiale.' },
      ]
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Une expertise multidisciplinaire pour des enjeux globaux.',
      items: [
        {
          id: 'arbitrage',
          title: 'Arbitrage International',
          content: 'Représentation d\'États et de multinationales devant les tribunaux arbitraux (CCI, CIRDI). Expertise pointue dans les litiges d\'investissement et commerciaux complexes.'
        },
        {
          id: 'constitutional',
          title: 'Droit Constitutionnel',
          content: 'Conseil de haut niveau sur les réformes institutionnelles, la rédaction de textes fondamentaux et le contentieux constitutionnel.'
        },
        {
          id: 'state-counsel',
          title: 'Conseil aux États & Institutions',
          content: 'Accompagnement stratégique des gouvernements dans leurs relations internationales, négociations de traités et restructurations juridiques.'
        },
        {
          id: 'investment',
          title: 'Arbitrage d\'Investissement',
          content: 'Protection des investissements étrangers et résolution de litiges entre investisseurs privés et entités étatiques.'
        }
      ]
    },
    expertise: {
      title: 'Expertise Internationale',
      subtitle: 'Une présence diplomatique et juridique sur tous les continents.',
      globalPresence: 'Présence Mondiale',
      locations: [
        { city: 'Cotonou', role: 'Siège Historique & Conseil aux États' },
        { city: 'Paris', role: 'Pôle Arbitrage & Droit International' },
        { city: 'Genève', role: 'Arbitrage & Diplomatie Multilatérale' }
      ],
      blocks: [
        { title: 'Neutralité', description: 'Une approche rigoureuse et impartiale héritée de la tradition juridique suisse.' },
        { title: 'Réseau Global', description: 'Partenariats stratégiques avec les plus grands cabinets d\'arbitrage mondiaux.' },
        { title: 'Autorité', description: 'Une voix écoutée dans les instances internationales et les cercles diplomatiques.' }
      ]
    },
    publications: {
      title: 'Publications & Insights',
      subtitle: 'Analyses juridiques et rapports institutionnels sur les enjeux contemporains.',
      viewAll: 'Voir toutes les publications',
      items: [
        {
          date: 'Mars 2024',
          category: 'Arbitrage',
          title: 'L\'évolution des clauses d\'arbitrage dans les traités bilatéraux d\'investissement.',
          author: 'Robert Dossou'
        },
        {
          date: 'Janvier 2024',
          category: 'Droit Constitutionnel',
          title: 'Stabilité institutionnelle et réformes constitutionnelles en Afrique de l\'Ouest.',
          author: 'Équipe de recherche'
        },
        {
          date: 'Novembre 2023',
          category: 'Conseil aux États',
          title: 'Souveraineté numérique et droit international : Nouveaux défis pour les États.',
          author: 'Robert Dossou'
        }
      ]
    },
    contact: {
      title: 'Contact Diplomatique',
      subtitle: 'Pour toute consultation institutionnelle ou demande d\'expertise.',
      name: 'Nom complet',
      email: 'Email institutionnel',
      subject: 'Objet de votre demande',
      message: 'Message',
      send: 'Envoyer la demande',
      address: 'Siège International',
      location: 'Cotonou, Bénin | Paris, France | Genève, Suisse',
      phone: '+229 21 31 XX XX',
      email_addr: 'contact@robertdossou.com'
    }
  },
  EN: {
    nav: {
      home: 'Home',
      heritage: 'Heritage',
      services: 'Services',
      expertise: 'Expertise',
      publications: 'Publications',
      contact: 'Contact',
    },
    hero: {
      title: 'International Law. Arbitration. Constitutional Expertise.',
      subtitle: 'Cabinet Robert DOSSOU embodies legal excellence and diplomacy serving States and global institutions.',
      cta: 'Institutional Consultation',
    },
    about: {
      firm_title: 'The Firm',
      firm_text: 'Founded in 1970, Cabinet Robert DOSSOU is a leading legal institution, recognized for its exceptional expertise in international law, arbitration, and strategic counsel to States. Combining legal tradition with a contemporary vision, we support our clients in resolving complex disputes and conducting major institutional reforms.',
      founder_title: 'Maître Robert DOSSOU',
      founder_subtitle: 'An International Figure of Authority',
      founder_text: 'Former President of the Constitutional Court of Benin, former Dean of the Faculty of Law, and a central figure in the 1990 democratic transition, Maître Robert DOSSOU is a jurist whose authority transcends borders. As an international lawyer and arbitrator, he has dedicated his career to promoting the rule of law and defending sovereign interests with unparalleled intellectual rigor.',
      founder_stats: [
        { label: 'Years of Experience', value: '50+' },
        { label: 'International Arbitrations', value: '100+' },
        { label: 'Counsel to States', value: '15+' }
      ]
    },
    heritage: {
      title: 'Journey & Heritage',
      subtitle: 'Authority built on decades of high-level commitment to the State and international law.',
      content: 'Since its foundation, Cabinet Robert DOSSOU has established itself as a reference institution. Our heritage is one of intellectual rigor put at the service of peace, democracy, and justice. We have accompanied historical transitions and advised heads of state on crucial sovereignty issues.',
      events: [
        { year: '1970', title: 'Foundation', description: 'Establishment of the firm in Cotonou, laying the foundations of uncompromising legal rigor.' },
        { year: '1990', title: 'Democratic Transition', description: 'Pivotal role in the National Conference, a model for peaceful transition in Africa.' },
        { year: '2008', title: 'Constitutional Court', description: 'Presidency of the Constitutional Court, strengthening the rule of law.' },
        { year: '2015', title: 'Global Arbitration', description: 'Expansion of international arbitration activities in Paris, Geneva, and The Hague.' },
        { year: '2024', title: 'Global Reach', description: 'Strategic counsel to States and arbitration of complex cases on a global scale.' },
      ]
    },
    services: {
      title: 'Our Services',
      subtitle: 'Multidisciplinary expertise for global challenges.',
      items: [
        {
          id: 'arbitrage',
          title: 'International Arbitration',
          content: 'Representation of States and multinationals before arbitral tribunals (ICC, ICSID). Specialized expertise in complex investment and commercial disputes.'
        },
        {
          id: 'constitutional',
          title: 'Constitutional Law',
          content: 'High-level advice on institutional reforms, drafting of fundamental texts, and constitutional litigation.'
        },
        {
          id: 'state-counsel',
          title: 'Counsel to States & Institutions',
          content: 'Strategic support for governments in their international relations, treaty negotiations, and legal restructurings.'
        },
        {
          id: 'investment',
          title: 'Investment Arbitration',
          content: 'Protection of foreign investments and resolution of disputes between private investors and state entities.'
        }
      ]
    },
    expertise: {
      title: 'International Expertise',
      subtitle: 'A diplomatic and legal presence across all continents.',
      globalPresence: 'Global Presence',
      locations: [
        { city: 'Cotonou', role: 'Historical Headquarters & State Counsel' },
        { city: 'Paris', role: 'Arbitration & International Law Hub' },
        { city: 'Geneva', role: 'Arbitration & Multilateral Diplomacy' }
      ],
      blocks: [
        { title: 'Neutrality', description: 'A rigorous and impartial approach inherited from the Swiss legal tradition.' },
        { title: 'Global Network', description: 'Strategic partnerships with the world\'s leading arbitration firms.' },
        { title: 'Authority', description: 'A respected voice in international bodies and diplomatic circles.' }
      ]
    },
    publications: {
      title: 'Publications & Insights',
      subtitle: 'Legal analyses and institutional reports on contemporary issues.',
      viewAll: 'View all publications',
      items: [
        {
          date: 'March 2024',
          category: 'Arbitration',
          title: 'The evolution of arbitration clauses in bilateral investment treaties.',
          author: 'Robert Dossou'
        },
        {
          date: 'January 2024',
          category: 'Constitutional Law',
          title: 'Institutional stability and constitutional reforms in West Africa.',
          author: 'Research Team'
        },
        {
          date: 'November 2023',
          category: 'State Counsel',
          title: 'Digital sovereignty and international law: New challenges for States.',
          author: 'Robert Dossou'
        }
      ]
    },
    contact: {
      title: 'Diplomatic Contact',
      subtitle: 'For any institutional consultation or expertise request.',
      name: 'Full Name',
      email: 'Institutional Email',
      subject: 'Subject of your request',
      message: 'Message',
      send: 'Send Request',
      address: 'International Headquarters',
      location: 'Cotonou, Benin | Paris, France | Geneva, Switzerland',
      phone: '+229 21 31 XX XX',
      email_addr: 'contact@robertdossou.com'
    }
  }
};

