<template>
  <menu-bar>
    <template #start>
      <router-link :to="{ name: 'landing' }" class="font-[lobster] text-primary">
        Poduniverse
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
import { useLayout } from "@/composables/layout";
const { isDarkTheme, toggleTheme } = useLayout();
</script>
