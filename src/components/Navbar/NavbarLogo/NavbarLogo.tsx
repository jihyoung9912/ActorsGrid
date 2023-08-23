import styled from 'styled-components';
import { useDisplaySize } from 'hooks';

interface NavbarLogoProps {
  width: string;
  height: string;
}

const NavbarLogoImg = styled.img<NavbarLogoProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
`;

const NavbarLogo = () => {
  const displaySize = useDisplaySize();
  return (
    <>
      {displaySize >= 500 ? (
        <NavbarLogoImg
          width="9.5rem"
          height="100%"
          src={`${process.env.PUBLIC_URL}/logo.svg`}
          alt="Chartmetric Logo"
        />
      ) : (
        <NavbarLogoImg
          width="3rem"
          height="100%"
          src={`${process.env.PUBLIC_URL}/favicon.ico`}
          alt="Chartmetric Logo"
        />
      )}
    </>
  );
};

export default NavbarLogo;
