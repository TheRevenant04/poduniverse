<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row md:items-center gap-4 md:gap-8">
      <div class="basis-1/4">
        <img :src="podcastDetails.imageUrl" :alt="podcastDetails.title" class="rounded-xl" />
      </div>
      <div class="basis-3/4 space-y-2 md:space-y-4">
        <p class="text-base md:text-2xl text-3xl font-bold">
          {{ podcastDetails.title }}
        </p>
        <p class="text-sm md:text-xl font-bold">
          {{ podcastDetails.author }} | {{ podcastDetails.owner }}
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div>
        <Tag
          v-for="(category, key) in podcastDetails.categories"
          :key="key"
          severity="primary"
          class="text-xs md:text-sm m-1 rounded-full"
        >
          {{ category }}
        </Tag>
      </div>
      <div>
        <Button
          as="a"
          severity="secondary"
          rounded
          :href="podcastDetails.link"
          target="_blank"
          rel="noopener"
          class="text-xs md:text-base"
          >Listen Now</Button
        >
      </div>
    </div>
    <div>
      <span class="text-xl md:text-2xl font-bold">About</span>
      <content-collapse :content="podcastDetails.description" />
    </div>
    <div>
      <span class="text-xl md:text-2xl font-bold">Episodes</span>
      <podcast-episode-card
        :episode="episode"
        v-for="(episode, key) in podcastEpisodes"
        :key="key"
        class="my-5"
      />
    </div>
  </div>
</template>
<script setup>
import { usePodcastStore } from "@/stores/podcasts";
import ContentCollapse from "../components/ContentCollapse.vue";
import PodcastEpisodeCard from "../components/PodcastEpisodeCard.vue";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const podcastStore = usePodcastStore();
const { podcastDetails, podcastEpisodes } = storeToRefs(podcastStore);

const route = useRoute();

const { id: feedId } = defineProps({
  id: {
    type: String,
    required: true
  }
});
onMounted(async () => {
  try {
    if (feedId !== "") {
      await podcastStore.fetchPodcastsByFeedId(feedId);
      await podcastStore.fetchEpisodesByFeedId(feedId);
      if (podcastDetails === null) {
        this.$router.push({
          name: "notFound",
          params: { pathMatch: this.$route.path.substring(1).split("/") },
          query: route.query,
          hash: route.hash
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
});
</script>
