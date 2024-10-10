<template>
  <form class="w-full md:w-1/2" @submit.prevent="search">
    <InputGroup>
      <InputText placeholder="Find an amazing podcast" size="large" v-model="searchTerm" />
      <Button type="submit" icon="pi pi-search" severity="primary" />
    </InputGroup>
  </form>
</template>

<script setup>
import { usePodcastStore } from "@/stores/podcasts";
import { computed } from "vue";

const searchStore = usePodcastStore();
const searchTerm = computed({
  get: () => searchStore.searchTerm,
  set: (value) => (searchStore.searchTerm = value)
});

const search = async () => {
  searchStore.fetchPodcastsBySearchTerm(searchTerm.value);
};
</script>
