<script setup lang="ts">
  import { useTicketsStore, type Ticket } from "@/stores/tickets";
  import draggable from "vuedraggable";

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
      <div class="card" :id="element.id">
        <div class="number">
          #{{ element.id }}
        </div>
        <div class="ticket-title">
          {{ element.title }}
        </div>
      </div>
    </template>
  </Draggable>
</template>

<style>
.shaking {
  animation: tilt-shaking 0.15s infinite;
  cursor: -webkit-grabbing;
}

@keyframes tilt-shaking {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(3deg);
  }

  50% {
    transform: rotate(0eg);
  }

  75% {
    transform: rotate(-3deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.card {
  text-align: center;
  height: 100px;
  background-color: aliceblue;
  box-shadow: 0 0 1px 0;
  margin: 5px;
  cursor: -webkit-grab;
}

.number {
  text-align: left;
  margin-left: 10px;
}

.ticket-title {
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
}

.dropdown {
  min-height: 200px;
  height: 100%;
}
</style>