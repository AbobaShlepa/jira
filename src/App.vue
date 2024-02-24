<script setup lang="ts">
  import SideMenu from '@/components/board/SideMenu.vue';
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
    right: 0;
    top: 0;
  }
</style>