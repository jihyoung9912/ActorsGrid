import { Actors } from 'components/Actors';
import { Navbar } from 'components/Navbar';
import { SearchProvider } from 'context/useSearchContext';

const Home = () => {
  // Using Scoped Context to prevent props drilling
  return (
    <SearchProvider>
      <Navbar />
      <Actors />
    </SearchProvider>
  );
};

export default Home;
