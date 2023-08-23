import styled from 'styled-components';
import { SearchBox, NavbarLogo } from 'components/Navbar';
import { Flex } from 'components/common';
import { useSearchContext } from 'context/useSearchContext';

const NavbarContainer = styled(Flex)`
  padding: 0 2rem;
  width: 100%;
  height: 4.5rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Navbar = () => {
  const { setSearchedActor } = useSearchContext();
  const searchedActorReset = () => setSearchedActor('');

  return (
    <NavbarContainer $justify="space-between" $align="center">
      <button onClick={searchedActorReset}>
        <NavbarLogo />
      </button>
      <SearchBox />
    </NavbarContainer>
  );
};

export default Navbar;
