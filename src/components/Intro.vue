<script setup>
import standardbtn from "./modules/standardbtn.vue";

const mainHeadline = "Webdesign und Entwicklung";
const mainText =
  "Willkommen auf meiner Portfolio-Website! Hier präsentiere ich meine Arbeit als Front-End Developer und meine Fähigkeiten in der Erstellung von ansprechenden Benutzeroberflächen.";
</script>

<template>
  <section class="container relative z-0 mt-20 mb-32 anim xl:mb-96 xl:mt-44">
    <div
      class="flex flex-col-reverse items-center justify-between gap-y-24 content-inner lg:gap-y-0 lg:flex-row"
    >
      <div class="text-content basis-3/5">
        <h1
          class="font-headline text-xl leading-[111%] lg:text-2xl 2xl:text-3xl"
        >
          {{ mainHeadline }}
        </h1>
        <p class="w-8/12 mt-6">{{ mainText }}</p>
        <standardbtn class="mt-12" buttonText="Lass uns starten" link="#info" />
      </div>
      <div class="ml-auto image-content basis-2/5">
        <div class="relative ml-auto image-container h-72 w-72 xl:h-96 xl:w-96">
          <img
            class="absolute object-cover w-full h-full rounded-full"
            src="./../assets/img/portrait_Jason_Sauerwald.webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
