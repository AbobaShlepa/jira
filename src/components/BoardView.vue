<script setup lang="ts">
  import Board from './Board.vue';
  import SideMenu from './SideMenu.vue'
  import TicketView from './TicketView.vue';
  import VueRouter from 'vue-router'
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