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
  box-shadow:
    -10px -10px 15px 0px #f6f6f6,
    10px 10px 15px 0px #cecece;
  border-radius: 13px;
  background: linear-gradient(-45deg, #777, #f6f6f6, #888);
  background-size: 200% 100%;
  margin-top: 1rem;
  animation: ${skeletonAnimation} 0.4s infinite alternate-reverse;
`;

const SkeletonCard = () => {
  return (
    <Flex $wrap="wrap" $justify="flex-start" $gap="1rem">
      <SkeletonActorCardContainer />
    </Flex>
  );
};

export default SkeletonCard;
