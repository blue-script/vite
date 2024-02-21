import { decksAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then(res => dispatch(setDecksAC(res.data.items)))
}
export const addDeckTC = (name: string) => (dispatch: Dispatch) => {
  decksAPI.addDeck(name).then(res => dispatch(addDeckAC(res.data)))
}