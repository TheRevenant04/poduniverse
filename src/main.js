import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "@/assets/css/index.css";
import "primeicons/primeicons.css";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

import App from "./App.vue";
import router from "./router";
import { definePreset } from "@primevue/themes";

const app = createApp(App);

const extendedThemePresent = definePreset(Aura, {
  components: {
    card: {
      borderRadius: "1.5rem",
      colorScheme: {
        light: {
          root: {
            background: "{surface.200}",
            color: "{surface.700}"
          },
          subtitle: {
            color: "{surface.500}"
          }
        },
        dark: {
          root: {
            background: "{surface.800}",
            color: "{surface.0}"
          },
          subtitle: {
            color: "{surface.400}"
          }
        }
      }
    }
  }
});

app.use(PrimeVue, {
  theme: {
    preset: extendedThemePresent,
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

dayjs.extend(duration);
const config = {
  thresholds: [
    { l: "s", r: 59, d: "second" },
    { l: "m", r: 1 },
    { l: "mm", r: 59, d: "minute" },
    { l: "h", r: 1 },
    { l: "hh", r: 23, d: "hour" },
    { l: "d", r: 1 },
    { l: "dd", r: 29, d: "day" },
    { l: "M", r: 1 },
    { l: "MM", r: 11, d: "month" },
    { l: "y" },
    { l: "yy", d: "year" }
  ]
};
dayjs.extend(relativeTime, config);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "%d seconds",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%d hours",
    d: "1 day",
    dd: "%d days",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years"
  }
});

app.use(dayjs);

app.use(router);
app.use(createPinia());

app.mount("#app");
