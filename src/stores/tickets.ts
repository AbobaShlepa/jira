import { computed, reactive, } from 'vue'
import { defineStore } from 'pinia'

export const useTicketsStore = defineStore('tickets', () => {
  let counter = 1;
  const tickets = reactive([
    { id: counter++, title: 'Card 1', assigneeId: null, columnId: 1 },
    { id: counter++, title: 'Card 2', assigneeId: null, columnId: 1 },
    { id: counter++, title: 'Card 3', assigneeId: null, columnId: 1 },
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