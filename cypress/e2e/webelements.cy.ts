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

      //2nd way by custom commands

      cy.login('Admin', 'admin123');
      cy.url().should('include', '/dashboard');
      cy.wait(3000);
   })
   
    it('Verify Login unsuccessful for invalid username/password', () => {

      loginObj.getUserDropdown();
      loginObj.getLogoutElemnt();
      loginObj.login('Admin1', 'admin1234');
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
      myInfoObj.verifyUploadedFile('Connect tab');


     //6th webelement
     myInfoObj.getCommentSection().type("Demo test");
     myInfoObj.getSaveButton().eq(2).click();
     myInfoObj.getSaveMessage().should('contain', saveMessage1);

    })

    it.only('Handling table', ()=>{

      rcrutment.getRecruitment().click();

     // Function to construct CSS selector for specific table cell based on row and column
      function getTableCellSelector(row: number, col: number) 
      {
       return `div.oxd-table-body > div.oxd-table-card:nth-of-type(${row}) > div.oxd-table-cell:nth-of-type(${col})`;
      }

     // Get the selector for row 2, column 3
     const cellSelector = getTableCellSelector(2, 3);
    
     // Log the CSS selector for debugging
     console.log(cellSelector); 
    })

   })