module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,   // Optional: set to false to skip HTML report generation initially
    json: true     // Ensure JSON reporting is enabled
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
};





// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },

//     supportFile: "/home/akshay/Desktop/cypress/support/commands.js", // Path to your support file
//     specPattern: "e2e/**/*.cy.js",

//   },
// });

