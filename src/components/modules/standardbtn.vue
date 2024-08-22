<script setup>
import arrow from "../svg/arrow.vue";

const props = defineProps({
  buttonText: { type: String },
  link: { type: String },
});
</script>

<template>
  <div class="btn-wrap">
    <a
      :href="link"
      class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all rounded-full bg-blue hover:bg-white group"
    >
      <span
        class="absolute bg-blue inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"
      ></span>
      <span
        class="relative flex items-center w-full gap-4 text-left text-white transition-colors duration-200 ease-in-out rounded-full group-hover:text-blue group-hover:bg-white"
        >{{ buttonText }}
        <arrow
          class="w-6 transition-all h-7 fill-white group-hover:ml-1 group-hover:fill-blue"
        ></arrow>
      </span>
    </a>
  </div>
</template>
