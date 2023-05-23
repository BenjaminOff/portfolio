// gitprofile.config.js

const config = {
  github: {
    username: 'BenjaminOff', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'kunio_bg',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'BenjaminOff',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https:/kunioweb.site',
    phone: '',
    email: 'contact@kunioweb.site',
  },
  resume: {
    fileUrl:
      'https://kunioweb.site', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Node.js',
    'MySQL',
    'CSS',
  ],
  experiences: [
    {
      company: 'DigiBlack',
      position: 'Paris',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://kunioweb.site/namnosis',
    },
  
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Lycée Hector Berlioz',
      degree: '3PM',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Lycée Hector Berlioz',
      degree: '2MRC (Métier Du Commerce Et De La Vente',
      from: '2022',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'HypnoseBot',
      description:
        'Gamme de robot discord.',
    },

  
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'BenjaminOff', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a 
      class="text-primary" href="https://github.com/BenjaminOff"
      target="_blank"
      rel="noreferrer"
    >BenjaminOff</a> `,
};

export default config;
