import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  height: 4rem;
  background-color: #172540;
  color: #cee0ee;
`;

const NavbarLogo = styled.img`
  width: 9rem;
  height: 100%;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Chartmetric Logo" />
    </NavbarContainer>
  );
};

export default Navbar;
