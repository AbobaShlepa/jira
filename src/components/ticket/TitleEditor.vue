<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps<{
    title: string,
    onTitleChanged: (newTitle: string) => void,
  }>();

  const title = ref(props.title);
</script>

<template>
  <p>Enter ticket title:</p>
  <div class="title">
    <input v-model="title" @change="onTitleChanged(($event.target as HTMLInputElement).value)">
  </div>
</template>

<style scoped>
.title {
  margin: 10px 5px 10px 5px;
}

.title:hover {
  border: 1px solid black;
}

input {
  width: -webkit-fill-available;
  border-width: 0;
  line-height: 150%;
  height: 25px;
}
</style>