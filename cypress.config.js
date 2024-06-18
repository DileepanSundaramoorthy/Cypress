const { defineConfig } = require("cypress");
const fs = require('fs');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// Define the environment variable name
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
      resultsDir: 'allure-results', // Ensure this directory exists
      includeScreenshots: true,     // Enable screenshots in the report
    }
  },
  e2e: {
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    setupNodeEvents(on, config) {
      allureWriter(on, config); // Set up Allure writer

      // Get environment from environment variable or use 'live' as default
      const environment = process.env[CYPRESS_ENV] || 'live';
      console.log(`Running tests in ${environment} environment`);

      // Load environment-specific configuration
      const environmentConfig = getConfigurationByFile(environment);

      // Set Chrome as the default browser
      config.browser = 'chrome';

      // Handle before:browser:launch event
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chrome' && browser.name !== 'electron') {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      // Return the merged configuration
      return { ...config, ...environmentConfig };
    },
  },
  env: {
    allure: true, // Ensure Allure is enabled in the environment
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
});
