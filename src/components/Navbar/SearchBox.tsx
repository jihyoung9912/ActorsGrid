import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

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

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchedActor, setSearchedActor] = useState('');

  const handleSearchedActor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchedText = event.target.value;
    setSearchedActor(searchedText);
  };

  const enterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      navigate(`/search/${searchedActor}`);
    }
  };

  return (
    <SearchContainer>
      <Link to={`/search/${searchedActor}`}>
        <SearchLogo src={`${process.env.PUBLIC_URL}/search.svg`} alt="Search Logo" />
      </Link>
      <SearchInput
        type="search"
        placeholder="Search for a celebrities"
        onChange={(event) => handleSearchedActor(event)}
        onKeyUp={(event) => enterKey(event)}
      />
    </SearchContainer>
  );
};

export default SearchBox;
