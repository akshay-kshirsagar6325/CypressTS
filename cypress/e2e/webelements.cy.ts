import loginPage from "../pageobjects/loginPage"

  describe('POM Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   })
   
    it('Verify Login successful', () => {
      const loginObj = new loginPage();
      loginObj.username('Admin')
      loginObj.password('admin123')
      loginObj.submit();
      loginObj.successText().should('have.text','Dashboard');
      cy.wait(3000);
    })
   
    it('Verify Login unsuccessful for invalid username/password', () => {
      const loginObj = new loginPage();
      loginObj.username('selenium')
      loginObj.password('qa@123')
      loginObj.submit();
      loginObj.errorText().should('contain','Invalid credentials');
    })

   })