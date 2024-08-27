<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <router-view></router-view>
  <SpeedInsights />
</template>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
