<script setup lang="ts">
  import AddTicketModal from './AddTicketModal.vue';
  import Board from './Board.vue';
  import EditTicketModal from './EditTicketModal.vue';
  import SearchBar from '@/components/search/SearchBar.vue'
  import SprintSelector from './SprintSelector.vue';
</script>

<template>
  <SprintSelector />
  <SearchBar />
  <Board />
  <AddTicketModal />
  <EditTicketModal />
</template>

<style scoped>
.flex {
  display: flex;
}
</style>