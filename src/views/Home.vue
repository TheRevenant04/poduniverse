<template>
  <div class="container" style="min-height: 500px !important">
    <section>
      <search-bar />
    </section>
    <section v-if="showPageLoader">
      <page-loader :isLoading="showPageLoader" />
    </section>
    <section v-else-if="showSearchResults">
      <h2 class="title is-4">Search Results</h2>
      <section v-if="podcastSearchResultList.length == 0">
        <h2>No results found</h2>
      </section>
      <podcast-card-grid v-else />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PageLoader from '../components/PageLoader.vue';
import PodcastCardGrid from '../components/PodcastCardGrid.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['podcastSearchResultList', 'showSearchResults', 'showPageLoader']),
  },
  components: { SearchBar, PodcastCardGrid, PageLoader },
  methods: {
    ...mapActions(['fetchPodcasts']),
  },
  created() {
    console.log(this.showPageLoader);
    console.log(this.showSearchResults);
    console.log(this.podcastSearchResultList);
    /* this.fetchPodcasts('batman university').then(() => {
      console.log(this.podcastSearchResultList);
    }); */
  },
};
</script>
