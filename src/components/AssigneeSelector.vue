<script setup lang="ts">
  import { useUserStore } from '@/stores/users';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import User from './User.vue';

  const props = defineProps<{
    assigneeId: number
  }>();

  const store = useUserStore();
  const { getUser } = store;
  const { users } = storeToRefs(store);
  const currentUser = computed(() => getUser(props.assigneeId));
  const userList = computed(() => users.value.filter(x => x.id !== props.assigneeId));
</script>

<template>
  <div>
    <details>
      <summary>
        <User :user="currentUser" />
      </summary>
      <div class="list">
        <div v-for="user in userList">
          <User :user="user" v-on:click="() => $emit('assigneeChanged', user.id)" />
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