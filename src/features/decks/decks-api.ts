import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<FetchDecksResponseType>('v2/decks')
  },
}

export type FetchDecksResponseType = {
  'items': [
    {
      'author': {
        'id': string
        'name': string
      },
      'id': string
      'userId': string
      'name': string
      'isPrivate': boolean
      'cover': string
      'created': string
      'updated': string
      'cardsCount': number
    }
  ],
  'pagination': {
    'currentPage': number
    'itemsPerPage': number
    'totalPages': number
    'totalItems': number
  },
  'maxCardsCount': number
}
