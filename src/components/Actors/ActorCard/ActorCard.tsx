import { useState } from 'react';
import styled from 'styled-components';
import { FlexWrapper } from 'components/common';
import ActorModal from '../ActorModal/ActorModal';
import SkeletonCard from '../ActorCardSkeleton/SkeletonCard';
import { IActorData } from 'types/IActors';

interface IActorCard {
  actorsData: IActorData[];
  isLoading: boolean;
}

const ActorCardContainer = styled(FlexWrapper)`
  width: 12rem;
  @media (max-width: 465px) {
    width: 45%;
    height: 19rem;
  }
  height: 22rem;
  border-radius: 13px;
  box-shadow: ${(props) => props.theme.boxShadowPrimary};
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const ActorImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 13px 13px 0 0;
`;

const ActorNameContainer = styled(FlexWrapper)`
  width: 100%;
  height: 20%;
  font-size: 1.1rem;
  @media (max-width: 465px) {
    font-size: 0.8rem;
  }
  font-weight: 600;
`;

const ActorCard = (props: IActorCard) => {
  const { actorsData, isLoading } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActor, setSelectedActor] = useState<IActorData | null>(null);

  // Manage Modal and provide actors data to Modal Component
  const handleActorModal = (actor: IActorData) => {
    setSelectedActor(actor);
    setIsModalOpen(true);
  };

  return (
    <FlexWrapper $wrap="wrap" $justify="flex-start" $gap="1rem">
      {actorsData.map((actor: IActorData, index: number) =>
        isLoading ? (
          <ActorCardContainer
            key={actor.id + actor.name + index}
            $wrap="wrap"
            onClick={() => handleActorModal(actor)}
          >
            <ActorImg
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : `${process.env.PUBLIC_URL}/noImage.png`
              }
              alt={actor.name}
            />
            <ActorNameContainer $justify="center" $align="center">
              <h1>{actor.name}</h1>
            </ActorNameContainer>
          </ActorCardContainer>
        ) : (
          <SkeletonCard key={actor.id + actor.name + index} />
        ),
      )}
      {isModalOpen && <ActorModal actor={selectedActor} onClose={() => setIsModalOpen(false)} />}
    </FlexWrapper>
  );
};

export default ActorCard;
