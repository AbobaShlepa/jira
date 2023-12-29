<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  import TicketContainer from './TicketContainer.vue';
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';
  import { PermissionType, usePermissionStore } from '@/stores/permissions';

  const props = defineProps<{
    columnId: number
  }>();

  const { getColumn, removeColumn } = useColumnsStore();
  const column = getColumn(props.columnId);

  const store = useTicketsStore();
  const { getTickets } = storeToRefs(store);

  const permissionStore = usePermissionStore();
  const { removeColumns } = storeToRefs(permissionStore);
</script>

<template>
  <div>
    <div class="column">
      <div class="title">
        <h3 class="column-name">{{ column.name }}</h3>
        <button v-if="removeColumns.enabled" @click="removeColumn(column.id)">-</button>
      </div>
      <TicketContainer :tickets="getTickets(column.id)" :column-id="column.id" />
    </div>
  </div>
</template>

<style>
.column {
  margin: 10px;
  width: 200px;
  height: 600px;
  background-color: whitesmoke;
  text-align: center;
}

.title {
  border: 2px solid black;
}

.column-name {
  display: inline-block;
  margin-right: 20px;
}
</style>