<script setup>
import Intro from "./components/Intro.vue";
</script>

<template>
  <div class="text-center selection:bg-green-100">
    <img class="mx-auto mb-8 mt-12" alt="Vue logo" src="./assets/logo.png" />
    <Intro msg="Vite + Vue 3 + Tailwindcss v3" />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
