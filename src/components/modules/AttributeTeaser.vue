<script setup>
const props = defineProps({
  headlineText: { type: String },
  flowText: { type: String },
});
</script>

<template>
  <div class="py-12 pr-12 rounded-2xl pl-11 bg-teasergrey">
    <h3 class="mb-2 font-bold">{{ headlineText }}</h3>
    <span>{{ flowText }}</span>
  </div>
</template>
