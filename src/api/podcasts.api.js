import HttpClient from './httpClient';

const getPodcastBySearchTerm = (searchTerm) => {
  const apiClient = new HttpClient();
  const httpClient = apiClient.getHttpClient();
  // eslint-disable-next-line implicit-arrow-linebreak
  return httpClient
    .get('/search/byterm', {
      params: {
        q: searchTerm,
      },
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

const getPodcastByFeedId = (feedId) => {
  const apiClient = new HttpClient();
  const httpClient = apiClient.getHttpClient();
  // eslint-disable-next-line implicit-arrow-linebreak
  return httpClient
    .get('/podcasts/byfeedid', {
      params: {
        id: feedId,
      },
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

const getEpisodesByFeedId = (feedId) => {
  const apiClient = new HttpClient();
  const httpClient = apiClient.getHttpClient();
  // eslint-disable-next-line implicit-arrow-linebreak
  return httpClient
    .get('/episodes/byfeedid', {
      params: {
        id: feedId,
      },
    })
    .catch((error) => {
      console.log(error.response);
      return error.response;
    });
};

export { getPodcastBySearchTerm, getPodcastByFeedId, getEpisodesByFeedId };
