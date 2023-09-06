import initialStock from "./initialStock.js";
import soldProducts from "./soldProducts.js";

function leftToSell(productArray) {
    const initialProducts = initialStock(productArray);
    const productsSold = soldProducts(productArray);
    return initialProducts - productsSold;
}

export default leftToSell;