<script setup lang="ts">
  import { useColumnsStore } from '@/stores/columns';
  let name: string;
  const { addColumn } = useColumnsStore();
</script>

<template>
  <div class="mgt-10 container">
    <div>Enter new column name:</div>
    <input v-model="name" type="text" />
    <button @click="addColumn(name)" style="float: right;">Add</button>
  </div>
</template>

<style scoped>
input {
  width: 100px;
}

.mgt-10 {
  margin-top: 10px;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
</style>