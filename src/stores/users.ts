import { defineStore } from "pinia";
import { computed, reactive } from "vue";

export const useUserStore = defineStore('users', () => {
  let counter = 1;
  const users = reactive<User[]>([
    { id: counter++, name: 'Happy Person', avatar: '/happy.png' },
    { id: counter++, name: 'Just Cat', avatar: '/cat.png' },
    { id: counter++, name: 'Sad Guy', avatar: '/sad.png' }
  ])

  const getUser = computed(() => (id: number | null) => users.find(x => x.id === id) ?? defaultUser);
  const defaultUser: User = {
    id: 0, name: 'Unassigned', avatar: '/unassigned.png'
  };

  return {
    counter,
    users,
    getUser,
    defaultUser
  }
})

export type User = {
  id: number;
  name: string;
  avatar: string;
}