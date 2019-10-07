// TODO: support other cuss languages
const cuss = require('cuss/index.json')

export default function hasBadWords (text: string): boolean {
  return Object.keys(cuss).some(
    (word) => text.includes(word),
  )
}
