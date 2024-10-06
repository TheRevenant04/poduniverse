import { computed, ref } from "vue";
import { defineStore } from "pinia";
import {
  getEpisodesByFeedId,
  getPodcastByFeedId,
  getPodcastBySearchTerm
} from "@/api/podcasts.api";
import httpStatusCode from "@/enums/httpStatusCode";
import Podcast from "@/dtos/Podcast";
import Episode from "@/dtos/Episode";

export const usePodcastStore = defineStore("podcast", () => {
  const searchTerm = ref("");
  const podcastSearchResultList = ref([]);
  const showPageLoader = ref(false);
  const podcastDetails = ref({});
  const podcastEpisodes = ref({});

  const showSearchResults = computed(() => {
    return podcastSearchResultList.value && podcastSearchResultList.value.length > 0;
  });

  const fetchPodcastsBySearchTerm = async (searchTerm) => {
    try {
      showPageLoader.value = true;
      const response = await getPodcastBySearchTerm(searchTerm);
      if (response.status === httpStatusCode.OK) {
        setPodcastSearchResultList(response.data);
      } else {
        podcastSearchResultList.value = null;
      }
    } catch (error) {
      podcastSearchResultList.value = null;
    } finally {
      showPageLoader.value = false;
    }
  };

  const fetchPodcastsByFeedId = async (feedId) => {
    try {
      showPageLoader.value = true;
      const response = await getPodcastByFeedId(feedId);
      if (response.status === httpStatusCode.OK && response.data.feed.length !== 0) {
        setPodcastDetails(response.data);
      } else {
        setPodcastDetails(null);
      }
    } catch (error) {
      console.log(error);
      setPodcastDetails(null);
    } finally {
      showPageLoader.value = false;
    }
  };
  const fetchEpisodesByFeedId = async (feedId) => {
    try {
      showPageLoader.value = true;
      const response = await getEpisodesByFeedId(feedId);
      if (response.status === httpStatusCode.OK) {
        setEpisodeDetails(response.data);
      } else {
        setEpisodeDetails(null);
      }
    } catch (error) {
      console.log(error);
      setEpisodeDetails(null);
    } finally {
      showPageLoader.value = false;
    }
  };

  const setPodcastSearchResultList = (data) => {
    try {
      const podcasts = [];
      data.feeds.forEach((podcast) =>
        podcasts.push(
          new Podcast(
            podcast.id,
            podcast.title,
            podcast.author,
            podcast.description,
            podcast.ownerName,
            podcast.link,
            podcast.image,
            podcast.categories
          )
        )
      );
      podcastSearchResultList.value = podcasts;
    } catch (error) {
      console.log(error);
      podcastSearchResultList.value = null;
    }
  };

  const setPodcastDetails = (data) => {
    try {
      if (data === null) {
        podcastDetails.value = null;
      } else {
        const podcast = data.feed;
        podcastDetails.value = new Podcast(
          podcast.id,
          podcast.title,
          podcast.author,
          podcast.description,
          podcast.ownerName,
          podcast.link,
          podcast.image,
          podcast.categories
        );
      }
    } catch (error) {
      console.log(error);
      podcastDetails.value = null;
    }
  };

  const setEpisodeDetails = (data) => {
    const episodes = [];
    try {
      data.items.forEach((episode) => {
        episodes.push(
          new Episode(
            episode.id,
            episode.title,
            episode.description,
            episode.datePublishedPretty,
            episode.duration,
            episode.link,
            episode.image
          )
        );
      });
      podcastEpisodes.value = episodes;
    } catch (error) {
      console.log(error);
      podcastEpisodes.value = null;
    }
  };

  return {
    searchTerm,
    podcastSearchResultList,
    showSearchResults,
    showPageLoader,
    podcastDetails,
    podcastEpisodes,
    fetchPodcastsBySearchTerm,
    fetchPodcastsByFeedId,
    fetchEpisodesByFeedId
  };
});
