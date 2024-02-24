<script setup lang="ts">
  import { useSprintStore } from '@/stores/sprints';
  import { storeToRefs } from 'pinia';

  const store = useSprintStore();
  const { sprints } = store;;
  const { currentSprintId } = storeToRefs(store)

  function handleClick(newValue: number) {
    currentSprintId.value = newValue;
  }
</script>

<template>
  <ul class="container">
    <li v-for="sprint in sprints" class="item" :class="sprint.id == currentSprintId ? 'clicked' : ''"
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
    color: var(--text-title);
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
    box-shadow: inset 0 -2px 0 0 var(--sprint-active);
    color: var(--text-color) !important;
  }

  a {
    text-decoration: none;
  }
</style>