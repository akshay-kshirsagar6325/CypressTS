


const MY_INFO = 'a[href$="/viewMyDetails"]';
const SMOKE_CHECKBOX = '.oxd-checkbox-input';
const DROP_DOWN = '.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow'; 
const DROPDOWN_LIST = '.oxd-select-dropdown.--positon-bottom'; 
const DROPDOWN_COUNTRY = '.oxd-select-text-input';
const GENDER_CHECKBOX = '[type="radio"]';
const SAVE_BUTTON = '.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space';
const SAVE_MESSAGE = '.oxd-toast.oxd-toast--success.oxd-toast-container--toast';
const BROWSE_BUTTON = '.oxd-file-button';
const ADD_BUTTON = '.oxd-button.oxd-button--medium.oxd-button--text';
const UPLOADED_FILE = '.oxd-file-input-div';
const COMMENT_SECTION = '.oxd-textarea.oxd-textarea--active.oxd-textarea--resize-vertical';


class myInfo
{
    getMyInfo()
    {
        return cy.get(MY_INFO).click();
    }

    getSmokeCheckbox()
    {
        return cy.get(SMOKE_CHECKBOX);
    }

    clickSmokeCheckbox()
    {
        this.getSmokeCheckbox().click();
    }

    getDropDown()
    {
        return cy.get(DROP_DOWN);   
    }

    clickDropDown()
    {
        return cy.get(DROP_DOWN).eq(0).click();
    }

    getCountryist()
    {
        return cy.get(DROPDOWN_LIST);
    }

    getBloodGrpList()
    {
        return cy.get(DROPDOWN_LIST);   
    }

    selectCountry(value: string)
    {
        this.getCountryist().contains(value).click();
    }

    selectBloodGroup(value: string)
    {
        this.getBloodGrpList().contains(value).click();
    }

    verifySelectedCountry()
    {
        return cy.get(DROPDOWN_COUNTRY);
    }


    verifyGenCheckBox(){
        cy.get(GENDER_CHECKBOX).eq(0).then(($RadioButton) => {
            if ($RadioButton.is(':checked')) {
              // Male radio button is checked
              cy.log('Male is selected');
            } else {
              // Male radio button is not checked
              cy.get(GENDER_CHECKBOX).eq(1).should('be.checked');
            }
          });

    }

    getSaveButton()
    {
        return cy.get(SAVE_BUTTON);
    }

    getSaveMessage()
    {
        return cy.get(SAVE_MESSAGE);
    }

    getAddButton()
    {
        return cy.get(ADD_BUTTON);
    }

    getBrowseButton()
    {
        return cy.get(BROWSE_BUTTON);
    }

    getUploadtedFile()
    {
        return cy.get(UPLOADED_FILE);
    }

    verifyUploadedFile(value: string)
    {
        this.getUploadtedFile().contains(value);
    }

    getCommentSection()
    {
        return cy.get(COMMENT_SECTION);
    }

    
}

export default myInfo;