module.exports = {
  email: 'fadhal.kerja@gmail.com',

  socialMedia: [
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/heydhal',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/fadhalshulhan',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/heydhal/',
    },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/bchiang7',
    // },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/fadhalshulhan/',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
  ],

  navLinks: [
    {
      name: 'About Me',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Certificate',
      url: '/#certificate',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 0, viewFactor = 0) => ({
    origin: 'bottom',
    distance: '10px',
    duration: 10,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'ease-out', // Lebih responsif
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
