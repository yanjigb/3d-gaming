import { LocaleKeys } from './locales'

export type PropsWithDictionary<P = unknown> = P & {
  dictionary: LocaleKeys
}
