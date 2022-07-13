<template>
  <section>
    <b-field class="p-2">
      <b-input
        v-model="searchTerm"
        placeholder="Find an amazing podcast..."
        rounded
        type="search"
        icon-pack="fas"
        icon="search"
        size="is-medium"
        icon-clickable
        @icon-click="search"
        v-on:keyup.native.enter="search"
        custom-class="has-background-grey-dark has-text-white is-size-6-mobile"
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
    ...mapGetters({
      computedSearchTerm: 'searchString',
      podcastSearchResultList: 'podcastSearchResultList',
    }),
  },
  watch: {
    computedSearchTerm: {
      immediate: true,
      handler(value) {
        this.searchTerm = value;
      },
    },
  },
  methods: {
    setSearchString() {
      this.$store.commit('setSearchString', this.searchTerm);
    },
    async search() {
      try {
        this.setSearchString();
        if (this.searchTerm !== '') {
          await this.fetchPodcastsBySearchTerm(this.searchTerm);
        }
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(['fetchPodcastsBySearchTerm']),
  },
};
</script>
