<script setup>
import subLine from "../components/modules/subLine.vue";
import AreaTeaser from "../components/modules/AreaTeaser.vue";
</script>

<template>
  <section class="mb-32 xl:mb-96 anim">
    <subLine sublineText="Tätigkeit" />
    <div class="container">
      <div class="flex flex-col gap-6 xl:gap-14 md:flex-row">
        <div class="basis-5/12">
          <h2 class="text-lg xl:text-2xl font-headline leading-headline">
            Arbeitsgebiete
          </h2>
        </div>
      </div>
    </div>
    <div class="container flex flex-row justify-between mt-20">
      <AreaTeaser
        imageLink="/src/assets/img/layouts.webp"
        headlineText="Layouts und Webdesigns"
        flowText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
      />
      <AreaTeaser
        imageLink="/src/assets/img/umsetzung.webp"
        headlineText="Umsetzungen von Websites"
        flowText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
      />
      <AreaTeaser
        imageLink="/src/assets/img/wartung.webp"
        headlineText="Wartung von bestehenden Websites"
        flowText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa"
      />
    </div>
  </section>
</template>
