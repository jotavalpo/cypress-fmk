import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from "../utils/logger";
import { SignupMethods } from "../pages/signup/signup.methods";
import { LoginData } from "../pages/login/login.data";

const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredentials.username;

describe(CommonPageData.testSuites.registro, () => {
    it("Registro de usuario válido", ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en Sign Up en la barra de navegación')
        CommonPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SignupMethods.insertUsername(user);
        SignupMethods.insertPassword(password);
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en Sign up para registrar el usuario')
        SignupMethods.clickOnSignupButton();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre el mensaje Sign up successful')
        SignupMethods.verifySignupSuccesfulMessageIsDisplayed();

    });

    it("Registro de usuario inválido", ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en Sign Up en la barra de navegación')
        CommonPageMethods.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar algunos campos con información inválida')
        SignupMethods.insertUsername(existingUser);
        SignupMethods.insertPassword(password);
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en Sign up para registrar el usuario')
        SignupMethods.clickOnSignupButton();

        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestra un mensaje de error indicando los campos inválidos')
        SignupMethods.verifyThatThisUserAlreadyExistsMessageIsDisplayed();

    });
});

