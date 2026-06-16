import type { Locale, RouteKey } from './config';

export const siteName = 'WaterLili Workshops';

export const navLabels: Record<Locale, Record<RouteKey, string>> = {
  en: {
    home: 'Home',
    ericeira: 'Ericeira',
    santaCruz: 'Santa Cruz',
    atHome: 'At home',
    blog: 'Blog',
  },
  fr: {
    home: 'Accueil',
    ericeira: 'Ericeira',
    santaCruz: 'Santa Cruz',
    atHome: 'À domicile',
    blog: 'Blog',
  },
  pt: {
    home: 'Início',
    ericeira: 'Ericeira',
    santaCruz: 'Santa Cruz',
    atHome: 'Em casa',
    blog: 'Blog',
  },
};

export const sharedText: Record<
  Locale,
  {
    bookCta: string;
    contactCta: string;
    readMore: string;
    latestPosts: string;
    allWorkshops: string;
    practicalInfo: string;
    highlights: string;
    language: string;
    workshopDetails: string;
  }
> = {
  en: {
    bookCta: 'Book',
    contactCta: 'Contact me',
    readMore: 'Read more',
    latestPosts: 'Latest journal notes',
    allWorkshops: 'Explore the workshops',
    practicalInfo: 'Practical details',
    highlights: 'What to expect',
    language: 'Language',
    workshopDetails: 'Details',
  },
  fr: {
    bookCta: 'Organiser un atelier',
    contactCta: 'Me contacter',
    readMore: 'Lire la suite',
    latestPosts: 'Derniers articles',
    allWorkshops: 'Découvrir les ateliers',
    practicalInfo: 'Informations pratiques',
    highlights: "À quoi s'attendre",
    language: 'Langue',
    workshopDetails: "Voir l'atelier",
  },
  pt: {
    bookCta: 'Planear um workshop',
    contactCta: 'Contactar',
    readMore: 'Ler mais',
    latestPosts: 'Últimos artigos',
    allWorkshops: 'Explorar workshops',
    practicalInfo: 'Detalhes práticos',
    highlights: 'O que esperar',
    language: 'Idioma',
    workshopDetails: 'Ver workshop',
  },
};

export const homeContent: Record<
  Locale,
  {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    intro: string;
    note: string;
    blogIntro: string;
  }
> = {
  en: {
    seoTitle: 'Creative workshops in Ericeira, Santa Cruz and at home',
    seoDescription:
      'Creative workshops for locals, travelers, families, and private groups in Ericeira, Santa Cruz, and at home in Portugal.',
    eyebrow: 'Creative workshops by the coast',
    title: 'Slow, joyful workshops for curious hands.',
    intro:
      'WaterLili Workshops brings creative moments to Ericeira, Santa Cruz, and private homes. Each session is designed to feel relaxed, generous, and easy to join.',
    note: 'Choose a location-based event or invite the workshop to your home for birthdays, holidays, family gatherings, and small group celebrations.',
    blogIntro:
      'The blog supports local SEO while sharing useful ideas for creative activities, seasonal inspiration, and things to do around the west coast of Portugal.',
  },
  fr: {
    seoTitle: 'Ateliers créatifs à Ericeira, Santa Cruz et à domicile',
    seoDescription:
      'Ateliers créatifs pour habitants, voyageurs, familles et groupes privés à Ericeira, Santa Cruz et à domicile au Portugal.',
    eyebrow: "Ateliers créatifs au bord de l'océan",
    title: 'Des ateliers doux et joyeux pour les mains curieuses.',
    intro:
      'WaterLili Workshops propose des moments créatifs à Ericeira, Santa Cruz et chez vous. Chaque atelier est pensé pour être simple, chaleureux et accessible.',
    note: "Choisissez un événement local ou invitez l'atelier chez vous pour un anniversaire, des vacances, une réunion de famille ou un petit groupe.",
    blogIntro:
      "Le blog aide le référencement local tout en partageant des idées d'activités créatives, des inspirations saisonnières et des choses à faire sur la côte ouest du Portugal.",
  },
  pt: {
    seoTitle: 'Workshops criativos na Ericeira, Santa Cruz e em casa',
    seoDescription:
      'Workshops criativos para locais, viajantes, famílias e grupos privados na Ericeira, Santa Cruz e em casa em Portugal.',
    eyebrow: 'Workshops criativos junto ao mar',
    title: 'Workshops tranquilos e alegres para mãos curiosas.',
    intro:
      'WaterLili Workshops leva momentos criativos à Ericeira, Santa Cruz e a casas particulares. Cada sessão é pensada para ser acolhedora, simples e fácil de participar.',
    note: 'Escolha um evento local ou convide o workshop para sua casa em aniversários, férias, encontros de família e pequenas celebrações.',
    blogIntro:
      'O blog apoia o SEO local enquanto partilha ideias de atividades criativas, inspiração sazonal e sugestões do que fazer na costa oeste de Portugal.',
  },
};

