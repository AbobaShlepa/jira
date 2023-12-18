import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('counter', () => {
  const columnNames = ref([
    "ToDo",
    "Blocked",
    "Development",
    "Done",
    "Kek"
  ])

  return { columnNames }
})
