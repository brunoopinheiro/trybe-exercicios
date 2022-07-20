const a = 60;
const b = 120;
const c = -60;

let isValid;

if (a < 0 || b < 0 || c < 0){
    isValid = false;
}
else if (a + b + c == 180) {
    isValid = true;
}
else {
    isValid = false;
}

console.log(isValid);