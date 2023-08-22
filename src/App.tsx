import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ActorSearch } from 'pages';
import Layout from 'layouts/Layout';
import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchParams" element={<ActorSearch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
