function initialStock(stock) {
    let total = 0;

    for (let i = 0; i < stock.length; i++) {
        total = total + stock[i].originalStock;
    }

    return total;
}

export default initialStock;