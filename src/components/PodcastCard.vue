<template>
  <div class="card" style="border-radius: 0.5rem">
    <div class="card-image">
      <figure class="image is-3by2">
        <img :src="image" :alt="title" style="border-radius: 0.5rem" />
      </figure>
    </div>
    <div class="card-content" style="padding: 0 !important">
      <div class="media">
        <div class="media-content">
          <p>{{ title }}</p>
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
