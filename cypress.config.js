const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '64saib',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
