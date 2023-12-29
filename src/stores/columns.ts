import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columns', () => {
  let counter = 1;
  let columns = reactive<Column[]>([
    { id: counter++, name: "ToDo" },
    { id: counter++, name: "Blocked" },
    { id: counter++, name: "Development" },
    { id: counter++, name: "QA" },
    { id: counter++, name: "Done" },
  ])

  function addColumn(name: string) {
    columns.push({
      id: counter++,
      name: name
    })
  };

  function removeColumn(id: number) {
    const index = columns.findIndex(x => x.id === id);
    columns.splice(index, 1);
  }

  function swapColumns(firstIndex: number, secondIndex: number) {
    [columns[firstIndex], columns[secondIndex]]
      = [columns[secondIndex], columns[firstIndex]];
  }

  function renameColumn(columnId: number, newName: string) {
    const column = columns.find(x => x.id === columnId);
    if (!column) {
      return;
    }

    column.name = newName;
  }

  function getColumn(columnId: number) : Column {
    return columns.find(x => x.id === columnId)!;
  }

  return {
    columns,
    addColumn,
    removeColumn,
    swapColumns,
    getColumn,
    renameColumn
  }
})

export interface Column {
  id: number;
  name: string;
}