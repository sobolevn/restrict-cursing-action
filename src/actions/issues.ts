import hasBadWords from '../words'

export async function checkIssue (
  context,
  editCallback,
): Promise<void> {
  const checkResult = hasBadWords(
    `${context.payload.issue.title} ${context.payload.issue.body}`,
  )
  if (checkResult) {
    await editCallback()
  }
}
