import styled from 'styled-components';
import { SearchBox, NavbarLogo } from 'components/Navbar';
import { Flex } from 'components/common';

const NavbarContainer = styled(Flex)`
  padding: 0 2rem;
  width: 100%;
  height: 4.5rem;
  background-color: #172540;
`;

const Navbar = () => {
  return (
    <NavbarContainer $justify="space-between" $align="center">
      <NavbarLogo />
      <SearchBox />
    </NavbarContainer>
  );
};

export default Navbar;
