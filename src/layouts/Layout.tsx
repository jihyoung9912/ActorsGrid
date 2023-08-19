import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from 'components/Navbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

/*
 * Limit 1920px to make user-friendly UI
 * There may be so many pictures, so unlimited width could cause problems.
 * */
const Content = styled.main`
  display: flex;
  max-width: 1920px;
  width: 100vw;
  flex: 1;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Navbar />
      <Content>{children || <Outlet />}</Content>
    </Container>
  );
};

export default Layout;
