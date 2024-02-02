<script setup lang="ts">
  import { useSprintStore } from '@/stores/sprints';
  import { useRouter } from 'vue-router';
  const { sprints } = useSprintStore();

  const router = useRouter();

  function handleClick(sprintId: number) {
    router.push({ name: 'board', params: { id: sprintId } })
  }
</script>

<template>
  <ul class="container">
    <li v-for="sprint in sprints" class="item">
      <button @click="handleClick(sprint.id)">
        {{ sprint.name }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.container {
  display: flex;
  list-style: none;
  justify-content: left;
}

.item {
  margin: 0px 30px 0px 30px;
}

.link-clicked {
  box-shadow: inset 0 -2 0 0 black;
}

a {
  text-decoration: none;
}
</style>