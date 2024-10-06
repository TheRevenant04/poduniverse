<template>
  <p :class="isExpanded ? '' : `line-clamp-1`" class="text-sm">{{ content }}</p>
  <Button text as="a" class="p-0 text-sm" @click="toggle">{{ buttonLabel }}</Button>
</template>
<script setup>
import Button from "primevue/button";
import { computed, ref } from "vue";

defineProps({
  content: {
    type: String,
    required: true
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

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
