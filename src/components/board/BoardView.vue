<script setup lang="ts">
  import AddColumnModal from '@/components/modals/AddColumnModal.vue';
  import AddTicketModal from '@/components/modals/AddTicketModal.vue';
  import EditTicketModal from '@/components/modals/EditTicketModal.vue';
  import SearchBar from '@/components/search/SearchBar.vue';
  import Board from './Board.vue';
  import SprintSelector from './SprintSelector.vue';
</script>

<template>
  <SprintSelector />
  <SearchBar />
  <Board />
  <AddTicketModal />
  <EditTicketModal />
  <AddColumnModal />
</template>