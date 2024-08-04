<template>
  <div class="flex flex-col min-h-screen">
    <app-navbar class="flex-shrink-0" />
    <div class="flex-grow flex justify-center">
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
</script>
<style scoped></style>
