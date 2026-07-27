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
    blogTitle: 'Carnet créatif pour visiteurs curieux',
    blogIntro:
      "Une petite collection d'idées créatives, de guides locaux tout doux, d'inspirations saisonnières et de moments faits main à vivre autour d'Ericeira, Santa Cruz et la côte ouest du Portugal.",
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
    blogTitle: 'Diário Criativo para Visitantes Curiosos',
    blogIntro:
      'Uma pequena coleção de ideias criativas, guias locais tranquilos, inspiração sazonal e momentos feitos à mão para desfrutar na Ericeira, em Santa Cruz e na costa oeste de Portugal.',
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
    title: 'Watercolor Workshop',
    dateLabel: 'Date',
    date: 'Next date to be announced',
    locationLabel: 'Location',
    location: 'Ericeira or Santa Cruz',
    description:
      'Unleash your creativity with a watercolor workshop. Explore different techniques, and create your own piece of art to take home.',
    cta: 'Ask for the next date',
  },
  fr: {
    label: 'Prochain atelier',
    title: "Ateier d'aquarelle",
    dateLabel: 'Date',
    date: 'Prochaine date à annoncer',
    locationLabel: 'Lieu',
    location: 'Ericeira ou Santa Cruz',
    description:
      'Libérez votre créativité avec un atelier aquarelle. Explorez différentes techniques et créez votre propre œuvre à emporter.',
    cta: 'Demander la prochaine date',
  },
  pt: {
    label: 'Próximo workshop',
    title: 'Workshop de aguarela',
    dateLabel: 'Data',
    date: 'Próxima data a anunciar',
    locationLabel: 'Local',
    location: 'Ericeira ou Santa Cruz',
    description:
      'Liberte a sua criatividade com um workshop de aguarela. Explore diferentes técnicas e crie a sua própria obra para levar para casa.',
    cta: 'Perguntar a próxima data',
  },
};

export const atHomeDetails: Record<
  Locale,
  {
    offerTitle: string;
    workshops: { name: string; image: string }[];
    faqTitle: string;
    faqIntro: string;
    faqItems: { question: string; answer: string }[];
  }
