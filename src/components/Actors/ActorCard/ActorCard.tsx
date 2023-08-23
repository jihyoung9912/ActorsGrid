import { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common';
import ActorModal from '../ActorModal/ActorModal';
import SkeletonCard from '../ActorCardSkeleton/SkeletonCard';
import { IActorData } from 'types/IActors';

const ActorCardContainer = styled(Flex)`
  width: 13rem;
  height: 24rem;
  box-shadow:
    -10px -10px 15px 0px #f6f6f6,
    10px 10px 15px 0px #cecece;
  border-radius: 13px;
  background-color: #f0f0f3;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const ActorImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 13px;
`;

const ActorNameContainer = styled(Flex)`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  height: 20%;
`;

const ActorCard = (props: any) => {
  const { actorsData, isLoading } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActor, setSelectedActor] = useState<IActorData | null>(null);

  // Manage Modal and provide actors data to Modal Component
  const handleActorModal = (actor: IActorData) => {
    setSelectedActor(actor);
    setIsModalOpen(true);
  };

  return (
    <Flex $wrap="wrap" $justify="flex-start" $gap="1rem">
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
          <SkeletonCard />
        ),
      )}
      {isModalOpen && <ActorModal actor={selectedActor} onClose={() => setIsModalOpen(false)} />}
    </Flex>
  );
};

export default ActorCard;
