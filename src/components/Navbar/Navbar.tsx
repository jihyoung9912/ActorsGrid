import styled from 'styled-components';
import { SearchBox, NavbarLogo } from 'components/Navbar';
import { Flex } from 'components/common';
import { SearchedTextProps } from 'types/ISearchedText';

const NavbarContainer = styled(Flex)`
  padding: 0 2rem;
  width: 100%;
  height: 4.5rem;
  background-color: #172540;
`;

const Navbar = (props: SearchedTextProps) => {
  const { setSearchedActor } = props;
  return (
    <NavbarContainer $justify="space-between" $align="center">
      <NavbarLogo />
      <SearchBox setSearchedActor={setSearchedActor} />
    </NavbarContainer>
  );
};

export default Navbar;
