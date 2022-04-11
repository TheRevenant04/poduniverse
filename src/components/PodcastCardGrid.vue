<template>
  <div class="columns is-multiline is-desktop p-2">
    <div
      v-for="(podcast, key) in podcastSearchResultList"
      :key="key"
      class="column is-3"
    >
      <podcast-card
        :id="podcast.id"
        :title="podcast.title"
        :image="podcast.imageUrl"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PodcastCard from './PodcastCard.vue';

export default {
  components: { PodcastCard },
  computed: {
    ...mapGetters(['podcastSearchResultList']),
  },
};
</script>
