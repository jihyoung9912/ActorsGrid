import React, { useState } from 'react';
import styled from 'styled-components';

interface ITooltip {
  isShow: boolean;
}

const StyledWrap = styled.div`
  position: relative;
`;

const StyledTooltip = styled.span<ITooltip>`
  display: flex;
  align-items: center;
  width: max-content;
  visibility: ${({ isShow }) => (isShow ? 'visible' : 'hidden')};
  background: rgb(235, 236, 239);
  position: absolute;
  padding: 0 12px;
  font-size: 14px;
  border-radius: 5px;
  left: 55px;
  top: 0;
  bottom: 0;
  &:before {
    display: block;
    position: absolute;
    content: '';
    left: -18px;
    border-top: 8px solid transparent;
    border-right: 12px solid rgb(235, 236, 239);
    border-bottom: 8px solid transparent;
    border-left: 8px solid transparent;
  }
`;

const StyledBlock = styled.div`
  width: max-content;
`;

const Tooltip = ({ children, text }: any) => {
  const [show, setShow] = useState(false);

  return (
    <StyledWrap>
      <StyledBlock onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </StyledBlock>
      <StyledTooltip isShow={show}>{text}</StyledTooltip>
    </StyledWrap>
  );
};

export default Tooltip;
