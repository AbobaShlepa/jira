<script setup lang="ts">
  import { useThemeStore } from '@/stores/themeStore';
  import { storeToRefs } from 'pinia';
  import { watch } from 'vue';

  const store = useThemeStore();
  const { themes, setTheme } = store;
  const { currentTheme } = storeToRefs(store);

  watch(currentTheme, (newValue) => {
    document.body.setAttribute('data-theme', newValue.name);
  })
</script>

<template>
  <ul class="selector">
    <template v-for="theme in themes">
      <li class="theme" @click="setTheme(theme.name)">
        <img :src="theme.path" />
      </li>
    </template>
  </ul>
</template>

<style scoped>
* {
  --width: 40px;
  --height: 40px;
}

.selector {
  list-style: none;
  display: block;
  height: calc(var(--height) * 1.25);
  padding: 0;
  margin: 0;
  border-radius: calc(var(--height) / 2);
  background-color: var(--subcontainer-background);
}

.theme {
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background-color: #FFF;
  display: inline-block;
  margin-right: 10px;
  margin-top: 5px;
  background-color: var(--subcontainer-background);
}

.theme:first-child {
  margin-left: 5px;
}

.theme:last-child {
  margin-right: 5px;
}

img {
  width: var(--width);
  height: var(--height);
}

.separator:last-child {
  display: none;
}
</style>