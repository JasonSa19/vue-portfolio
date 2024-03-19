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
      <div class="flex gap-14">
        <div class="basis-3/12">
          <h2 class="text-2xl font-headline leading-headline">
            Über meinen<br />Werdegang
          </h2>
        </div>
        <div class="basis-9/12">
          <p>{{ aboutText }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
