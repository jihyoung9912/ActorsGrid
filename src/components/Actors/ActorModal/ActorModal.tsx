import styled from 'styled-components';
import { Flex } from 'components/common';
import { IActorModal } from 'types/IActors';
import ActorModalContent from './ActorModalContent';

const ModalDimmer = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled(Flex)`
  max-width: 800px;
  max-height: 600px;
  min-width: 400px;
  min-height: 100px;
  border-radius: 10px;
  border: 1px solid #cbcbcb;
  background-color: #fff;
  overflow-y: auto;
`;

const ModalHeader = styled(Flex)`
  padding: 1rem;
  font-weight: 800;
  font-size: 20px;
  border-bottom: 1px solid #cbcbcb;
`;

const CancelIcon = styled.img`
  width: 28px;
  cursor: pointer;
`;

const ModalActorImage = styled.img`
  width: 50%;
  height: 80%;
  padding: 1rem;
`;

const ModalContents = styled.div`
  width: 50%;
  padding: 1rem;
`;

const ActorModal = (props: IActorModal) => {
  const { actor, onClose } = props;
  return (
    <ModalDimmer $justify="center" $align="center">
      <ModalContainer $direction="column">
        <ModalHeader $justify="space-between" $align="center">
          <h1>{actor?.name}</h1>
          <CancelIcon
            src={`${process.env.PUBLIC_URL}/cancel.svg`}
            alt="Cancel Button"
            onClick={onClose}
          />
        </ModalHeader>
        <Flex $wrap="wrap">
          <ModalActorImage
            src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
            alt={actor?.name}
          />
          <ModalContents>
            <ActorModalContent actor={actor} />
          </ModalContents>
        </Flex>
      </ModalContainer>
    </ModalDimmer>
  );
};

export default ActorModal;
