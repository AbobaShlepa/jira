<script setup lang="ts">
  const props = defineProps<{
    description: string,
    onDescriptionChange: (newDescription: string) => void,
  }>();

  let newDesciption = props.description;
</script>

<template>
  <div>
    <textarea v-model="newDesciption" class="editor" />
    <button @click="onDescriptionChange(newDesciption)">Save</button>
  </div>
</template>

<style scoped>
.editor {
  display: block;
  width: calc(100% - 6px);
  max-width: 500px;
  min-width: 250px;
  max-height: 175px;
  min-height: 50px;
  ;
}
</style>