<script setup>
const props = defineProps({
  buttonText: { type: String },
  link: { type: String },
});
</script>

<template>
  <a :href="link" class="main-btn">
    {{ buttonText }}
  </a>
</template>

<style scoped></style>
