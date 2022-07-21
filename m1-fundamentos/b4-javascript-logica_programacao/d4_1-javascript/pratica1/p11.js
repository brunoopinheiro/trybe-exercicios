const nota = 90;
let conceito;

if (nota < 0 || nota > 100){
    conceito = "Nota Invalida";
}
else if (nota >= 90){
    conceito = "A";
}
else if (nota < 90 && nota >= 80){
    conceito =  "B";
}
else if (nota < 80 && nota >= 70){
    conceito = "C";
}
else if (nota < 70 && nota >= 60){
    conceito = "D";
}
else if (nota < 60 && nota >= 50){
    conceito = "E";
}
else{
    conceito = "F";
}

console.log(conceito);