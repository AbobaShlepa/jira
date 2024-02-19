<script setup lang="ts">
  import SideMenu from '@/components/board/SideMenu.vue';
</script>

<template>
  <div id="content" data-theme="dark">
    <router-view></router-view>
    <SideMenu class="side-menu" />
  </div>
</template>

<style scoped>
.side-menu {
  position: fixed;
  right: 0;
  top: 0;
}
</style>