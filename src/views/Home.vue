<template>
  <div>
    <div class="columns page-height is-centered is-vcentered">
      <div v-if="showPageLoader" class="column is-full">
        <loader :isFullPage="true" :isLoading="showPageLoader" />
      </div>
      <div
        v-else-if="showSearchResults"
        class="column is-full has-text-centered"
      >
        <div class="columns is-centered is-vcentered">
          <div class="column is-two-thirds m-4">
            <search-bar />
          </div>
        </div>
        <h2 class="title is-3 primary-color">Search Results</h2>
        <section v-if="podcastSearchResultList.length == 0">
          <h2 class="has-text-white">No results found</h2>
        </section>
        <podcast-card-grid v-else />
      </div>
      <div v-else class="column is-two-thirds">
        <search-bar />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Loader from '../components/Loader.vue';
import PodcastCardGrid from '../components/PodcastCardGrid.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['podcastSearchResultList', 'showSearchResults', 'showPageLoader']),
  },
  components: { SearchBar, PodcastCardGrid, Loader },
  methods: {
    ...mapActions(['fetchPodcastsBySearchTerm']),
  },
};
</script>
