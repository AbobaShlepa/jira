<script setup lang="ts">
  import { useUserStore } from '@/stores/users';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import User from './User.vue';
  import { useTicketsStore } from '@/stores/tickets';

  const props = defineProps<{
    ticketId: number,
    assigneeId: number | null,
  }>();

  const store = useUserStore();
  const { getUser, defaultUser } = store;
  const { users } = storeToRefs(store);

  const ticketStore = useTicketsStore();
  const { changeAssignee } = ticketStore;

  const currentUser = computed(() => props.assigneeId ? getUser(props.assigneeId) : defaultUser);
  const userList = computed(() => users.value.filter(x => x.id !== props.assigneeId));
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
.hidden {
  visibility: hidden;
}
</style>