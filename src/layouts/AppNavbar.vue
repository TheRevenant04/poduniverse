<template>
  <div class="card">
    <menu-bar :model="items">
      <template #item="{ item }">
        <router-link :to="{ name: item.routeName }">
          {{ item.label }}
        </router-link>
      </template>
    </menu-bar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    label: "Logo",
    icon: "pi pi-home",
    routeName: "landing"
  }
]);
</script>
