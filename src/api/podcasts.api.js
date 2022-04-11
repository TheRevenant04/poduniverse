import httpClient from './httpClient';

const END_POINT = '/search/byterm';

const getPodcastBySearchTerm = (searchTerm) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  httpClient
    .get(END_POINT, {
      params: {
        q: searchTerm,
      },
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });

export default getPodcastBySearchTerm;
