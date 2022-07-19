<template>
  <div class="container min-page-height">
    <div v-if="showPageLoader" class="column is-full">
      <loader :isFullPage="true" :isLoading="showPageLoader" />
    </div>
    <div v-else-if="podcastDetails !== null">
      <div class="columns is-multiline is-mobile mt-4 is-centered is-vcentered">
        <div class="column is-6-mobile is-4-tablet is-3-desktop">
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
        <div class="column is-6-mobile is-8-tablet is-9-desktop">
          <p class="title is-3 is-size-5-mobile has-text-white">
            {{ podcastDetails.title }}
          </p>
          <p class="title is-5 is-size-7-mobile has-text-white">
            {{ podcastDetails.author }} | {{ podcastDetails.owner }}
          </p>
          <b-taglist class="mt-4 is-hidden-touch">
            <b-tag
              v-for="(category, key) in podcastDetails.categories"
              :key="key"
              type="is-secondary"
              rounded
              class="has-background-primary has-text-white"
              >{{ category }}</b-tag
            >
          </b-taglist>
          <b-button
            type="is-primary"
            class="has-background-white has-text-primary is-hidden-touch"
            rounded
            @click="openPodcastSource"
            >Listen Now</b-button
          >
        </div>
      </div>
      <div class="columns">
        <div class="column is-full">
          <b-taglist class="is-hidden-desktop">
            <b-tag
              v-for="(category, key) in podcastDetails.categories"
              :key="key"
              type="is-secondary"
              rounded
              class="has-background-primary has-text-white"
              >{{ category }}</b-tag
            >
          </b-taglist>
        </div>
      </div>
      <div class="columns is-multiline is-desktop">
        <div class="column is-12">
          <h3 class="title is-3 is-size-5-mobile mb-3 has-text-white">About</h3>
          <content-collapse :content="podcastDetails.description" />
        </div>
      </div>
      <div class="columns is-multiline">
        <div class="column is-12">
          <h3 class="title is-3 is-size-5-mobile has-text-white">Episodes</h3>
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
      if (feedId !== '') {
        await this.fetchPodcastsByFeedId(feedId);
        await this.fetchEpisodesByFeedId(feedId);
        if (this.$store.getters.podcastDetails === null) {
          this.$router.push({
            name: 'notFound',
            params: { pathMatch: this.$route.path.substring(1).split('/') },
            query: this.$route.query,
            hash: this.$route.hash,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
