<script setup lang="ts">
import { useColumnsStore } from '@/stores/columns';
import Draggable from 'vuedraggable';
import { ref } from 'vue'
import TicketContainer from './TicketContainer.vue';

defineProps<{
  title: string
}>()

const tickets = ref([
  { id: 1, title: 'Card 1' },
  { id: 2, title: 'Card 2' },
])

const { removeColumn } = useColumnsStore();
</script>

<template>
  <div>
    <div class="card">
      <h3>{{ title }}</h3>
      <button @click="removeColumn(title)">-</button>
    </div>
    <TicketContainer :tickets="tickets"/>
  </div>
</template>