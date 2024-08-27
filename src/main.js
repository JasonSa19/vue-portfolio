import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; // Import the router configuration
import "./assets/scss/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  // scroll-animation
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

  // dark-mode switch
  const toggleButton = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Check for existing dark mode preference
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

createApp(App).use(router).mount("#app");
