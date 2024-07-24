import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
    static navigateToDemoBlaze(){
        cy.clearAllCookies();
        cy.clearLocalStorage();
        cy.visit(CommonPageData.url);
        CommonPageMethods.clickOnHomeOption();
    }
    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }
    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }
    static clickOnAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }
    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }
    static clickOnLogInOption(){
        CommonPageElements.topMenu.login.click();
    }
    static clickOnSignUpOption(){
        CommonPageElements.topMenu.signUp.click();
    }

    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) =>{
            expect(str).to.equal(expectedMessage)
        })
    }

}