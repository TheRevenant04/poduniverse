<template>
  <menu-bar :model="items">
    <template #item="{ item }">
      <router-link :to="{ name: item.routeName }">
        {{ item.label }}
      </router-link>
    </template>
    <template #end>
      <i
        :class="['pi', { 'pi-moon': !isDarkTheme, 'pi-sun': isDarkTheme }]"
        @click="toggleTheme()"
      ></i>
    </template>
  </menu-bar>
</template>

<script setup>
import { ref } from "vue";
import { useLayout } from "@/composables/layout";
const { isDarkTheme, toggleTheme } = useLayout();

const items = ref([
  {
    label: "Logo",
    icon: "pi pi-home",
    routeName: "landing"
  }
]);
</script>
