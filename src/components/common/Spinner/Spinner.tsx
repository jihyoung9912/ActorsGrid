import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components';
import { FlexWrapper } from '../FlexWrapper/FlexWrapper';

const Container = styled(FlexWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92vh;
`;

export const Spinner = () => {
  return (
    <Container>
      <BeatLoader size="5rem" color="#172540" />
    </Container>
  );
};
