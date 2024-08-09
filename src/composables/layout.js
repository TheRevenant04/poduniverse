import { computed, onMounted, reactive } from "vue";

const themes = {
  dark: "dark-theme",
  light: "light-theme"
};

const layoutConfig = reactive({
  theme: themes.light
});

export const useLayout = () => {
  const setTheme = (theme) => {
    layoutConfig.theme = theme;
    if (theme === themes.dark) {
      document.documentElement.classList.add(themes.dark);
    } else {
      document.documentElement.classList.remove(themes.dark);
    }
  };
  const toggleTheme = () => {
    setTheme(layoutConfig.theme === themes.dark ? themes.light : themes.dark);
  };

  const isDarkTheme = computed(() => layoutConfig.theme === themes.dark);

  onMounted(() => {
    layoutConfig.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light;
    setTheme(layoutConfig.theme);
  });

  return {
    isDarkTheme,
    toggleTheme
  };
};
