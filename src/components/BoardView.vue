<script setup lang="ts">
  import AddTicketModal from './AddTicketModal.vue';
  import Board from './Board.vue';
  import SprintSelector from './SprintSelector.vue';
  import TicketView from './TicketView.vue';
</script>

<template>
  <SprintSelector />
  <div class="flex">
    <Board />
    <TicketView />
  </div>
  <AddTicketModal />
</template>

<style scoped>
.flex {
  display: flex;
}
</style>