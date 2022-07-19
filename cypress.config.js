const { defineConfig } = require('cypress')

const webpackConfig = require('./webpack.config.js')
// const webpackPreprocessor = require('@cypress/webpack-preprocessor') // if I uninstall this package, I get a different error.
const supportFile = './cypress/support/cypressSupportFile.js'

module.exports = defineConfig({
  video: false,
  videoUploadOnPasses: false,
  viewportHeight: 700,
  viewportWidth: 1200,
  defaultCommandTimeout: 6000,
  component: {
    supportFile,
    specPattern: 'src/**/*spec.js',
    devServer: {
      bundler: 'webpack',
      webpackConfig,
    },
  },
})

