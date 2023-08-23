import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { Home } from 'pages';
import Layout from 'layouts/Layout';
import ErrorFallback from 'components/common/Error/ErrorFallback';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
    </ErrorBoundary>
  );
};

export default App;
