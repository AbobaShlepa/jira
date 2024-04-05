<script setup lang="ts">
import { usePermissionStore, type Permission } from '@/stores/permissions';
import { OnClickOutside } from '@vueuse/components';

const { togglePermission } = usePermissionStore();

defineProps<{
  permission: Permission
}>()
</script>

<template>
  <OnClickOutside @trigger="permission.enabled = false">
    <Transition name="modal">
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
    </Transition>
  </OnClickOutside>
</template>

<style scoped>
.container {
  --width: 600px;
  --height: 550px;

  background-color: var(--modal-background);
  width: 600px;
  height: 500px;

  border: 1px solid var(--modal-border);
}

.modal {
  position: absolute;
  top: calc(50% - calc(var(--height) * 0.5));
  left: calc(50% - calc(var(--width) * 0.5));
}

.header {
  height: 40px;
  border-bottom: 1px solid var(--subcontainer-background);
  color: var(--modal-header-text);
  background-color: var(--modal-header);
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
}

.main {
  background-color: var(--modal-background);
  color: var(--text-color);
}

.main,
.header-content {
  margin: 0 10px 0px 10px;
  padding: 5px 0 0 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>