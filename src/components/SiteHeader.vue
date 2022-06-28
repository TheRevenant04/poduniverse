<template>
  <b-navbar class="nav-style">
    <template #brand>
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'Home' }"
        class="primary-color"
      >
        Poduniverse
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#"></b-navbar-item>
      <b-navbar-item href="#"></b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div"> </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-style {
  background-color: #000000;
}
</style>
