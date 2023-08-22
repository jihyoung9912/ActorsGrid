import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common';
import { fetchPopularActorsList } from 'apis/apis';

interface IActorData {
  profile_path: string;
  name: string;
}

const ActorCardContainer = styled(Flex)`
  width: 13rem;
  height: 300px;
  background-color: #f0f0f3;
  box-shadow:
    -10px -10px 15px 0px #f6f6f6,
    10px 10px 15px 0px #cecece;
  border-radius: 13px;
  //box-shadow:
  //  inset -7px -7px 5px 0px #f6f6f6,
  //  inset 7px 7px 5px 0px #cecece;
  transition: 0.5s all ease-in-out;
  margin: 1rem;
`;

const ActorImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 13px;
  background-color: black;
`;

const ActorNameContainer = styled(Flex)`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 20%;
`;

const ActorCard: React.FC = () => {
  const [actorsData, setActorsData] = useState<IActorData[]>([]);

  useEffect(() => {
    if (!actorsData.length) {
      fetchPopularActorsData();
    }
  }, [actorsData]);

  const fetchPopularActorsData = async () => {
    try {
      const response = await fetchPopularActorsList(1); // Fetch actors data using your fetchPopularActorsList function
      setActorsData(response.results);
    } catch (error) {
      console.error('Error fetching actor data:', error);
    }
  };

  console.log(actorsData);

  return (
    <Flex $wrap="wrap" $justify="flex-start">
      {actorsData.map((actor, index) => (
        <ActorCardContainer key={index} $wrap="wrap">
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
