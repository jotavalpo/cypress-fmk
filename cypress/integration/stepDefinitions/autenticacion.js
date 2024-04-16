import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { CommonPageData } from "../../e2e/pages/common-page/common-page.data";
import { CommonPageMethods } from "../../e2e/pages/common-page/common-page.methods";
import { Logger } from "../../e2e/utils/logger";
import { LoginMethods } from "../../e2e/pages/login/login.methods";
import { LoginData } from "../../e2e/pages/login/login.data";

Given('Abro la página de login de Demoblaze', () => {
    CommonPageMethods.navigateToDemoBlaze();
})

When('Hago clic en el botón login', () => {
    CommonPageMethods.clickOnLogInOption();
})

When('Ingreso los datos correctos para iniciar sesión', () => {
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);
})

When('Hago clic en el botón para iniciar la sesión', () => {
    LoginMethods.clickOnLoginButton();
})

Then('Se inicia la sesión exitosamente', () => {
    CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);
    Logger.postCondition('Log Out')
    CommonPageMethods.logOut();
})

When('Ingreso los datos incorrectos para iniciar sesión', () => {
    LoginMethods.insertUsername(LoginData.invalidCredentials.invalidUsername);
    LoginMethods.insertPassword(LoginData.invalidCredentials.invalidPassword);
})

Then('La sesión no es iniciada y se despliega error', () => {
    LoginMethods.verifyInvalidUserMessageIsDisplayed();
})