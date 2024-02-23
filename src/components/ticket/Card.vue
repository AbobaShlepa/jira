<script setup lang="ts">
  import resolvePath from '@/helpers/pathResolver';
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
    <div class="title">
      {{ ticket.title }}
    </div>
    <span class="ticket-number">
      #{{ ticket.id }}
    </span>
    <span class="avatar-container">
      <img :src="resolvePath(getUser(ticket.assigneeId).avatar)" class="avatar" />
    </span>
  </div>
</template>

<style scoped>
  .container {
    border: 1px solid black;
    color: var(--ticket-text);
  }

  .title {
    height: calc(100% - 45px);
    text-align: left;
    padding: 5px 0 0 5px;
  }

  .ticket-number {
    line-height: 35px;
    float: left;
    margin-left: 10px;
  }

  .card {
    text-align: center;
    height: 100px;
    background-color: var(--ticket-background);
    box-shadow: 0 0 1px 0;
    margin: 5px;
    cursor: -webkit-grab;
  }

  .shaking {
    animation: tilt-shaking 0.15s infinite;
    cursor: -webkit-grabbing;
  }

  .avatar-container {
    float: right;
    padding: 0 5px 5px 0;
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