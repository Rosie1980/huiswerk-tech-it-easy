import {inventory} from "../constants/inventory.js";

function soldProducts(totalSold) {
    let total = 0

    for (let i = 0; i < totalSold.length; i++) {
        total = total + totalSold[i].sold;
    }
    return total
}




export default soldProducts;