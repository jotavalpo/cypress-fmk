import { ThankYouForYourPurchaseElements } from "./thank-yo-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods {
    static clickOnOkButton(){
        cy.wait(2000)
        ThankYouForYourPurchaseElements.buttons.ok.click();
    }
    static verifyGreenCheckMarkIsDisplayed(){
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should('exist');
    }
}