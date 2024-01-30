<script setup lang="ts">
  import { useTicketsStore } from '@/stores/tickets';
  import { computed } from 'vue';

  const props = defineProps<{
    ticketId: number
  }>();
  const { getTicket, changeTitle } = useTicketsStore();
  const ticket = computed(() => getTicket(props.ticketId));
  const title = ticket.value?.title ?? '';
</script>

<template>
  <div class="title" v-if="ticket">
    <input v-model="title">
  </div>
  <button type="button" @click="changeTitle(props.ticketId, title)">Save</button>
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
}
</style>