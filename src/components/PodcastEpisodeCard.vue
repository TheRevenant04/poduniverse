<template>
  <div class="card podcast-episode-card">
    <div class="card-content">
      <div class="media mb-2">
        <div class="media-left">
          <figure class="image is-128x128 is-hidden-mobile">
            <img
              :src="episode.imageUrl"
              alt="image"
              style="border-radius: 1.25rem"
            />
          </figure>
          <figure class="image is-48x48 is-hidden-tablet">
            <img
              :src="episode.imageUrl"
              alt="image"
              style="border-radius: 0.75rem"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4 is-size-6-mobile">
            <a class="has-text-white" :href="episode.link" target="_blank">{{
              episode.title
            }}</a>
          </p>
          <content-collapse
            :content="formattedEpisodeDescription"
            class="is-hidden-mobile"
          />
          <p class="subtitle is-6 is-hidden-mobile mt-2">
            {{ episode.datePublished }} - {{ formattedEpisodeDuration }}
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-full">
          <content-collapse
            :content="formattedEpisodeDescription"
            class="is-hidden-tablet"
          />
          <p class="subtitle is-6 is-hidden-tablet is-size-7-mobile mt-1">
            {{ episode.datePublished }} - {{ formattedEpisodeDuration }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs';
import ContentCollapse from './ContentCollapse.vue';

export default {
  components: { ContentCollapse },
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedEpisodeDescription() {
      try {
        return this.episode.description.replace(/(<([^>]+)>)/gi, '');
      } catch (exception) {
        return this.episode.description;
      }
    },
    formattedEpisodeDuration() {
      try {
        const time = dayjs.duration({ seconds: this.episode.duration });
        const hours = time.asHours();
        if (hours >= 1) {
          const parsedHours = Math.trunc(hours);
          const parsedMinutes = Number((hours - parsedHours).toFixed(2));
          const formattedHours = dayjs.duration({ hours: parsedHours }).humanize();
          const formattedMinutes = dayjs.duration({ hours: parsedMinutes }).humanize();
          return `${formattedHours} ${formattedMinutes}`;
        }
        const minutes = time.asMinutes();
        const parsedMinutes = Math.trunc(minutes);
        const parsedSeconds = Number((minutes - parsedMinutes).toFixed(2));
        const formattedMinutes = dayjs.duration({ minutes: parsedMinutes }).humanize();
        const formattedSeconds = dayjs.duration({ minutes: parsedSeconds }).humanize();
        return `${formattedMinutes} ${formattedSeconds}`;
      } catch (exception) {
        return null;
      }
    },
  },
};
</script>
<style scoped>
.podcast-episode-card {
  background-color: #363636;
  border-radius: 1.25rem;
}
</style>
