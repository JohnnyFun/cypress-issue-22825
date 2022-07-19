const cypress = require('cypress')
const fs = require('fs')
const path = require('path')

cypressRun(6001, 4001)

async function cypressRun(cypressPort) {
  const runOptions = {
    testingType: 'component',
    // each run needs a unique port since we're running multiple cypress.run instances on the same machine
    port: cypressPort,
    spec: path.resolve('./src/MyComponent.spec.js'),
    browser: 'chrome', // chrome sometimes fails to connect: https://github.com/cypress-io/cypress/issues/8986
    headless: true, // chrome supports headless or headed: https://docs.cypress.io/guides/guides/launching-browsers.html#Electron-Browser
    // headed: true, // if failing to start, set this to true, so can see if error in chrome runner
    quiet: false,
    config: {
      reporter: 'junit',
      reporterOptions: {
        mochaFile: `test-output/[hash].xml`,
      },
      watchForFileChanges: false,
      screenshotOnRunFailure: true,
      video: false,
      videoUploadOnPasses: false,
      trashAssetsBeforeRuns: false,
    },
  }
  await cypress.run(runOptions)
}
