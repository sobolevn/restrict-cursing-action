import * as core from '@actions/core'
import * as github from '@actions/github'

// We name these files the same way as they are named in Github Actions:
import { checkIssue } from './actions/issues'
import { checkIssueComment } from './actions/issue_comment'

// TODO: check commit comments
// TODO: check based on eventName
async function run (): Promise<void> {
  try {
    const token = core.getInput('GITHUB_TOKEN')
    const octokit = new github.GitHub(token)

    switch (github.context.eventName) {
      case 'issue_comment':
        return checkIssueComment(github.context, async () => {
          await octokit.issues.updateComment({
            ...github.context.repo,
            'comment_id': github.context.payload.comment.id,
            'body': 'I am so sorry! :pray:'
          })
        })
      case 'issues':
        return checkIssue(github.context)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
