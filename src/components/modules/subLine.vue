<script setup>
const props = defineProps({
  sublineText: { type: String },
});
</script>

<template>
  <div>{{ sublineText }}</div>
</template>
