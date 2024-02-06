<script setup lang="ts">
  import { useSprintStore } from '@/stores/sprints';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  const { sprints } = useSprintStore();

  const router = useRouter();
  const activeSprint = ref(1);

  function handleClick(sprintId: number) {
    router.push({ name: 'board', params: { id: sprintId } })
    activeSprint.value = sprintId;
  }
</script>

<template>
  <ul class="container">
    <li v-for="sprint in sprints" class="item" :class="sprint.id == activeSprint ? 'clicked' : ''"
      @click="handleClick(sprint.id)">
      <a>{{ sprint.name }}</a>
    </li>
  </ul>
</template>

<style scoped>
.container {
  display: flex;
  list-style: none;
  justify-content: center
}

.item {
  margin: 0px 0px 0px 0px;
  font-weight: 400;
  line-height: 1rem;
  font-size: large;
  color: #888888;
  box-sizing: border-box;
  height: 35px;
  width: 100px;
  text-align: center;
}

.item:hover:not(.clicked) {
  box-shadow: inset 0 -2px 0 0 #FFFFFF;
  color: var(--text-color);
}

.clicked {
  box-shadow: inset 0 -2px 0 0 var(--color-active);
  color: var(--text-color) !important;
}

a {
  text-decoration: none;
}
</style>