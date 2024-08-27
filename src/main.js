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

  // Function to apply the correct theme based on the stored preference
  function applyTheme(theme) {
    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }

  // On page load, check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    // If no saved preference, use system preference
    applyTheme("dark");
  }

  // Toggle theme on button click
  toggleButton.addEventListener("click", () => {
    const currentTheme = htmlElement.classList.contains("dark")
      ? "dark"
      : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
});

createApp(App).use(router).mount("#app");
