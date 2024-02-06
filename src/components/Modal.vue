<script setup lang="ts">
  import { usePermissionStore, type Permission } from '@/stores/permissions';

  const { togglePermission } = usePermissionStore();

  const props = defineProps<{
    permission: Permission
  }>()
</script>

<template>
  <div class="container modal" v-if="permission.enabled">
    <div class="header">
      <div class="header-content">
        <slot name="header"></slot>
        <button class="close" @click="togglePermission(permission)">X</button>
      </div>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  --width: 600px;
  --height: 550px;

  background-color: var(--background2);
  width: 600px;
  height: 500px;

  border: 1px solid var(--background3);
}

.modal {
  position: absolute;
  top: calc(50% - calc(var(--height) * 0.5));
  left: calc(50% - calc(var(--width) * 0.5));
}

.header {
  height: 30px;
  border-bottom: 1px solid var(--background3);
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
}

.main,
.header-content {
  margin: 5px 10px 0px 10px;
}
</style>