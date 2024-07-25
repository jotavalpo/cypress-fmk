import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { Logger } from "../utils/logger";
import { HomeMethods } from "../pages/home/home.methods";
import { ProductDetailsMethods } from "../pages/product-details/product-details.methods";
import { CartMethods } from "../pages/cart/cart.methods";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { ThankYouForYourPurchaseMethods } from "../pages/thank-you-for-your-purchase/thank-you-for-your-purchase.methods";

const producto1 = 'Apple monitor 24';
const producto2 = 'ASUS Full HD';

describe(CommonPageData.testSuites.catalogoYCompras, ()=>{
 
    it('Flujo de compra', ()=>{
        Logger.stepNumber(1)
        Logger.step('Navigate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.step(2)
        Logger.step('Seleccionar la categoría monitores del menú de navegación')
        HomeMethods.clickOnMonitorsOption();

        Logger.stepNumber(3)
        Logger.step('Hacer clic en el primer producto')
        HomeMethods.clickOnProductLink(producto1);

        Logger.stepNumber(4)
        Logger.verification('Verificar que se muestra la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(5)
        Logger.step('Hacer clic en el botón "Add to cart"')
        ProductDetailsMethods.clikOnAddToCartButton();

        Logger.stepNumber(6)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyCartPageIsShown();
        CartMethods.verifyProductAdded(producto1);

        Logger.stepNumber(7)
        Logger.step('Hacer clic en el segundo producto')
        CommonPageMethods.clickOnHomeOption();
        HomeMethods.clickOnMonitorsOption();
        HomeMethods.clickOnProductLink(producto2);

        Logger.stepNumber(8)
        Logger.verification('Verificar que se muestra la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(9)
        Logger.step('Hacer clic en el botón "Add to cart"')
        ProductDetailsMethods.clikOnAddToCartButton();

        Logger.stepNumber(10)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyCartPageIsShown();
        CartMethods.verifyProductAdded(producto2);

        Logger.stepNumber(11)
        Logger.step('Hacer clic en el botón "Place Order"')
        CartMethods.clickOnPlaceOrderButton();

        Logger.stepNumber(12)
        Logger.step('Completar los campos obligatorios en la página de información de envío')
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData);

        Logger.stepNumber(13)
        Logger.step('Hacer clic en el botón "Purchase"')
        PlaceOrderMethods.clickOnPurchaseButton();

        Logger.stepNumber(14)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio')
        ThankYouForYourPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        ThankYouForYourPurchaseMethods.clickOnOkButton();
        HomeMethods.verifyHomePageIsShown();

    })
})