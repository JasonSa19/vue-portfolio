<script setup>
const props = defineProps({
  headlineText: { type: String },
  flowText: { type: String },
  imageLink: { type: String },
});
</script>

<template>
  <div class="p-4 basis-full sm:basis-2/4 xl:basis-1/4">
    <div
      class="relative py-12 pr-12 bg-center bg-no-repeat bg-cover rounded-2xl after:rounded-2xl pl-11 after:absolute after:top-0 after:right-0 after:z-10 after:left-0 after:bottom-0 after:h-full after:w-full after:bg-teasergrey after:opacity-55"
      :style="{ backgroundImage: 'url(' + imageLink + ')' }"
    >
      <div class="flex flex-col items-center justify-center text-center">
        <h3 class="z-20 mb-2 font-bold font-headline">{{ headlineText }}</h3>
        <div class="z-20 invisible h-0 opacity-0">{{ flowText }}</div>
      </div>
    </div>
  </div>
</template>
