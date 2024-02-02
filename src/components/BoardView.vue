<script setup lang="ts">
  import Board from './Board.vue';
  import SideMenu from './SideMenu.vue'
  import SprintSelector from './SprintSelector.vue';
  import TicketView from './TicketView.vue';
</script>

<template>
  <SprintSelector />
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