'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
// eslint-disable-next-line mocha/no-exports
exports.mount = void 0
var utils_1 = require('./utils')
var rootId = 'cypress-root'
function mount(Component, options, styleOptions) {
  if (options === void 0) {
    options = {}
  }
  if (styleOptions === void 0) {
    styleOptions = {}
  }
  options = options || {}
  utils_1.checkMountModeEnabled()
  return cy.then(function () {
    // @ts-ignore
    var document = cy.state('document')
    utils_1.cleanupStyles(document)
    var el = document.getElementById(rootId)
    if (el) {
      while (el.firstChild) {
        el.removeChild(el.firstChild)
      }
    } else {
      el = document.createElement('div')
      el.setAttribute('id', rootId)
      document.getElementsByTagName('body')[0].prepend(el)
    }
    utils_1.injectStylesBeforeElement(styleOptions, document, el)
    // by default we mount the component into the created element
    var target = el
    if (styleOptions && styleOptions.html) {
      el.innerHTML = styleOptions.html
      target = document.getElementById('here')
      if (!target) {
        // eslint-disable-next-line no-console
        console.error('mount has HTML with DIV with ID "here"')
        // eslint-disable-next-line no-console
        console.error(styleOptions.html)
        throw new Error('Could not find element with ID "here" in the HTML passed')
      }
    }
    var allOptions = Object.assign({}, options, {
      target: target,
    })
    var component = new Component(allOptions)
    if (options.callbacks) {
      // write message callbacks
      Object.keys(options.callbacks).forEach(function (message) {
        component.$$.callbacks[message] = [options.callbacks[message]]
      })
    }
    return cy.wrap(component)
  })
}
// eslint-disable-next-line mocha/no-exports
exports.mount = mount
// eslint-disable-next-line mocha/no-top-level-hooks
beforeEach(function () {
  utils_1.polyfillFetchIfNeeded()
})
// eslint-disable-next-line mocha/no-exports
exports.default = mount
