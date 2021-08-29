<template>
  <Navigation />
  <div class="content">
    <router-view />
  </div>
</template>
<script>
import Navigation from "@/layouts/Navigation";
export default {
  components: { Navigation },
};
</script>
