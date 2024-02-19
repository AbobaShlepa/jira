import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore('themes', () => {
  const themes: Theme[] = [
    { name: 'dark', path: 'https://static-00.iconduck.com/assets.00/moon-icon-512x512-fm9crgpt.png' },
    { name: 'light', path: 'https://static-00.iconduck.com/assets.00/sun-symbol-emoji-2048x2048-wityey4r.png' },
  ]
  const currentTheme = ref<Theme>(themes[0]);

  function setTheme(themeName: string) {
    const theme = themes.find(x => x.name === themeName)!;
    currentTheme.value = theme;
  }

  return {
    themes,
    currentTheme,
    setTheme
  }
})

export interface Theme {
  name: string;
  path: string;
}