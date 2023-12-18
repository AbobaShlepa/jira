<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="card">
      Card 1
    </div>
    <div class="card">
      Card 2
    </div>
  </div>
</template>

<style scoped>
.title {
  border: 2px solid black;
  margin: 10px;
  width: 150px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
}

.card {
  border: 2px solid black;
  margin: 10px;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>