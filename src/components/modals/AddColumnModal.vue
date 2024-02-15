<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';
  import Modal from './Modal.vue';
  import AddColumn from '@/components/column/AddColumn.vue';

  const permissionStore = usePermissionStore();
  const { addColumn } = storeToRefs(permissionStore);
</script>

<template>
  <Modal :permission="addColumn">
    <template #header>
      Add new column
    </template>
    <template #main>
      <AddColumn />
    </template>
  </Modal>
</template>