<script setup>
import mail from "./svg/mail.vue";

const props = defineProps({
  buttonText: { type: String },
  link: { type: String },
});
</script>

<template>
  <div class="vector-link">
    <a class="group flex items-center gap-3" :href="link">
      <div
        class="svg-holder flex h-12 w-12 items-center justify-center rounded-full bg-blue transition-all group-hover:bg-white"
      >
        <mail
          class="h-6 w-6 fill-white transition-all group-hover:fill-blue"
        ></mail>
      </div>
      {{ buttonText }}
    </a>
  </div>
</template>

<style scoped></style>