> = {
  en: {
    offerTitle: 'Workshops I can bring to you',
    workshops: [
      {
        name: 'Watercolor',
        image: '/images/waterlili-watercolor-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Dreamcatcher',
        image: '/images/waterlili-dreamcatcher-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Macrame plant hanger',
        image: '/images/waterlili-macrame-plant-hanger-workshop-santa-cruz-portugal.jpg',
      },
      {
        name: 'Kintsugi',
        image: '/images/waterlili-kintsugi-workshop-ericeira-portugal.jpg',
      },
      {
        name: '3D printed statues painting',
        image: '/images/3d-printed-statue-painting-workshop-portugal.jpg',
      },
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
    workshops: [
      {
        name: 'Aquarelle',
        image: '/images/waterlili-watercolor-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Attrape-rêves',
        image: '/images/waterlili-dreamcatcher-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Suspension pour plante en macramé',
        image: '/images/waterlili-macrame-plant-hanger-workshop-santa-cruz-portugal.jpg',
      },
      {
        name: 'Kintsugi',
        image: '/images/waterlili-kintsugi-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Peinture de statues imprimées en 3D',
        image: '/images/3d-printed-statue-painting-workshop-portugal.jpg',
      },
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
    workshops: [
      {
        name: 'Aguarela',
        image: '/images/waterlili-watercolor-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Caça-sonhos',
        image: '/images/waterlili-dreamcatcher-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Suporte de planta em macramé',
        image: '/images/waterlili-macrame-plant-hanger-workshop-santa-cruz-portugal.jpg',
      },
      {
        name: 'Kintsugi',
        image: '/images/waterlili-kintsugi-workshop-ericeira-portugal.jpg',
      },
      {
        name: 'Pintura de estátuas impressas em 3D',
        image: '/images/3d-printed-statue-painting-workshop-portugal.jpg',
      },
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
    },
  },
};

export const workshopPauseContent: Record<
  Locale,
  {
    title: string;
    message: string;
    returningTitle: string;
  }
> = {
  en: {
    title: 'No workshops are currently scheduled',
    message:
      'There are no workshops available right now. There will be back in <strong>October</strong>. <br /> <strong>Sign up to my newsletter</strong> to get the latest info about the next dates.',
    returningTitle: 'Those workshops will be back in October',
  },
  fr: {
    title: 'Aucun atelier n’est prévu pour le moment',
    message:
      'Il n’y a pas d’ateliers disponibles pour l’instant, ils seront de retour en <strong>octobre</strong>. <br /><strong>Inscris-toi à ma newsletter</strong> pour recevoir les dernières infos sur les prochaines dates.',
    returningTitle: 'Ces ateliers seront de retour en octobre',
  },
  pt: {
    title: 'Não há workshops agendados neste momento',
    message:
      'Não há workshops disponíveis neste momento, estarão de volta em <strong>outubro</strong>. <br/> <strong>Subscreva a minha newsletter</strong> para receber as últimas informações sobre as próximas datas.',
    returningTitle: 'Estes workshops voltam em outubro',
  },
};

export const newsletterSignupContent: Record<
  Locale,
  {
    errorMessage: string;
    successMessage: string;
    heading: string;
    paragraphs: string[];
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailHelp: string;
    submit: string;
    longSubmit: string;
    requiredCodeErrorMessage: string;
    invalidMessage: string;
    requiredErrorMessage: string;
    translation: {
      selectedList: string;
      selectedLists: string;
      selectedOption: string;
      selectedOptions: string;
    };
  }
> = {
  en: {
    errorMessage: 'Oopsy, a small technical issue kept us from confirming your signup.',
    successMessage:
      "Welcome! Your signup is confirmed, and you'll soon receive your first free wallpaper.",
    heading: 'Need a little softness?',
    paragraphs: [
      'Twice a month, receive a <strong>dose of comfort, joy, and color</strong> in your inbox.',
      'And a little gift: every month, discover an <strong>exclusive mobile wallpaper</strong> to download!',
      'So, are you ready to <strong>make your inbox sparkle?</strong>',
    ],
    nameLabel: 'How should I call you?',
    namePlaceholder: 'FIRST NAME',
    emailLabel: 'What is your email address?',
    emailPlaceholder: 'EMAIL',
    emailHelp: 'Please enter your email address to sign up. Example: abc@xyz.com',
    submit: 'SIGN UP',
    longSubmit: 'SIGN UP TO MY NEWSLETTER',
    requiredCodeErrorMessage: 'Please choose a country code',
    invalidMessage:
      'The information you provided is not valid. Please check the field format and try again.',
    requiredErrorMessage: 'This field is required. ',
    translation: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected',
      selectedOption: '{quantity} selected',
      selectedOptions: '{quantity} selected',
    },
  },
  fr: {
    errorMessage:
      "Oopsy, petit soucis technique, nous n'avons pas pu confirmer ton inscription.",
    successMessage:
      "Bienvenue! Ton inscription est confirmée, tu recevras bientôt ton premier fond d'écran gratuit.",
    heading: "Besoin d'un peu de douceur ?",
    paragraphs: [
      'Deux fois par mois, reçois une <strong>dose de réconfort, de joie et de couleurs</strong> dans ta boîte mail.',
      'Et petit cadeau : chaque mois, découvre un <strong>fond d’écran mobile exclusif</strong> à télécharger !',
      'Alors, es-tu prêt.e à <strong>faire pétiller ta boîte mail ?</strong>',
    ],
    nameLabel: "Comment veux-tu que je t'appelle ?",
    namePlaceholder: 'PRENOM',
    emailLabel: 'Quelle est ton adresse mail ?',
    emailPlaceholder: 'EMAIL',
    emailHelp: "Merci de renseigner ton adresse email pour t'inscrire. Ex. : abc@xyz.com",
    submit: "S'INSCRIRE",
    longSubmit: "S'INSCRIRE À MA NEWSLETTER",
    requiredCodeErrorMessage: 'Veuillez choisir un code pays',
    invalidMessage:
      'Les informations que tu as fournies ne sont pas valides. Je te conseille de vérifier le format du champ et de réessayer.',
    requiredErrorMessage: 'Ce champ est obligatoire. ',
    translation: {
      selectedList: '{quantity} liste sélectionnée',
      selectedLists: '{quantity} listes sélectionnées',
      selectedOption: '{quantity} sélectionné',
      selectedOptions: '{quantity} sélectionnés',
    },
  },
  pt: {
    errorMessage:
      'Oopsy, um pequeno problema técnico impediu-nos de confirmar a sua inscrição.',
    successMessage:
      'Bem-vinda! A sua inscrição está confirmada e em breve receberá o seu primeiro wallpaper gratuito.',
    heading: 'Precisa de um pouco de doçura?',
    paragraphs: [
      'Duas vezes por mês, receba uma <strong>dose de conforto, alegria e cor</strong> na sua caixa de entrada.',
      'E um pequeno presente: todos os meses, descubra um <strong>wallpaper exclusivo para telemóvel</strong> para descarregar!',
      'Então, está pronta para <strong>dar brilho à sua caixa de entrada?</strong>',
    ],
    nameLabel: 'Como gostaria que eu a chamasse?',
    namePlaceholder: 'NOME',
    emailLabel: 'Qual é o seu endereço de email?',
    emailPlaceholder: 'EMAIL',
    emailHelp: 'Introduza o seu endereço de email para se inscrever. Ex.: abc@xyz.com',
    submit: 'SUBSCREVER',
    longSubmit: 'SUBSCREVER A MINHA NEWSLETTER',
    requiredCodeErrorMessage: 'Escolha um indicativo de país',
    invalidMessage:
      'As informações fornecidas não são válidas. Verifique o formato do campo e tente novamente.',
    requiredErrorMessage: 'Este campo é obrigatório. ',
    translation: {
      selectedList: '{quantity} lista selecionada',
      selectedLists: '{quantity} listas selecionadas',
      selectedOption: '{quantity} selecionado',
      selectedOptions: '{quantity} selecionados',
    },
  },
};
