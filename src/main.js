import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; // Import the router configuration
import "./assets/scss/style.scss";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Stop observing once the element is animated
    }
  });
});

const hiddenElements = document.querySelectorAll(".fade-up");
hiddenElements.forEach((el) => observer.observe(el));

createApp(App).use(router).mount("#app");
