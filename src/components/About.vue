<script setup>
import vectorLink from "./modules/vectorLink.vue";
import subLine from "./modules/subLine.vue";

const aboutText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
</script>

<template>
  <section class="mb-32 xl:mb-96 anim">
    <subLine sublineText="Information" />
    <div class="container">
      <div class="flex flex-col gap-14 md:flex-row">
        <div class="basis-3/12">
          <h2 class="text-2xl font-headline leading-headline">
            Über meinen<br />Werdegang
          </h2>
        </div>
        <div class="basis-9/12">
          <p>{{ aboutText }}</p>
          <div class="flex flex-wrap justify-between gap-8 mt-14 2xl:gap-0">
            <vectorLink
              class="basis-full 2xl:basis-1/4"
              buttonText="22 Jahre alt"
            />
            <vectorLink
              class="basis-full 2xl:basis-1/4"
              buttonText="Brilon, NRW"
            />
            <vectorLink
              class="basis-full 2xl:basis-1/4"
              buttonText="Allg. Hochschulreife (2020)"
            />
            <vectorLink
              class="basis-full 2xl:basis-1/4"
              buttonText="Abgeschlossene Ausbildung zum Mediengestalter Digital"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
