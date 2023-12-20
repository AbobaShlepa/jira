<script setup lang="ts">
import { useColumnsStore } from '@/stores/columns';
import Column from './Column.vue'
import AddColumn from './AddColumn.vue'
import Draggable from 'vuedraggable';

const { columnNames, swapColumns } = useColumnsStore();
function swap(event: any) {
  const oldIndex = event.moved.oldIndex;
  const newIndex = event.moved.newIndex
  swapColumns(oldIndex, newIndex);
}
</script>

<template>
  <div class="board">
    <Draggable v-model="columnNames" class="board" @change="swap" group="columns">
      <template #item="{ element: name }">
        <Column :title="name" />
      </template>
    </Draggable>
    <AddColumn />
  </div>
</template>

<style scoped>
.board {
  display: flex;
}
</style>