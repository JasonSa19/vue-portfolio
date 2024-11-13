<script setup>
// import subLine from "../components/modules/subLine.vue";
import AttributeTeaser from "../components/modules/AttributeTeaser.vue";
</script>

<template>
  <section class="mb-32 xl:mb-96">
    <div class="container">
      <div class="flex flex-col gap-6 xl:gap-14 md:flex-row">
        <div class="basis-5/12">
          <h2 class="text-lg xl:text-2xl font-headline leading-headline">
            Meine Eigenschaften
          </h2>
        </div>
      </div>
    </div>
    <div class="container flex flex-row flex-wrap justify-between mt-20">
      <AttributeTeaser
        headlineText="Lernbereitschaft"
        flowText="Ich bin als Junior-Entwickler stets motiviert, neue Technologien, Best Practices und Methoden zu lernen. Diese Bereitschaft ermöglicht es, sich schnell an neue Anforderungen anzupassen und beruflich weiterzuentwickeln."
      />
      <AttributeTeaser
        headlineText="Teamfähigkeit"
        flowText="Da Entwickler häufig in Teams arbeiten, ist es wichtig, dass sie gut mit anderen zusammenarbeiten können. Ich bin offen für Feedback und bereit, von erfahreneren Kollegen zu lernen."
      />
      <AttributeTeaser
        headlineText="Technische Fähigkeiten"
        flowText="Ich verfüge über solide Grundkenntnisse in den relevanten Programmiersprachen und Tools. Diese Fähigkeiten bilden die Basis, auf der ich weiter aufbauen kann."
      />
      <AttributeTeaser
        headlineText="Optisches Auge"
        flowText="Durch meine vorangegangene Ausbildung als Mediengestalter gelingt es mir, trotz des gro0en technischen Parts, ebenfalls optisch und gestalerisch gute Grundkenntnisse zu besitzen."
      />
    </div>
  </section>
</template>
