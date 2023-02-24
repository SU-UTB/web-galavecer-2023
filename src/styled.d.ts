import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      body: string;
      header: string;
      footer: string;
    };
  }
}
