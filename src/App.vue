<template>
  <div class="base-theme">
    <site-header class="mb-4" />
    <div class="container">
      <router-view></router-view>
    </div>
    <site-footer class="mt-4" />
  </div>
</template>
<script>
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

export default {
  components: { SiteHeader, SiteFooter },
};
</script>
