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
    class="container flex flex-col justify-between gap-8 mb-20 sm:gap-0 sm:flex-row"
  >
    <router-link
      class="transition-colors hover:text-blue"
      to="/impressum/#imprint"
      >Impressum</router-link
    >
    <p>© {{ new Date().getFullYear() }} - Jason Sauerwald</p>
    <div class="flex gap-5">
      <a
        aria-label="Link zum Github-Profil"
        class="relative block transition-transform hover:-translate-y-1"
        target="_blank"
        :href="linkGithub"
        ><github class="w-8 h-8"></github
      ></a>
      <a
        aria-label="E-Mail Adresse"
        class="relative block transition-transform hover:-translate-y-1"
        target="_blank"
        :href="`mailto:${mailAddress}`"
      >
        <mailbox
          class="w-8 h-8 transition-all dark:fill-white fill-grey"
        ></mailbox>
      </a>
      <a
        aria-label="Link zum Instagram-Profil"
        class="relative block transition-transform hover:-translate-y-1"
        target="_blank"
        :href="linkInstagram"
        ><instagram class="w-8 h-8 dark:fill-white fill-grey"></instagram
      ></a>
      <a
        aria-label="Link zum LinkedIn-Profil"
        class="relative block transition-transform hover:-translate-y-1"
        target="_blank"
        :href="linkLinkedin"
        ><linkedin class="w-8 h-8 dark:fill-white fill-grey"></linkedin
      ></a>
    </div>
  </footer>
</template>
