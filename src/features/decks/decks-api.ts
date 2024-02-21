import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponseType>('v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<DeckType>('v1/decks', params)
  },
}

type AddDeckParams = {
  name: string
}

export type FetchDecksResponseType = {
  items: DeckType[],
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  },
}
type AuthType = {
  id: string
  name: string
}
export type DeckType = {
  author: AuthType
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
