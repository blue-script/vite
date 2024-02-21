import { decksAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'
import { Dispatch } from 'redux'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.fetchDecks().then(res => dispatch(setDecksAC(res.data.items)))
}
export const addDeckTC = (data: AddDataType) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(data).then(res => dispatch(addDeckAC(res.data)))
}
type AddDataType = {
  name: string
}