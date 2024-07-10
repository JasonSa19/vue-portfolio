<script setup>
import subLine from "../components/modules/subLine.vue";
import AttributeTeaser from "../components/modules/AttributeTeaser.vue";
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
    <div class="container flex flex-row justify-between mt-20 gap-14">
      <AttributeTeaser
        headlineText="Qualität"
        flowText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      />
      <AttributeTeaser
        headlineText="Vertrauen"
        flowText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      />
      <AttributeTeaser
        headlineText="Präzision"
        flowText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      />
      <AttributeTeaser
        headlineText="Optisches Auge"
        flowText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      />
    </div>
  </section>
</template>
