import { useState } from 'react';
import { Actors } from 'components/Actors';
import { Navbar } from 'components/Navbar';
import { SearchProvider } from 'context/useSearchContext';

const Home = () => {
  // Using Scoped Context to prevent props drilling
  return (
    <SearchProvider>
      <Navbar />
      {/*<Actors searchedActor={searchedActor} />*/}
    </SearchProvider>
  );
};

export default Home;
