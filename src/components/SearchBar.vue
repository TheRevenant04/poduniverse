<template>
  <section>
    <b-field label="Find a podcast" class="p-2">
      <b-input
        v-model="searchTerm"
        placeholder="Search..."
        rounded
        type="search"
        icon="magnify"
        icon-clickable
        @icon-click="search"
      >
      </b-input>
    </b-field>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    ...mapGetters(['podcastSearchResultList']),
  },
  methods: {
    async search() {
      try {
        console.log(this.searchTerm);
        if (this.searchTerm !== '') {
          await this.fetchPodcasts(this.searchTerm);
          console.log(this.podcastSearchResultList);
        }
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(['fetchPodcasts']),
  },
};
</script>
