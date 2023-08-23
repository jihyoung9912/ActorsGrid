import styled from 'styled-components';
import { FlexWrapper } from 'components/common';

const ErrorContainer = styled(FlexWrapper)`
  width: 100%;
  height: 100vh;
`;

const ErrorFallback = () => {
  return (
    <ErrorContainer $justify="center">
      <img src={`${process.env.PUBLIC_URL}/error.png`} alt="Error Image" />
    </ErrorContainer>
  );
};
export default ErrorFallback;
