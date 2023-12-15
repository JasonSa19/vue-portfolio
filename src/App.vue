<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="text-center selection:bg-green-100">
    <img class="mx-auto mb-8 mt-12" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vite + Vue 3 + Tailwindcss v3" />
    <img
      class="mx-auto my-12"
      alt="powered-by"
      src="./assets/powered-by-vitawind-bright.png"
    />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
