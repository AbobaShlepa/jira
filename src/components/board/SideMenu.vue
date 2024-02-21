<script setup lang="ts">
  import SideMenuItem from '@/components/board/SideMenuItem.vue';
  import { usePermissionStore } from '@/stores/permissions';
  import { HiMenu } from "oh-vue-icons/icons";
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';

  const store = usePermissionStore();
  const { showMenu, removeColumns, editColumns, addColumn, addTicket } = storeToRefs(store);
  const { togglePermission } = store;

  const menuStyle = computed(() => {
    return { display: showMenu.value.enabled ? 'block' : 'none' };
  });

  const items = [
    { onClick: () => togglePermission(addColumn.value), icon: HiMenu, tooltipText: 'Add column' },
    { onClick: () => togglePermission(removeColumns.value), path: 'remove-column.svg', tooltipText: 'Remove columns' },
    { onClick: () => togglePermission(editColumns.value), path: 'edit-column.svg', tooltipText: 'Edit columns' },
    { onClick: () => togglePermission(addTicket.value), path: 'add-ticket.svg', tooltipText: 'Add ticket' },
  ];

</script>

<template>
  <div class="flex-container">
    <SideMenuItem :on-click="() => togglePermission(showMenu)" :tooltip-text="showMenu.enabled ? 'Hide' : 'Show'">
      <v-icon name="hi-menu" />
    </SideMenuItem>

    <div :style="menuStyle">
      <SideMenuItem v-for="item in items" :on-click="item.onClick" :tooltipText="item.tooltipText">
        Icon!
      </SideMenuItem>
    </div>
  </div>
</template>

<style scoped>
  .flex-container {
    display: flex;
    flex-flow: column wrap;
    width: var(--button-size);
    --button-size: 40px;
  }
</style>