export const nextWorkshopContent: Record<
  Locale,
  {
    label: string;
    title: string;
    dateLabel: string;
    date: string;
    locationLabel: string;
    location: string;
    description: string;
    cta: string;
  }
> = {
  en: {
    label: 'Next workshop',
    title: 'Summer creative table',
    dateLabel: 'Date',
    date: 'Next date to be announced',
    locationLabel: 'Location',
    location: 'Ericeira or Santa Cruz',
    description:
      'A relaxed small-group session with tactile materials, gentle guidance, and time to make something personal.',
    cta: 'Ask for the next date',
  },
  fr: {
    label: 'Prochain atelier',
    title: "Table créative d'été",
    dateLabel: 'Date',
    date: 'Prochaine date à annoncer',
    locationLabel: 'Lieu',
    location: 'Ericeira ou Santa Cruz',
    description:
      'Une session en petit groupe avec des matières tactiles, un accompagnement doux et le temps de créer quelque chose de personnel.',
    cta: 'Demander la prochaine date',
  },
  pt: {
    label: 'Próximo workshop',
    title: 'Mesa criativa de verão',
    dateLabel: 'Data',
    date: 'Próxima data a anunciar',
    locationLabel: 'Local',
    location: 'Ericeira ou Santa Cruz',
    description:
      'Uma sessão descontraída em pequeno grupo com materiais táteis, orientação suave e tempo para criar algo pessoal.',
    cta: 'Perguntar a próxima data',
  },
};

export const workshopContent: Record<
  Exclude<RouteKey, 'home' | 'blog'>,
  Record<
    Locale,
    {
      seoTitle: string;
      seoDescription: string;
      eyebrow: string;
      title: string;
      intro: string;
      accent: 'pink' | 'green' | 'yellow' | 'orange' | 'blue';
      highlights: string[];
      practical: string[];
    }
  >
