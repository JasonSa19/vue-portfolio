<script setup>
import { ref } from "vue";

import mailbox from "./svg/mailbox.vue";
import github from "./svg/github.vue";
import instagram from "./svg/instagram.vue";
import linkedin from "./svg/linkedin.vue";

// Define the email address
const mailAddress = ref("jason@sauerwald.info");
const linkLinkedin = ref("https://www.linkedin.com/in/jasonsauerwald/");
const linkGithub = ref("https://github.com/JasonSa19/");
const linkInstagram = ref("https://www.instagram.com/jason_sa_/");
</script>

<template>
  <footer
    class="container flex flex-col justify-between gap-8 mb-20 sm:gap-0 sm:flex-row anim"
  >
    <a target="_blank">Impressum</a>
    <p>© {{ new Date().getFullYear() }} - Jason Sauerwald</p>
    <div class="flex gap-5">
      <!-- Mailto link -->
      <a target="_blank" :href="`mailto:${mailAddress}`">
        <mailbox class="w-8 h-8 fill-white"></mailbox>
      </a>
      <a target="_blank" :href="linkGithub"
        ><github class="w-8 h-8"></github
      ></a>
      <a target="_blank" :href="linkInstagram"
        ><instagram class="w-8 h-8 fill-white"></instagram
      ></a>
      <a target="_blank" :href="linkLinkedin"
        ><linkedin class="w-8 h-8 fill-white"></linkedin
      ></a>
    </div>
  </footer>
</template>
