import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import GlobalStyles from 'constants/GlobalStyles';
import Layout from 'layouts/Layout';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
