import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      body: string;
      header: string;
      footer: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    headingSizes: {
      h1: {
        mobile: string;
        desktop: string;
      };
      h2: {
        mobile: string;
        desktop: string;
      };
      h3: {
        mobile: string;
        desktop: string;
      };
      h4: {
        mobile: string;
        desktop: string;
      };
      h5: {
        mobile: string;
        desktop: string;
      };
      h6: {
        mobile: string;
        desktop: string;
      };
    };
    fontFamilies: {
      headlineRegular: string;
      headlineSemibold: string;
      textRegular: string;
      textMedium: string;
    };
  }
}
