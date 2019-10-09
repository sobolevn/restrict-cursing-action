import hasBadWords from '../words'

export async function checkIssue (
  payload,
  editCallback,
): Promise<void> {
  const checkResult = hasBadWords(`${payload.title} ${payload.body}`)
  if (checkResult) {
    await editCallback()
  }
}
