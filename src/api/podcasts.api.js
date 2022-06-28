import httpClient from './httpClient';

const getPodcastBySearchTerm = (searchTerm) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  httpClient
    .get('/search/byterm', {
      params: {
        q: searchTerm,
      },
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });

const getPodcastByFeedId = (feedId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  httpClient
    .get('/podcasts/byfeedid', {
      params: {
        id: feedId,
      },
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });

const getEpisodesByFeedId = (feedId) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  httpClient
    .get('/episodes/byfeedid', {
      params: {
        id: feedId,
      },
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });

export { getPodcastBySearchTerm, getPodcastByFeedId, getEpisodesByFeedId };
