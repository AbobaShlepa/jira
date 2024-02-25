<script setup lang="ts">
  import { useThemeStore } from '@/stores/themeStore';
  import { storeToRefs } from 'pinia';
  import { watch } from 'vue';
  import DarkTheme from './DarkTheme.vue';
  import GreenTheme from './GreenTheme.vue';
  import LightTheme from './LightTheme.vue';

  const store = useThemeStore();
  const { currentTheme } = storeToRefs(store);

  watch(currentTheme, (value, _) => {
    document.body.setAttribute('data-theme', value);
  });
</script>

<template>
  <div class="grid-container">
    <DarkTheme class="item-a" />
    <LightTheme class="item-b" />
    <GreenTheme class="item-c" />
    <DarkTheme class="item-d" />
  </div>
</template>

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 30%, 30%;
    grid-template-rows: 30%, 30%;
    gap: 5%;
    width: 60%;

    position: absolute;
    top: 10%;
    left: 20%;
  }

  .item-a {
    grid-row: 1;
    grid-column: 1;
  }

  .item-b {
    grid-row: 1;
    grid-column: 2;
  }

  .item-c {
    grid-row: 2;
    grid-column: 1;
  }

  .item-d {
    grid-row: 2;
    grid-column: 2;
  }
</style>