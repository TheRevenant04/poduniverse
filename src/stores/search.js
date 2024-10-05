import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { getPodcastBySearchTerm } from "@/api/podcasts.api";
import httpStatusCode from "@/enums/httpStatusCode";
import Podcast from "@/dtos/Podcast";

export const useSearchStore = defineStore("search", () => {
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

  return {
    searchTerm,
    podcastSearchResultList,
    showSearchResults,
    showPageLoader,
    podcastDetails,
    podcastEpisodes,
    fetchPodcastsBySearchTerm
  };
});
