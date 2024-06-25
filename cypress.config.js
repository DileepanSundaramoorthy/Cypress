const { defineConfig } = require("cypress");
const fs = require('fs');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const CYPRESS_ENV = 'CYPRESS_ENV';

function getConfigurationByFile(file) {
  const pathToConfigFile = `cypress/environment/cypress.${file}.json`;
  if (fs.existsSync(pathToConfigFile)) {
    return JSON.parse(fs.readFileSync(pathToConfigFile, 'utf8'));
  }
  console.log(`No custom config file found for environment: ${file}`);
  return {};
}

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mocha-allure-reporter',
    mochaAllureReporterOptions: {
      resultsDir: 'allure-results',
      includeScreenshots: true,
    }
  },
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    setupNodeEvents(on, config) {
      allureWriter(on, config);

      const environment = process.env[CYPRESS_ENV] || 'live';
      console.log(`Running tests in ${environment} environment`);

      const environmentConfig = getConfigurationByFile(environment);

      config.browser = 'chrome';

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chrome' && browser.name !== 'electron') {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      return { ...config, ...environmentConfig };
    },
  },
  env: {
    allure: true,
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
});
