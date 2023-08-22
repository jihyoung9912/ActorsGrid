import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SearchedTextProps } from 'types/ISearchedText';

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 13.5rem;
  padding: 10px 15px 10px 35px;
  border: #fff solid 2px;
  border-radius: 10px;
  background-color: transparent;
  transition: 0.5s all ease-in-out;
  font-size: 14px;
  color: #cee0ee;
  &:focus {
    width: 15.5rem;
    background-color: #fff;
    color: #555;
  }
`;

const SearchLogo = styled.img`
  position: absolute;
  left: 10px;
  top: 9.25px;
  width: 20px;
  cursor: pointer;
`;

const SearchBox = (props: SearchedTextProps) => {
  const { setSearchedActor } = props;
  const [searchedTerm, setSearchedTerm] = useState('');

  const handleSearchedActor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchedText = event.target.value;
    setSearchedTerm(searchedText);
  };

  const handleSearch = useCallback(() => {
    setSearchedActor(searchedTerm);
  }, [setSearchedActor, searchedTerm]);

  const enterKey = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 13) {
        handleSearch();
      }
    },
    [handleSearch],
  );

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
        onChange={(event) => handleSearchedActor(event)}
        onKeyUp={(event) => enterKey(event)}
      />
    </SearchContainer>
  );
};

export default SearchBox;
