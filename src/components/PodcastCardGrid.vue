<template>
  <div class="columns is-multiline is-mobile p-2">
    <div
      v-for="(podcast, key) in podcastSearchResultList"
      :key="key"
      class="column is-6-mobile is-3-tablet is-2-desktop"
    >
      <router-link :to="{ name: 'podcast', params: { id: podcast.id } }">
        <podcast-card
          :id="podcast.id"
          :title="podcast.title"
          :image="podcast.imageUrl"
        />
      </router-link>
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
