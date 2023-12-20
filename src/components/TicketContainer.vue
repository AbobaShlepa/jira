<script setup lang="ts">
  import Draggable from "vuedraggable";
  
  export type Ticket = {
    id: number;
    title: string;
  }

  defineProps<{
    tickets: Ticket[];
  }>();
</script>

<template>
  <Draggable :list="tickets" item-key="id" group="tickets">
    <template #item="{ element }">
      <div class="card">
        {{ element.title }}
      </div>
    </template>
  </Draggable>
</template>