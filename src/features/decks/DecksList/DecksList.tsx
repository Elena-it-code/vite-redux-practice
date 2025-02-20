import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI, DecksItems } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'

export const DecksList = () => {

  const  decks: DecksItems[] = useAppSelector(state => state.decksReducer.decks) // Получаем массив decks

  const dispatch = useAppDispatch()

  useEffect(()=>{
    decksAPI.getDecks().then((res)=>{
      dispatch(setDecksAC(res.data.items)) // Диспатчим данные в хранилище
    })
  }, [dispatch])

  return (
    <ul className={s.list}>
      {decks.map((deck) => ( // Рендерим каждый элемент массива decks с помощью map
        <DeckItem key={deck.id} deck={deck} /> // Рендерим каждый deck, передавая каждый объект deck в компонент DeckItem.
      ))}
    </ul>
  )
}
