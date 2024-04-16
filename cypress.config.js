const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  retries: 1,
  video: false,
  e2e: {
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      chromeWebSecurity: false,
      on('file:preprocessor', cucumber())
      return config;
    },
  },
});
