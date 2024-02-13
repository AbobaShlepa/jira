import type { Ticket } from "@/stores/tickets";

export interface SearchQuery {
  title: string | null;
}

export interface SearchResult {
  success: boolean,
  query: SearchQuery | null,
  tickets: Ticket[] | []
}

const keyWords = [
  'title'
];

const invalidResult: SearchResult = {
  success: false,
  query: null,
  tickets: [],
}

const searchQuery: SearchQuery = {
  title: null
};

const successResult: SearchResult = {
  success: true,
  query: searchQuery,
  tickets: []
};

export function search(tickets: Ticket[], query: string): SearchResult {
  const parseResult = parse(query);
  if (!parseResult.success || parseResult.query === null) {
    return invalidResult;
  }

  const result = tickets.filter(x => x.title.toLowerCase().includes(parseResult.query?.title!));
  successResult.tickets = result;

  return successResult;
}

function parse(query: string): SearchResult {
  const splitRegex = /and|or/gi;
  const searchTerms = query.split(splitRegex);
  
  for (const term of searchTerms) {
    // console.log('term: ', term)
    const splitedTerm = term.split(' ');
    const keyWord = splitedTerm[0];
    const equalitySign = splitedTerm[1];
    const value = splitedTerm[2]
    // console.log('splitedTerm: ', splitedTerm)
    // console.log('keyword: ', keyWord)
    if (!keyWords.includes(keyWord) || equalitySign !== '=' || !value) {
    // console.log('no keyword');
      return invalidResult;
    }

    searchQuery.title = value.toLowerCase();
  }

  return successResult;
}