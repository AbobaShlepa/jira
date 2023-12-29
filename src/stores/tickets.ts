import { computed, reactive, } from 'vue'
import { defineStore } from 'pinia'

export const useTicketsStore = defineStore('tickets', () => {
  let counter = 1;
  const tickets = reactive([
    { id: counter++, title: 'Fix drag-n-drop drop range', assigneeId: 1, columnId: 5 },
    { id: counter++, title: 'Add avatars for cards to visualise who is assigned', assigneeId: 1, columnId: 5 },
    { id: counter++, title: 'Add ability to toggle column editing', assigneeId: 1, columnId: 1 },
    { id: counter++, title: 'Add ability to view ticket description', assigneeId: null, columnId: 1 },
    { id: counter++, title: 'Fix everything broken during implementation', assigneeId: null, columnId: 1 },
  ])

  const getTickets = computed(() => (columnId: number) => tickets.filter(x => x.columnId === columnId));

  function changeColumn(ticketId: number, columnId: number) {
    const ticket = tickets.find(x => x.id === ticketId)!;
    ticket.columnId = columnId;
    console.log(tickets)
  }

  return {
    counter,
    tickets,
    getTickets,
    changeColumn
  }
})


export type Ticket = {
  id: number;
  title: string;
  assigneeId: number | null;
  columnId: number;
}