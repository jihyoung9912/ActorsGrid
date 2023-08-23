import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from 'components/common';

/*
 * Limit 1920px to make user-friendly UI
 * There may be so many pictures, so unlimited width could cause problems.
 * */
const Content = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  max-width: 1920px;
  width: 100vw;
  background-color: #f0f0f3;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex>
      <Content>{children || <Outlet />}</Content>
    </Flex>
  );
};

export default Layout;
