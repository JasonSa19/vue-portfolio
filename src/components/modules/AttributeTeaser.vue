<script setup>
const props = defineProps({
  headlineText: { type: String },
  flowText: { type: String },
});
</script>

<template>
  <div class="h-full p-4 basis-full sm:basis-2/4 xl:basis-1/4">
    <div
      class="h-full min-h-[19rem] py-12 pr-12 rounded-2xl pl-11 bg-teasergrey"
    >
      <h3 class="mb-2 font-bold font-headline">{{ headlineText }}</h3>
      <span>{{ flowText }}</span>
    </div>
  </div>
</template>
