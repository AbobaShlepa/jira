<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  import TicketContainer from './TicketContainer.vue';
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';

  const props = defineProps<{
    columnId: number
  }>();

  const { getColumn, removeColumn } = useColumnsStore();
  const column = getColumn(props.columnId);

  const store = useTicketsStore();
  const { getTickets } = storeToRefs(store);
</script>

<template>
  <div>
    <div class="column">
      <div class="title">
        <h3>{{ column.name }}</h3>
        <button @click="removeColumn(column.id)">-</button>
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
}

.title {
  border: 2px solid black;
}
</style>