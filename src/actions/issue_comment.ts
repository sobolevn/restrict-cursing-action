import hasBadWords from '../words'

export function checkIssueComment (context, editCallback): void {
  console.log(`log: ${JSON.stringify(context.payload)}`)
  const result = hasBadWords(`${context.payload.comment.body}`)
  if (result) {
    editCallback()
  }
  console.log(`log: ${result}`)
}
