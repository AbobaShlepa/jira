<script setup lang="ts">
  import { ref } from 'vue';
  import AssigneeSelector from './AssigneeSelector.vue';
  import DescriptionEditor from './DescriptionEditor.vue';
  import { useTicketsStore } from '@/stores/tickets';
  import TitleEditor from './TitleEditor.vue';
  import { useRouter } from 'vue-router';

  const { getEmptyTicket, addNewTicket } = useTicketsStore();
  const newTicket = getEmptyTicket();
  const ticket = ref(newTicket);

  const router = useRouter();

  function handleAdd() {
    addNewTicket(ticket.value);
    router.push('/');
  }
</script>

<template>
  <div>
    <TitleEditor :ticket-id="ticket.id" />
    <AssigneeSelector :ticket-id="ticket.id" :assignee-id="ticket.assigneeId" />
    <DescriptionEditor :ticket-id="ticket.id" :description="ticket.description" />
    <button type="button" @click="handleAdd">
      Add new ticket
    </button>
  </div>
</template>