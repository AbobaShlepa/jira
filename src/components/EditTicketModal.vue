<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';
  import Modal from '@/components/Modal.vue'
  import TicketView from '@/components/TicketView.vue'

  const store = usePermissionStore();
  const { viewTicket } = storeToRefs(store);
</script>

<template>
  <Modal :permission="viewTicket">
    <template #header>
      <h3>Edit ticket</h3>
    </template>
    <template #main>
      <TicketView />
    </template>
  </Modal>
</template>