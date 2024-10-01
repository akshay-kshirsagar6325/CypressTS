import cypress from 'cypress';



const LOGIN_USERNAME = '[placeholder="Username"]';
const LOGIN_PASSWORD = '[placeholder="Password"]';
const LOGIN_SUBMIT_BTN = '[type="submit"]';
const LOGIN_SUC_TXT = '.oxd-topbar-header-title';
const LOGIN_ERR_TXT = '.oxd-text.oxd-text--p.oxd-alert-content-text';




class loginPage
{

 username(value: string)
    {
        cy.get(LOGIN_USERNAME).type(value);
    }
 
 password(value: string)
    {
        cy.get(LOGIN_PASSWORD).type(value);
    }
 
 submit()
    {
         cy.get(LOGIN_SUBMIT_BTN).click();
    }

 successText()
 {
    return cy.get(LOGIN_SUC_TXT);
 }

 errorText()
 {
    return cy.get(LOGIN_ERR_TXT);
 
}
}
export default loginPage;