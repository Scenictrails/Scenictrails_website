export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        gold: '#f2b705',
        'gold-dark': '#d19c02',
        charcoal: '#1c1c1c',
        ink: '#0f0f0f',
        cream: '#f8f5ef',
        body: '#4a4a4a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      letterSpacing: {
        nav: '0.18em',
      },
      maxWidth: {
        shell: '1240px',
      },
    },
  },
}
