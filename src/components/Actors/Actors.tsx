import styled from 'styled-components';

const ActorsContainer = styled.main`
  width: 100%;
  padding: 2rem;
  font-size: 2rem;
  font-weight: 600;
  background-color: #f5f5fc;
`;

const Actors = () => {
  return (
    <ActorsContainer>
      <label>Celebrities</label>
    </ActorsContainer>
  );
};

export default Actors;
