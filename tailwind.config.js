module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      arian: {
        blanco: '#e0e0e0',
        blanco2: '#bdbdbd',
        grisclaro: '#272527',
        grisclaro2: '#4A484A',
        grisoscuro: '#141414',
        grisoscuro2: '#181818',
        negro: '#040404',
        azul: '#398BDD',
        celeste: '#3FAEBA',
        verde: '#3FBA60',
        amarillo: '#FFB442',
        naranja: '#DF7A40',
        rojo: '#DA332A',
        rosa: '#D63777',
        lila: '#AD4BD6'
      }
    },
    fontFamily: {
      sans: ['Raleway', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['Roboto Mono', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"']
    },
    extend: {}
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
