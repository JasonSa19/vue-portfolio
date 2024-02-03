<script setup>
const mainHeadline = "Webdesign und Entwicklung";
const mainText =
  "Willkommen auf meiner Portfolio-Website! Hier präsentiere ich meine Arbeit als Front-End Developer und meine Fähigkeiten in der Erstellung von ansprechenden Benutzeroberflächen.";
import standardbtn from "./standardbtn.vue";
</script>

<template>
  <section class="anim container">
    <h1>{{ mainHeadline }}</h1>
    <p>{{ mainText }}</p>
    <standardbtn buttonText="Lass und starten" link="#info" />
  </section>
</template>
