<script setup lang="ts">
  import { useUserStore } from '@/stores/users';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import User from './User.vue';
  import { useTicketsStore } from '@/stores/tickets';

  const props = defineProps<{
    ticketId: number
  }>();

  const ticketStore = useTicketsStore();
  const { getTicket, changeAssignee } = ticketStore;
  const ticket = getTicket(props.ticketId);
  const assigneeId = computed(() => ticket?.assigneeId ?? 0);

  const store = useUserStore();
  const { getUser } = store;
  const { users } = storeToRefs(store);
  const currentUser = computed(() => getUser(assigneeId.value));
  const userList = computed(() => users.value.filter(x => x.id !== assigneeId.value));
</script>

<template>
  <div>
    <details>
      <summary>
        <User :user="currentUser" :key="currentUser.id" />
      </summary>
      <div class="list">
        <div v-for="user in  userList " :key="user.id">
          <User :user="user" v-on:click="() => changeAssignee(props.ticketId, user.id)" />
        </div>
      </div>
    </details>
  </div>
</template>

<style scoped>
.list {}

.hidden {
  visibility: hidden;
}
</style>