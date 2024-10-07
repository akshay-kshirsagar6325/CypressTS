


const LOGIN_USERNAME = '[placeholder="username"]';
const LOGIN_PASSWORD = '[placeholder="password"]';
const LOGIN_SUBMIT_BTN = '[type="submit"]';
const LOGIN_SUC_TXT = '.oxd-topbar-header-title';
const LOGIN_ERR_TXT = '.oxd-text.oxd-text--p.oxd-alert-content-text';
const USER_DROPDOWN = '.oxd-userdropdown-tab';
const LOGOUT_ELEMENT = 'a[href$="/logout"]';


class loginPage
{

 login(username: string, password: string)
    {
        cy.get(LOGIN_USERNAME).type(username);
        cy.get(LOGIN_PASSWORD).type(password);
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

getUserDropdown()
{
   return cy.get(USER_DROPDOWN).click();
}

getLogoutElemnt()
{
   return cy.get(LOGOUT_ELEMENT).click();
}

}

export default loginPage;