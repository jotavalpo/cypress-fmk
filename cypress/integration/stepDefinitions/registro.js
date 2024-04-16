import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { CommonPageData } from "../../e2e/pages/common-page/common-page.data";
import { CommonPageMethods } from "../../e2e/pages/common-page/common-page.methods";
import { Logger } from "../../e2e/utils/logger";
import { SignupMethods } from "../../e2e/pages/signup/signup.methods";
import { LoginData } from "../../e2e/pages/login/login.data";

const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredentials.username;

Given('Navego al home de Demoblaze', () => {
    CommonPageMethods.navigateToDemoBlaze();

})

When('Hago clic en la opción para registrarse como usuario', () => {
    CommonPageMethods.clickOnSignUpOption();

})

When('Ingreso los datos requeridos correctamente para el registro', () => {
    SignupMethods.insertUsername(user);
    SignupMethods.insertPassword(password);

})

When('Hago clic en botón para crear el usuario', () => {
    SignupMethods.clickOnSignupButton();

})

Then('El usuario es creado exitosamente', () => {
    SignupMethods.verifySignupSuccesfulMessageIsDisplayed();

})

When('Ingreso los datos requeridos incorrectamente para el registro', () => {
    SignupMethods.insertUsername(existingUser);
    SignupMethods.insertPassword(password);

})

Then('El usuario no se crea y se despliega mensaje de error', () => {
    SignupMethods.verifyThatThisUserAlreadyExistsMessageIsDisplayed();

})
