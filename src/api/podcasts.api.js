import HttpClient from "./HttpClient";

const getPodcastBySearchTerm = (searchTerm) => {
  const apiClient = new HttpClient();
  const httpClient = apiClient.getHttpClient();
  return httpClient
    .get("/search/byterm", {
      params: {
        q: searchTerm
      }
    })
    .catch((error) => error.response);
};

const getPodcastByFeedId = (feedId) => {
  const apiClient = new HttpClient();
  const httpClient = apiClient.getHttpClient();
  return httpClient
    .get("/podcasts/byfeedid", {
      params: {
        id: feedId
      }
    })
    .catch((error) => error.response);
};

const getEpisodesByFeedId = (feedId) => {
  const apiClient = new HttpClient();
  const httpClient = apiClient.getHttpClient();
  return httpClient
    .get("/episodes/byfeedid", {
      params: {
        id: feedId
      }
    })
    .catch((error) => error.response);
};

export { getPodcastBySearchTerm, getPodcastByFeedId, getEpisodesByFeedId };
