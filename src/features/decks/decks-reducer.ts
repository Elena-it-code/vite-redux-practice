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
        decks: action.decks.map((deck) => ({ ...deck})), // Обновляем decks
    }

    default:
      return state
  }
}



export const setDecksAC = (decks: DecksItems[]) => {
  return { type: 'SET_DECKS', decks} as const
}


//type DecksActions = any
export type DecksActions = ReturnType<typeof setDecksAC>

