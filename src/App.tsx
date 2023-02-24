import { ThemeProvider } from 'styled-components';

import Layout from './components/layout/Layout';

import GlobalStyle from './styles/globals';
import Theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout>
        <h1>Galavecer 2023</h1>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
