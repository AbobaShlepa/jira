import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columns', () => {
  let counter = 1;
  let columnNames = reactive([
    { id: counter++, name: "ToDo" },
    { id: counter++, name: "Blocked" },
    { id: counter++, name: "Development" },
    { id: counter++, name: "QA" },
    { id: counter++, name: "Done" },
  ])

  function addColumn(name: string) {
    columnNames.push({
      id: counter++,
      name: name
    })
  };

  function removeColumn(id: number) {
    const index = columnNames.findIndex(x => x.id === id);
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

export type Column = {
  id: number;
  name: string;
}