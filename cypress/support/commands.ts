

// cypress/support/index.d.ts

declare namespace Cypress {
  interface Chainable<Subject> {
    message: any;
    /**
     * Custom command to click on an element.
     * @param selector - The selector of the element to click.
     * @param options - Optional options object for Cypress commands.
     * @example cy.customClick('#submit-button')
     */
    customClick(selector: string): Chainable<any>;
    customClick1(selector: string): Chainable<any>;

  }
}


// Cypress.Commands.add('customClick', (selector: string, options = {}) => {
    
//     // Wait until the element is visible and enabled, then click
//     cy.get(selector, options).should('be.visible').and('not.be.disabled').click();
//   });

//   Cypress.Commands.add('customClick1', (selector, options = {}) => {
//     cy.get(selector).click(options);
//   });


Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Cypress.Commands.add('uploadFile', (filePath: string, selector: string) => {
//   cy.get(selector).attachFile(filePath);  // Requires the use of cypress-file-upload plugin
// });

Cypress.Commands.add('apiRequest', function (
  method: string, 
  url: string, 
  body?: Record<string, any>, 
  headers?: Record<string, any>
): Cypress.Chainable<Cypress.Response<any>> {
  return cy.request({
    method,
    url,
    body: body || {},  // Default to empty object if body is undefined
    headers: headers || {}  // Default to empty object if headers are undefined
  })
  .then((response) => {
    expect(response.status).to.be.oneOf([200, 201, 204]);  // Validate status codes
    return response;  // Return the response for chaining in tests
  });
});