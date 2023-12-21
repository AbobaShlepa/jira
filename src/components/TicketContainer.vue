<script setup lang="ts">
  import { useTicketsStore, type Ticket } from "@/stores/tickets";
  import Draggable from "vuedraggable";

  const props = defineProps<{
    tickets: Ticket[];
    columnId: number;
  }>();

  const { changeColumn } = useTicketsStore();

  function log(event: any) {
    console.log(event)
    const to: HTMLElement = event.to;
    const targetColumnId: number = +to.id;
    const ticketId: number = +event.item.id;
    changeColumn(ticketId, targetColumnId);
  }

</script>

<template>
  <Draggable :list="tickets" item-key="id" group="tickets" @end="log" tag="div" :component-data="{ id: columnId }">
    <template #item="{ element }">
      <div class="card" :id="element.id">
        {{ element.title }}
      </div>
    </template>
  </Draggable>
</template>