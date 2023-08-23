import { useState } from 'react';
import { Actors } from 'components/Actors';
import { Navbar } from 'components/Navbar';

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
