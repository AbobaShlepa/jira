<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { useTicketsStore } from '@/stores/tickets';
  import { useUserStore } from '@/stores/users';
  import { storeToRefs } from 'pinia';
  import { computed, ref } from 'vue';

  const { viewTicket } = storeToRefs(usePermissionStore());
  const { getTicket, changeAssignee } = useTicketsStore();
  const ticket = computed(() => viewTicket.value.ticketId ? getTicket(viewTicket.value.ticketId) : null);

  const userStore = useUserStore();
  const { getUser } = userStore;
  const selected = ref(ticket.value?.assigneeId ? getUser(ticket.value?.assigneeId).id : 0)
  const { users } = storeToRefs(userStore);

</script>

<template>
  <div class="ticket-view" :class="viewTicket.enabled && viewTicket.ticketId ? '' : 'hidden'">
    <div v-if="ticket">
      <div class="number">
        # {{ ticket.id }}
      </div>
      <div class="title">
        <input v-model="ticket.title">
      </div>
      <div class="assignee">
        <select v-model="selected" @change="() => changeAssignee(ticket?.id!, selected)">
          <option v-for="user in users" :value="user.id">
            <img v-bind:src="user.avatar"> {{ user.name }}
          </option>
        </select>
      </div>
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

.assignee {}
</style>