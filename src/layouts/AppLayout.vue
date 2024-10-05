<template>
  <loader v-if="searchStore.showPageLoader" />
  <div v-else class="flex flex-col min-h-screen">
    <app-navbar class="flex-shrink-0" />
    <div
      class="flex-grow flex justify-center bg-custom-gradient-light dark:bg-custom-gradient-dark"
    >
      <div class="w-[95%] p-4">
        <router-view />
      </div>
    </div>
    <app-footer class="flex-shrink-0" />
  </div>
</template>
<script setup>
import AppNavbar from "./AppNavbar.vue";
import AppFooter from "./AppFooter.vue";
import Loader from "../components/Loader.vue";
import { useSearchStore } from "@/stores/search";

const searchStore = useSearchStore();
</script>
