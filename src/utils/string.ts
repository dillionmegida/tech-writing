export const plularize = (word: string, count: number) =>
  word + (count === 1 ? '' : 's')
