<script setup lang="ts">
import Column from './Column.vue'
</script>


<template>
  <div class="board">
    <Column title="ToDo" />
    <Column title="Blocked" />
    <Column title="Development" />
    <Column title="Done" />
  </div>
</template>

<style scoped>
  .board {
    display: flex;
  }
</style>