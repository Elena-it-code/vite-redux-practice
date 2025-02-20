import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'

export const DecksList = () => {

  useEffect(()=>{
    decksApi.getDecks().then()
  }, [])

  return <ul className={s.list}></ul>
}
