<template>
  <div class="card" style="border-radius: 1.75rem; background-color: #0d0d0d">
    <div class="card-image">
      <figure class="image is-square">
        <img :src="image" :alt="title" style="border-radius: 1.25rem" />
      </figure>
    </div>
    <div class="card-content" style="padding: 0 !important">
      <div class="media">
        <div class="media-content text-limit">
          <p style="color: #ffffff">{{ title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.text-limit > p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
