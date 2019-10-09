import hasBadWords from '../words'

export async function checkIssueComment (
  context,
  editCallback,
): Promise<void> {
  const checkResult = hasBadWords(`${context.payload.comment.body}`)
  if (checkResult) {
    await editCallback()
  }
}
