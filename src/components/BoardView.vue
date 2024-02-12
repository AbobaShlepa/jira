<script setup lang="ts">
  import AddTicketModal from './AddTicketModal.vue';
  import Board from './Board.vue';
  import EditTicketModal from './EditTicketModal.vue';
  import SprintSelector from './SprintSelector.vue';
  import TicketView from './TicketView.vue';
</script>

<template>
  <SprintSelector />
  <Board />>
  <AddTicketModal />
  <EditTicketModal />
</template>

<style scoped>
.flex {
  display: flex;
}
</style>