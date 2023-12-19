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

  function swapColumns(firstIndex: number, secondIndex: number) {
    [columnNames[firstIndex], columnNames[secondIndex]]
      = [columnNames[secondIndex], columnNames[firstIndex]];
  }

  return {
    columnNames,
    addColumn,
    removeColumn,
    swapColumns
  }
})
