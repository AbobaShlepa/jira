<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  import Column from './Column.vue'
  import AddColumn from './AddColumn.vue'
  import draggable from 'vuedraggable';
  import { storeToRefs } from 'pinia';
  import { usePermissionStore } from '@/stores/permissions';
  import router from '@/router';
  import { computed } from 'vue';
  import { useTicketsStore } from '@/stores/tickets';

  const { columns, swapColumns } = useColumnsStore();

  const { addColumn } = storeToRefs(usePermissionStore());

  const sprintId = computed(() => +router.currentRoute.value.params.id);

  const { getTickets } = useTicketsStore();

  function swap(event: any) {
    const oldIndex = event.moved.oldIndex;
    const newIndex = event.moved.newIndex
    swapColumns(oldIndex, newIndex);
  }
</script>

<template>
  <div class="board">
    <draggable v-model="columns" class="board" @change="swap" group="columns" item-key="id">
      <template #item="{ element }">
        <Column :column-id="element.id" :tickets="getTickets(element.id, sprintId)" />
      </template>
    </draggable>
    <AddColumn v-if="addColumn.enabled" />
  </div>
</template>

<style scoped>
.board {
  display: flex;
  justify-content: center;
}
</style>