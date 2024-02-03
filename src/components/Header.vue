<script setup>
import { ref } from "vue";
import vectorLink from "./vectorLink.vue";
import customBtn from "./customBtn.vue";

const mailAddress = ref("jason@sauerwald.info");
const linkedIn = ref("https://www.linkedin.com/in/jasonsauerwald/");
const gitHub = ref("https://github.com/JasonSa19/");
const instaGram = ref("https://www.instagram.com/jason_sa_/");

const resume = ref("#");
</script>

<template>
  <header class="anim container mx-auto mt-11 flex items-center font-light">
    <vectorLink
      class="flex flex-1 justify-start"
      :link="'mailto:' + mailAddress"
      :buttonText="mailAddress"
    />
    <span class="flex flex-1 justify-center gap-1"
      ><a :href="linkedIn">LinkedIn</a> / <a :href="gitHub">Github</a> /
      <a :href="instaGram">Instagram</a>
    </span>
    <customBtn
      :link="resume"
      class="flex flex-1 justify-end"
      buttonText="Lebenslauf"
    />
  </header>
</template>
