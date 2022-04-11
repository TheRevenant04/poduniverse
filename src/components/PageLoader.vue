<template>
  <section>
    <b-notification :closable="false">
      <b-loading
        :is-full-page="isFullPage"
        v-model="isLoading"
        :can-cancel="false"
      >
        <b-icon
          pack="fas"
          icon="sync-alt"
          size="is-large"
          custom-class="fa-spin"
        >
        </b-icon>
      </b-loading>
    </b-notification>
  </section>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
    default() {
      return true;
    },
  },
  data() {
    return {
      isFullPage: true,
    };
  },
};
</script>
