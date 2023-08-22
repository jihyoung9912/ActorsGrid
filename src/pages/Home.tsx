import { Actors } from 'components/Actors';
import { Navbar } from 'components/Navbar';
import { useState } from 'react';

const Home = () => {
  const [searchedActor, setSearchedActor] = useState('');
  console.log(searchedActor);
  return (
    <>
      <Navbar setSearchedActor={setSearchedActor} />
      <Actors />
    </>
  );
};

export default Home;
