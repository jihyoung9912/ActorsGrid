import styled, { css } from 'styled-components';

interface FlexProps {
  /*
   * Reusable flexbox for top element
   */
  $align?: 'center' | 'flex-start' | 'flex-end' | 'inherit';
  $justify?: 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'center' | 'inherit';
  $direction?: 'column' | 'row';
  $wrap?: 'wrap' | 'nowrap' | 'reverse';
  $gap?: string;
}

export const Flex = styled.div<FlexProps>`
  ${({ $align, $justify, $direction, $wrap, $gap }) => css`
    display: flex;

    ${$justify &&
    css`
      justify-content: ${$justify};
    `}

    ${$align &&
    css`
      align-items: ${$align};
    `}

      ${$direction &&
    css`
      flex-direction: ${$direction};
    `}

    ${$wrap &&
    css`
      flex-wrap: ${$wrap};
    `}

    ${$gap &&
    css`
      gap: ${$gap};
    `}
  `}
`;
