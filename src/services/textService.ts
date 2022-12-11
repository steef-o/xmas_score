import dictionarySource from "./dictionary.json";

type Locale = "no" | "en"; // <-- Add more locals here in the future.
type DictionaryKey = keyof typeof dictionarySource["no"];

type Dictionary = Record<Locale, Record<DictionaryKey, string>>;

export const getText = (key: DictionaryKey, lang: Locale = "no") => {
  const dictionary: Dictionary = dictionarySource;
  return dictionary[lang][key] || `missing ${lang}:${key}`;
};
