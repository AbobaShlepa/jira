<script setup lang="ts">
  import { useTicketsStore, type Ticket } from "@/stores/tickets";
  import draggable from "vuedraggable";
  import Card from '@/components/Card.vue'

  defineProps<{
    tickets: Ticket[];
    columnId: number;
  }>();

  const { changeColumn } = useTicketsStore();

  function log(event: any) {
    const to: HTMLElement = event.to;
    const targetColumnId: number = +to.id;
    const ticketId: number = +event.item.id;
    changeColumn(ticketId, targetColumnId);
  }

  function addAnimation(event: any) {
    const item: HTMLElement = event.item;
    item.classList.add('shaking');
  }

  function removeAnimation(event: any) {
    const item: HTMLElement = event.item;
    item.classList.remove('shaking');
  }

</script>

<template>
  <draggable class="dropdown" :list="tickets" item-key="id" group="tickets" @end="log" tag="div"
    :component-data="{ id: columnId }" @choose="addAnimation" @unchoose="removeAnimation">
    <template #item="{ element }">
      <Card :ticket="element" />
    </template>
  </Draggable>
</template>

<style>
.dropdown {
  min-height: 200px;
  height: 100%;
}
</style>