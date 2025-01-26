const { defineConfig } = require("cypress");
const envConfg = require("./cypress.env")

module.exports = defineConfig({
    viewportHeight: 856,
    viewportWidth: 455,
    defaultCommandTimeout:30000,
    e2e: {
        setupNodeEvents(on, config) {

        },
        baseUrl: 'https://m.benihbaik.com',
        env: {
            ...envConfg,
        },
        specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
    },
})