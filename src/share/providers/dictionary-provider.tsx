'use client'

import React, { createContext } from 'react'

import { LocaleEnum, LocaleKeys } from '@/@types/locales'

interface DictionaryContextType {
  dictionary: LocaleKeys
  lang: LocaleEnum
}

export const DictionaryContext = createContext<DictionaryContextType | null>(null)

export const useDictionary = () => {
  const dictionary = React.useContext(DictionaryContext)
  if (!dictionary) {
    throw new Error('useDictionary must be used within a DictionaryProvider')
  }
  return dictionary
}

function DictionaryProvider({
  dictionary,
  lang,
  children,
}: {
  dictionary: LocaleKeys
  lang: LocaleEnum
  children: React.ReactNode
}) {
  const memoizedValue = React.useMemo(() => ({ dictionary, lang }), [dictionary, lang])
  return <DictionaryContext.Provider value={memoizedValue}>{children}</DictionaryContext.Provider>
}

export default DictionaryProvider
