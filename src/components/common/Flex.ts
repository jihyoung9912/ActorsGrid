import styled, { css } from 'styled-components';

interface FlexProps {
  /*
   * Reusable flexbox for top element
   */
  display: 'flex';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'inherit';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'inherit';
  direction?: 'column' | 'row';
  flexWrap?: 'wrap' | 'nowrap' | 'reverse';
}

export const Flex = styled.div<FlexProps>`
  ${({ alignItems, justifyContent, direction, flexWrap }) => css`
    display: flex;

    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

    ${alignItems &&
    css`
      align-items: ${alignItems};
    `}

      ${direction &&
    css`
      flex-direction: ${direction};
    `}

    ${flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
  `}
`;
