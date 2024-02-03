<script setup>
import { ref } from "vue";
import vectorLink from "./vectorlink.vue";
import customBtn from "./custombtn.vue";
import nav from "./nav.vue";

const mailAddress = ref("jason@sauerwald.info");
const linkedIn = ref("https://www.linkedin.com/in/jasonsauerwald/");
const gitHub = ref("https://github.com/JasonSa19/");
const instaGram = ref("https://www.instagram.com/jason_sa_/");

const resume = ref("#");
const isHeaderOpen = ref(false);

const toggleHeader = () => {
  isHeaderOpen.value = !isHeaderOpen.value;
};
</script>

<template>
  <header class="anim mt-11 font-light">
    <div
      class="header-inner container mx-auto flex items-center"
      :class="{ open: isHeaderOpen }"
    >
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
      <button
        @click="toggleHeader"
        :class="{ open: isHeaderOpen }"
        class="menu-toggle align-end group relative ml-20 flex h-6 w-11 flex-col justify-between transition-all"
      >
        <span
          class="absolute right-0 top-0 inline-block h-[2px] w-3/4 bg-white transition-all group-hover:w-full"
        ></span>
        <span
          class="absolute right-0 top-2/4 inline-block h-[2px] w-full -translate-y-2/4 bg-white"
        ></span>
        <span
          class="absolute bottom-0 right-0 inline-block h-[2px] w-2/4 bg-white transition-all group-hover:w-full"
        ></span>
      </button>
    </div>
    <nav />
  </header>
</template>
