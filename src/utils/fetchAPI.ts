import { IActorResponse } from 'types/IActors';

type TFetchApi = (url: string) => Promise<IActorResponse>;

const fetchApi: TFetchApi = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `$Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };
  const response = await fetch(url, options);
  if (response.status !== 200) throw new Error();

  return response.json();
};

export default fetchApi;
