<script setup lang="ts">
  import { useTicketsStore } from '@/stores/tickets';
  import { computed, ref, watch } from 'vue';
  import { debounce } from '../helpers/functionHelper'

  const props = defineProps<{
    ticketId: number
  }>();
  const { getTicket, changeTitle } = useTicketsStore();
  const ticket = computed(() => getTicket(props.ticketId));
  const title = ref(ticket.value?.title ?? '');

  watch(title, (newTitle, _) => {
    debounce(() => changeTitle(props.ticketId, newTitle))();
  });
</script>

<template>
  <div class="title" v-if="ticket">
    <input v-model="title">
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
}
</style>