import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from 'pages';
import Layout from 'layouts/Layout';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
