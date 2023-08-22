import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common';
import { fetchPopularActorsList } from 'apis/apis';
import throttle from 'utils/throttle';

interface IActorData {
  profile_path: string;
  name: string;
}

const ActorCardContainer = styled(Flex)`
  width: 13rem;
  height: 20rem;
  box-shadow:
    -10px -10px 15px 0px #f6f6f6,
    10px 10px 15px 0px #cecece;
  border-radius: 13px;
  background-color: #f0f0f3;
  //box-shadow:
  //  inset -7px -7px 5px 0px #f6f6f6,
  //  inset 7px 7px 5px 0px #cecece;
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

const ActorCard = () => {
  const [actorsData, setActorsData] = useState<IActorData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

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

  return (
    <Flex $wrap="wrap" $justify="center" $gap="1rem">
      {actorsData.map((actor, index) => (
        <ActorCardContainer key={actor.name + index} $wrap="wrap">
          <ActorImg
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
          />
          <ActorNameContainer $justify="center" $align="center">
            <h1>{actor.name}</h1>
          </ActorNameContainer>
        </ActorCardContainer>
      ))}
    </Flex>
  );
};

export default ActorCard;
