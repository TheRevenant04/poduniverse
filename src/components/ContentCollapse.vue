<template>
  <p :class="isExpanded ? '' : `line-clamp-1`" class="text-sm md:text-base">{{ content }}</p>
  <Button v-if="showButton" text as="a" class="p-0 text-sm md:text-base" @click="toggle">{{
    buttonLabel
  }}</Button>
</template>
<script setup>
import Button from "primevue/button";
import { computed, ref } from "vue";

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: ""
  },
  limit: {
    type: Number,
    required: false,
    default: 1
  }
});

const isExpanded = ref(false);

const buttonLabel = computed(() => {
  return isExpanded.value ? "Read Less" : "Read More";
});

const showButton = computed(() => {
  return props.content.length > 0;
});

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
