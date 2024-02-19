<script setup lang="ts">
  import type { Ticket } from '@/stores/tickets';
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';

  const permissionStore = usePermissionStore();
  const { toggleTicketPermission } = permissionStore;
  const { viewTicket } = storeToRefs(permissionStore);

  defineProps<{
    tickets: Ticket[],
  }>();

  function onClick(ticketId: number) {
    toggleTicketPermission(viewTicket.value, ticketId);
  }

</script>

<template>
  <ul class="results">
    <li :class="'result'" v-for="ticket in tickets" @click="onClick(ticket.id)">
      <div class="container">
        <div>
          # {{ ticket.id }}
        </div>
        <div>
          {{ ticket.title }}
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.results {
  width: inherit;
  width: 550px;
  margin-top: 5px;
  list-style: none;
  padding-left: 0;
}

.result {
  width: 100% - 20px;
  height: 60px;
  border-bottom: 1px solid #555555;
  line-height: 30px;
  padding-left: 20px;
}

.result:last-child {
  border-bottom: none;
}

.result:hover {
  background-color: var(--search-result);
}
</style>