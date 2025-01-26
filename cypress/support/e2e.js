import './commands';

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Minified React error')) {
      // Abaikan error dari React
      return false;
    }
    if (err.message.includes("Cannot read properties of null (reading 'style')")) {
        return false;
    }
    if (err.message.includes("failOnStatusCode")){
        return false;
    }
  });
  