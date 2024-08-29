<script setup>
import { ref, onMounted } from "vue";
import mode from "../svg/mode.vue";

const props = defineProps({
  uniqueId: { String },
});

const isDarkMode = ref(true); // Set initial value to true

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("darkMode", isDarkMode.value); // Save the selection in local storage
}

// Check if the user has previously selected a mode
onMounted(() => {
  const storedDarkMode = localStorage.getItem("darkMode");
  if (storedDarkMode !== null) {
    isDarkMode.value = storedDarkMode === "true";
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } else {
    // Add the "dark" class to the document element by default
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <button
    :id="uniqueId"
    class="fixed z-10 flex items-center justify-center w-12 h-12 px-4 py-2 text-white transition-colors rounded-full md:bottom-auto md:right-auto md:relative bottom-4 right-4 group md:hover:bg-white bg-blue dark:bg-blue dark:text-white"
    @click="toggleDarkMode"
  >
    <mode
      class="w-10 h-10 transition-colors fill-white md:group-hover:fill-blue"
    />
  </button>
</template>
