<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";

// Define transition methods
// const beforeEnter = (el) => {
//   el.style.opacity = 0;
// };

// const enter = (el, done) => {
//   el.offsetHeight; // Trigger reflow
//   el.style.transition = "opacity 0.5s ease";
//   el.style.opacity = 1;
//   done(); // Call done when transition is complete
// };

// const leave = (el, done) => {
//   el.style.transition = "opacity 0.5s ease";
//   el.style.opacity = 0;
//   done(); // Call done when transition is complete
// };
</script>

<template>
  <transition
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <router-view></router-view>
  </transition>
  <SpeedInsights />
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
