<script setup lang="ts">
  import TicketContainer from '@/components/ticket/TicketContainer.vue';
  import { useColumnsStore } from '@/stores/columns';
  import { usePermissionStore } from '@/stores/permissions';
  import { type Ticket } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';

  const props = defineProps<{
    columnId: number,
    tickets: Ticket[]
  }>();

  const { getColumn, removeColumn, renameColumn } = useColumnsStore();
  const column = getColumn(props.columnId);

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
            @input="renameColumn(column.id, ($event.target as HTMLInputElement).value)" />
        </div>
      </div>
      <TicketContainer :tickets="tickets" :column-id="column.id" />
    </div>
  </div>
</template>

<style scoped>
  .column {
    margin: 10px;
    width: 200px;
    height: 600px;
    background-color: var(--column-background);
    text-align: center;
    border: 1px solid var(--column-border);
  }

  .title {
    border: 2px solid black;
    height: 60px;
    background-color: var(--column-header-background);
    color: var(--column-header-text);
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