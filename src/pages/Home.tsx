import { Actors } from 'components/Actors';
import { Navbar } from 'components/Navbar';
import { useState } from 'react';

const Home = () => {
  const [searchedActor, setSearchedActor] = useState('');
  return (
    <>
      <Navbar setSearchedActor={setSearchedActor} />
      <Actors searchedActor={searchedActor} />
    </>
  );
};

export default Home;
