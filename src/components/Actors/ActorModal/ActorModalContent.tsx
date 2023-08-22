import styled from 'styled-components';
import { Flex } from 'components/common';
import { IActorModalContent } from 'types/IActors';

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
  width: 10rem;
  height: 7rem;
  margin-bottom: 1rem;
`;

const ActorModalContent = (actor: IActorModalContent) => {
  const actorInfo = actor.actor;
  console.log(actorInfo);
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
        <Flex $gap="8px" $align="center">
          <ActorKnownForImg
            src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
            alt={actorInfo.name}
          />
          <ActorContentInfo>{data?.original_title}</ActorContentInfo>
        </Flex>
      ))}
    </>
  );
};

export default ActorModalContent;
