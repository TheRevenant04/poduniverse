<template>
  <div class="relative pb-[100%]">
    <img
      :src="image"
      :alt="title"
      class="absolute inset-0 w-full h-full object-cover rounded-[1.75rem]"
    />
  </div>
  <div class="media">
    <div class="media-content text-limit">
      <p class="text-sm md:text-base truncate text-center">{{ title }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>
