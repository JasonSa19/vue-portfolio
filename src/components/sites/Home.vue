<script setup>
import { onMounted } from "vue";
import Header from "../Header.vue";
import Intro from "../Intro.vue";
import About from "../About.vue";
import Attributes from "../Attributes.vue";
import Areas from "../Areas.vue";
import Footer from "../Footer.vue";

onMounted(() => {
  // Get all elements with the anim class
  const animElements = document.querySelectorAll(".anim");

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3, // Trigger the animation when the element is 50% visible
    }
  );

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
  <Footer class="anim" />
</template>

<style>
.anim {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.anim.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
