import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useUserStore = defineStore('users', () => {
  let counter = 1;
  const users = reactive<User[]>([
    { id: counter++, name: 'Happy Person', avatar: '/src/assets/happy.png' },
    { id: counter++, name: 'Just Cat', avatar: '/src/assets/cat.png' },
    { id: counter++, name: 'Sad Guy', avatar: '/src/assets/sad.png' }
  ])

  const getUser = computed(() => (id: number) => users.filter(x => x.id === id)[0]);

  return {
    counter,
    users,
    getUser
  }
})

export type User = {
  id: number;
  name: string;
  avatar: string;
}