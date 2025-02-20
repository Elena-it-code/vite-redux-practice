import s from './DecksList.module.css'
import { useEffect } from 'react'
import { DecksItems } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { fetchDecksTC } from '../decks-thunks.ts'

export const DecksList = () => {

  const  decks: DecksItems[] = useAppSelector(state => state.decksReducer.decks) // Получаем массив decks

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC()); // Вызываем fetchDecksTC с помощью dispatch
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {decks.map((deck) => ( // Рендерим каждый элемент массива decks с помощью map
        <DeckItem key={deck.id} deck={deck} /> // Рендерим каждый deck, передавая каждый объект deck в компонент DeckItem.
      ))}
    </ul>
  )
}
