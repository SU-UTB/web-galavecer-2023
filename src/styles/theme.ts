const Theme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#EEEEEE',
    header:
      'linear-gradient(180deg, rgba(0, 0, 0, 0.74) 31.56%, rgba(0, 0, 0, 0) 100%);',
    footer:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.57) 0%, rgba(0, 0, 0, 0) 100%);',

    body: '#FFFFFF',
  },
  breakpoints: {
    mobile: '767px',
    tablet: '768px',
    desktop: '1024px',
  },
  headingSizes: {
    h1: {
      mobile: '20px',
      desktop: '40px',
    },
    h2: {
      mobile: '30px',
      desktop: '50px',
    },
    h3: {
      mobile: '18px',
      desktop: '30px',
    },
    h4: {
      mobile: '18px',
      desktop: '28px',
    },
    h5: {
      mobile: '18px',
      desktop: '26px',
    },
    h6: {
      mobile: '18px',
      desktop: '24px',
    },
  },
  fontFamilies: {
    headlineRegular: 'ClashDisplayRegular',
    headlineSemibold: 'ClashDisplaySemibold',
    textRegular: 'ClashGroteskRegular',
    textMedium: 'ClashGroteskMedium',

  },
};

export default Theme;
