import * as core from '@actions/core'
import * as github from '@actions/github'

// TODO: check commit comments
async function run (): Promise<void> {
  try {
    // const token = core.getInput('GITHUB_TOKEN')
    // const octokit = new github.GitHub(token)
    const context = github.context
    const cuss = require('cuss/index.json')

    const payload = context.payload.issue || context.payload.pull_request
    if (!payload) {
      core.setFailed('Payload is missing from the action')
      return
    }

    const allText = `${payload.title} ${payload.body}`
    core.debug(`debug: ${allText}`)
    console.log(`log: ${allText}`)

    const anyBadWords = Object.keys(cuss).some(
      (word) => allText.includes(word),
    )

    if (anyBadWords) {
      core.setFailed('Payload is missing from the action')
    } else {
      core.debug('debug: all good')
      console.log('log: all good')
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
