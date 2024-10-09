



// cypress/support/index.d.ts
// declare namespace Cypress {
//     interface Chainable<Subject = any> {
//         login(username: string, password: string): Chainable<void>;
//         uploadFile(filePath: string, selector: string): Chainable<void>;
//         getData(endpoint: string): Chainable<void>;
//         apiRequest(method: string, url: string, body?: Record<string, any>, headers?: Record<string, any>): Chainable<void>;
//     }
//   }



// cypress/support/index.d.ts
declare namespace Cypress {
    interface Chainable<Subject = any> {
      login(username: string, password: string): Chainable<void>;
      uploadFile(filePath: string, selector: string): Chainable<void>;
      getData(endpoint: string): Chainable<void>;
      apiRequest(method: string, url: string, body?: Record<string, any>, headers?: Record<string, any>): Chainable<Cypress.Response<any>>;
    }
  }
