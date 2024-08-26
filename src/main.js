import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; // Import the router configuration
import "./assets/scss/style.scss";

createApp(App).use(router).mount("#app");
