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
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    fontFamilies: {
      regular: string;
      medium: string;
    };
  }
}
