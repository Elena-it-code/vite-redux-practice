import { DecksItems } from './decks-api.ts'

const initialState = {
  decks: [] as DecksItems[], // todo: add type
  searchParams: {
    name: '',
  },
}

export type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return {
        ...state, // Копируем текущее состояние
        decks: action.decks.map((deck) => ({ ...deck })), // Обновляем decks
      }
    case 'ADD_DECK':
      return {
        ...state,
        decks: [action.payload, ...state.decks], // Добавляем новую колоду в начало массива
      }
    default:
      return state
  }
}

export const setDecksAC = (decks: DecksItems[]) => {
  return { type: 'SET_DECKS', decks } as const
}

export const addDeckAC = (decks: DecksItems) => {
  return { type: 'ADD_DECK', payload: decks } as const
}

// Actions types
export type SetDecksActionType = ReturnType<typeof setDecksAC>
export type AddDecksActionType = ReturnType<typeof addDeckAC>

export type DecksActions = SetDecksActionType | AddDecksActionType
