<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  let name: string;
  const { addColumn } = useColumnsStore();
</script>

<template>
  <div class="card mgt-10 flex-container">
    <input v-model="name" type="text" />
    <button @click="addColumn(name)">Add</button>
  </div>
</template>

<style scoped>
input {
  width: 100px;
}

.mgt-10 {
  margin-top: 10px;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
</style>