<template>
  <div class="card podcast-episode-card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              :src="episode.imageUrl"
              :alt="episode.title"
              style="border-radius: 1.25rem"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <a class="has-text-white" :href="episode.link" target="_blank">{{
              episode.title
            }}</a>
          </p>
          <content-collapse :content="formattedEpisodeDescription" />
          <p class="subtitle is-6">
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
