<script setup>
import arrow from "./svg/arrow.vue";

const props = defineProps({
  buttonText: { type: String },
  link: { type: String },
});
</script>

<template>
  <div class="btn-wrap">
    <a
      class="icon-btn bg-blie group inline-flex cursor-pointer items-center gap-2 rounded-3xl px-7 py-3 text-lg text-white transition-all hover:bg-white hover:text-blue"
      :href="link"
    >
      {{ buttonText }}
      <arrow
        class="h-7 w-6 fill-blue transition-all group-hover:fill-white"
      ></arrow>
    </a>
  </div>
</template>
