<script setup>
const props = defineProps({
  headlineText: { type: String },
  flowText: { type: String },
  imageLink: { type: String },
  svgContent: { type: String },
});
</script>

<template>
  <div class="transition-all basis-full sm:basis-2/4 xl:basis-1/3 group">
    <div
      class="relative group-hover:bg-none group-hover:after:opacity-100 after:transition-all xl:pt-40 pt-12 pb-12 pr-12 xl:min-h-[680px] bg-center bg-no-repeat bg-cover rounded-2xl after:rounded-2xl pl-11 after:absolute after:top-0 after:right-0 after:z-10 after:left-0 after:bottom-0 after:h-full after:w-full after:bg-teasergrey after:opacity-55"
      :style="{ backgroundImage: 'url(' + imageLink + ')' }"
    >
      <div
        class="flex flex-col items-center justify-center text-center transition-all group-hover:-mt-20"
      >
        <div
          class="z-20 flex items-center justify-center w-24 h-24 rounded-full xl:w-44 xl:h-44 bg-blue"
          v-html="svgContent"
        ></div>
        <h3
          class="z-20 mt-5 mb-2 font-medium text-center transition-all group-hover:text-left group-hover:mr-auto xl:text-lg font-headline"
          v-html="headlineText"
        ></h3>
        <div
          class="z-20 invisible h-0 mt-6 text-left opacity-0 group-hover:visible group-hover:opacity-100 group-hover:h-full"
        >
          {{ flowText }}
        </div>
      </div>
    </div>
  </div>
</template>
