import styled from 'styled-components';
import { FlexWrapper } from 'components/common';
import { IActorModalContent } from 'types/IActors';

const ActorContentContainer = styled(FlexWrapper)`
  margin-bottom: 1rem;
`;

const ActorContentTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
`;

const ActorContentInfo = styled.span`
  font-size: 1.1rem;
`;

const ActorKnownForImg = styled.img`
  width: 10rem;
  height: 7rem;
  margin-bottom: 1rem;
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
      {actorInfo?.known_for.map((data, index) => (
        <FlexWrapper $gap="8px" $align="center" key={data?.backdrop_path + index.toString()}>
          <ActorKnownForImg
            src={
              data?.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`
                : `${process.env.PUBLIC_URL}/noImage.png`
            }
            alt={actorInfo.name}
          />
          <ActorContentInfo>{data?.original_title}</ActorContentInfo>
        </FlexWrapper>
      ))}
    </>
  );
};

export default ActorModalContent;
