import styled from 'styled-components';
import { Flex } from '../common';
import { IActorData } from 'types/IActors';
import React from 'react';

interface IActorModal {
  actor: IActorData | null;
  onClose: () => void;
}

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

const ModalContents = styled(Flex)`
  width: 40%;
  padding: 1rem;
`;

const ActorModal = (props: IActorModal) => {
  const { actor, onClose } = props;
  console.log(actor);
  return (
    <ModalDimmer $justify="center" $align="center">
      <ModalContainer $direction="column">
        <ModalHeader $justify="space-between" $align="center">
          <h1>{actor?.name}</h1>
          <CancelIcon src={`${process.env.PUBLIC_URL}/cancel.svg`} alt="Cancel Button" />
        </ModalHeader>
        <Flex $wrap="wrap" $justify="center" $align="center">
          <ModalActorImage
            src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
            alt={actor?.name}
          />
          <ModalContents $justify="center" $align="center">
            a1d1d
          </ModalContents>
        </Flex>
      </ModalContainer>
    </ModalDimmer>
  );
};

export default ActorModal;
