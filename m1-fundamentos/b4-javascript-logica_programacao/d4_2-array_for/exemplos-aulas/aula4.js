function dice(){
    return Math.ceil(Math.random() * 20);
}

let d1 = dice();
let d2 = dice();
while (d1 !== d2){
    console.log('d1 = ' + d1 + "|| d2 = " + d2);
    d1 = dice();
    d2 = dice();
}