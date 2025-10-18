export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://avatars.githubusercontent.com/u/74973164?v=4',
      light: 'https://avatars.githubusercontent.com/u/74973164?v=4',
      alt: 'Luciano Griffith'
    },
    email: 'griffith.luciano@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/luciano-griffith-4299711ba/',
      'target': '_blank',
      'aria-label': 'Luciano Griffith on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/lgriffith10',
      'target': '_blank',
      'aria-label': 'Luciano Griffith on GitHub'
    }]
  }
})
