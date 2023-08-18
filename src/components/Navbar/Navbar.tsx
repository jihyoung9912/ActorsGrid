import styled from 'styled-components';
import { SearchBox, NavbarLogo } from 'components/Navbar';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 4.5rem;
  background-color: #172540;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo />
      <SearchBox />
    </NavbarContainer>
  );
};

export default Navbar;
