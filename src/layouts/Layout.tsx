import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from 'components/common';
import { Navbar } from 'components/Navbar';

/*
 * Limit 1920px to make user-friendly UI
 * There may be so many pictures, so unlimited width could cause problems.
 * */
const Content = styled.main`
  display: flex;
  flex: 1;
  max-width: 1920px;
  width: 100vw;
  background-color: #f5f5fc;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex $direction="column">
      <Navbar />
      <Content>{children || <Outlet />}</Content>
    </Flex>
  );
};

export default Layout;
