const salBruto = 3000; //notacao para salario de R$ 1600,10 deve ser 1600.10

let inss;
let salBase;

if (salBruto > 5189.82) {
    inss = 570.88;
    salBase = salBruto - inss;
}
else {
    if (salBruto < 5189.82 && salBruto >= 2594.93) {
        inss = 0.11;
    }
    else if (salBruto < 2594.92 && salBruto >= 1556.95) {
        inss = 0.09;
    }
    else if (salBruto > 0 && salBruto <= 1556.94) {
        inss = 0.08;
    }
    else {
        inss = 0;
    }

    salBase = salBruto - (salBruto * inss);
}

let valorImposto;

if (salBase <= 1903.98) {
    valorImposto = 0;
}
else if (salBase > 1903.98 && salBase <= 2826.65) {
    aliq = 0.075;
    parcela = 148.80;
    valorImposto = (salBase * aliq) - parcela;
}
else if (salBase > 2826.65 && salBase <= 3751.05) {
    aliq = 0.15;
    parcela = 354.80;
    valorImposto = (salBase * aliq) - parcela;
}
else if (salBase > 3751.05 && salBase <= 4664.68) {
    aliq = 0.225;
    parcela = 636.13;
    valorImposto = (salBase * aliq) - parcela;
}
else if (salBase > 4664.68) {
    aliq = 0.275;
    parcela = 869.36;
    valorImposto = (salBase * aliq) - parcela;
}

let salLiquido = salBase - valorImposto;

console.log(salLiquido);