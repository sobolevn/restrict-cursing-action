import hasBadWords from '../words'

export async function checkIssueComment (
  payload,
  editCallback,
): Promise<void> {
  const checkResult = hasBadWords(`${payload.body}`)
  if (checkResult) {
    await editCallback()
  }
}
