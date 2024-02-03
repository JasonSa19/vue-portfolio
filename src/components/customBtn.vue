<script setup>
import pdfFile from "./svg/pdfFile.vue";

const props = defineProps({
  buttonText: { type: String },
  link: { type: String },
});
</script>

<template>
  <div class="btn-wrap">
    <a
      class="icon-btn group inline-flex cursor-pointer items-center gap-2 rounded-3xl bg-white px-7 py-3 text-lg text-blue transition-all hover:bg-blue hover:text-white"
      :href="link"
    >
      <pdfFile
        class="h-7 w-6 fill-blue transition-all group-hover:fill-white"
      ></pdfFile>
      {{ buttonText }}
    </a>
  </div>
</template>
