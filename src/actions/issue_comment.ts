import hasBadWords from '../words'

export async function checkIssueComment (
  context,
  editCallback,
): Promise<void> {
  console.log(`log: ${JSON.stringify(context.payload)}`)
  const result = hasBadWords(`${context.payload.comment.body}`)
  if (result) {
    await editCallback()
  }
  console.log(`log: ${result}`)
}
