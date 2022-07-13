<template>
  <div>
    <site-header />
    <div class="container is-custom-fluid mt-4 mb-4">
      <router-view></router-view>
    </div>
    <site-footer />
  </div>
</template>
<script>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

export default {
  components: { SiteHeader, SiteFooter },
};
</script>
