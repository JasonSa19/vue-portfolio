<script setup>
import subLine from "./modules/subLine.vue";
import birthday from "./svg/birthday.vue";
import location from "./svg/location.vue";
import education from "./svg/education.vue";
import job from "./svg/job.vue";

const aboutText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. nvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

import { ref, computed } from "vue";

const birthDate = ref(new Date(2001, 11, 19));

const age = computed(() => {
  const today = new Date();
  const birthDateValue = birthDate.value;
  let age = today.getFullYear() - birthDateValue.getFullYear();
  const monthDifference = today.getMonth() - birthDateValue.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateValue.getDate())
  ) {
    age--;
    return age;
  }
});
</script>

<template>
  <section class="mb-32 xl:mb-96 anim">
    <subLine sublineText="Information" />
    <div class="container">
      <div class="flex flex-col gap-6 xl:gap-14 md:flex-row">
        <div class="basis-3/12">
          <h2 class="text-lg xl:text-2xl font-headline leading-headline">
            Über meinen<br />Werdegang
          </h2>
        </div>
        <div class="basis-9/12">
          <p>{{ aboutText }}</p>
          <div
            class="flex flex-col flex-wrap justify-start md:flex-row gap-14 mt-14"
          >
            <div class="vector-link">
              <div class="flex items-center gap-3 group">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-full svg-holder bg-blue"
                >
                  <birthday class="fill-white"></birthday>
                </div>
                <p class="font-semibold">{{ age }} Jahre alt</p>
              </div>
            </div>

            <div class="vector-link">
              <div class="flex items-center gap-3 group">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-full svg-holder bg-blue"
                >
                  <location class="fill-white"></location>
                </div>
                <p class="font-semibold">Brilon, NRW</p>
              </div>
            </div>

            <div class="vector-link">
              <div class="flex items-center gap-3 group">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-full svg-holder bg-blue"
                >
                  <education class="fill-white"></education>
                </div>
                <p class="font-semibold">Allg. Hochschulreife (2020)</p>
              </div>
            </div>

            <div class="vector-link">
              <div class="flex items-center gap-3 group">
                <div
                  class="flex items-center justify-center w-12 h-12 rounded-full svg-holder bg-blue"
                >
                  <job class="fill-white"></job>
                </div>
                <p class="font-semibold">
                  Abgeschlossene Lehre <br />
                  zum Mediengestalter (digital)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
