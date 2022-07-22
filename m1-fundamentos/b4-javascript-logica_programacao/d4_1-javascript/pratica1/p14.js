const productCost = 100;
const sellPrice = 200;
const impostoSobreCusto = productCost * 0.20;

let lucro;
if (productCost < 0 || sellPrice < 0){
    lucro = "valores invalidos";
}
else {
    valorCustoTotal = productCost + impostoSobreCusto;
    lucro = sellPrice - valorCustoTotal;
    lucro = lucro * 1000;
}

console.log(lucro);