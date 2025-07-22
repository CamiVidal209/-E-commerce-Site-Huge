const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.laboratoriodetesting.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      
    },
    defaultCommandTimeout: 8000,          
    pageLoadTimeout: 60000,               
    viewportWidth: 1280,
    viewportHeight: 800,
    screenshotOnRunFailure: true,
    video: true,
  },
})
