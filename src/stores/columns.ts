import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('counter', () => {
  let columnNames = reactive([
    "ToDo",
    "Blocked",
    "Development",
    "Done",
    "Kek"
  ])

  function addColumn(name: string) {
    columnNames.push(name)
  };

  function removeColumn(name: string) {
    const index = columnNames.indexOf(name);
    columnNames.splice(index, 1);
  }

  return {
    columnNames,
    addColumn,
    removeColumn
  }
})
