const { defineConfig } = require('cypress');

module.exports = defineConfig({
	env: {
    url: 'https://rossmann.pl',
	},
  retries: {
    runMode: 2,
  },
  projectId: "dc412k",
  chromeWebSecurity: true,
	defaultCommandTimeout: 6000,
  execTimeout: 2000,
  fixturesFolder: 'cypress/fixtures',
  numTestsKeptInMemory: 20,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  responseTimeout: 30000,
  taskTimeout: 60000,
  videoUploadOnPasses: true,
  waitForAnimations: true,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
	e2e: {
		setupNodeEvents(on, config) {},
		baseUrl: 'https://rossmann.pl',
		excludeSpecPattern: '*.hot-update.js',
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
		supportFile: './cypress/support/e2e.js',
	},
  scrollBehavior: false
});