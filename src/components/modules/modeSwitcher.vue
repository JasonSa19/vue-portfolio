<script setup>
import { ref } from "vue";
import mode from "../svg/mode.vue";

const props = defineProps({
  uniqueId: { String },
});

const isDarkMode = ref(true); // Set initial value to true

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark");
}

// Add the "dark" class to the document element by default
document.documentElement.classList.add("dark");
</script>

<template>
  <button
    :id="uniqueId"
    class="flex items-center justify-center w-12 h-12 px-4 py-2 text-white transition-colors rounded-full group hover:bg-white bg-blue dark:bg-blue dark:text-white"
    @click="toggleDarkMode"
  >
    <mode
      class="w-10 h-10 transition-colors fill-white group-hover:fill-blue"
    />
  </button>
</template>
