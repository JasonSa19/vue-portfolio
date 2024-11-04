<script setup>
import { ref } from "vue";

const logos = ref([
  { src: "https://cdn.example.com/facebook.svg", alt: "Facebook" },
  { src: "https://cdn.example.com/disney.svg", alt: "Disney" },
  { src: "https://cdn.example.com/airbnb.svg", alt: "Airbnb" },
  { src: "https://cdn.example.com/apple.svg", alt: "Apple" },
  { src: "https://cdn.example.com/spark.svg", alt: "Spark" },
  { src: "https://cdn.example.com/samsung.svg", alt: "Samsung" },
  { src: "https://cdn.example.com/quora.svg", alt: "Quora" },
  { src: "https://cdn.example.com/sass.svg", alt: "Sass" },
]);
</script>

<template>
  <div
    class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <ul
      ref="logosContainer"
      class="flex items-center justify-center space-x-8 md:justify-start animate-infinite-scroll"
    >
      <li v-for="(logo, index) in logos" :key="index">
        <img :src="logo.src" :alt="logo.alt" class="max-w-none" />
      </li>
    </ul>

    <ul
      class="flex items-center justify-center space-x-8 md:justify-start animate-infinite-scroll"
      aria-hidden="true"
    >
      <li v-for="(logo, index) in logos" :key="`clone-${index}`">
        <img :src="logo.src" :alt="logo.alt" class="max-w-none" />
      </li>
    </ul>
  </div>
</template>

<style>
/* CSS for the infinite scroll animation */
.animate-infinite-scroll {
  animation: scroll 15s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
