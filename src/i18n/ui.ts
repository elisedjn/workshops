import type { Locale, RouteKey } from './config';

export const siteName = 'Waterlili Creation';

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
    footerDescription: string;
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
    footerDescription:
      'Creative workshops in Ericeira, Santa Cruz, and wherever your group gathers.',
  },
  fr: {
    bookCta: 'Réserver',
    contactCta: 'Me contacter',
    readMore: 'Lire la suite',
    latestPosts: 'Derniers articles',
    allWorkshops: 'Découvrir les ateliers',
    practicalInfo: 'Informations pratiques',
    highlights: "À quoi s'attendre",
    language: 'Langue',
    workshopDetails: 'Détails',
    footerDescription:
      'Ateliers créatifs à Ericeira, Santa Cruz et partout où votre groupe se retrouve.',
  },
  pt: {
    bookCta: 'Reservar',
    contactCta: 'Contactar',
    readMore: 'Ler mais',
    latestPosts: 'Últimos artigos',
    allWorkshops: 'Explorar workshops',
    practicalInfo: 'Detalhes práticos',
    highlights: 'O que esperar',
    language: 'Idioma',
    workshopDetails: 'Detalhes',
    footerDescription:
      'Workshops criativos na Ericeira, em Santa Cruz e onde quer que o seu grupo se reúna.',
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
    blogTitle: string;
    blogIntro: string;
    locationTitle: string;
    locationIntro: string;
    locationElsewhere: string;
    aboutTitle: string;
    aboutText: string;
  }
