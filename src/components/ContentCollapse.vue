<template>
  <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y4">
    <template #trigger="props">
      <p v-if="!props.open" class="text-limit">
        {{ content }}
      </p>
      <a aria-controls="contentIdForA11y4" :aria-expanded="props.open">
        {{ !props.open ? "Show more" : "Show less" }}
      </a>
    </template>
    <p class="">{{ content }}</p>
  </b-collapse>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
