<template>
  <div class="container page-height">
    <div v-if="showPageLoader" class="column is-full">
      <loader :isFullPage="true" :isLoading="showPageLoader" />
    </div>
    <div v-else>
      <div
        class="columns is-multiline is-desktop mt-4 is-centered is-vcentered"
      >
        <div class="column is-3">
          <div class="card-image">
            <figure class="image is-square">
              <img
                :src="podcastDetails.imageUrl"
                :alt="podcastDetails.title"
                style="border-radius: 1.25rem"
              />
            </figure>
          </div>
        </div>
        <div class="column is-9">
          <p class="title is-3 has-text-white">{{ podcastDetails.title }}</p>
          <p class="title is-5 has-text-white">
            {{ podcastDetails.author }} | {{ podcastDetails.owner }}
          </p>
          <b-taglist class="mt-4">
            <b-tag
              v-for="(category, key) in podcastDetails.categories"
              :key="key"
              type="is-secondary"
              rounded
              class="primary-background-color"
              >{{ category }}</b-tag
            >
          </b-taglist>
          <b-button
            type="is-primary"
            class="secondary-background-color"
            rounded
            @click="openPodcastSource"
            >Listen Now</b-button
          >
        </div>
      </div>
      <div class="columns is-multiline is-desktop">
        <div class="column is-12">
          <h3 class="title is-3 has-text-white">About</h3>
          <content-collapse :content="podcastDetails.description" />
        </div>
      </div>
      <div class="columns is-multiline is-desktop">
        <div class="column is-12">
          <h3 class="title is-3 has-text-white">Episodes</h3>
        </div>
        <div
          v-for="(episode, key) in podcastEpisodes"
          :key="key"
          class="column is-12"
        >
          <podcast-episode-card :episode="episode" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import ContentCollapse from '../components/ContentCollapse.vue';
import Loader from '../components/Loader.vue';
import PodcastEpisodeCard from '../components/PodcastEpisodeCard.vue';

export default {
  components: { Loader, PodcastEpisodeCard, ContentCollapse },
  computed: {
    ...mapGetters(['podcastDetails', 'podcastEpisodes', 'showPageLoader']),
  },
  methods: {
    ...mapActions(['fetchPodcastsByFeedId', 'fetchEpisodesByFeedId']),
    openPodcastSource() {
      window.open(this.podcastDetails.link, '_blank');
    },
  },
  async created() {
    try {
      const feedId = this.$route.params.id;
      if (this.searchTerm !== '') {
        await this.fetchPodcastsByFeedId(feedId);
        await this.fetchEpisodesByFeedId(feedId);
        console.log(this.podcastDetails);
        console.log(this.podcastEpisodes);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
