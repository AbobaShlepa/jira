<script setup lang="ts">
  const props = defineProps<{
    description: string
  }>();

  let newDesciption = props.description;
</script>

<template>
  <div>
    <textarea v-model="newDesciption" class="editor" />
    <button>Save</button>
  </div>
</template>

<style scoped>
.editor {
  display: block;
  width: calc(100% - 6px)
}
</style>