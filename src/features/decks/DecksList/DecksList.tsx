import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksAPI } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { setDecksAC } from '../decks-reducer.ts'
import { selectDecks } from '../decks-selectors.ts'
import { fetchDecksTC } from '../decks-thunks.ts'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [dispatch])
  return (
    <ul className={s.list}>
      {decks.map(d => <DeckItem key={d.id} deck={d} />)}
    </ul>
  )
}
