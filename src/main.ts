import * as core from '@actions/core'
import * as github from '@actions/github'

async function run (): Promise<void> {
  try {
    // const token = core.getInput('GITHUB_TOKEN')
    // const octokit = new github.GitHub(token)
    const context = github.context

    const payload = context.payload.issue || context.payload.pull_request
    if (!payload) {
      core.setFailed('Payload is missing from the action')
      return
    }

    core.debug(payload.body || 'no body')
    core.debug(JSON.stringify(context))
    console.log(payload.body || 'no body')
    console.log(JSON.stringify(context))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
