import styled from 'styled-components';
import { SearchBox, NavbarLogo } from 'components/Navbar';
import { Flex } from 'components/common';
import { SearchedTextProps } from 'types/ISearchedText';

const NavbarContainer = styled(Flex)`
  padding: 0 2rem;
  width: 100%;
  height: 4.5rem;
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Navbar = (props: SearchedTextProps) => {
  const { setSearchedActor } = props;
  //reset search 관심사의 분리. callback을 했을 때 성능이 왜 떨어지는지

  return (
    <NavbarContainer $justify="space-between" $align="center">
      <button onClick={() => setSearchedActor('')}>
        <NavbarLogo />
      </button>
      <SearchBox setSearchedActor={setSearchedActor} />
    </NavbarContainer>
  );
};

export default Navbar;
