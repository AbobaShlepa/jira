import { defineStore } from 'pinia';
import { computed, reactive, } from 'vue';
import { getItem, setItem } from './storageExtensions';

let counter = 1;
const defaultTickets: Ticket[] = [
  { id: counter++, title: 'Fix drag-n-drop drop range', assigneeId: 1, columnId: 5, description: '', sprintId: 1 },
  { id: counter++, title: 'Add avatars for cards to visualise who is assigned', assigneeId: 1, columnId: 5, description: '', sprintId: 1 },
  { id: counter++, title: 'Add ability to toggle column editing', assigneeId: 1, columnId: 5, description: '', sprintId: 1 },
  { id: counter++, title: 'Add ability to view ticket description', assigneeId: null, columnId: 5, description: 'Add editable ticket description', sprintId: 2 },
  { id: counter++, title: 'Add tickets', assigneeId: null, columnId: 3, description: '', sprintId: 1 },
  { id: counter++, title: 'Fix everything broken during implementation', assigneeId: null, columnId: 1, description: '', sprintId: 1 },

  { id: counter++, title: 'Add sprints', assigneeId: 2, columnId: 5, description: '', sprintId: 2 },
  { id: counter++, title: 'Add board saving/loading', assigneeId: null, columnId: 5, description: '', sprintId: 2 },
  { id: counter++, title: 'Add navigation', assigneeId: 2, columnId: 5, description: '', sprintId: 2 },
  { id: counter++, title: 'Add dark theme', assigneeId: 2, columnId: 3, description: 'Add dark theme, icons etc.', sprintId: 2 },

  { id: counter++, title: 'Add sprint selector for add and edit ticket', assigneeId: 2, columnId: 3, description: '', sprintId: 2 },
  { id: counter++, title: 'Migrate add ticket to modal', assigneeId: 2, columnId: 5, description: '', sprintId: 2 },
  { id: counter++, title: 'Migrate edit ticket to modal', assigneeId: 2, columnId: 5, description: '', sprintId: 2 },

  { id: counter++, title: 'Add ticket types', assigneeId: 2, columnId: 1, description: '', sprintId: 3 },
  
  { id: counter++, title: 'Add theme selector', assigneeId: 2, columnId: 5, description: '', sprintId: 4 },
  { id: counter++, title: 'Add light theme', assigneeId: 2, columnId: 5, description: '', sprintId: 4 },
  { id: counter++, title: 'Add dark theme', assigneeId: 2, columnId: 5, description: '', sprintId: 4 },

  
  { id: counter++, title: 'Refactor sprint selector', assigneeId: 2, columnId: 5, description: '', sprintId: 5 },
  { id: counter++, title: 'Add another theme', assigneeId: 2, columnId: 3, description: '', sprintId: 5 },
  { id: counter++, title: 'Add yet another theme', assigneeId: 2, columnId: 1, description: '', sprintId: 5 },
  { id: counter++, title: 'Add backlog', assigneeId: 2, columnId: 1, description: '', sprintId: 5 },
];
const key = 'tickets';

export const useTicketsStore = defineStore(key, () => {
  let values = getItem<Ticket[]>(key) ?? defaultTickets;

  const tickets = reactive<Ticket[]>(values);
  const getTickets = computed(() => (columnId: number, sprintId: number) => tickets.filter(x => x.columnId === columnId && x.sprintId === sprintId));
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

  function changeTitle(ticketId: number, title: string) {
    const ticket = tickets.find(x => x.id === ticketId)!;
    ticket.title = title;
    saveState();
  }

  function addNewTicket(ticket: Ticket) {
    tickets.push({
      id: counter++,
      assigneeId: ticket.assigneeId,
      title: ticket.title,
      description: ticket.description,
      columnId: 1,
      sprintId: ticket.sprintId,
    });
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
    changeDescription,
    changeTitle,
    addNewTicket,
  }
})

export type Ticket = {
  id: number;
  title: string;
  assigneeId: number | null;
  columnId: number;
  description: string;
  sprintId: number
}