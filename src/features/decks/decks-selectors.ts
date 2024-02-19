import { ItemType } from './decks-api.ts'
import { AppRootState } from '../../app/store.ts'

export const selectDecks = (state: AppRootState): ItemType[] => state.decksReducer.decks