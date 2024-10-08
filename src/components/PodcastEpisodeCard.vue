<template>
  <Card pt:body:class="p-1">
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex gap-4 items-center">
          <div class="basis-1/4 md:basis-1/12">
            <img class="object-scale-down rounded-xl" :src="episode.imageUrl" alt="image" />
          </div>
          <div class="basis-3/4 md:basis-11/12 gap-4">
            <div class="text-base md:text-lg font-semibold line-clamp-3">
              <a :href="episode.link" target="_blank">{{ episode.title }}</a>
            </div>
          </div>
        </div>
        <div>
          <content-collapse :content="formattedEpisodeDescription" />
        </div>
        <p class="text-sm md:text-base font-semibold">
          {{ episode.datePublished }} - {{ formattedEpisodeDuration }}
        </p>
      </div>
    </template>
  </Card>
</template>
<script setup>
import dayjs from "dayjs";
import ContentCollapse from "./ContentCollapse.vue";
import { computed } from "vue";

const props = defineProps({
  episode: {
    type: Object,
    required: true
  }
});

const formattedEpisodeDescription = computed(() => {
  try {
    return props.episode.description.replace(/(<([^>]+)>)/gi, "");
  } catch (exception) {
    return props.episode.description;
  }
});

const formattedEpisodeDuration = computed(() => {
  try {
    const time = dayjs.duration({ seconds: props.episode.duration });
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
});
</script>
