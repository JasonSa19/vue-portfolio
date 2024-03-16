<script setup>
import standardbtn from "./modules/standardbtn.vue";

const mainHeadline = "Webdesign und Entwicklung";
const mainText =
  "Willkommen auf meiner Portfolio-Website! Hier präsentiere ich meine Arbeit als Front-End Developer und meine Fähigkeiten in der Erstellung von ansprechenden Benutzeroberflächen.";
</script>

<template>
  <section class="anim container mt-44">
    <div
      class="content-inner flex flex-col items-center justify-between lg:flex-row"
    >
      <div class="text-content basis-3/5">
        <h1 class="font-headline text-lg leading-[111%] xl:text-xl">
          {{ mainHeadline }}
        </h1>
        <p class="mt-6 w-8/12">{{ mainText }}</p>
        <standardbtn class="mt-12" buttonText="Lass uns starten" link="#info" />
      </div>
      <div class="image-content ml-auto basis-2/5">
        <div class="image-container relative ml-auto h-72 w-72 xl:h-96 xl:w-96">
          <img
            class="absolute h-full w-full rounded-full object-cover"
            src="./../assets/img/portrait_Jason_Sauerwald.jpg"
          />
        </div>
      </div>
    </div>
  </section>
</template>
