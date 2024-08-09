import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "@/assets/css/index.css";
import "primeicons/primeicons.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: ".dark-theme",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities"
      }
    }
  }
});

app.use(createPinia());
app.use(router);

app.mount("#app");
