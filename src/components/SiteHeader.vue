<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"> </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#"></b-navbar-item>
      <b-navbar-item href="#"></b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#"></b-navbar-item>
        <b-navbar-item href="#"></b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div"> </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {};
</script>
