<script setup>
const props = defineProps({
  sublineText: { type: String },
});
</script>

<template>
  <div class="inline-block w-full rounded-3xl bg-lightgrey">
    <span>{{ sublineText }}</span>
  </div>
</template>
