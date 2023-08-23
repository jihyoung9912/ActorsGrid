import styled, { keyframes } from 'styled-components';
import { Flex } from 'components/common';

const skeletonAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const SkeletonActorCardContainer = styled(Flex)`
  width: 12rem;
  height: 22rem;
  border-radius: 13px;
  margin-top: 1rem;
  animation: ${skeletonAnimation} 0.4s infinite alternate-reverse;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  background: ${(props) => props.theme.backgroundLinear};
  background-size: 200% 100%;
`;

const SkeletonCard = () => {
  return (
    <Flex $wrap="wrap" $justify="flex-start" $gap="1rem">
      <SkeletonActorCardContainer />
    </Flex>
  );
};

export default SkeletonCard;
