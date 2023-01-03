const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'h66y4i',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    // specPattern : "cypress/integration/exapmles/BDD/*.feature"
    specPattern : "cypress/integration/exapmles/*.js"

  },
});
