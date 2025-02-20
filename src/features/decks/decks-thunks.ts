import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'
import { decksAPI } from './decks-api.ts'

export const fetchDecksTC = ()=>(dispatch: AppDispatch)=>{
  decksAPI.getDecks().then((res)=>{
    dispatch(setDecksAC(res.data.items)) // Диспатчим данные в хранилище
  })
}

export const addDeckTC = (name: string) => async (dispatch: AppDispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data)); // Диспатчим новую колоду
  });
};