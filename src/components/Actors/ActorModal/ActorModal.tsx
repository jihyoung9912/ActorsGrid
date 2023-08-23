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
  background-color: ${(props) => props.theme.backgroundDimmer};
`;

const ModalContainer = styled(Flex)`
  max-width: 800px;
  max-height: 600px;
  min-width: 400px;
  min-height: 100px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.modalPrimary};
  background-color: ${(props) => props.theme.backgroundPrimary};
  overflow-y: auto;
`;

const ModalHeader = styled(Flex)`
  width: 100%;
  padding: 1rem;
  font-weight: 800;
  font-size: 20px;
  border-bottom: 1px solid ${(props) => props.theme.dividerPrimary};
`;

const CancelIcon = styled.img`
  width: 28px;
  cursor: pointer;
`;

const ModalActorImage = styled.img`
  width: 45%;
  min-width: 300px;
  padding: 1rem;
`;

const ModalContents = styled.div`
  width: 50%;
  padding: 1rem;
  @media (max-width: 635px) {
    width: 100%;
  }
`;

const ActorModal = (props: IActorModal) => {
  const { actor, onClose } = props;
  return (
    <ModalDimmer $justify="center" $align="center">
      <ModalContainer $wrap="wrap">
        <ModalHeader $justify="space-between" $align="center">
          <h1>{actor?.name}</h1>
          <CancelIcon
            src={`${process.env.PUBLIC_URL}/cancel.svg`}
            alt="Cancel Button"
            onClick={onClose}
          />
        </ModalHeader>
        <Flex $wrap="wrap" $justify="center" $align="center">
          <ModalActorImage
            src={
              actor?.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor?.profile_path}`
                : `${process.env.PUBLIC_URL}/noImage.png`
            }
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
