<script setup>
import { ref } from "vue";
import vectorLink from "./modules/vectorLink.vue";
import customBtn from "./modules/customBtn.vue";
import Nav from "./nav.vue";

const mailAddress = ref("jason@sauerwald.info");
const linkedIn = ref("https://www.linkedin.com/in/jasonsauerwald/");
const gitHub = ref("https://github.com/JasonSa19/");
const instaGram = ref("https://www.instagram.com/jason_sa_/");

const resume = ref("./../assets/docs/Lebenslauf.pdf");
const isHeaderOpen = ref(false);

const toggleHeader = () => {
  isHeaderOpen.value = !isHeaderOpen.value;
};
</script>

<template>
  <header class="relative z-10 font-light anim mt-11">
    <div
      class="container flex items-center mx-auto header-inner"
      :class="{ open: isHeaderOpen }"
    >
      <vectorLink
        class="flex justify-start flex-1"
        :link="'mailto:' + mailAddress"
        :buttonText="mailAddress"
      />
      <span class="justify-center flex-1 hidden gap-1 lg:flex"
        ><a
          class="transition-all duration-300 hover:text-blue"
          target="_blank"
          :href="linkedIn"
          >LinkedIn</a
        >
        /
        <a
          class="transition-all duration-300 hover:text-blue"
          target="_blank"
          :href="gitHub"
          >Github</a
        >
        /
        <a
          class="transition-all duration-300 hover:text-blue"
          target="_blank"
          :href="instaGram"
          >Instagram</a
        >
      </span>
      <customBtn
        target="_blank"
        :link="resume"
        class="justify-end flex-1 hidden md:flex"
        buttonText="Lebenslauf"
      />
      <button
        aria-label="Menü"
        @click="toggleHeader"
        :class="{ open: isHeaderOpen }"
        class="relative z-20 flex flex-col justify-between h-6 ml-20 transition-all menu-toggle align-end group w-11"
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
    <Nav :class="{ open: isHeaderOpen }" />
  </header>
</template>
