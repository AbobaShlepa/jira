<script setup lang="ts">
  import { useTicketsStore, type Ticket } from '@/stores/tickets';
  import { useRouter } from 'vue-router';
  import AssigneeSelector from './AssigneeSelector.vue';
  import DescriptionEditor from './DescriptionEditor.vue';
  import TitleEditor from './TitleEditor.vue';

  const { addNewTicket } = useTicketsStore();
  const ticket: Ticket = {
    assigneeId: null,
    description: '',
    title: '',
    columnId: 1,
    id: -1,
  };

  const router = useRouter();

  function handleAdd() {
    addNewTicket(ticket);
    router.push('/');
  }

</script>

<template>
  <div>
    <TitleEditor :title="ticket.title" :on-title-changed="(newTitle: string) => ticket.title = newTitle" />
    <AssigneeSelector :assignee-id="ticket.assigneeId"
      :on-assignee-changed="(userId: number) => ticket.assigneeId = userId" />
    <DescriptionEditor :description="ticket.description"
      :on-description-change="(description: string) => ticket.description = description" />
    <button type="button" @click="handleAdd">
      Add new ticket
    </button>
  </div>
</template>