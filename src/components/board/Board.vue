<script setup lang="ts">
  import Column from '@/components/column/Column.vue';
  import { useColumnsStore } from '@/stores/columns';
  import { usePermissionStore } from '@/stores/permissions';
  import { useSprintStore } from '@/stores/sprints';
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import draggable from 'vuedraggable';

  const { columns, swapColumns } = useColumnsStore();
  const { editColumns } = storeToRefs(usePermissionStore());
  const { getTickets } = useTicketsStore();
  const { currentSprintId } = storeToRefs(useSprintStore());

  function swap(event: any) {
    const oldIndex = event.moved.oldIndex;
    const newIndex = event.moved.newIndex
    swapColumns(oldIndex, newIndex);
  }
</script>

<template>
  <draggable v-model="columns" class="board" @change="swap" group="columns" item-key="id"
    :disabled="!editColumns.enabled">
    <template #item="{ element }">
      <Column :column-id="element.id" :tickets="computed(() => getTickets(element.id, currentSprintId)).value" />
    </template>
  </draggable>
</template>

<style scoped>
  .board {
    display: flex;
    justify-content: safe center;
  }
</style>