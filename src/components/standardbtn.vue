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
      class="icon-btn group inline-flex cursor-pointer items-center gap-4 rounded-3xl bg-blue px-7 py-3 text-base text-white transition-all hover:bg-white hover:text-blue"
      :href="link"
    >
      {{ buttonText }}
      <arrow
        class="h-7 w-6 fill-white transition-all group-hover:fill-blue"
      ></arrow>
    </a>
  </div>
</template>
