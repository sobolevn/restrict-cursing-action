function getWords (): Record<string, number> {
  // TODO: support other cuss languages
  return require('cuss/index.json')
}

export default function hasBadWords (text: string): boolean {
  return Object.keys(getWords()).some(
    (word) => text.includes(word),
  )
}
