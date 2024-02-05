<script setup lang="ts">
  import { usePermissionStore } from '@/stores/permissions';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  const store = usePermissionStore();
  const { showMenu, removeColumns, editColumns, addColumn } = storeToRefs(store);
  const { togglePermission } = store;

  const router = useRouter()

</script>

<template>
  <div class="flex-container">

    <button @click="() => togglePermission(showMenu)">
      {{ showMenu.enabled ? 'Show' : 'Hide' }}
    </button>

    <div v-bind:style="{ display: showMenu.enabled ? 'block' : 'none' }">

      <button @click="() => router.push('/')">
        Board
      </button>

      <button @click="() => togglePermission(addColumn)">
        Add column
      </button>

      <button @click="() => togglePermission(removeColumns)">
        Remove columns
      </button>

      <button @click="() => togglePermission(editColumns)">
        Edit columns
      </button>

      <button @click="() => router.push('/new')">
        Add ticket
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
}

button {
  height: 50px;
  width: 70px;
}
</style>