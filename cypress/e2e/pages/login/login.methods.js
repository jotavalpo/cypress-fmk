import { Logger } from "../../utils/logger";
import { LoginElements } from "./login.elements";
import { CommonPageMethods } from "../common-page/common-page.methods";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username)
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password)
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static verifyInvalidUserMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("Wrong password.");
    }
    
}