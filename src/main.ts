import * as core from '@actions/core'
import * as github from '@actions/github'

// We name these files the same way as they are named in Github Actions:
import { checkIssue } from './actions/issues'
import { checkIssueComment } from './actions/issue-comment'

// TODO: check commit comments
// TODO: check based on eventName
// TODO: pack things in docker
// eslint-disable-next-line max-lines-per-function
async function run (): Promise<void> {
  try {
    if (!process.env.GITHUB_TOKEN) {
      throw new Error('Github token is missing')
    }

    const octokit = new github.GitHub(process.env.GITHUB_TOKEN)

    switch (github.context.eventName) {
      case 'issue_comment':
        checkIssueComment(github.context, async () => {
          await octokit.issues.updateComment({
            ...github.context.repo,
            'comment_id': github.context.payload.comment.id,
            'body': core.getInput('text'),
          })
        })
        break
      case 'issues':
        checkIssue(github.context)
        break
      default:
        throw new Error(`Unsupported event type: ${github.context.eventName}`)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
