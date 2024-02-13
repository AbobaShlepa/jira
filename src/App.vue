<script setup lang="ts">
  import SideMenu from '@/components/board/SideMenu.vue';
</script>

<template>
  <router-view></router-view>
  <SideMenu class="side-menu" />
</template>

<style scoped>
.side-menu {
  position: fixed;
  right: 0;
  top: 0;
}
</style>