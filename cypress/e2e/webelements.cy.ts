import { clone } from "../../node_modules/cypress/types/lodash/index";
import loginPage from "../pageobjects/loginPage"
import myInfo from "../pageobjects/myInfo";
import generalString from '../fixtures/generalstring.json';
import 'cypress-file-upload';
import recruitment from "../pageobjects/recruitment"; 

//Objects
const loginObj = new loginPage();
const myInfoObj = new myInfo();
const rcrutment = new recruitment();


  describe('POM Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { failOnStatusCode: false });
      // loginObj.login('Admin', 'admin123');
      //loginObj.successText().should('have.text','Dashboard');

      cy.intercept('GET', '/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc').as('getBuzzFeed');


      //2nd way by custom commands

      cy.login('admin', 'admin123');
      cy.url().should('include', '/dashboard');

       // Wait for the buzz feed API call
      cy.wait('@getBuzzFeed').then((intercept) => {

  // check if intercept and intercept.response are defined:
  //        expect(intercept).to.have.property('response');
  //        expect(intercept.response).to.have.property('statusCode');

  // Assert that the response status is 200:
  //       expect(intercept.response.statusCode).to.equal(200);

      expect(intercept.response?.statusCode).to.equal(200); // Use optional chaining here

  })
})
   
    it('Verify Login unsuccessful for invalid username/password', () => {

      loginObj.getUserDropdown();
      loginObj.getLogoutElemnt();
      cy.login('Admin1', 'admin1234');
      loginObj.errorText().should('contain','Invalid credentials');
    })

    it('Handling web elements', ()=>{
   

      myInfoObj.getMyInfo();
      //myInfoObj.clickSmokeCheckbox();
     // myInfoObj.getSmokeCheckbox().should('be.checked');

     //1st webelement verification
      myInfoObj.clickDropDown();
      myInfoObj.selectCountry('Indian');
      myInfoObj.verifySelectedCountry().contains('Indian');


      //2nd webelement verification 
      myInfoObj.verifyGenCheckBox();
      myInfoObj.getSaveButton().eq(0).click();
      const saveMessage = generalString.message1.savemessage;
      myInfoObj.getSaveMessage().should('contain', saveMessage);

      //4th webelement
      myInfoObj.getDropDown().eq(2).click();
      myInfoObj.selectBloodGroup('O+');
      myInfoObj.getSaveButton().eq(1).click();
      const saveMessage1 = generalString.message1.savemessage1;
      myInfoObj.getSaveMessage().should('contain', saveMessage1);


      //5th webelement
      myInfoObj.getAddButton().click();
      const pdfFilePath = 'Connect tab.png'
      myInfoObj.getBrowseButton().attachFile(pdfFilePath);
      //myInfoObj.verifyUploadedFile('Connect tab');


     //6th webelement
     myInfoObj.getCommentSection().type("Demo test");
     myInfoObj.getSaveButton().eq(2).click();
     myInfoObj.getSaveMessage().should('contain', saveMessage1);

    })

    it('Handling table', ()=>{

      rcrutment.getRecruitment().click();

     // Function to construct CSS selector for specific table cell based on row and column
      function getTableCellSelector(row: number, col: number) 
      {
       return ` div.oxd-table-body > div.oxd-table-card:nth-of-type(${row}) > div.oxd-table-row.oxd-table-row--with-border > div.oxd-table-cell:nth-of-type(${col})`; //div.oxd-table-body > div.oxd-table-card:nth-of-type(3) > div.oxd-table-row.oxd-table-row--with-border > div.oxd-table-cell:nth-of-type(3)
      }

     // Get the selector for row 2, column 3
     const cellSelector = getTableCellSelector(3, 3);
    
     // Log the CSS selector for debugging
     cy.log(cellSelector); 
    })

    it('should make a GET request and verify the response', () => {

      rcrutment.getRecruitment().click();

      // Call the custom command
      cy.apiRequest('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC')  // Replace with actual URL
        .then((response) => {
          // Assert the response structure or data
          expect(response.body).to.have.property('data');   // Assuming the list is inside a 'data' field
          const candidates = response.body.data;  
          

        // Assert that the first candidate exists
          expect(candidates).to.have.length.greaterThan(0); // Ensure there's at least one candidate
        
          // Extract the first candidate
          const firstCandidate = candidates[0];  

            // Verify specific properties of the first candidate (based on what the API returns)
        expect(firstCandidate).to.have.property('id');           // Check for ID
        expect(firstCandidate).to.have.property('firstName');     // Check for Full Name
        expect(firstCandidate).to.have.property('dateOfApplication'); // Check for date of application

        cy.log('First Candidate:', firstCandidate); 
    })
  })
  
  it.only('should load all candidates', () => {
    // Intercept the API call to load candidates
    cy.intercept('GET', '/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC', {
        statusCode: 200,
        body: {
            candidates: [
                { id: 29, name: 'John Doe', dateOfApplication: '2024-06-02' },
                // Add more mock candidates as needed
            ],
            limit: 50 // Add 'limit' to the mock response if needed
        },
    }).as('getCandidates');

    // Visit the recruitment page
    rcrutment.getRecruitment().click();

    // Wait for the candidates to be loaded
    cy.wait('@getCandidates').then((intercept) => {
        // Check if intercept and intercept.response are defined
        expect(intercept).to.have.property('response');
        expect(intercept.response).to.have.property('body');

        // Ensure response and body are defined before accessing them
        const response = intercept.response;
        if (response && response.body) {
            const body = response.body;

            // Validate the presence of properties
            expect(body).to.have.property('candidates');
            expect(body).to.have.property('limit'); // Make sure 'limit' is part of the mock response
            expect(body.limit).to.equal(50);
        }
    });
});
});