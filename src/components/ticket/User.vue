<script setup lang="ts">
  import resolvePath from '@/helpers/pathResolver';
  import type { User } from '@/stores/users';

  const props = defineProps<{
    user: User
  }>();

  const user = props.user;
</script>

<template>
  <div class="user-container">
    <img class="avatar middle" :src="resolvePath(user.avatar)">
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
    border: 1px solid var(--subcontainer-background);
  }

  .middle {
    vertical-align: middle;
  }

  .username {
    margin-left: 15px;
  }
</style>