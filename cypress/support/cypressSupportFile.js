// import './commands'
// import 'cypress-plugin-tab'
// import 'cypress-commands'

/**
 * Workaround for the "Automatic publicPath is not supported in this browser" fail
 *
 * See https://github.com/cypress-io/cypress/issues/18435 for more
 * details. Should be removed when cypress switches to webpack 5.
 */
const scripts = document.getElementsByTagName('script')
scripts[scripts.length - 1].src = ' ' // yes, thats a single space and not the empty string

Cypress.on('uncaught:exception', err => {
  // ignore certain errors when testing
  const isEmptyErrorMsg = err.message == null || err.message.trim() === ''
  if (isEmptyErrorMsg) throw new Error('NO ERROR MESSAGE: ' + err.reason?.toString() + err.toString())

  // don't fail test for failing to initialize WebGL--for some reason
  if (/Failed to initialize WebGL/i.test(err.message)) return false
})