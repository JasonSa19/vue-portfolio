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

  // Function to update the theme
  const updateTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  };

  // Check for existing dark mode preference on page load
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.setItem("theme", "dark");
    updateTheme();
  } else {
    localStorage.setItem("theme", "light");
    updateTheme();
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    updateTheme();
  });
});

createApp(App).use(router).mount("#app");
