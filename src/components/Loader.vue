<template>
  <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="false">
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
