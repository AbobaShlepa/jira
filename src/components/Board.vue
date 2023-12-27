<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  import Column from './Column.vue'
  import AddColumn from './AddColumn.vue'
  import Draggable from 'vuedraggable';

  const { columns, swapColumns } = useColumnsStore();

  async function swap(event: any) {
    const oldIndex = event.moved.oldIndex;
    const newIndex = event.moved.newIndex
    swapColumns(oldIndex, newIndex);
  }
</script>

<template>
  <div class="board">
    <Draggable v-model="columns" class="board" @change="swap" group="columns">
      <template #item="{ element }">
        <Column :column-id="element.id" />
      </template>
    </Draggable>
    <!-- <AddColumn /> -->
  </div>
</template>

<style scoped>
.board {
  display: flex;
}
</style>