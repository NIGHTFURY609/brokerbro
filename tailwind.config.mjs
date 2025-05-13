const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05668d',
        accent: '#a5be00',
        light: '#ebf2fa',
        secondary: '#427aa1',
        tertiary: '#679436',
        'input-bg': '#ebf2fa',
        'container-bg': '#ebf2fa',
        'page-bg': '#ebf2fa',
        button: '#427aa1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
