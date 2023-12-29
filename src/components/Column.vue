<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  import TicketContainer from './TicketContainer.vue';
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';
  import { usePermissionStore } from '@/stores/permissions';

  const props = defineProps<{
    columnId: number
  }>();

  const { getColumn, removeColumn, renameColumn } = useColumnsStore();
  const column = getColumn(props.columnId);

  const store = useTicketsStore();
  const { getTickets } = storeToRefs(store);

  const permissionStore = usePermissionStore();
  const { removeColumns, editColumns } = storeToRefs(permissionStore);
</script>

<template>
  <div>
    <div class="column">
      <div class="title">
        <h3 v-if="!editColumns.enabled" class="column-name">{{ column.name }}</h3>
        <button v-if="removeColumns.enabled" @click="removeColumn(column.id)">-</button>
        <div class="flex-container">
          <input style="margin: auto;" type="text" v-if="editColumns.enabled" v-bind:value="column.name"
            @input="renameColumn(column.id, $event.target?.value)" />
        </div>
      </div>
      <TicketContainer :tickets="getTickets(column.id)" :column-id="column.id" />
    </div>
  </div>
</template>

<style scoped>
.column {
  margin: 10px;
  width: 200px;
  height: 600px;
  background-color: whitesmoke;
  text-align: center;
}

.title {
  border: 2px solid black;
  height: 60px;
}

.column-name {
  display: inline-block;
  margin-right: 20px;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>