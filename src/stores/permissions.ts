import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const usePermissionStore = defineStore('permissions', () => {

  const showMenu = ref<Permission>({ permissionType: PermissionType.ShowMenu, enabled: false });
  const editColumns = ref<Permission>({ permissionType: PermissionType.EditColumns, enabled: false });
  const removeColumns = ref<Permission>({ permissionType: PermissionType.RemoveColumns, enabled: false });
  const addColumn = ref<Permission>({ permissionType: PermissionType.AddColumn, enabled: false });

  function togglePermission(togglingPermission: Permission) {
    togglingPermission.enabled = !togglingPermission.enabled;
  }

  return {
    showMenu,
    editColumns,
    removeColumns,
    addColumn,
    togglePermission
  }
})

export enum PermissionType {
  ShowMenu = 1,
  EditColumns = 2,
  RemoveColumns = 3,
  AddColumn = 4,
}

export type Permission = {
  permissionType: PermissionType;
  enabled: boolean;
}