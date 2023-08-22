import styled from 'styled-components';
import { Flex } from 'components/common';
import { IActorModalContent } from 'types/IActors';
import React from 'react';

const ActorContentContainer = styled(Flex)`
  margin-bottom: 1rem;
`;

const ActorContentTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const ActorContentInfo = styled.span`
  font-size: 17px;
`;

const ActorKnownForImg = styled.img`
  width: 90%;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateX(-5%);
  }
`;

const ActorModalContent = (actor: IActorModalContent) => {
  const actorInfo = actor.actor;
  return (
    <>
      <ActorContentContainer $gap="8px">
        <ActorContentTitle>Gender: </ActorContentTitle>
        <ActorContentInfo>{actorInfo?.gender === 2 ? 'Male' : 'Female'}</ActorContentInfo>
      </ActorContentContainer>
      <ActorContentContainer $gap="8px">
        <ActorContentTitle>Popularity: </ActorContentTitle>
        <ActorContentInfo>{actorInfo?.popularity}</ActorContentInfo>
      </ActorContentContainer>
      <ActorContentContainer $gap="8px">
        <ActorContentTitle>Known for: </ActorContentTitle>
        <ActorContentInfo>{actorInfo?.known_for_department}</ActorContentInfo>
      </ActorContentContainer>
      {actorInfo?.known_for.map((data: any) => (
        <ActorKnownForImg
          src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
          alt={actorInfo.name}
        />
      ))}
    </>
  );
};

export default ActorModalContent;
