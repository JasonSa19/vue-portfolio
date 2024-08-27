import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; // Import the router configuration
import "./assets/scss/style.scss";
import { inject } from "@vercel/analytics";

inject();

document.addEventListener("DOMContentLoaded", function () {
  const fadeUpElements = document.querySelectorAll(".anim");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeUpElements.forEach((element) => {
    observer.observe(element);
  });
});

createApp(App).use(router).mount("#app");
