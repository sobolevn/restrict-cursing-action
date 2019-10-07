import * as core from '@actions/core'
import * as github from '@actions/github'

// We name these files the same way as they are named in Github Actions:
import { checkIssue } from './actions/issues'
import { checkIssueComment } from './actions/issue_comment'

// TODO: check commit comments
// TODO: check based on eventName
async function run (): Promise<void> {
  try {
    // const token = core.getInput('GITHUB_TOKEN')
    // const octokit = new github.GitHub(token)
    const context = github.context

    // TODO: delete (edit?) instance if any words found.
    switch (context.eventName) {
      case 'issue_comment':
        return checkIssueComment(context)
      case 'issues':
        return checkIssue(context)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
