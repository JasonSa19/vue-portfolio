<script setup>
const props = defineProps({
  uniqueId: { type: String },
});

import mode from "../svg/mode.vue";
</script>

<template>
  <button
    :id="uniqueId"
    class="flex items-center justify-center w-12 h-12 px-4 py-2 text-white transition-colors rounded-full group hover:bg-white bg-blue dark:bg-blue dark:text-white"
  >
    <mode
      class="w-10 h-10 transition-colors fill-white group-hover:fill-blue"
    />
  </button>
</template>
