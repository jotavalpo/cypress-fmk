import { ProductDetailsElements } from "./product-details.elements";
import { CommonPageMethods } from "../common-page/common-page.methods";

export class ProductDetailsMethods {
    static clikOnAddToCartButton(){
        ProductDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed(){
        ProductDetailsElements.buttons.addToCart.should('be.visible')
    }

    static verifyProductAddMessage(){
        CommonPageMethods.verifyAlert("Product added");
    }
}