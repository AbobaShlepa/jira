<script setup lang="ts">
  import Column from '@/components/column/Column.vue';
  import router from '@/router';
  import { useColumnsStore } from '@/stores/columns';
  import { usePermissionStore } from '@/stores/permissions';
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import draggable from 'vuedraggable';

  const { columns, swapColumns } = useColumnsStore();
  const { editColumns } = storeToRefs(usePermissionStore());

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
    <draggable v-model="columns" class="board" @change="swap" group="columns" item-key="id"
      :disabled="!editColumns.enabled">
      <template #item="{ element }">
        <Column :column-id="element.id" :tickets="getTickets(element.id, sprintId)" />
      </template>
    </draggable>
  </div>
</template>

<style scoped>
  .board {
    display: flex;
    justify-content: center;
  }
</style>