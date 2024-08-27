<script setup>
import subLine from "./modules/subLine.vue";
import birthday from "./svg/birthday.vue";
import location from "./svg/location.vue";
import education from "./svg/education.vue";
import job from "./svg/job.vue";

const aboutText =
  "Ich bin Jason, 22 Jahre alt und lebe in Brilon, NRW. Nach dem Erwerb meiner allgemeinen Hochschulreife im Jahr 2020 habe ich eine Ausbildung zum Mediengestalter mit dem Schwerpunkt Frontend-Entwicklung erfolgreich abgeschlossen.Diese Ausbildung hat mir nicht nur das technische Know-how vermittelt, sondern auch meine Leidenschaft für Webentwicklung und Design entfacht. Ich habe fundierte Kenntnisse in HTML und CSS, einschließlich der Arbeit mit Präprozessoren wie LESS, SCSS und SASS, sowie in modernen Frameworks wie Bootstrap und TailwindCSS. Darüber hinaus beherrsche ich JavaScript und jQuery und habe Erfahrung in der Entwicklung von Webanwendungen mit PHP und der Template-Engine Smarty. Beim Erstellen von Layouts setze ich auf Adobe XD, um benutzerfreundliche und ästhetische Designs zu entwickeln. Meine Ausbildung und Praxiserfahrungen haben mir ein gutes Gespür für die Balance zwischen Design und Funktionalität gegeben. Ich bin stets bestrebt, mich weiterzuentwickeln und innovative, maßgeschneiderte Lösungen für digitale Herausforderungen zu finden.";

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
