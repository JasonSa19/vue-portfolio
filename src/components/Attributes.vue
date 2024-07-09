<script setup>
import subLine from "./modules/subLine.vue";
import birthday from "./svg/birthday.vue";
import location from "./svg/location.vue";
import education from "./svg/education.vue";
import job from "./svg/job.vue";

const aboutText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
</script>

<template>
  <section class="mb-32 xl:mb-96 anim">
    <subLine sublineText="Merkmale" />
    <div class="container">
      <div class="flex flex-col gap-6 xl:gap-14 md:flex-row">
        <div class="basis-5/12">
          <h2 class="text-lg xl:text-2xl font-headline leading-headline">
            Meine Eigenschaften
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>
