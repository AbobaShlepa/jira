<script setup lang="ts">
import { useColumnsStore } from '@/stores/columns';

defineProps<{
  title: string
}>()

const { removeColumn } = useColumnsStore();
</script>

<template>
  <div>
    <div class="card">
      <h3>{{ title }}</h3>
      <button @click="removeColumn(title)">-</button>
    </div>
    <div class="card">
      Card 1
    </div>
    <div class="card">
      Card 2
    </div>
  </div>
</template>