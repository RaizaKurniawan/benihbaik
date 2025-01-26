const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight: 856,
    viewportWidth: 455,
    defaultCommandTimeout:30000,
    e2e: {
        setupNodeEvents(on, config) {

        },
        baseUrl: 'https://m.benihbaik.com',
        env: {
                email: 'raiza@benihbaik.com',
                password: 'IdiomOfSkyliner28'
        },
        specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}'
    },
})