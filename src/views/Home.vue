<template>
  <div class="columns min-page-height is-mobile is-centered is-vcentered">
    <div v-if="showPageLoader" class="column is-full">
      <loader :isFullPage="true" :isLoading="showPageLoader" />
    </div>
    <div v-else-if="showSearchResults" class="column is-full has-text-centered">
      <div class="columns is-centered is-vcentered">
        <div class="column is-full-mobile is-two-thirds-desktop mt-6">
          <search-bar />
        </div>
      </div>
      <h4 class="title is-size-4 has-text-primary">Search Results</h4>
      <section v-if="podcastSearchResultList.length == 0">
        <h2 class="has-text-white">No results found</h2>
      </section>
      <podcast-card-grid v-else />
    </div>
    <div v-else class="column is-full-mobile is-two-thirds-desktop">
      <search-bar />
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
