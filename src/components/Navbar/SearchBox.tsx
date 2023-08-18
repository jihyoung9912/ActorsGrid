import styled from 'styled-components';

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
  return (
    <SearchContainer>
      <SearchLogo src={`${process.env.PUBLIC_URL}/search.svg`} alt="Search Logo" />
      <SearchInput type="search" placeholder="Search for a celebrities" />
    </SearchContainer>
  );
};

export default SearchBox;
