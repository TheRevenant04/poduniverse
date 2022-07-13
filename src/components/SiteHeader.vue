<template>
  <b-navbar class="nav-style" fixed-top :mobile-burger="false">
    <template #brand>
      <b-navbar-item :href="appUrl" class="has-text-primary">
        Poduniverse
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  computed: {
    appUrl() {
      return process.env.VUE_APP_APP_BASE_URL;
    },
  },
};
</script>
<style scoped>
.nav-style {
  background-color: #000000;
  font-family: "Lobster", cursive;
  font-size: 2rem;
}
</style>
