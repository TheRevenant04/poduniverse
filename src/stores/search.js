import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { getPodcastBySearchTerm } from "@/api/podcasts.api";
import httpStatusCode from "@/enums/httpStatusCode";

export const useSearchStore = defineStore("search", () => {
  const searchString = ref("");
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
      console.log(response);
      if (response.status === httpStatusCode.OK) {
        podcastSearchResultList.value = response.data.feeds;
        showSearchResults.value = true;
      } else {
        podcastSearchResultList.value = null;
      }
    } catch (error) {
      podcastSearchResultList.value = null;
    } finally {
      showPageLoader.value = false;
    }
  };

  return {
    searchString,
    podcastSearchResultList,
    showSearchResults,
    showPageLoader,
    podcastDetails,
    podcastEpisodes,
    fetchPodcastsBySearchTerm
  };
});
