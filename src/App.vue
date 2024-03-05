<script setup lang="ts">
import SideMenu from '@/components/board/SideMenu.vue';
import { onMounted } from 'vue';
import { getItem } from './stores/storageExtensions';

onMounted(function () {
  const theme = getItem<string>('currentTheme') ?? 'dark';
  document.body.setAttribute('data-theme', theme);
})
</script>

<template>
  <div id="content" data-theme="dark">
    <router-view></router-view>
    <div class="side-menu">
      <SideMenu />
    </div>
  </div>
</template>

<style scoped>
.side-menu {
  position: fixed;
  display: flex;
  gap: 10px;
  right: 5px;
  top: 5px;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>