<script setup lang="ts">
  import SideMenuItem from '@/components/board/SideMenuItem.vue';
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import ApplicationEdit from 'vue-material-design-icons/ApplicationEdit.vue';
  import MenuIcon from 'vue-material-design-icons/Menu.vue';
  import TabPlus from 'vue-material-design-icons/TabPlus.vue';
  import TableColumnPlusAfter from 'vue-material-design-icons/TableColumnPlusAfter.vue';
  import TableColumnRemove from 'vue-material-design-icons/TableColumnRemove.vue';


  const store = usePermissionStore();
  const { showMenu, removeColumns, editColumns, addColumn, addTicket } = storeToRefs(store);
  const { togglePermission } = store;

  const menuStyle = computed(() => {
    return { display: showMenu.value.enabled ? 'block' : 'none' };
  });

  const iconSize = 40;

  const items = [
    { onClick: () => togglePermission(addColumn.value), icon: TableColumnPlusAfter, tooltipText: 'Add column' },
    { onClick: () => togglePermission(removeColumns.value), icon: TableColumnRemove, tooltipText: 'Remove columns' },
    { onClick: () => togglePermission(editColumns.value), icon: ApplicationEdit, tooltipText: 'Edit columns' },
    { onClick: () => togglePermission(addTicket.value), icon: TabPlus, tooltipText: 'Add ticket' },
  ];

</script>

<template>
  <div class="flex-container">
    <SideMenuItem :on-click="() => togglePermission(showMenu)" :tooltip-text="showMenu.enabled ? 'Hide' : 'Show'">
      <MenuIcon :size="iconSize" fill-color="var(--icon-fill)" />
    </SideMenuItem>

    <div :style="menuStyle">
      <SideMenuItem v-for=" item  in  items " :on-click="item.onClick" :tooltipText="item.tooltipText">
        <component :size="iconSize" :is="item.icon" fill-color="var(--icon-fill)" />
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