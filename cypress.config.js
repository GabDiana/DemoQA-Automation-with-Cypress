const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
module.exports = defineConfig({
  projectId: 'tdu4hm',
  env: {
    MAILOSAUR_API_KEY: "bs8sinkbzu4YS5lALwQ4wQOUEfFar4DU",
    chromeWebSecurity: false,
    CYPRESS_RECORD_KEY: '8d1c234f-0aef-4b74-a67d-25cd24e7964b',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    testIsolation: false,
    blockHosts:['pagead2.googlesyndication.com',
                'serving.stat-rock.com',
                'securepubads.g.doubleclick.net',
                'googleads.g.doubleclick.net',
                'www.google.com',
                'cdn.ad.plus',
                'cdn.prod.uidapi.com',
                'www.google-analytics.com'],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile});
      on('task', {hello({ greeting, name }) {console.log('%s, %s', greeting, name)
          return null},
      })
    },
  },
})
