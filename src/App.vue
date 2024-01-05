<script setup lang="ts">
  import Board from './components/Board.vue';
  import SideMenu from './components/SideMenu.vue'
  import TicketView from './components/TicketView.vue';
</script>

<template>
  <div class="flex">
    <Board />
    <TicketView />
    <SideMenu />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
</style>