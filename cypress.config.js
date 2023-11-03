const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
module.exports = defineConfig({
  projectId: 'tdu4hm',
  env: {
    MAILOSAUR_API_KEY: "bs8sinkbzu4YS5lALwQ4wQOUEfFar4DU",
    chromeWebSecurity: false
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile});
      on('task', {hello({ greeting, name }) {console.log('%s, %s', greeting, name)
          return null},
      })
    },
  },
})