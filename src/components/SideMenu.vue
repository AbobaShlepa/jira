<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';

  const store = usePermissionStore();
  const { showMenu, removeColumns, editColumns } = storeToRefs(store);
  const { togglePermission } = store;

</script>

<template>
  <div class="flex-container">

    <button @click="() => togglePermission(showMenu)">
      {{ showMenu.enabled ? 'Show' : 'Hide' }}
    </button>

    <div v-bind:style="{ display: showMenu.enabled ? 'block' : 'none' }">
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

.flex-container {
  display: flex;
  flex-flow: column wrap;
  width: 70px;
  height: 250px;
}

button {
  height: 50px;
  width: 70px;
}
</style>