> = {
  ericeira: {
    en: {
      seoTitle: 'Creative workshops in Ericeira',
      seoDescription:
        'Relaxed creative workshops in Ericeira for travelers, families, groups, and locals looking for a hands-on coastal activity.',
      eyebrow: 'Ericeira workshops',
      title: 'A creative pause between surf session and village life.',
      intro:
        'Join a small-group workshop in Ericeira to connect with your creativity in a welcoming atmosphere.',
      accent: 'pink',
      highlights: [
        'Small groups',
        'Beginner-friendly guidance',
        'Seasonal creative themes',
      ],
      practical: [
        'Location: Ericeira',
        'Languages: English, French, Portuguese',
        'Format: public events or private groups',
      ],
    },
    fr: {
      seoTitle: 'Ateliers créatifs à Ericeira',
      seoDescription:
        "Ateliers créatifs à Ericeira pour voyageurs, familles, groupes et habitants qui cherchent une activité manuelle au bord de l'océan.",
      eyebrow: 'Ateliers à Ericeira',
      title: "Une pause créative entre l'océan et la vie du village.",
      intro:
        'Participez à un atelier en petit groupe à Ericeira, avec un rythme doux, des matières tactiles et une ambiance accueillante.',
      accent: 'blue',
      highlights: [
        'Petits groupes',
        'Accessible aux débutants',
        'Thèmes créatifs de saison',
      ],
      practical: [
        'Lieu : Ericeira',
        'Langues : anglais, français, portugais',
        'Format : événements publics ou groupes privés',
      ],
    },
    pt: {
      seoTitle: 'Workshops criativos na Ericeira',
      seoDescription:
        'Workshops criativos na Ericeira para viajantes, famílias, grupos e locais à procura de uma atividade manual junto ao mar.',
      eyebrow: 'Workshops na Ericeira',
      title: 'Uma pausa criativa entre o oceano e a vida da vila.',
      intro:
        'Participe num workshop em pequeno grupo na Ericeira, com ritmo calmo, materiais táteis e uma atmosfera acolhedora.',
      accent: 'blue',
      highlights: [
        'Pequenos grupos',
        'Adequado para iniciantes',
        'Temas criativos sazonais',
      ],
      practical: [
        'Local: Ericeira',
        'Idiomas: inglês, francês, português',
        'Formato: eventos públicos ou grupos privados',
      ],
    },
  },
  santaCruz: {
    en: {
      seoTitle: 'Creative workshops in Santa Cruz, Portugal',
      seoDescription:
        'Hands-on creative workshops in Santa Cruz, Portugal for families, visitors, and groups looking for a meaningful local activity.',
      eyebrow: 'Santa Cruz workshops',
      title: 'Hands-on afternoons near the Atlantic.',
      intro:
        'Creative sessions in Santa Cruz are designed for easy-going groups who want a memorable activity close to the beach.',
      accent: 'yellow',
      highlights: [
        'Coastal setting',
        'Flexible themes',
        'Great for families and holiday groups',
      ],
      practical: [
        'Location: Santa Cruz',
        'Languages: English, French, Portuguese',
        'Format: seasonal events and private bookings',
      ],
    },
    fr: {
      seoTitle: 'Ateliers créatifs à Santa Cruz, Portugal',
      seoDescription:
        'Ateliers créatifs à Santa Cruz au Portugal pour familles, visiteurs et groupes qui cherchent une activité locale pleine de sens.',
      eyebrow: 'Ateliers à Santa Cruz',
      title: "Des après-midis créatifs près de l'Atlantique.",
      intro:
        'Les ateliers à Santa Cruz sont pensés pour les groupes qui souhaitent une activité simple, chaleureuse et proche de la plage.',
      accent: 'yellow',
      highlights: [
        'Cadre côtier',
        'Thèmes flexibles',
        'Idéal pour familles et groupes en vacances',
      ],
      practical: [
        'Lieu : Santa Cruz',
        'Langues : anglais, français, portugais',
        'Format : événements saisonniers et réservations privées',
      ],
    },
    pt: {
      seoTitle: 'Workshops criativos em Santa Cruz, Portugal',
      seoDescription:
        'Workshops criativos em Santa Cruz para famílias, visitantes e grupos que procuram uma atividade local significativa.',
      eyebrow: 'Workshops em Santa Cruz',
      title: 'Tardes criativas perto do Atlântico.',
      intro:
        'As sessões criativas em Santa Cruz são pensadas para grupos descontraídos que querem uma atividade memorável junto à praia.',
      accent: 'yellow',
      highlights: [
        'Ambiente costeiro',
        'Temas flexíveis',
        'Ótimo para famílias e grupos de férias',
      ],
      practical: [
        'Local: Santa Cruz',
        'Idiomas: inglês, francês, português',
        'Formato: eventos sazonais e reservas privadas',
      ],
    },
  },
  atHome: {
    en: {
      seoTitle: 'At-home creative workshops in Portugal',
      seoDescription:
        'Private creative workshops brought to your home for birthdays, family gatherings, holidays, and small group celebrations.',
      eyebrow: 'Private workshops',
      title: 'Bring the creative table to your home.',
      intro:
        'At-home workshops are flexible private sessions for families, friends, birthdays, and cozy celebrations across the local area.',
      accent: 'pink',
      highlights: [
        'Private format',
        'Adapted to your group',
        'Materials can be brought to you',
      ],
      practical: [
        'Location: your home or holiday rental',
        'Languages: English, French, Portuguese',
        'Format: private booking by request',
      ],
    },
    fr: {
      seoTitle: 'Ateliers créatifs à domicile au Portugal',
      seoDescription:
        'Ateliers créatifs privés à domicile pour anniversaires, réunions de famille, vacances et petits groupes.',
      eyebrow: 'Ateliers privés',
      title: 'Invitez la table créative chez vous.',
      intro:
        'Les ateliers à domicile sont des sessions privées et flexibles pour familles, amis, anniversaires et moments conviviaux.',
      accent: 'pink',
      highlights: [
        'Format privé',
        'Adapté à votre groupe',
        'Le matériel peut venir à vous',
      ],
      practical: [
        'Lieu : chez vous ou dans votre location',
        'Langues : anglais, français, portugais',
        'Format : réservation privée sur demande',
      ],
    },
    pt: {
      seoTitle: 'Workshops criativos em casa em Portugal',
      seoDescription:
        'Workshops criativos privados em casa para aniversários, encontros de família, férias e pequenas celebrações.',
      eyebrow: 'Workshops privados',
      title: 'Leve a mesa criativa até sua casa.',
      intro:
        'Os workshops em casa são sessões privadas e flexíveis para famílias, amigos, aniversários e celebrações acolhedoras.',
      accent: 'pink',
      highlights: [
        'Formato privado',
        'Adaptado ao grupo',
        'Os materiais podem ir até si',
      ],
      practical: [
        'Local: casa ou alojamento de férias',
        'Idiomas: inglês, francês, português',
        'Formato: reserva privada mediante pedido',
      ],
    },
  },
};
