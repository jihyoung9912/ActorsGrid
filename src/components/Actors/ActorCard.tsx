import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common';
import { fetchPopularActorsList, fetchActorsListWithKeyword } from 'apis/apis';
import throttle from 'utils/throttle';
import ActorModal from './ActorModal/ActorModal';
import { IActorData } from 'types/IActors';
import { SearchedText } from 'types/ISearchedText';

const ActorCardContainer = styled(Flex)`
  width: 13rem;
  height: 20rem;
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

const ActorCard = (props: SearchedText) => {
  const { searchedActor } = props;
  const [actorsData, setActorsData] = useState<IActorData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isInitialFetch, setIsInitialFetch] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActor, setSelectedActor] = useState<IActorData | null>(null);

  /*
   * @params pageNumber
   * Fetch Popular Actors data with page number
   */
  const fetchPopularActorsData = async (page: number) => {
    try {
      if (searchedActor) {
        const response = await fetchActorsListWithKeyword(page, searchedActor);
        if (isInitialFetch) {
          setActorsData(response.results);
          setIsInitialFetch(false);
        }
        setActorsData((prevActorsData) => [...prevActorsData, ...response.results]);
      } else {
        const response = await fetchPopularActorsList(page);
        setActorsData((prevActorsData) => [...prevActorsData, ...response.results]);
      }
    } catch (error) {
      console.error('Error fetching actor data:', error);
    }
  };

  // Data Fetching when pageNumber changed
  useEffect(() => {
    fetchPopularActorsData(pageNumber);
  }, [searchedActor, pageNumber]);

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

export default ActorCard;
