<script setup lang="ts">
  const props = defineProps<{
    description: string,
    onDescriptionChange: (newDescription: string) => void,
  }>();

  let newDesciption = props.description;
</script>

<template>
  <p>Enter ticket desciption</p>
  <div>
    <textarea v-model="newDesciption" class="editor" />
    <button @click="onDescriptionChange(newDesciption)">Save</button>
  </div>
</template>

<style scoped>
  .editor {
    display: block;
    width: 100%;
    height: 70px;
    resize: none;
    border: none;
  }
</style>