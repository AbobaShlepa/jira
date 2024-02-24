<script setup lang="ts">
  import TicketView from '@/components/ticket/TicketView.vue';
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';
  import Modal from './Modal.vue';

  const store = usePermissionStore();
  const { viewTicket } = storeToRefs(store);
</script>

<template>
  <Modal :permission="viewTicket">
    <template #header>
      <h3 class="m0">Edit ticket</h3>
    </template>
    <template #main>
      <TicketView />
    </template>
  </Modal>
</template>

<style scoped>
  .m0 {
    margin: 0;
  }
</style>