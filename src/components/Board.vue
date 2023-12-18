<script setup lang="ts">
import { useColumnsStore } from '@/stores/columns';
import Column from './Column.vue'

const { columnNames } = useColumnsStore();
</script>


<template>
  <div class="board">
    <Column v-for="name in columnNames" :title="name" />
  </div>
</template>

<style scoped>
  .board {
    display: flex;
  }
</style>