import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<FetchDecksType>('/v2/decks')
  },
  addDeck(name: string){
    return instance.post<PostResponseDeskType>('/v1/decks', {name})
  }
}


// Тип для автора карточки
export type AuthorType = {
  id: string
  name: string
}

// Тип для элемента в массиве items
export type DecksItems = {
  isFavorite?: boolean
  author: AuthorType
  id: string
  userId?: string
  name: string
  isPrivate?: boolean
  cover?: string
  created: string // или можно использовать тип Date, если будем преобразовывать строку в дату
  updated: string // аналогично, можно использовать Date
  cardsCount?: number
}
export type PostResponseDeskType= {
  id: string,
  userId: string,
  name: string,
  isPrivate: boolean,
  cover: string,
  created: string,
  updated: string,
  cardsCount: number
  author: AuthorType;
}

// Тип для пагинации
export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

// Основной тип ответа от сервера
export type FetchDecksType =  {
  items: DecksItems[]
  pagination: Pagination
}