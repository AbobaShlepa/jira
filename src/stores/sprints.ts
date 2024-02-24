import { defineStore } from "pinia";
import { reactive, ref } from "vue";

let counter = 1;

const defaultSprints = reactive<Sprint[]>([
  { id: counter++, name: 'Sprint 1' },
  { id: counter++, name: 'Sprint 2' },
  { id: counter++, name: 'Sprint 3' },
  { id: counter++, name: 'Sprint 4' },
  { id: counter++, name: 'Sprint 5' },
]);

const key = 'sprints';

export const useSprintStore = defineStore(key, () => {
  const sprints = defaultSprints;
  const currentSprintId = ref(sprints[0].id);

  return {
    sprints,
    currentSprintId
  }
})

export type Sprint = {
  id: number;
  name: string;
}