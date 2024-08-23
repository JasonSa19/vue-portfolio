import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; // Import the router configuration
import "./assets/scss/style.scss";

createApp(App).use(router).mount("#app");

// Scroll-Animation
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//       observer.unobserve(entry.target); // Stop observing once the element is animated
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll(".anim");
// hiddenElements.forEach((el) => observer.observe(el));
