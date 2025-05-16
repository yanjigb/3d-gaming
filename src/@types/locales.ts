import JsonDictionary from '@/share/dictionaries/en.json'

export const enum LocaleEnum {
  EN = 'en',
  VI = 'vi',
}

export type LocaleKeys = Record<keyof typeof JsonDictionary, string>

export type ParamsWithLang = Promise<{
  locale: LocaleEnum
}>

export interface DefaultPageProps {
  params: ParamsWithLang
}

export type DictionaryType = keyof typeof JsonDictionary
