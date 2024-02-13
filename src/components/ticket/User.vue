<script setup lang="ts">
  import type { User } from '@/stores/users';

  const props = defineProps<{
    user: User
  }>();

  const user = props.user;
</script>

<template>
  <div class="user-container">
    <img class="avatar middle" v-bind:src="user.avatar">
    <span class="middle username">{{ user.name }}</span>
  </div>
</template>

<style scoped>
.avatar {
  height: 35px;
  border-radius: 50%;
}

.user-container {
  height: 35px;
  display: inline-block;
  width: 90%;
}

.user-container:hover {
  border: 1px solid black;
}

.middle {
  vertical-align: middle;
}

.username {
  margin-left: 15px;
}
</style>