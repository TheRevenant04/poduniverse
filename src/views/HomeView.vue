<template>
  <div v-if="searchStore.showSearchResults" class="flex flex-col items-center">
    <search-bar />
    <div class="flex flex-col items-center mt-5 md:mt-10">
      <span class="text-xl md:text-2xl mb-5 md:mb-10">Results</span>
      <podcast-card-grid />
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-full">
    <search-bar />
  </div>
</template>
<script setup>
import { usePodcastStore } from "@/stores/podcasts";
import SearchBar from "../components/SearchBar.vue";
import PodcastCardGrid from "@/components/PodcastCardGrid.vue";
const searchStore = usePodcastStore();
</script>
