<script setup>
const props = defineProps({
  sublineText: { type: String },
});
</script>

<template>
  <div
    class="inline-flex items-center py-2 pl-10 pr-5 mb-5 -ml-4 text-white bg-transparent xl:pl-36 rounded-3xl bg-blue dark:bg-lightgrey"
  >
    <span class="text-sm font-headline">{{ sublineText }}</span>
  </div>
</template>
