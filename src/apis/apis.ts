import fetchApi from 'utils/fetchAPI';
import { popularActorsUrl, searchActorUrl } from 'constants/urls';

type TFetchPopularActorsList = (pageNumber: number) => Promise<any>;
type TFetchActorsListWithKeyword = (pageNumber: number, name: string) => Promise<any>;

export const fetchPopularActorsList: TFetchPopularActorsList = async (pageNumber) => {
  const url = `${popularActorsUrl}?&language=en&page=${pageNumber}`;

  return await fetchApi(url);
};

export const fetchActorsListWithKeyword: TFetchActorsListWithKeyword = async (pageNumber, name) => {
  const url = `${searchActorUrl}?query=${name}&language=en&page=${pageNumber}`;

  return await fetchApi(url);
};
