<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p class="has-text-white">
        {{ currentYear }} - poduniverse by
        <strong>
          <a :href="githubProfileUrl" target="_blank"> TheRevenant04 </a>
        </strong>
      </p>
    </div>
  </footer>
</template>
<script>
import dayjs from 'dayjs';

export default {
  computed: {
    currentYear() {
      return dayjs().year();
    },
    githubProfileUrl() {
      return process.env.VUE_APP_GITHUB_PROFILE_URL;
    },
  },
};
</script>
<style scoped>
.footer {
  padding: 1.5rem 1.5rem 1.5rem;
  background-color: #000000;
  margin-top: 22px;
}
</style>
