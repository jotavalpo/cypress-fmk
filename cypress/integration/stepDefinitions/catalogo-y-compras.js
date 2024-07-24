import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { CommonPageMethods } from "../../e2e/pages/common-page/common-page.methods";
import { Logger } from "../../e2e/utils/logger";
import { HomeMethods } from "../../e2e/pages/home/home.methods";
import { ProductDetailsMethods } from "../../e2e/pages/product-details/product-details.methods";
import { CartMethods } from "../../e2e/pages/cart/cart.methods";
import { PlaceOrderMethods } from "../../e2e/pages/place-order/place-order.methods";
import { PlaceOrderData } from "../../e2e/pages/place-order/place-order.data";
import { ThankYouForYourPurchaseMethods } from "../../e2e/pages/thank-you-for-your-purchase/thank-you-for-your-purchase.methods";

const product1 = 'Apple monitor 24';
const product2 = 'ASUS Full HD';

Given('Abro la pagina de Demoblaze', () => {
    Logger.subStep('Navigate to Demoblaze application')
    CommonPageMethods.navigateToDemoBlaze();

})

When('Selecciono la categoría de monitores', () => {
    HomeMethods.clickOnMonitorsOption();
    HomeMethods.verifyProductDisplayed(product1)
    HomeMethods.verifyProductDisplayed(product2)

})

When('Veo el detalle del producto', () => {
    ProductDetailsMethods.verifyProductDetailsPageDisplayed();

})

When('Selecciono el primer producto', () => {
    HomeMethods.clickOnProductLink(product1);

})

When('Selecciono el segundo producto', () => {
    CommonPageMethods.clickOnHomeOption();
    HomeMethods.clickOnMonitorsOption();
    HomeMethods.clickOnProductLink(product2);

})

When('Hago clic en el botón agregar al carrito', () => {
    ProductDetailsMethods.clikOnAddToCartButton();

})

When('El primer producto es agregado exitosamente', () => {
    ProductDetailsMethods.verifyProductAddMessage();

})

When('El segundo producto es agregado exitosamente', () => {
    ProductDetailsMethods.verifyProductAddMessage();

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

})