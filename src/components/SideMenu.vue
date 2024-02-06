<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  const store = usePermissionStore();
  const { showMenu, removeColumns, editColumns, addColumn, addTicket } = storeToRefs(store);
  const { togglePermission } = store;

  const router = useRouter();

  const items = [
    { onClick: () => router.push('/'), path: '/src/assets/board3.svg', tooltipText: 'Board' },
    { onClick: () => togglePermission(addColumn.value), path: '/src/assets/add-column.svg', tooltipText: 'Add column' },
    { onClick: () => togglePermission(removeColumns.value), path: '/src/assets/remove-column.svg', tooltipText: 'Remove columns' },
    { onClick: () => togglePermission(editColumns.value), path: '/src/assets/edit-column.svg', tooltipText: 'Edit columns' },
    { onClick: () => togglePermission(addTicket.value), path: '/src/assets/add-ticket.svg', tooltipText: 'Add ticket' },
  ];

</script>

<template>
  <div class="flex-container">

    <button @click="() => togglePermission(showMenu)" class="tooltip item">
      <img :src="showMenu.enabled ? '/src/assets/hide.svg' : '/src/assets/show.svg'" class="icon" />
      <span class="tooltip-text">
        {{ showMenu.enabled ? 'Hide' : 'Show' }}
      </span>
    </button>

    <div v-bind:style="{ display: showMenu.enabled ? 'block' : 'none' }">

      <button v-for="item in items" @click="item.onClick" class="tooltip item">
        <img :src="item.path" class="icon" />
        <span class="tooltip-text">
          {{ item.tooltipText }}
        </span>
      </button>

    </div>
  </div>
</template>

<style scoped>
.vertical {
  writing-mode: vertical-rl;
}

.flex-container {
  display: flex;
  flex-flow: column wrap;
  width: 50px;
  --button-size: 50px;
}

button {
  all: unset;
  height: var(--button-size);
  width: var(--button-size);
  cursor: pointer;
}

.icon {
  height: var(--button-size);
  width: var(--button-size);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: var(--background2);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  height: calc(var(--button-size) - 20px);
  line-height: calc(var(--button-size) - 20px);

  position: absolute;
  z-index: 1;
  top: 5px;
  right: 105%;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}

.item:hover {
  background: var(--background2);
}
</style>