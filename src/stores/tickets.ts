import { computed, reactive, } from 'vue'
import { defineStore } from 'pinia'
import { getItem, setItem } from './storageExtensions';

let counter = 1;
const defaultTickets: Ticket[] = [
  { id: counter++, title: 'Fix drag-n-drop drop range', assigneeId: 1, columnId: 5, description: '' },
  { id: counter++, title: 'Add avatars for cards to visualise who is assigned', assigneeId: 1, columnId: 5, description: '' },
  { id: counter++, title: 'Add ability to toggle column editing', assigneeId: 1, columnId: 5, description: '' },
  { id: counter++, title: 'Add ability to view ticket description', assigneeId: null, columnId: 5, description: 'Add editable ticket description' },
  { id: counter++, title: 'Add board saving/loading', assigneeId: null, columnId: 5, description: '' },
  { id: counter++, title: 'Add tickets', assigneeId: null, columnId: 1, description: '' },
  { id: counter++, title: 'Fix everything broken during implementation', assigneeId: null, columnId: 1, description: '' },
  { id: counter++, title: 'Add sprints', assigneeId: null, columnId: 1, description: '' },
  { id: counter++, title: 'Add navigation', assigneeId: null, columnId: 1, description: '' },
];
const key = 'tickets';

export const useTicketsStore = defineStore(key, () => {
  let values = getItem<Ticket[]>(key) ?? defaultTickets;

  const tickets = reactive<Ticket[]>(values);
  const getTickets = computed(() => (columnId: number) => tickets.filter(x => x.columnId === columnId));
  const getTicket = computed(() => (ticketId: number) => tickets.find(x => x.id === ticketId));

  function changeColumn(ticketId: number, columnId: number) {
    const ticket = tickets.find(x => x.id === ticketId)!;
    ticket.columnId = columnId;
    saveState();
  }

  function changeAssignee(ticketId: number, assigneeId: number) {
    const ticket = tickets.find(x => x.id === ticketId)!;
    ticket.assigneeId = assigneeId;
    saveState();
  }

  function changeDescription(ticketId: number, description: string) {
    const ticket = tickets.find(x => x.id === ticketId)!;
    ticket.description = description;
    saveState();
  }

  function saveState() {
    setItem(key, tickets);
  }

  return {
    counter,
    tickets,
    getTickets,
    getTicket,
    changeColumn,
    changeAssignee,
    changeDescription
  }
})

export type Ticket = {
  id: number;
  title: string;
  assigneeId: number | null;
  columnId: number;
  description: string;
}