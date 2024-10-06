<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
    <div v-for="(podcast, key) in podcastSearchResultList" :key="key" class="px-3 mb-5">
      <router-link :to="{ name: 'podcast', params: { id: podcast.id } }">
        <podcast-card :id="podcast.id" :title="podcast.title" :image="podcast.imageUrl" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { usePodcastStore } from "@/stores/podcasts";
import PodcastCard from "./PodcastCard.vue";
import { computed } from "vue";

const searchStore = usePodcastStore();

const podcastSearchResultList = computed(() => {
  return searchStore.podcastSearchResultList;
});
</script>
