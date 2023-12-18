<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  let name: string;
  const { addColumn } = useColumnsStore();
</script>

<template>
  <div class="card">
    <input v-model="name" type="text"/>
    <button @click="addColumn(name)">Add</button>
  </div>
</template>

<style scoped>
 input {
  width: 100px;
 }
</style>