<script setup lang="ts">
  import { useTicketsStore } from '@/stores/tickets';
  const props = defineProps<{
    ticketId: number,
    description: string
  }>();

  let newDesciption = props.description;

  const { changeDescription } = useTicketsStore();
</script>

<template>
  <div>
    <textarea v-model="newDesciption" class="editor" />
    <button @click="changeDescription(ticketId, newDesciption)">Save</button>
  </div>
</template>

<style scoped>
.editor {
  display: block;
  width: calc(100% - 6px)
}
</style>