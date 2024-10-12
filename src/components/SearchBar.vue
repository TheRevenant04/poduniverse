<template>
  <form class="w-full md:w-1/2" @submit.prevent="search">
    <InputGroup>
      <InputText placeholder="Find an amazing podcast" v-model="searchTerm" />
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
<style scoped>
.p-inputgroup > .p-inputtext {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 1.5rem;
}
.p-inputgroup > .p-button {
  border-top-left-radius: 0px;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 0px;
}
</style>
