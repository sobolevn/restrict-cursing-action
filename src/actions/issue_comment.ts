import hasBadWords from '../words'

export function checkIssueComment (context): void {
  console.log(`log: ${context}`)
  const result = hasBadWords(`${context.payload.comment.body}`)
  console.log(`log: ${result}`)
}
