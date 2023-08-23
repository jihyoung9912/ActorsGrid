import React, { useEffect, useState } from 'react';
import { Flex } from 'components/common';
import { fetchPopularActorsList } from 'apis/apis';
import ActorModal from 'components/Actors/ActorModal/ActorModal';
import { ActorCardContainer, ActorImg, ActorNameContainer } from 'components/Actors/ActorComponent';
import throttle from 'utils/throttle';
import { IActorData } from 'types/IActors';

const ActorSearchCard = () => {
  const [actorsData, setActorsData] = useState<IActorData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActor, setSelectedActor] = useState<IActorData | null>(null);

  /*
   * @params pageNumber
   * Fetch Popular Actors data with page number
   */
  const fetchPopularActorsData = async (page: number) => {
    try {
      const response = await fetchPopularActorsList(page);
      setActorsData((prevActorsData) => [...prevActorsData, ...response.results]);
    } catch (error) {
      console.error('Error fetching actor data:', error);
    }
  };

  // Data Fetching when pageNumber changed
  useEffect(() => {
    fetchPopularActorsData(pageNumber);
  }, [pageNumber]);

  // Scrolling Events Handlers with Throttling
  const handleScroll = throttle(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      // Increase pageNumber for next page
      fetchPopularActorsData(pageNumber + 1);
      // Update pageNumber state
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }, 500);

  // Manage scrolling Events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Manage Modal and provide actors data to Modal Component
  const handleActorModal = (actor: IActorData) => {
    setSelectedActor(actor);
    setIsModalOpen(true);
  };

  return (
    <Flex $wrap="wrap" $justify="center" $gap="1rem">
      {actorsData.map((actor, index) => (
        <ActorCardContainer
          key={actor.id + index}
          $wrap="wrap"
          onClick={() => handleActorModal(actor)}
        >
          <ActorImg
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
          />
          <ActorNameContainer $justify="center" $align="center">
            <h1>{actor.name}</h1>
          </ActorNameContainer>
        </ActorCardContainer>
      ))}
      {isModalOpen && <ActorModal actor={selectedActor} onClose={() => setIsModalOpen(false)} />}
    </Flex>
  );
};

export default ActorSearchCard;
