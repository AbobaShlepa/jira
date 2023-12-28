<script setup lang="ts">
  import Board from './components/Board.vue';
  import SideMenu from './components/SideMenu.vue'
</script>

<template>
  <div class="flex">
    <Board />
    <SideMenu class="stick-right" />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.stick-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>