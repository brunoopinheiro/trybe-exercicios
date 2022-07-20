const a = 4;
const b = 8;
const c = 2;

if (a === b && a == c && b == c) {
    console.log("Boa tentativa. Os 3 numeros sao iguais.");
}
else if (a >= b && a >= c) {
    console.log(a);
}
else if (b >= a && b >= c){
    console.log(b);
}
else if (c >= a && c >= b) {
    console.log(c);
}
else {
    console.log("valores invalidos");
}