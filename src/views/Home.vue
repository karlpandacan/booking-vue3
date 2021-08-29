<template>
  <div class="home"></div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  name: "Home",
  setup() {
    const store = inject("store");
  },
};
</script>
