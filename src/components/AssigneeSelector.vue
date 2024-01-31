<script setup lang="ts">
  import { useUserStore } from '@/stores/users';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import User from './User.vue';

  const props = defineProps<{
    assigneeId: number | null,
    onAssigneeChanged: (userId: number) => void,
  }>();

  const store = useUserStore();
  const { getUser, defaultUser } = store;
  const { users } = storeToRefs(store);

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
        <div v-for="user in userList" :key="user.id">
          <User :user="user" @click="onAssigneeChanged(user.id)" />
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