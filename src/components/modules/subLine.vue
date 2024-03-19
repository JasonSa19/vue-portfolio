<script setup>
const props = defineProps({
  sublineText: { type: String },
});
</script>

<template>
  <div
    class="inline-flex items-center py-2 pr-5 mb-5 -ml-4 pl-36 rounded-3xl bg-lightgrey"
  >
    <span class="text-sm font-headline">{{ sublineText }}</span>
  </div>
</template>
