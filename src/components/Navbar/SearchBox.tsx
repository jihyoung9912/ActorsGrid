import React, { useState } from 'react';
import styled from 'styled-components';
import { useSearchContext } from 'context/useSearchContext';

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 13.5rem;
  padding: 0.6rem 0.8rem 0.6rem 2.3rem;
  border: ${(props) => props.theme.white} solid 2px;
  border-radius: 10px;
  font-size: 0.85rem;
  background-color: transparent;
  color: ${(props) => props.theme.fontSecondary};
  transition: 0.5s all ease-in-out;
  &:focus {
    width: 15.5rem;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.fontTerritory};
  }
`;

const SearchLogo = styled.img`
  position: absolute;
  left: 0.6rem;
  top: 0.55rem;
  width: 1.2rem;
  cursor: pointer;
`;

const SearchBox = () => {
  const { setSearchedActor } = useSearchContext();
  const [searchedTerm, setSearchedTerm] = useState('');

  const handleSearchedActor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchedText = event.target.value;
    setSearchedTerm(searchedText);
  };

  const handleSearch = () => {
    setSearchedActor(searchedTerm);
  };

  const enterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchLogo
        src={`${process.env.PUBLIC_URL}/search.svg`}
        alt="Search Logo"
        onClick={handleSearch}
      />
      <SearchInput
        type="search"
        placeholder="Search for a celebrities"
        value={searchedTerm}
        onChange={handleSearchedActor}
        onKeyUp={enterKey}
      />
    </SearchContainer>
  );
};

export default SearchBox;
