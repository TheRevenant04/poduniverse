<template>
  <footer class="flex justify-center items-center p-4">
    <p>
      {{ currentYear }} - poduniverse by
      <a :href="githubProfileUrl" target="_blank" class="text-primary"> Pritesh Parmar </a>
    </p>
  </footer>
</template>
<script setup>
import dayjs from "dayjs";
import { computed } from "vue";

const currentYear = computed(() => {
  return dayjs().year();
});
const githubProfileUrl = computed(() => {
  return import.meta.env.VITE_APP_GITHUB_PROFILE_URL;
});
</script>
