<script setup lang="ts">
  import { usePermissionStore, PermissionType } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';

  const store = usePermissionStore();
  const { showMenu, removeColumns, editColumns } = storeToRefs(store);
  const { togglePermission } = store;

</script>

<template>
  <div class="flex vertical">

    <button @click="() => togglePermission(showMenu)">
      {{ showMenu.enabled ? 'Show' : 'Hide' }}
    </button>

    <div v-bind:style="{ visibility: showMenu.enabled ? 'visible' : 'hidden' }">
      <button>
        +
      </button>

      <button @click="() => togglePermission(removeColumns)">
        Remove columns
      </button>

      <button @click="() => togglePermission(editColumns)">
        Edit columns
      </button>

      <button>
        *
      </button>
    </div>
  </div>
</template>

<style scoped>
.vertical {
  writing-mode: vertical-rl;
}

button {
  height: 100px;
}
</style>