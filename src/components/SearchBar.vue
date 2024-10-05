<template>
  <form class="w-full md:w-1/2" @submit.prevent="search">
    <InputGroup>
      <InputText placeholder="Find an amazing podcast" size="large" v-model="searchTerm" />
      <Button icon="pi pi-search" severity="primary" />
    </InputGroup>
  </form>
</template>

<script setup>
import { useSearchStore } from "@/stores/search";
import { computed } from "vue";

const searchStore = useSearchStore();
const searchTerm = computed({
  get: () => searchStore.searchTerm,
  set: (value) => (searchStore.searchTerm = value)
});

const search = async () => {
  searchStore.fetchPodcastsBySearchTerm(searchTerm.value);
};
</script>
