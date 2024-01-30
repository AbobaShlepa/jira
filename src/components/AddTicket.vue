<script setup lang="ts">
  import { ref } from 'vue';
  import AssigneeSelector from './AssigneeSelector.vue';
  import DescriptionEditor from './DescriptionEditor.vue';
  import { useTicketsStore } from '@/stores/tickets';

  const { createEmptyTicket } = useTicketsStore();
  const newTicket = createEmptyTicket();
  const ticket = ref(newTicket);
</script>

<template>
  <div>
    <h1>Tst</h1>
    <AssigneeSelector :ticket-id="ticket.id" :assignee-id="ticket.assigneeId" />
    <DescriptionEditor :ticket-id="ticket.id" :description="ticket.description" />
  </div>
</template>