> = {
  en: {
    seoTitle: 'Creative workshops in Ericeira, Santa Cruz and at home',
    seoDescription:
      'Creative workshops for locals, travelers, families, and private groups in Ericeira, Santa Cruz, and at home in Portugal.',
    eyebrow: 'Creative workshops by the Portuguese coast',
    title: 'Slow, joyful workshops for curious hands.',
    intro:
      'WaterLili offers gentle, joyful creative moments. Each session is a pause for you : relaxed, welcoming, and full of warmth.',
    note: 'Choose a location-based event or invite the workshop to your home for birthdays, holidays, family gatherings, and small group celebrations.',
    blogTitle: 'Creativity Journal for Curious Visitors',
    blogIntro:
      'A small collection of creative ideas, gentle local guides, seasonal inspiration, and handmade moments to enjoy around Ericeira, Santa Cruz, and the west coast of Portugal.',
    locationTitle: 'Choose your location',
    locationIntro:
      'Join a workshop by the ocean or invite the creative table somewhere else.',
    locationElsewhere: 'Elsewhere',
    aboutTitle: 'About me',
    aboutText:
      'I’ve always been drawn to creating and crafting. While watercolor is my primary medium today, I still love **the magic of making things with my hands**. \n My mission? To **bring color and joy back into people’s lives** through creativity. That’s why I design warm, accessible workshops for anyone who wants to slow down, experiment, and savor the simple pleasure of making. \n Here, perfection isn’t the goal—it’s all about sharing a **generous, heartfelt creative moment** together.',
  },
  fr: {
    seoTitle: 'Ateliers créatifs à Ericeira, Santa Cruz et à domicile',
    seoDescription:
      'Ateliers créatifs pour habitants, voyageurs, familles et groupes privés à Ericeira, Santa Cruz et à domicile au Portugal.',
    eyebrow: "Ateliers créatifs au bord de l'océan",
    title: 'Des ateliers doux et joyeux pour les mains curieuses.',
    intro:
      'Waterlili Creation propose des moments créatifs à Ericeira, Santa Cruz et chez vous. Chaque atelier est pensé pour être simple, chaleureux et accessible.',
    note: "Choisissez un événement local ou invitez l'atelier chez vous pour un anniversaire, des vacances, une réunion de famille ou un petit groupe.",
    blogTitle: 'Carnet pour visiteurs curieux.',
    blogIntro:
      "Le blog aide le référencement local tout en partageant des idées d'activités créatives, des inspirations saisonnières et des choses à faire sur la côte ouest du Portugal.",
    locationTitle: 'Choisissez votre lieu',
    locationIntro:
      "Rejoignez un atelier près de l'océan ou invitez la table créative ailleurs.",
    locationElsewhere: 'Ailleurs',
    aboutTitle: 'À propos',
    aboutText:
      "J'ai toujours été attirée par la création et les activités manuelles. Même si l'aquarelle est aujourd'hui mon médium principal, j'aime toujours **la magie de créer avec mes mains**. \n Ma mission ? **Remettre de la couleur et de la joie dans la vie des gens** grâce à la créativité. C'est pour cela que je crée des ateliers chaleureux et accessibles pour celles et ceux qui veulent ralentir, expérimenter et savourer le simple plaisir de faire. \n Ici, la perfection n'est pas le but : il s'agit de partager ensemble un **moment créatif généreux et sincère**.",
  },
  pt: {
    seoTitle: 'Workshops criativos na Ericeira, Santa Cruz e em casa',
    seoDescription:
      'Workshops criativos para locais, viajantes, famílias e grupos privados na Ericeira, Santa Cruz e em casa em Portugal.',
    eyebrow: 'Workshops criativos junto ao mar',
    title: 'Workshops tranquilos e alegres para mãos curiosas.',
    intro:
      'Waterlili Creation leva momentos criativos à Ericeira, Santa Cruz e a casas particulares. Cada sessão é pensada para ser acolhedora, simples e fácil de participar.',
    note: 'Escolha um evento local ou convide o workshop para sua casa em aniversários, férias, encontros de família e pequenas celebrações.',
    blogTitle: 'Diário para visitantes curiosos.',
    blogIntro:
      'O blog apoia o SEO local enquanto partilha ideias de atividades criativas, inspiração sazonal e sugestões do que fazer na costa oeste de Portugal.',
    locationTitle: 'Escolha o local',
    locationIntro:
      'Participe num workshop junto ao mar ou convide a mesa criativa para outro lugar.',
    locationElsewhere: 'Outro lugar',
    aboutTitle: 'Sobre mim',
    aboutText:
      'Sempre me senti atraída por criar e fazer trabalhos manuais. Embora a aguarela seja hoje o meu principal meio, continuo a adorar **a magia de criar com as mãos**. \n A minha missão? **Trazer cor e alegria de volta à vida das pessoas** através da criatividade. É por isso que crio workshops acolhedores e acessíveis para quem quer abrandar, experimentar e saborear o simples prazer de fazer. \n Aqui, a perfeição não é o objetivo: o importante é partilhar um **momento criativo generoso e sincero**.',
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

export const atHomeDetails: Record<
  Locale,
  {
    offerTitle: string;
    offerIntro: string;
    workshops: { name: string; image: string }[];
    faqTitle: string;
    faqIntro: string;
    faqItems: { question: string; answer: string }[];
  }
> = {
  en: {
    offerTitle: 'Workshops I can bring to you',
    offerIntro: 'Choose the creative activity that fits your group, mood, and space.',
    workshops: [
      { name: 'Watercolor', image: '/images/watercolor-workshop-ericeira-portugal.jpg' },
      {
        name: 'Dreamcatcher',
        image: '/images/dreamcatcher-workshop-ericeira-21-june-2026-portugal.jpg',
      },
      {
        name: 'Macrame plant hanger',
        image: '/images/plant-hanger-workshop-santa-cruz-19-june-2026-portugal.jpg',
      },
      {
        name: 'Kintsugi',
        image: '/images/kintsugi-workshop-ericeira-28-june-2026-portugal.jpg',
      },
      { name: '3D printed statues painting', image: '/images/ChezSandy.jpg' },
    ],
    faqTitle: 'Practical questions',
    faqIntro: 'The essentials to plan your private workshop',
    faqItems: [
      {
        question: 'What type of workshops can I choose?',
        answer:
          'Available options include watercolor, dreamcatcher, macrame plant hanger, kintsugi, and 3D printed statues painting. We can choose the activity that best fits your group, space, and celebration.',
      },
      {
        question: 'Where can the workshop take place?',
        answer:
          'At your home, holiday rental, garden, terrace, another suitable private space or even a public park or your favorite beach... I bring the creative table to you.',
      },
      {
        question: 'Are materials included?',
        answer:
          'Yes. I bring the materials needed for the chosen activity, and we can adapt the setup to your space.',
      },
      {
        question: 'How many people can join?',
        answer:
          'Workshops are designed for groups of 3 to 8 people. For parties with more than 8 people, we can organize several sessions or a drop-in/drop-off format where guests can come and leave whenever they want.',
      },
      {
        question: 'What kinds of events work well?',
        answer:
          'Birthdays, bachelorette parties, cozy celebrations, family gatherings, holidays, and relaxed moments with friends.',
      },
      {
        question: 'Who can participate?',
        answer:
          'Kids from 6 years old and adults are welcome. Any level is welcome: I adapt the rhythm, guidance, and activity to your group.',
      },
    ],
  },
  fr: {
    offerTitle: 'Les ateliers que je peux apporter chez vous',
    offerIntro:
      "Choisissez l'activité créative qui correspond à votre groupe, votre ambiance et votre espace.",
    workshops: [
      { name: 'Aquarelle', image: '/images/watercolor-workshop-ericeira-portugal.jpg' },
      {
        name: 'Attrape-rêves',
        image: '/images/dreamcatcher-workshop-ericeira-21-june-2026-portugal.jpg',
      },
      {
        name: 'Suspension pour plante en macramé',
        image: '/images/plant-hanger-workshop-santa-cruz-19-june-2026-portugal.jpg',
      },
      {
        name: 'Kintsugi',
        image: '/images/kintsugi-workshop-ericeira-28-june-2026-portugal.jpg',
      },
      { name: 'Peinture de statues imprimées en 3D', image: '/images/ChezSandy.jpg' },
    ],
    faqTitle: 'Questions pratiques',
    faqIntro: 'Les informations essentielles avant de préparer votre atelier privé.',
    faqItems: [
      {
        question: "Quels types d'ateliers puis-je choisir ?",
        answer:
          "Les options disponibles incluent l'aquarelle, les attrape-rêves, les suspensions pour plantes en macramé, le kintsugi et la peinture de statues imprimées en 3D. Nous pouvons choisir l'activité qui correspond le mieux à votre groupe, votre espace et votre événement.",
      },
      {
        question: "Où l'atelier peut-il avoir lieu ?",
        answer:
          "Chez vous, dans votre location de vacances, un jardin, une terrasse, un autre espace privé adapté ou même dans un parc public ou sur votre plage préférée... J'apporte la table créative à vous.",
      },
      {
        question: 'Le matériel est-il inclus ?',
        answer:
          "Oui. J'apporte le matériel nécessaire pour l'activité choisie, et nous pouvons adapter l'installation à votre espace.",
      },
      {
        question: 'Combien de personnes peuvent participer ?',
        answer:
          'Les ateliers sont pensés pour des groupes de 3 à 8 personnes. Pour les événements de plus de 8 personnes, nous pouvons organiser plusieurs sessions ou un format libre où les invitées et invités arrivent et repartent quand ils le souhaitent.',
      },
      {
        question: 'Pour quels événements est-ce adapté ?',
        answer:
          'Anniversaires, enterrements de vie de jeune fille, moments conviviaux, réunions de famille, vacances et temps doux entre amis.',
      },
      {
        question: 'Qui peut participer ?',
        answer:
          "Les enfants à partir de 6 ans et les adultes sont bienvenus. Tous les niveaux sont acceptés : j'adapte le rythme, l'accompagnement et l'activité au groupe.",
      },
    ],
  },
  pt: {
    offerTitle: 'Workshops que posso levar até si',
    offerIntro:
      'Escolha a atividade criativa que combina melhor com o grupo, o ambiente e o espaço.',
    workshops: [
      { name: 'Aguarela', image: '/images/watercolor-workshop-ericeira-portugal.jpg' },
      {
        name: 'Caça-sonhos',
        image: '/images/dreamcatcher-workshop-ericeira-21-june-2026-portugal.jpg',
      },
      {
        name: 'Suporte de planta em macramé',
        image: '/images/plant-hanger-workshop-santa-cruz-19-june-2026-portugal.jpg',
      },
      {
        name: 'Kintsugi',
        image: '/images/kintsugi-workshop-ericeira-28-june-2026-portugal.jpg',
      },
      { name: 'Pintura de estátuas impressas em 3D', image: '/images/ChezSandy.jpg' },
    ],
    faqTitle: 'Perguntas práticas',
    faqIntro: 'O essencial antes de planear o seu workshop privado.',
    faqItems: [
      {
        question: 'Que tipos de workshops posso escolher?',
        answer:
          'As opções disponíveis incluem aguarela, caça-sonhos, suporte de planta em macramé, kintsugi e pintura de estátuas impressas em 3D. Podemos escolher a atividade que melhor combina com o grupo, o espaço e a celebração.',
      },
      {
        question: 'Onde pode acontecer o workshop?',
        answer:
          'Em sua casa, alojamento de férias, jardim, terraço, outro espaço privado adequado ou até num parque público ou na sua praia preferida... Levo a mesa criativa até si.',
      },
      {
        question: 'Os materiais estão incluídos?',
        answer:
          'Sim. Levo os materiais necessários para a atividade escolhida, e podemos adaptar a montagem ao seu espaço.',
      },
      {
        question: 'Quantas pessoas podem participar?',
        answer:
          'Os workshops são pensados para grupos de 3 a 8 pessoas. Para festas com mais de 8 pessoas, podemos organizar várias sessões ou um formato drop-in/drop-off, em que os convidados podem entrar e sair quando quiserem.',
      },
      {
        question: 'Que eventos funcionam bem?',
        answer:
          'Aniversários, despedidas de solteira, celebrações acolhedoras, encontros de família, férias e momentos descontraídos com amigos.',
      },
      {
        question: 'Quem pode participar?',
        answer:
          'Crianças a partir dos 6 anos e adultos são bem-vindos. Todos os níveis são aceites: adapto o ritmo, a orientação e a atividade ao grupo.',
      },
    ],
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
        'Come and explore your creativity during a small-group session with gentle guidance : a memorable activity close to the beach.',
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
        'Private creative workshops brought to your home for birthdays, bachelorette parties, family gatherings, holidays, and small group celebrations.',
      eyebrow: 'Private workshops',
      title: 'Bring the creative table to your home.',
      intro:
        'At-home workshops are flexible private sessions for families, friends, birthdays, bachelorette parties, and cozy celebrations across the local area.',
      accent: 'pink',
      highlights: [
        'Private format',
        'Adapted to your group',
        'Materials can be brought to you',
      ],
      practical: [
        'Location: your home or holiday rental',
        'Group size: 3 to 8 people',
        'Kids from 6 years old and adults',
        'Any level welcome: I adapt to your group',
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
        'Taille du groupe : 3 à 8 personnes',
        'Enfants à partir de 6 ans et adultes',
        "Tous niveaux bienvenus : j'adapte au groupe",
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
        'Grupo: 3 a 8 pessoas',
        'Crianças a partir dos 6 anos e adultos',
        'Todos os níveis: adapto ao grupo',
      ],
    },
  },
};
