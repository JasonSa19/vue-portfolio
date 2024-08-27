<script setup>
import mail from "../svg/mail.vue";

const props = defineProps({
  buttonText: { type: String },
  link: { type: String },
});
</script>

<template>
  <div class="vector-link">
    <a class="flex items-center gap-3 group" :href="link">
      <div
        class="flex items-center justify-center w-12 h-12 transition-all rounded-full svg-holder bg-blue group-hover:bg-white"
      >
        <mail
          class="w-6 h-6 transition-all fill-white group-hover:fill-blue"
        ></mail>
      </div>
      {{ buttonText }}
    </a>
  </div>
</template>
