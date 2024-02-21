import { ItemType } from './decks-api.ts'

const initialState = {
  decks: [] as ItemType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET-DECKS':
      return { ...state, decks: action.items }
    case 'ADD-DECK':
      return { ...state, decks: [action.deck , ...state.decks]}
    default:
      return state
  }
}

export const setDecksAC = (items: ItemType[]) => ({ type: 'SET-DECKS', items } as const)
export const addDeckAC = (deck: ItemType) => ({ type: 'ADD-DECK', deck } as const)
type SetDecksType = ReturnType<typeof setDecksAC>
type AddDeckType = ReturnType<typeof addDeckAC>
type DecksActions = SetDecksType | AddDeckType
