<template>
  <div ref="navigation" id="navigation" class="navigation">
    <div class="logo">
      <img src="/images/Pokemon-Logo.png" />
    </div>
    <div class="items">
      <a class="nav-link" href="/register">Bookings</a>
      <a class="nav-link" href="/register">Register</a>
      <button class="btn btn--secondary round">Register</button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Navigation",
  setup() {
    const navigation = ref(null);
    // const pageYOffset = ref(windows.pageYOffset);
    // function scroll() {
    //   if (pageYOffset.value > navigation.value.offsetTop.value) {
    //     console.log(navigation.value);
    //   }
    // }

    // window.addEventListener("scroll", scroll);

    return {
      navigation,
    };
  },
};
</script>
