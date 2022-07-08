<template>
  <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="false">
    <b-icon
      pack="fas"
      icon="arrows-rotate"
      size="is-large"
      type="is-primary"
      custom-class="fa-spin"
    >
    </b-icon>
  </b-loading>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    isFullPage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
