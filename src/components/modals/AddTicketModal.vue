<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';
  import Modal from './Modal.vue'
  import AddTicket from '@/components/ticket/AddTicket.vue'

  const store = usePermissionStore();
  const { addTicket } = storeToRefs(store);
</script>

<template>
  <Modal :permission="addTicket">
    <template #header>
      <h3>Add new ticket</h3>
    </template>
    <template #main>
      <AddTicket />
    </template>
  </Modal>
</template>