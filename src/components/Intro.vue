<script setup>
const mainHeadline = "Webdesign und Entwicklung";
const mainText =
  "Willkommen auf meiner Portfolio-Website! Hier präsentiere ich meine Arbeit als Front-End Developer und meine Fähigkeiten in der Erstellung von ansprechenden Benutzeroberflächen.";
import standardbtn from "./standardbtn.vue";
</script>

<template>
  <section class="anim container">
    <div class="content-inner flex flex-row">
      <div class="text-content">
        <h1>{{ mainHeadline }}</h1>
        <p>{{ mainText }}</p>
        <standardbtn buttonText="Lass uns starten" link="#info" />
      </div>
      <div class="image-content">
        <img src="./../assets/img/portrait_Jason_Sauerwald.jpg" />
      </div>
    </div>
  </section>
</template>
