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
      class="icon-btn group inline-flex cursor-pointer items-center gap-2 rounded-3xl bg-white px-7 py-3 text-lg text-blue transition-all hover:bg-blue hover:text-white"
      :href="link"
    >
      <arrow
        class="h-7 w-6 fill-blue transition-all group-hover:fill-white"
      ></arrow>
      {{ buttonText }}
    </a>
  </div>
</template>
