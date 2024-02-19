import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI, ItemType } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { setDecksAC } from '../decks-reducer.ts'

export const DecksList = () => {
  const decks = useAppSelector<ItemType[]>(state => state.decksReducer.decks)
  const dispatch = useAppDispatch()
  useEffect(() => {
    decksAPI.fetchDecks()
      .then(res => dispatch(setDecksAC(res.data.items)))
  }, [dispatch])
  return <ul className={s.list}>{
    decks.map(d => <DeckItem deck={d} />)
  }</ul>
}
