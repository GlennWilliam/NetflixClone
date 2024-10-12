import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'


export const languageAtom = atomWithStorage('language', 'en')

export const tokenAtom = atomWithStorage('token', null)

export const emailStorageAtom = atomWithStorage('email', null)

export const idMovieAtom = atom(null)

export const idModalAtom = atom(null)

export const isOpenModalAtom = atom(false)

export const searchMoviesAtom = atom(null)

export const isFetchingAtom = atom(false)

export const emailAtom = atom(null)

export const isFavoriteAtom = atom(false)