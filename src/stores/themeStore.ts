import { defineStore } from "pinia";
import { ref } from "vue";
import { getItem, setItem } from './storageExtensions';

export const useThemeStore = defineStore('themes', () => {
  const themes: string[] = [
    'dark',
    'light',
    'green',
  ];
  const currentTheme = ref(getItem<string>('currentTheme')) ?? ref<string>(themes[0]);

  function setTheme(themeName: string) {
    currentTheme.value = themeName;
    setItem('currentTheme', themeName);
  }

  return {
    themes,
    currentTheme,
    setTheme
  }
});