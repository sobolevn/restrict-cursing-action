import hasBadWords from '../words'

export function checkIssueComment (context): void {
  const result = hasBadWords(`${context.payload.comment.body}`)
  console.log(`log: ${result}`)
}
