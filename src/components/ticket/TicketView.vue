<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { useTicketsStore } from '@/stores/tickets';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import AssigneeSelector from './AssigneeSelector.vue';
  import DescriptionEditor from './DescriptionEditor.vue';
  import TitleEditor from './TitleEditor.vue';
  import { debounce } from '@/helpers/functionHelper';

  const { viewTicket } = storeToRefs(usePermissionStore());
  const { getTicket, changeTitle, changeDescription, changeAssignee } = useTicketsStore();
  const ticket = computed(() => viewTicket.value.ticketId ? getTicket(viewTicket.value.ticketId) : null);

  function changeTitleWithDelay(newTitle: string) {
    debounce(() => changeTitle(ticket.value?.id!, newTitle))();
  }

</script>

<template>
  <div class="ticket-view" :class="viewTicket.enabled && viewTicket.ticketId ? '' : 'hidden'">
    <div v-if="ticket" :key="ticket.id">
      <div class="number">
        #{{ ticket.id }}
      </div>
      <TitleEditor :title="ticket.title" :on-title-changed="changeTitleWithDelay" />
      <AssigneeSelector :assignee-id="ticket.assigneeId"
        :on-assignee-changed="(userId) => changeAssignee(ticket?.id!, userId)" />
      <DescriptionEditor :description="ticket.description"
        :on-description-change="(newDesciption) => changeDescription(ticket?.id!, newDesciption)" />
    </div>
  </div>
</template>

<style scoped>
.ticket-view {
  width: calc(100% - 20px);
  height: 100%;
  background-color: var(--background);
}

.hidden {
  visibility: hidden;
}
</style>