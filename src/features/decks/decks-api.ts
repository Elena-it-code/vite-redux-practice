import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<FetchDecksType>('/v2/decks')
  },
}


// Тип для автора карточки
type AuthorType = {
  id: string;
  name: string;
}

type DecksItems = {
  isFavorite: boolean;
  author: AuthorType;
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string; // или можно использовать тип Date, если будем преобразовывать строку в дату
  updated: string; // аналогично, можно использовать Date
  cardsCount: number;
}

// Тип для пагинации
type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

// Основной тип ответа от сервера
export type FetchDecksType =  {
  items: DecksItems[];
  pagination: Pagination;
}