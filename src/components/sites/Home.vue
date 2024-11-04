<script setup>
import { onMounted } from "vue";
import Header from "../Header.vue";
import Intro from "../Intro.vue";
import About from "../About.vue";
import Attributes from "../Attributes.vue";
import Areas from "../Areas.vue";
import Footer from "../Footer.vue";
import Slider from "../Slider.vue";

onMounted(() => {
  // Get all elements with the anim class
  const animElements = document.querySelectorAll(".anim");

  // Define a function to get the threshold based on screen size
  function getThreshold() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      // adjust this value to your desired mobile screen width
      return 0.1; // lower threshold for mobile devices
    } else {
      return 0.5; // default threshold for desktop devices
    }
  }

  // Create an IntersectionObserver instance with dynamic threshold
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: getThreshold(), // use the dynamic threshold
    },
  );

  // Observe the anim elements
  animElements.forEach((element) => {
    observer.observe(element);
  });

  // Observe each anim element
  animElements.forEach((element) => {
    observer.observe(element);
  });
});
</script>

<template>
  <Header />
  <Intro class="anim" id="start" />
  <About class="anim" id="info" />
  <Attributes class="anim" id="merkmale" />
  <Areas class="anim" id="areas" />
  <Slider class="anim" />
  <Footer class="anim" />
</template>

<style>
.anim {
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
}

.anim.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
