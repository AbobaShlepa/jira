import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ticket } from "./tickets";

export const usePermissionStore = defineStore('permissions', () => {

  const showMenu = ref<Permission>({ permissionType: PermissionType.ShowMenu, enabled: false });
  const editColumns = ref<Permission>({ permissionType: PermissionType.EditColumns, enabled: false });
  const removeColumns = ref<Permission>({ permissionType: PermissionType.RemoveColumns, enabled: false });
  const addColumn = ref<Permission>({ permissionType: PermissionType.AddColumn, enabled: false });
  const viewTicket = ref<TicketPermission>({ permissionType: PermissionType.ViewTicket, enabled: false, ticketId: null, ticket: null })
  const addTicket = ref<Permission>({ permissionType: PermissionType.AddTicket, enabled: false })

  function togglePermission(togglingPermission: Permission) {
    togglingPermission.enabled = !togglingPermission.enabled;
  }

  function toggleTicketPermission(ticketPermission: TicketPermission, ticketId: number) {
    ticketPermission.enabled = !ticketPermission.enabled;
    ticketPermission.ticketId = ticketId;
  }

  return {
    showMenu,
    editColumns,
    removeColumns,
    addColumn,
    viewTicket,
    addTicket,
    togglePermission,
    toggleTicketPermission
  }
})

export enum PermissionType {
  ShowMenu = 1,
  EditColumns = 2,
  RemoveColumns = 3,
  AddColumn = 4,
  ViewTicket = 5,
  EditTicket = 6,
  AddTicket = 7
}

export type Permission = {
  permissionType: PermissionType;
  enabled: boolean;
}

export type TicketPermission = Permission & {
  ticketId: number | null;
  ticket: Ticket | null;
}