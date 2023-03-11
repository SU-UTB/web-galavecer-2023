import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './components/layout/Layout';
import Routes from './Routes';

import GlobalStyle from './styles/globals';
import Theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
