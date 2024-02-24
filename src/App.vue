<script setup lang="ts">
  import SideMenu from '@/components/board/SideMenu.vue';
  import ThemeSelectorOld from './components/board/ThemeSelectorOld.vue';
</script>

<template>
  <div id="content" data-theme="dark">
    <router-view></router-view>
    <div class="side-menu">
      <ThemeSelectorOld />
      <SideMenu />
    </div>
  </div>
</template>

<style scoped>
  .side-menu {
    position: fixed;
    display: flex;
    gap: 10px;
    right: 0;
    top: 0;
  }
</style>