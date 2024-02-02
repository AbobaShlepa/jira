<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import type { Ticket } from '@/stores/tickets';
  import { useUserStore } from '@/stores/users';
  import { storeToRefs } from 'pinia';

  const props = defineProps<{
    ticket: Ticket
  }>();

  const { getUser } = useUserStore();
  const permissionStore = usePermissionStore();
  const { toggleTicketPermission } = permissionStore;
  const { viewTicket } = storeToRefs(permissionStore);

  const ticket = props.ticket;
</script>

<template>
  <div class="container card" :id="ticket.id.toString()" @click="() => toggleTicketPermission(viewTicket, ticket.id)">
    <div class="grid-item grid-number">
      <div class="ticket-number">
        #{{ ticket.id }}
      </div>
    </div>
    <div class="grid-item avatar">
      <img v-if="ticket.assigneeId" v-bind:src="getUser(ticket.assigneeId).avatar" class="avatar" />
      <img v-if="ticket.assigneeId === null" src='/src/assets/unassigned.png' class="avatar" />
    </div>
    <div class="grid-item grid-title">
      <span>
        {{ ticket.title }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  border: 1px solid black;
  grid-template-columns: 70px 70px 50px;
  grid-template-rows: 35px auto;
}

.grid-item {
  height: 50px;
}

.grid-number {
  grid-column-start: 1;
  grid-column-end: 3;
}

.grid-title {
  grid-column-start: 1;
  grid-column-end: 4;
}

.card {
  text-align: center;
  height: 150px;
  background-color: aliceblue;
  box-shadow: 0 0 1px 0;
  margin: 5px;
  cursor: -webkit-grab;
  width: 190px;
}

.ticket-number {
  line-height: 35px;
}

.card {
  text-align: center;
  height: 100px;
  background-color: aliceblue;
  box-shadow: 0 0 1px 0;
  margin: 4px;
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
</style>