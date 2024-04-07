<script setup lang="ts">
import { useTicketsStore, type Ticket } from '@/stores/tickets';
import { useSprintStore, type Sprint } from '@/stores/sprints';
import { storeToRefs } from 'pinia';

const ticketsStore = useTicketsStore();
const sprintStore = useSprintStore();
const { tickets } = storeToRefs(ticketsStore);
const { sprints } = storeToRefs(sprintStore);

const groupedTickets = getGroupedTickets(ticketsStore.tickets, sprintStore.sprints);

function getGroupedTickets(tickets: Ticket[], sprints: Sprint[]): Map<string, Ticket[]> {
  const result: Map<string, Ticket[]> = new Map();
  for (let i = 0; i < sprints.length; i++) {
    const sprint = sprints[i];
    const ticketsInSprint = tickets.filter(x => x.sprintId === sprint.id);

    result.set(sprint.name, ticketsInSprint);
  }

  return result;
}

</script>

<template>
  <div class="sprint-container">

  </div>
</template>