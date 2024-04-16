import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { CommonPageData } from "../../e2e/pages/common-page/common-page.data";
import { CommonPageMethods } from "../../e2e/pages/common-page/common-page.methods";
import { LoginMethods } from "../../e2e/pages/login/login.methods";
import { LoginData } from "../../e2e/pages/login/login.data";
import { Logger } from "../../e2e/utils/logger";
import { HomeMethods } from "../../e2e/pages/home/home.methods";
import { ProductDetailsMethods } from "../../e2e/pages/product-details/product-details.methods";
import { CartMethods } from "../../e2e/pages/cart/cart.methods";
import { PlaceOrderMethods } from "../../e2e/pages/place-order/place-order.methods";
import { PlaceOrderData } from "../../e2e/pages/place-order/place-order.data";
import { ThankYouForYourPurchaseMethods } from "../../e2e/pages/thank-you-for-your-purchase/thank-you-for-your-purchase.methods";

const user = LoginData.validCredentials;
const product1 = 'Apple monitor 24';
const product2 = 'ASUS Full HD';

Given('Abro la pagina de Demoblaze e inicio sesión', () => {
    Logger.subStep('Navigate to Demoblaze application')
    CommonPageMethods.navigateToDemoBlaze();
    Logger.subStep('Click en Log In link')
    CommonPageMethods.clickOnLogInOption();
    LoginMethods.login(user.username, user.password)

})

When('Me mantengo en el home del sitio', () => {
    CommonPageMethods.clickOnHomeOption();

})

When('Selecciono la categoría de monitores', () => {
    HomeMethods.clickOnMonitorsOption();
    HomeMethods.verifyProductDisplayed(product1)
    HomeMethods.verifyProductDisplayed(product2)

})

Then('Selecciono uno de los productos', () => {
    HomeMethods.clickOnProductLink(product2);

})

When('Veo el detalle del producto', () => {
    ProductDetailsMethods.verifyProductDetailsPageDisplayed();

})

When('Hago clic en el botón agregar al carrito', () => {
    ProductDetailsMethods.clikOnAddToCartButton();

})

Then('El producto es agregado exitosamente y eliminado', () => {
    ProductDetailsMethods.verifyProductAddMessage();
    CommonPageMethods.clickOnCartOption();
    CartMethods.verifyProductAdded(product2);
    Logger.postCondition('Empty cart');
    CommonPageMethods.clickOnCartOption();
    CartMethods.deleteProducts();

})

Then('El producto es agregado exitosamente', () => {
    ProductDetailsMethods.verifyProductAddMessage();
    CommonPageMethods.clickOnCartOption();
    CartMethods.verifyProductAdded(product2);

})

When('Hago clic en el carrito de compras', () => {
    CommonPageMethods.clickOnCartOption();

})

When('Verifico que se despliege correctamente el carrito de compras', () => {
    CartMethods.verifyCartPageIsShown();

})

When('Hago clic en el botón de orden', () => {
    CartMethods.clickOnPlaceOrderButton();

})

When('Lleno el formulario para completar orden', () => {
    PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);

})

When('Confirmo la orden', () => {
    PlaceOrderMethods.clickOnPurchaseButton();

})

Then('La orden se realiza correctamente', () => {
    ThankYouForYourPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
    ThankYouForYourPurchaseMethods.clickOnOkButton();
    HomeMethods.verifyHomePageIsShown();

    Logger.postCondition('Log Out')
    CommonPageMethods.logOut();

})