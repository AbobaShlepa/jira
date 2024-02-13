import { useSprintStore } from "@/stores/sprints";
import { useTicketsStore, type Ticket } from "@/stores/tickets";
import { useUserStore } from "@/stores/users";
import { storeToRefs } from "pinia";

type keyword = 'title' | 'sprint' | 'assignee';

const keywords = [
  'title', 
  'sprint',
  'assignee'
]

export type SearchQuery = {
  [key in keyword]: string | null;
};

export interface SearchResult {
  success: boolean,
  tickets: Ticket[] | []
}

const invalidResult: SearchResult = {
  success: false,
  tickets: [],
}

export function search(query: string): SearchResult {
  const searchQuery = parse(query);
  if (!searchQuery) {
    return invalidResult;
  }

  const result = filter(searchQuery);
  return {
    tickets: result,
    success: true,
  }
}

function parse(query: string): SearchQuery | null {
  const splitRegex = /and/gi;
  const searchTerms = query.split(splitRegex);
  const searchQuery: SearchQuery = { title: null, assignee: null, sprint: null };
  
  for (const term of searchTerms) {
    const splitedTerm = term.trim().split(' ');
    if (splitedTerm.length !== 3) {
      return null;
    }

    const keyWord = splitedTerm[0].trim();
    const equalitySign = splitedTerm[1].trim();
    const value = splitedTerm[2].trim();

    if (!isValidKeyword(keyWord) || equalitySign !== '=' || !value) {
      return null;
    }

    searchQuery[keyWord as keyword]  = value.toLowerCase();;
  }

  return searchQuery;
}

function filter(query: SearchQuery): Ticket[] {
  const ticketStore = useTicketsStore();
  const { tickets } = storeToRefs(ticketStore);

  const sprintStore = useSprintStore();
  const { sprints } = storeToRefs(sprintStore);
  
  const userStore = useUserStore();
  const { users } = storeToRefs(userStore);
  
  const validSprints = query.sprint ? sprints.value.filter(x => x.name.toLowerCase().includes(query.sprint!)) : sprints.value;
  const validTickets = query.title ? tickets.value.filter(x => x.title.toLowerCase().includes(query.title!)) : tickets.value;
  const validUsers = query.assignee ? users.value.filter(x => x.name.toLowerCase().includes(query.assignee!)) : users.value;

  const sprintIds = validSprints.map(x => x.id);
  const ticketIds = validTickets.map(x => x.id);
  const userIds = validUsers.map(x => x.id);

  return tickets.value.filter(x => sprintIds.includes(x.sprintId) && ticketIds.includes(x.id) && userIds.includes(x.assigneeId ?? 0));
}

function isValidKeyword(keyword: string) {
  return keywords.includes(keyword);
}