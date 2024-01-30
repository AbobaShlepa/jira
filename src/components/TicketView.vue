<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import AssigneeSelector from './AssigneeSelector.vue';
  import DescriptionEditor from './DescriptionEditor.vue';

  const { viewTicket } = storeToRefs(usePermissionStore());
  const { getTicket } = useTicketsStore();
  const ticket = computed(() => viewTicket.value.ticketId ? getTicket(viewTicket.value.ticketId) : null);

</script>

<template>
  <div class="ticket-view" :class="viewTicket.enabled && viewTicket.ticketId ? '' : 'hidden'">
    <div v-if="ticket" :key="ticket.id">
      <div class="number">
        # {{ ticket.id }}
      </div>
      <div class="title">
        <input v-model="ticket.title">
      </div>
      <AssigneeSelector :ticket-id="ticket.id" :assignee-id="ticket.assigneeId" />
      <DescriptionEditor :ticket-id="ticket.id" :description="ticket.description" />
    </div>
  </div>
</template>

<style scoped>
.ticket-view {
  width: 100%;
  border: 1px solid black;
  height: 100%;
}

.hidden {
  visibility: hidden;
}

.title {
  margin: 10px 5px 10px 5px;
}

.title:hover {
  border: 1px solid black;
}

input {
  width: -webkit-fill-available;
  border-width: 0;
  line-height: 150%;
}
</style>